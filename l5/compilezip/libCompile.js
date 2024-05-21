var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const getDependenciesByHtml = (mfile, html, withCss = false) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      resolve(yield getDependencies(mfile, "byHtml", html, withCss));
    } catch (e) {
      reject(e);
    }
  }));
};
const getDependenciesByMFile = (mfile, withCss = false) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      if (mfile.storFile.extension !== ".ts") throw new Error("Only myfile .ts");
      const tag = convertFileNameToTag(`_${mfile.storFile.project}_${mfile.storFile.shortName}`);
      resolve(yield getDependencies(mfile, tag, `<${tag}></${tag}>`, withCss));
    } catch (e) {
      reject(e);
    }
  }));
};
function getTagsInTypescript(mfile, tags) {
  return __async(this, null, function* () {
    const tagsInTypescript = getAllWebComponentsInSource(mfile.model.getValue());
    for (const tagTs of tagsInTypescript) {
      if (!tags.includes(tagTs)) {
        const fileName = convertTagToFileName(tagTs);
        const mfile2 = mls.l2.editor.mfiles[fileName];
        if (mfile2) {
          yield getTagsInTypescript(mfile2, tags);
          tags.push(tagTs);
        }
      }
    }
    return tags;
  });
}
function getDependencies(mfile, filename, html, withCss = false) {
  return __async(this, null, function* () {
    const myImportsMap = [];
    const myImports = [];
    const myCss = [];
    let myTokens = [];
    const myErrors = [];
    const myModules = {};
    let tags = extrairTagsCustomizadas(html);
    const tag = convertFileNameToTag(`_${mfile.storFile.project}_${mfile.storFile.shortName}`);
    if (!tags.includes(tag)) tags.push(tag);
    tags = yield getTagsInTypescript(mfile, tags);
    yield loadMyNeedsToCompile(
      tags,
      myImportsMap,
      myImports,
      myCss,
      myTokens,
      myErrors,
      myModules,
      withCss
    );
    return {
      file: filename,
      wcComponents: tags,
      importsMap: myImportsMap,
      importsJs: myImports,
      css: myCss,
      tokens: myTokens,
      errors: myErrors
    };
  });
}
function extrairTagsCustomizadas(html) {
  const regex = /<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi;
  const customTags = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const tag = match[1];
    if (tag.indexOf("-") >= 0 && !customTags.includes(tag) && !["mls-showexamplecode-100529", "mls-usecaseadd-100529", "mls-head"].includes(tag.replace("<", "").replace(">", ""))) {
      customTags.push(tag.replace("<", "").replace(">", ""));
    }
  }
  return customTags;
}
function loadMyNeedsToCompile(tags, myImportsMap, myImports, myCss, myTokens, myErrors, myModules, compileCss) {
  return __async(this, null, function* () {
    try {
      if (tags.length <= 0) return;
      const name = convertTagToFileName(tags[0]);
      mls.actual[0].setFullName(name);
      const { project, path } = mls.actual[0];
      if (!project || !path) return;
      const mfile = mls.l2.editor.get({ project, shortName: path });
      if (!mfile) throw new Error("not found");
      if (!mfile.compilerResults || !mfile.compilerResults.prodJS || !mfile.compilerResults.tripleSlashMLS) {
        if (mfile.compilerResults) mfile.compilerResults.modelNeedCompile = true;
        yield mls.l2.editor.getCompilerResultTS(mfile, true);
      }
      const enhacementName = mfile.compilerResults.tripleSlashMLS.variables.enhancement;
      if (!enhacementName) throw new Error("enhacementName not valid");
      if (!myModules[enhacementName]) {
        const mModule = yield mls.l2.enhancement.getEnhancementInstance(mfile);
        myModules[enhacementName] = {
          jsMap: false,
          mModule
        };
      }
      tags = yield addRequeries(enhacementName, mfile, tags, myModules);
      yield getJSImporMap(myImportsMap, enhacementName, mfile, myModules);
      yield getJS(myImports, enhacementName, mfile, myModules);
      if (compileCss) {
        yield getCss(myCss, name, mfile);
      }
      yield getTokens(myTokens, mfile);
    } catch (e) {
      if (tags.length <= 0) return;
      myErrors.push({ tag: tags[0], error: e.message });
    } finally {
      tags.shift();
      if (tags.length > 0) {
        yield loadMyNeedsToCompile(
          tags,
          myImportsMap,
          myImports,
          myCss,
          myTokens,
          myErrors,
          myModules,
          compileCss
        );
      }
    }
  });
}
function addRequeries(enhacementName, mfile, array, myModules) {
  return __async(this, null, function* () {
    if (!myModules[enhacementName]) {
      throw new Error("Enhacement not found ");
    }
    if (!myModules[enhacementName].mModule || !myModules[enhacementName].mModule.getDesignDetails) return array;
    const obj = yield myModules[enhacementName].mModule.getDesignDetails(mfile);
    if (!obj || !obj.webComponentDependencies) return array;
    for (let i of obj.webComponentDependencies) {
      const tag = convertFileNameToTag(i);
      if (!array.includes(tag)) {
        array.push(tag);
      }
    }
    return array;
  });
}
function getJSImporMap(myImportsMap, enhacementName, mfile, myModules) {
  return __async(this, null, function* () {
    if (!myModules[enhacementName]) {
      throw new Error("Enhacement not found ");
    }
    if (myModules[enhacementName].jsMap) return;
    myModules[enhacementName].jsMap = true;
    const mmodule = myModules[enhacementName].mModule;
    if (!mmodule || !mmodule.requires) return;
    const aRequire = mmodule.requires;
    aRequire.forEach((i) => {
      if (i.type !== "cdn") return;
      myImportsMap.push(`"${i.name}": "${i.ref}"`);
    });
  });
}
function getJS(myImports, enhacementName, mfile, myModules) {
  return __async(this, null, function* () {
    if (!myModules[enhacementName]) {
      throw new Error("Enhacement not found ");
    }
    if (mfile.compilerResults && mfile.compilerResults.imports && mfile.compilerResults.imports.length > 0) {
      mfile.compilerResults.imports.forEach((n) => {
        const name = n.replace("./", "/");
        if (!myImports.includes(name) && n.startsWith("./")) {
          myImports.push(name);
        }
      });
    }
    if (myImports.includes(`/_${mfile.project}_${mfile.shortName}`)) return;
    myImports.push(`/_${mfile.project}_${mfile.shortName}`);
  });
}
function verifyMyImportsNeedImport(myImports, name) {
  name = name.replace(".", "").replace("/", "");
  const { project, path } = mls.actual[0].setFullName(name);
  const key = mls.l2.editor.getKey({ project, shortName: path });
  const mfile = mls.l2.editor.mfiles[key];
  if (!mfile) return myImports;
  if (mfile.compilerResults && mfile.compilerResults.imports && mfile.compilerResults.imports.length > 0) {
    mfile.compilerResults.imports.forEach((n) => {
      const name2 = n.replace("./", "/");
      if (!myImports.includes(name2) && n.startsWith("./")) {
        myImports.push(name2);
      }
    });
  }
  return myImports;
}
;
function getCss(myCss, fullName, mfile) {
  return __async(this, null, function* () {
    try {
      const dsindex = mls.actual[3].mode ? mls.actual[3].mode : 0;
      const ds = mls.l3.getDSInstance(mfile.project, dsindex);
      if (!ds) return;
      const css = yield ds.components.getCSS(fullName);
      myCss.push(css);
    } catch (e) {
      if (e.message.indexOf("dont exists") < 0) throw new Error(e.message);
    }
  });
}
function getTokens(myTokens, mfile) {
  return __async(this, null, function* () {
    try {
      const dsindex = mls.actual[3].mode ? mls.actual[3].mode : 0;
      const ds = mls.l3.getDSInstance(mfile.project, dsindex);
      if (!ds) return;
      const tokens = yield ds.tokens["getTokensCss"]();
      myTokens.push(tokens);
    } catch (e) {
      if (e.message.indexOf("dont exists") < 0) throw new Error(e.message);
    }
  });
}
function getAllWebComponentsInSource(source) {
  const regex = /<([a-z0-9]+-[a-z0-9-]*)(?=\s|>|\/|$)/g;
  const matches = source.match(regex) || [];
  const componentNames = matches.map((tag) => tag.slice(1));
  return [...new Set(componentNames)];
}
function convertFileNameToTag(widget) {
  const regex = /_([0-9]+)_?(.*)/;
  const match = widget.match(regex);
  if (match) {
    const [, number, rest] = match;
    const convertedSrc = rest.replace(/([A-Z])/g, "-$1").toLowerCase();
    widget = `${convertedSrc}-${number}`;
  }
  return widget;
}
function convertTagToFileName(tag) {
  const regex = /(.+)-(\d+)/;
  const match = tag.match(regex);
  if (match) {
    const [, rest, number] = match;
    const convertedSrc = rest.replace(/-(.)/g, (_, letter) => letter.toUpperCase());
    tag = `_${number}_${convertedSrc}`;
  }
  return tag;
}
export {
  getDependenciesByHtml,
  getDependenciesByMFile
};
