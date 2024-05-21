var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
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
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
function readAllProjectAndCompile(project, shortName, needCompile = true) {
  return __async(this, null, function* () {
    return _readAllProjectAndCompile(project, shortName, needCompile);
  });
}
function getStorFile(file) {
  return _getStorFile(file);
}
function createModel(storFile, compile) {
  return __async(this, null, function* () {
    return yield _createModel(storFile, compile);
  });
}
function createNewFileWithModel(src, file) {
  return __async(this, null, function* () {
    return yield _createNewFileWithModel(src, file);
  });
}
function deleteFileWithModel(file) {
  return __async(this, null, function* () {
    return yield _deleteFileWithModel(file);
  });
}
function undoFileWithModel(file) {
  return __async(this, null, function* () {
    return yield _undoFileWithModel(file);
  });
}
function renameFileWithModel(file) {
  return __async(this, null, function* () {
    return yield _renameFileWithModel(file);
  });
}
function cloneFileWithModel(file) {
  return __async(this, null, function* () {
    return yield _cloneFileWithModel(file);
  });
}
function getUri(shortFN, ftype) {
  return monaco.Uri.parse(`file://server/${shortFN}${ftype}`);
}
function _readAllFileExtensionAndCompile(project, extension, needCompile = true) {
  return __async(this, null, function* () {
    if (mls.istrace) console.log("loading files from project " + project);
    const keys = Object.keys(mls.stor.files);
    try {
      for (var iter = __forAwait(keys), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const key = temp.value;
        try {
          const storFile = mls.stor.files[key];
          if (storFile.project === project && storFile.level === 2 && storFile.extension !== extension) continue;
          yield _createModel(storFile, false);
        } catch (e) {
          console.info("Error readAllFileExtensionAndCompile:" + key);
        }
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    if (needCompile) yield mls.l2.editor.compileAllProjectIfNeed(project, true);
    return;
  });
}
const projectsLoaded = [];
function _readAllProjectAndCompile(project, shortName, needCompile = true) {
  return __async(this, null, function* () {
    if (projectsLoaded.includes(project)) return;
    if (mls.istrace) console.log("loading files from project " + project);
    projectsLoaded.push(project);
    const promises = [];
    const keys = Object.keys(mls.stor.files);
    for (const key of keys) {
      const storFile = mls.stor.files[key];
      if (storFile.project === project && storFile.level === 2 && storFile.shortName !== shortName) {
        promises.push(_createModel(storFile, false));
      }
    }
    yield Promise.all(promises);
    if (needCompile) yield mls.l2.editor.compileAllProjectIfNeed(project, true);
    return;
  });
}
const code = {
  ".ts": "typescript",
  ".html": "html"
};
const baseSrc = {
  ".ts": `/// <mls shortName="[shortName]" project="[project]" enhancement="[enhancement]" />
				
// typescript new file
`,
  ".html": "<fca-text>Edit this.</fca-text>"
};
function _getStorFile(file) {
  const keyFiles = mls.stor.getKeyToFiles(file.project, file.level, file.shortName, file.folder, file.extension);
  const storFile = mls.stor.files[keyFiles];
  if (!storFile) throw new Error("Error on getStorFile, mls.stor.files dont exists, key:" + keyFiles);
  return storFile;
}
;
function _createNewFileWithModel(src, file) {
  return __async(this, null, function* () {
    let newSource = src;
    if (!newSource && file.extension === ".ts") {
      newSource = baseSrc[file.extension].replace("[shortName]", file.shortName).replace("[project]", file.project.toString()).replace("[enhancement]", file.enhancement);
    } else if (!newSource) {
      newSource = baseSrc[file.extension];
    }
    const model = yield createFileAndModel(newSource, file);
    return model;
  });
}
;
function _deleteFileWithModel(file) {
  return __async(this, null, function* () {
    const storFile = _getStorFile(file);
    if (storFile.status === "new") {
      fcDeleteFile(storFile);
    } else storFile.status = "deleted";
    return;
  });
}
;
function _undoFileWithModel(file) {
  return __async(this, null, function* () {
    const storFile = _getStorFile(file);
    if (storFile.status === "deleted") {
      storFile.status = "changed";
      return;
    }
    if (storFile.status === "renamed") {
      throw new Error("not implemented");
    }
    mls.l2.editor.remove(storFile);
    removeEventsModel(storFile);
    const keyFiles = mls.stor.getKeyToFiles(file.project, file.level, file.shortName, file.folder, file.extension);
    yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
    if (storFile.status === "new") {
      delete mls.stor.files[keyFiles];
      return;
    }
    if (storFile.status === "changed") {
      storFile.status = "nochange";
      if (storFile.isLocalVersionOutdated && storFile.newVersionRefIfOutdated) {
        storFile.versionRef = storFile.newVersionRefIfOutdated;
        storFile.isLocalVersionOutdated = false;
        storFile.newVersionRefIfOutdated = void 0;
      }
    } else {
      storFile.status = "changed";
    }
    yield createModel(storFile, true);
    return;
  });
}
;
function _renameFileWithModel(file) {
  return __async(this, null, function* () {
    const storFile = _getStorFile(file);
    const aux = storFile.extension === ".ts" ? "" : storFile.extension;
    const model1 = mls.l2.editor.get({ project: storFile.project, shortName: storFile.shortName + aux });
    if (!model1) throw new Error("Error renameFile: not found mfile");
    renameFileWithModel2(model1, storFile, file.newProject, file.newShortName);
    return;
  });
}
;
function _cloneFileWithModel(file) {
  return __async(this, null, function* () {
    const storFile = _getStorFile(file);
    const aux = storFile.extension === ".ts" ? "" : storFile.extension;
    let model1 = mls.l2.editor.get({ project: storFile.project, shortName: storFile.shortName + aux });
    if (!model1) throw new Error("Error cloneFile, not found mfile");
    const src = model1.model.getValue();
    const newFile = {
      project: file.newProject,
      shortName: file.newShortName,
      enhancement: file.enhancement,
      extension: file.extension,
      level: file.level,
      folder: file.folder
    };
    model1 = yield _createNewFileWithModel(src, newFile);
    mls.common.tripleslash.changeVariable(model1, "shortName", file.newShortName);
    mls.common.tripleslash.changeVariable(model1, "project", file.newProject.toString());
    return;
  });
}
;
function renameFileWithModel2(model1, storFile, newProject, newShortName) {
  if (storFile.hasError) throw new Error("Error on rename, clear errors before rename");
  if (!isNewNameValid(newShortName)) throw new Error("Error on rename, new shortName is a invalid name");
  const newFile = { shortName: newShortName, project: newProject };
  if (!mls.l2.editor.rename(model1, newFile)) throw new Error("Error on rename mls.l2.editor.mfiles");
  if (!mls.stor.renameFile(storFile, newFile)) throw new Error("Error on rename mls.stor.files");
  mls.common.tripleslash.changeVariable(model1, "shortName", newShortName);
  mls.common.tripleslash.changeVariable(model1, "project", newProject.toString());
  if (storFile.status === "new") return;
  storFile.status = "renamed";
}
function createFileAndModel(src, file) {
  return __async(this, null, function* () {
    const level = 2;
    if (file.project > 1) yield mls.stor.server.loadProjectInfoIfNeeded(file.project);
    const key = mls.stor.getKeyToFiles(file.project, level, file.shortName, "", file.extension);
    let storFile = mls.stor.files[key];
    if (storFile && file.project !== 0) throw new Error("Error on createFileAndModel, model already exists: " + key);
    if (!storFile) {
      storFile = yield mls.stor.addOrUpdateFile({ project: file.project, level, shortName: file.shortName, extension: file.extension, versionRef: (/* @__PURE__ */ new Date()).toISOString(), folder: "" });
      storFile.status = "new";
    }
    const aux = file.extension === ".ts" ? "" : file.extension;
    let model1 = mls.l2.editor.get({ project: file.project, shortName: file.shortName + aux });
    if (!model1) {
      const srcModel = storFile ? (yield storFile.getContent(src)) || src : src;
      const ftype = srcModel.split("\n")[0].indexOf(' type="definition"') > 0 ? ".d.ts" : file.extension;
      const uri = getUri(`_${file.project}_${file.shortName}`, ftype);
      model1 = mls.l2.editor.get({ project: file.project, shortName: file.shortName + aux });
      if (model1) return model1;
      const model = monaco.editor.createModel(src, code[storFile.extension], uri);
      model1 = {
        changed: true,
        error: false,
        project: file.project,
        shortName: file.shortName + aux,
        extension: file.extension,
        model,
        storFile,
        codeLens: []
      };
      mls.l2.editor.add(model1);
      addEventsModel(storFile, model1);
    }
    if (storFile.extension === ".ts") {
      yield updateModelStatus(model1, false);
    }
    return model1;
  });
}
function _createModel(storFile, compile) {
  return __async(this, null, function* () {
    const { project, shortName, extension } = storFile;
    const aux = storFile.extension === ".ts" ? "" : storFile.extension;
    let model1 = mls.l2.editor.get({ project: storFile.project, shortName: storFile.shortName + aux });
    if (model1) return model1;
    const info = storFile.getValueInfo ? yield storFile.getValueInfo() : null;
    const haveInfo = info && !!info.content || info !== null && !!info.content;
    const src = haveInfo && info !== null ? info.content : yield storFile.getContent();
    if (src instanceof Blob || src === null) throw new Error("ts file must be string");
    const originalCRC = haveInfo && info !== null ? info.originalCRC : mls.common.crc.crc32(src).toString(16);
    const originalProject = haveInfo && info !== null ? info.originalProject : void 0;
    const originalShortName = haveInfo && info !== null ? info.originalShortName : void 0;
    const ftype = src.split("\n")[0].indexOf(' type="definition"') > 0 ? ".d.ts" : storFile.extension;
    const uri = getUri(`_${project}_${shortName}`, ftype);
    const model = monaco.editor.createModel(src, code[storFile.extension], uri);
    model1 = {
      changed: false,
      // not changed in this section, but storFile.changed is about all sections
      error: false,
      project,
      shortName: shortName + aux,
      extension,
      model,
      storFile,
      originalCRC,
      originalProject,
      originalShortName,
      codeLens: []
    };
    mls.l2.editor.add(model1);
    addEventsModel(storFile, model1);
    if (compile && storFile.extension === ".ts") {
      yield updateModelStatus(model1, false);
    }
    return model1;
  });
}
function addEventsModel(storFile, model1) {
  storFile.onAction = (action) => afterUpdate(storFile);
  storFile.getValueInfo = () => getValueInfo(model1);
  model1.model.onDidChangeContent((e) => onModelChange(e, model1, storFile));
}
function isNewNameValid(newShortName) {
  if (newShortName.length === 0 || newShortName.length > 255) return false;
  const invalidCharacters = /[_\/{}\t\[\]\*$@#=\-+!|?,<>=.;^~º°""''``áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;
  return !invalidCharacters.test(newShortName);
}
function afterUpdate(storFile) {
  return __async(this, null, function* () {
    let { project, shortName } = storFile;
    shortName = storFile.extension !== ".ts" ? shortName + storFile.extension : shortName;
    if (!project || !shortName) return;
    const aux = storFile.extension === ".ts" ? "" : storFile.extension;
    const mmodel = mls.l2.editor.get({ project: storFile.project, shortName: storFile.shortName + aux });
    if (!mmodel) return;
    if (storFile.status === "deleted") {
      fcDeleteFile(storFile);
      return;
    }
    if (storFile.status === "renamed") {
      mmodel.originalProject = void 0;
      mmodel.originalShortName = void 0;
      mmodel.originalCRC = mls.common.crc.crc32(mmodel.model.getValue()).toString(16);
    }
    yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
    storFile.status = "nochange";
  });
}
function getValueInfo(activeModel) {
  return __async(this, null, function* () {
    const rc = {
      content: activeModel.model.getValue(),
      contentType: "string",
      originalShortName: activeModel.originalShortName,
      originalProject: activeModel.originalProject,
      originalCRC: activeModel.originalCRC
    };
    return rc;
  });
}
let _onChangedContent = -1;
function onModelChange(e, activeModel, storFile) {
  clearTimeout(_onChangedContent);
  _onChangedContent = window.setTimeout(() => __async(this, null, function* () {
    if (storFile.extension === ".ts") {
      yield updateModelStatus(activeModel, true);
      const ignoreChanges = e.changes.length === 1 && e.changes[0].range.startLineNumber === 1 && e.changes[0].range.endLineNumber === 1 && e.changes[0].range.endColumn <= 2;
      if (ignoreChanges) return;
    } else {
      yield changeStatusFile(activeModel, storFile, {}, false);
    }
  }), 400);
}
;
function updateModelStatus(model1, changed) {
  return __async(this, null, function* () {
    var _a;
    if (model1.project === 0) changed = true;
    model1.changed = changed;
    const cr = yield mls.l2.editor.getCompilerResultTS({ project: model1.project, shortName: model1.shortName }, true);
    let hasError = cr.errors.length > 0;
    model1.error = hasError;
    const key = mls.stor.getKeyToFiles(model1.project, model1.storFile.level, model1.shortName, "", model1.extension);
    const storFile = mls.stor.files[key];
    if (!hasError) {
      const enhancementInstance = yield mls.l2.enhancement.getEnhancementInstance(model1).catch((e) => void 0);
      if (enhancementInstance) yield enhancementInstance.onAfterChange(model1);
      hasError = storFile.hasError;
    }
    yield changeStatusFile(model1, storFile, (_a = cr.tripleSlashMLS) == null ? void 0 : _a.variables, hasError);
  });
}
function changeStatusFile(model1, storFile, variables, hasError) {
  return __async(this, null, function* () {
    if (!storFile) return;
    const oldStatus = storFile.status;
    storFile.hasError = hasError;
    const sameContent = model1.originalCRC === mls.common.crc.crc32(model1.model.getValue()).toString(16);
    if (sameContent) {
      if (storFile.status !== "new") storFile.status = "nochange";
      yield mls.stor.localStor.setContent(storFile, { content: null });
    } else {
      if (storFile.status !== "renamed" && storFile.status !== "new") storFile.status = "changed";
      yield mls.stor.localStor.setContent(storFile, yield getValueInfo(model1));
    }
    if (oldStatus !== storFile.status) {
      mls.events.fireFileAction("statusOrErrorChanged", storFile, "left");
      mls.events.fireFileAction("statusOrErrorChanged", storFile, "right");
    }
  });
}
function fcDeleteFile(storFile) {
  return __async(this, null, function* () {
    yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
    const aux = storFile.extension === ".ts" ? "" : storFile.extension;
    const key = `_${storFile.project}_${storFile.shortName + aux}`;
    if (mls.l2.editor.mfiles[key]) {
      if (mls.l2.editor.mfiles[key].model) mls.l2.editor.mfiles[key].model.dispose();
      delete mls.l2.editor.mfiles[key];
    }
    removeEventsModel(storFile);
    const keyFiles = mls.stor.getKeyToFiles(storFile.project, storFile.level, storFile.shortName, storFile.folder, storFile.extension);
    delete mls.stor.files[keyFiles];
  });
}
function removeEventsModel(storFile) {
  storFile.onAction = void 0;
  storFile.getValueInfo = void 0;
}
export {
  cloneFileWithModel,
  createModel,
  createNewFileWithModel,
  deleteFileWithModel,
  getStorFile,
  readAllProjectAndCompile,
  renameFileWithModel,
  undoFileWithModel
};
