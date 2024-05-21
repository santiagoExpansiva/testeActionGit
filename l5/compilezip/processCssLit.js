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
import { convertFileNameToTag } from "./_100554_utilsLit";
const MLS_GETDEFAULTDESIGNSYSTEM = "[[mls_getDefaultDesignSystem]]";
function injectStyle(model, dsIndex) {
  return __async(this, null, function* () {
    var _a;
    const js = (_a = model.compilerResults) == null ? void 0 : _a.prodJS;
    if (js && js.indexOf(MLS_GETDEFAULTDESIGNSYSTEM) === -1) return;
    const ds = mls.l3.getDSInstance(model.project, dsIndex);
    if (!ds) return;
    yield ds.init();
    const fileName = `_${model.project}_${model.shortName}`;
    const tagName = convertFileNameToTag(fileName);
    const css = yield ds.components.getCSS(fileName);
    if (!css) return;
    const css2 = getCssWithoutTag(css, tagName);
    if (model && model.compilerResults) {
      model.compilerResults.prodJS = model.compilerResults.prodJS.replace(MLS_GETDEFAULTDESIGNSYSTEM, css2);
    }
    return;
  });
}
function getCssWithoutTag(css, tag) {
  const originalString = css;
  const regex = /(\w+-\d+)\.(\w+)\s+/;
  let modifiedString = originalString.replace(regex, ":host(.$2) ");
  const searchString = tag;
  const replacementString = "";
  modifiedString = modifiedString.replace(new RegExp(searchString, "g"), replacementString);
  modifiedString = replaceBackTicks(modifiedString);
  return modifiedString;
}
function replaceBackTicks(originalString) {
  const stringWithSingleQuotes = originalString.replace(/`/g, "'");
  return stringWithSingleQuotes;
}
function decodeString(cssString) {
  try {
    return decodeURIComponent(cssString);
  } catch (err) {
    console.info(err);
    return "";
  }
}
export {
  MLS_GETDEFAULTDESIGNSYSTEM,
  getCssWithoutTag,
  injectStyle
};
