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
import { injectStyle } from "./_100554_processCssLit";
const description = "Use this enhancement for pages";
const example = ``;
const requires = [];
const getExample = (project, shortname) => {
  let newExample = example;
  return newExample;
};
const getDesignDetails = (model) => {
  return new Promise((resolve, reject) => {
    try {
      const ret = {};
      ret.defaultHtmlExamplePreview = "<h1>Simple page</h1>";
      ret.properties = [];
      ret.webComponentDependencies = [];
      ret["servicePreviewDefault"] = "_100554_servicePreview";
      resolve(ret);
    } catch (e) {
      reject(e);
    }
  });
};
const prepareAdd = (prompt) => {
  const aiHeader = ``;
  const aiBody = prompt;
  const aiDelimiter = ":::";
  const sourceTS = "";
  const ret = { sourceTS, aiHeader, aiBody, aiDelimiter };
  return ret;
};
const onAfterChange = (mfile) => __async(void 0, null, function* () {
  try {
    return;
  } catch (e) {
    return e.message || e;
  }
});
const getPromptDefault = () => {
  return ``;
};
const onAfterCompile = (mfile) => __async(void 0, null, function* () {
  yield injectStyle(mfile, 0);
  return;
});
export {
  description,
  example,
  getDesignDetails,
  getExample,
  getPromptDefault,
  onAfterChange,
  onAfterCompile,
  prepareAdd,
  requires
};
