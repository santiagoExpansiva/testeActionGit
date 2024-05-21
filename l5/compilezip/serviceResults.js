var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => {
  var _a2;
  return [, , , __create((_a2 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a2 : null)];
};
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || (target[__knownSymbol("metadata")] = array[3]), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
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
var _c2_dec, _msize_dec, _a, _ServiceResults_decorators, _init;
import { html } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { getDependenciesByMFile } from "./_100554_libCompile";
import { initCodelensCustomElement } from "./_100554_codelensCustomElement";
import { initCodelensComponentDetails } from "./_100554_codelensComponentDetails";
import { initCodelensServiceDetails } from "./_100554_codelensServiceDetails";
const message_pt = {};
const message_en = {};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceResults_decorators = [customElement("service-results-100554")];
class ServiceResults extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _c2_dec = [query("mls-editor-100529")], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.details = {
      icon: "&#xf1c9",
      state: "background",
      tooltip: "Results",
      visible: true,
      position: "all",
      widget: "_100554_serviceResults",
      level: [2]
    };
    this.onClickLink = (op) => {
      if (op === "opProdJS") return this.showProdJS();
      if (op === "opProdJS2") return this.showProdJS3();
      if (op === "opTSConfig") return this.showTsConfig();
      if (op === "opTSLibs") return this.showTsLib();
      if (op === "opDevDoc") return this.showDevDoc();
      if (op === "opDevDocJson") return this.showDevDocJson();
      if (op === "opJsonImport") return this.showJsonImport();
      if (op === "opReferences") return this.showFileRefs();
      if (op === "opAssistant") return this.showAssistant();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Production - Javascript",
      actions: {
        opProdJS: "Production - Javascript",
        opTSConfig: "Typescript Config",
        opTSLibs: "Typescript Libs",
        opReferences: "References",
        opDevDoc: "Dev - Documentation",
        opDevDocJson: "Dev - Documentation Json",
        opJsonImport: "Json Imports"
      },
      actionDefault: "opProdJS2",
      // call after close icon clicked
      icons: {},
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink
    };
    this.editorModelName = "serviceresults.js";
    this.isReferenceOpen = false;
    this.isHelpAssistant = false;
    this.actualResultMode = "prodJS";
    this.results = {
      devDoc: "",
      devJS: "",
      devTS: "",
      errors: "",
      prodJS: "",
      references: [],
      configTS: "",
      libTS: "",
      jsonImport: ""
    };
    this.resultsLanguages = {
      prodJS: "javascript",
      devJS: "javascript",
      devTS: "typescript",
      devDoc: "json",
      errors: "json",
      configTS: "json",
      libTS: "json",
      jsonImport: "json"
    };
    this.extensions = {
      javascript: ".js",
      typescript: ".ts",
      json: ".json"
    };
    this.hasError = false;
    initCodelensCustomElement();
    initCodelensComponentDetails();
    initCodelensServiceDetails();
    this.editorModelName = `serviceresults_${this.position}.js`;
    mls.events.addListener(2, "FileAction", (ev) => this.onFileActionReceived.bind(this)(ev));
    mls.events.addListener(2, "MonacoAction", (ev) => this.onMonacoEvents(ev));
  }
  createRenderRoot() {
    return this;
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      const editor = mls.l2.editor.editors[this.confInvert];
      if (!editor) yield this.delay(3e3);
      if (editor) {
        const { project, shortName } = editor;
        yield this.getCompileResults(shortName, project);
        this.actualFileName = shortName;
        this.actualFileProject = project;
      }
      if (this.visible) this.createEditor();
      if (!reinit) {
        this.setInitialModelProdJS("");
        if (el && typeof el.layout === "function") el.layout();
      }
      if (this.hasError) this.openErrorMode();
      else if (this.actualResultMode === "refs") this.createListRefs();
      else if (this.actualResultMode === "devDocPage") this.openResultsDocsPageMode();
      else if (this.isReferenceOpen) this.openReferenceMode();
      else if (this.isHelpAssistant) this.openHelpAssistantMode();
      else this.openActualResultMode();
    });
  }
  get confE() {
    return `l${this.level}_${this.position}_results`;
  }
  get confInvert() {
    return `l${this.level}_${this.position === "left" ? "right" : "left"}`;
  }
  isServiceVisible() {
    return this.visible === "true";
  }
  createEditor() {
    if (!this.c2 || this._ed1) return;
    this._ed1 = monaco.editor.create(this.c2, mls.editor.conf[this.confE]);
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      noImplicitAny: true
    });
    this.c2["mlsEditor"] = this._ed1;
  }
  createOrGetModel(resultName, editorType, src) {
    const project = 100529;
    const shortName = resultName;
    const uri = this.getUri(`_${project}_${shortName}`);
    let model1 = mls.l2.editor.get({ project, shortName });
    if (!model1) {
      const model = monaco.editor.createModel(src, editorType, uri);
      const extension = this.extensions[editorType];
      model1 = {
        changed: false,
        error: false,
        project,
        shortName,
        model,
        extension
      };
      mls.l2.editor.add(model1);
    }
    return model1;
  }
  setInitialModelProdJS(src) {
    const model1 = this.createOrGetModel(this.editorModelName, "javascript", src);
    if (!model1) return;
    mls.l2.editor.editors[`${this.confE}_${this.editorModelName}`] = model1;
    if (this._ed1) this._ed1.setModel(model1.model);
  }
  setModelLanguage(language, value) {
    const activeModel = mls.l2.editor.editors[`${this.confE}_${this.editorModelName}`];
    if (!activeModel) return;
    monaco.editor.setModelLanguage(activeModel.model, language);
    if (this._ed1) this._ed1.setScrollTop(0);
    activeModel.model.setValue(value);
  }
  getUri(shortFN) {
    return monaco.Uri.parse(`file://server/${shortFN}_${this.position}.ts`);
  }
  getCompileResults(shortName, project) {
    return __async(this, null, function* () {
      const editor = mls.l2.editor.editors[this.confInvert];
      if (!editor || !shortName || !project) return;
      const mfile = mls.l2.editor.get({ shortName, project });
      if (!mfile) return;
      if (mfile.compilerResults && !mfile.compilerResults.prodJS) mfile.compilerResults.modelNeedCompile = true;
      const results = yield mls.l2.editor.getCompilerResultTS(mfile);
      const errs = {
        Errors: results.errors
      };
      const libs = monaco.languages.typescript.typescriptDefaults.getExtraLibs();
      const libs2 = {};
      Object.keys(libs).forEach((key) => {
        libs2[key] = {
          version: libs[key].version
        };
      });
      const jsonImp = yield getDependenciesByMFile(mfile);
      this.hasError = results.errors.length > 0;
      this.results = __spreadProps(__spreadValues({}, results), {
        errors: JSON.stringify(errs, null, 2),
        references: [],
        configTS: JSON.stringify(monaco.languages.typescript.typescriptDefaults.getCompilerOptions(), null, 2),
        libTS: JSON.stringify(libs2, null, 2),
        jsonImport: JSON.stringify(jsonImp, null, 2)
      });
    });
  }
  onFileActionReceived(ev) {
    return __async(this, null, function* () {
      if (!ev.desc) return;
      const params = JSON.parse(ev.desc);
      const { shortName, project } = params;
      if (params.position === this.position) return;
      const isServiceVisible = this.isServiceVisible();
      this.actualFileName = params.shortName;
      this.actualFileProject = params.project;
      if ((params.action === "changed" || params.action === "open") && isServiceVisible) {
        yield this.getCompileResults(shortName, project);
        if (this.actualResultMode === "refs") this.createListRefs();
        else if (this.actualResultMode === "devDocPage") this.openResultsDocsPageMode();
        else if (this.hasError) this.openErrorMode();
        else this.openActualResultMode();
      } else if (params.action === "fileReference") {
        yield this.getCompileResults(shortName, project);
        this.isReferenceOpen = true;
        if (this.visible === "true") this.openReferenceMode();
        else this.openMe();
      }
    });
  }
  onMonacoEvents(ev) {
    if (!ev.desc) return;
    const args = JSON.parse(ev.desc);
    if (!args) return;
    const { action, position } = args;
    if (position === this.position) return;
    if (action === "helpAssistant") {
      this.actualResultMode = "assistant";
      this.assistantArgs = args;
      this.isHelpAssistant = true;
      if (this.visible === "true") this.openHelpAssistantMode();
      else this.openMe();
    }
  }
  getReferences(shortName, project) {
    return __async(this, null, function* () {
      yield mls.l2.editor.compileAllProjectIfNeed(project);
      const refs = mls.l2.editor.listAllAffectedFiles(project, shortName);
      return refs;
    });
  }
  showProdJS() {
    if (this.menu.setMode) this.menu.setMode("initial");
    this.actualResultMode = "prodJS";
    return this.showProdJS2();
  }
  showProdJS2() {
    this.menu.title = "Production - Javascript";
    if (this.menu.updateTitle) this.menu.updateTitle();
    if (this.hasError) {
      this.setModelLanguage(this.resultsLanguages.errors, this.results.errors);
      return true;
    }
    this.setModelLanguage(this.resultsLanguages.prodJS, this.results.prodJS);
    return true;
  }
  showProdJS3() {
    this.actualResultMode = "prodJS";
    return this.showProdJS2();
  }
  showTsConfig() {
    this.menu.title = "Typescript Config";
    if (this.menu.updateTitle) this.menu.updateTitle();
    if (this.menu.setMode) this.menu.setMode("editor");
    this.actualResultMode = "configTS";
    this.setModelLanguage(this.resultsLanguages.configTS, this.results.configTS);
    return true;
  }
  showTsLib() {
    this.menu.title = "Typescript Libs";
    if (this.menu.updateTitle) this.menu.updateTitle();
    if (this.menu.setMode) this.menu.setMode("editor");
    this.actualResultMode = "libTS";
    this.setModelLanguage(this.resultsLanguages.libTS, this.results.libTS);
    return true;
  }
  showDevDoc() {
    this.menu.title = "Develpoment Docs";
    if (this.menu.updateTitle) this.menu.updateTitle();
    this.actualResultMode = "devDocPage";
    if (!this.devDocContainer) {
      this.devDocContainer = document.createElement("mls-load-page-l4-100529");
      this.devDocContainer.setAttribute("path", "_100529_service_results_doc");
    }
    if (this.menu.setMode) this.menu.setMode("page", this.devDocContainer);
    return true;
  }
  showFileRefs() {
    this.menu.title = "File References";
    if (this.menu.updateTitle) this.menu.updateTitle();
    this.menu.title = this.menu.actions["opProdJS"];
    this.actualResultMode = "refs";
    const div1 = document.createElement("div");
    div1.style.padding = "2rem";
    this.list = document.createElement("ul");
    const hr = document.createElement("hr");
    this.refTitle = document.createElement("h2");
    this.createListRefs();
    div1.appendChild(this.refTitle);
    div1.appendChild(hr);
    div1.appendChild(this.list);
    if (this.menu.setMode) this.menu.setMode("page", div1);
    return true;
  }
  showAssistant() {
    this.menu.title = "Help Assistant";
    if (this.menu.updateTitle) this.menu.updateTitle();
    this.menu.title = this.menu.actions["opProdJS"];
    const div1 = document.createElement("div");
    div1.style.padding = "2rem";
    if (this.assistantArgs && this.assistantArgs.codeLenCommand) {
      const el = document.createElement(this.assistantArgs.codeLenCommand.refs);
      div1.appendChild(el);
    }
    if (this.menu.setMode) this.menu.setMode("page", div1);
    return true;
  }
  createListRefs() {
    return __async(this, null, function* () {
      if (!this.list) return;
      if (this.refTitle) this.refTitle.innerHTML = `<b>File References from:</b> _${this.actualFileProject}_${this.actualFileName}`;
      this.list.innerHTML = "Loading...";
      const references = yield this.getReferences(this.actualFileName, this.actualFileProject);
      this.results.references = references;
      this.list.innerHTML = "";
      if (this.results.references.length === 0) {
        this.list.innerHTML = "No references.";
        return;
      }
      this.results.references.forEach((ref) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = `Project: ${ref.project} ShortName: ${ref.shortName} `;
        a.onclick = (e) => {
          e.preventDefault();
          const cmdOpen = {
            action: "open",
            level: 2,
            project: ref.project,
            shortName: ref.shortName,
            extension: ref.extension,
            folder: "",
            position: this.position
          };
          mls.events.fire([2], ["FileAction"], JSON.stringify(cmdOpen), 0);
        };
        li.appendChild(a);
        if (this.list) this.list.appendChild(li);
      });
    });
  }
  showDevDocJson() {
    this.menu.title = "Develpoment Docs Json";
    if (this.menu.updateTitle) this.menu.updateTitle();
    if (this.menu.setMode) this.menu.setMode("editor");
    this.actualResultMode = "devDoc";
    this.setModelLanguage(this.resultsLanguages.devDoc, this.results.devDoc);
    return true;
  }
  showJsonImport() {
    this.menu.title = "Imports Json";
    if (this.menu.updateTitle) this.menu.updateTitle();
    if (this.menu.setMode) this.menu.setMode("editor");
    this.actualResultMode = "jsonImport";
    this.setModelLanguage(this.resultsLanguages.jsonImport, this.results.jsonImport);
    return true;
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  openActualResultMode() {
    return __async(this, null, function* () {
      const language = this.resultsLanguages[this.actualResultMode];
      const value = this.results[this.actualResultMode];
      if (language && value) this.setModelLanguage(language, value);
    });
  }
  openErrorMode() {
    this.setModelLanguage(this.resultsLanguages.errors, this.results.errors);
  }
  openResultsDocsPageMode() {
    this.menu.title = "Develpoment Docs";
    if (this.menu.updateTitle) this.menu.updateTitle();
    this.actualResultMode = "devDocPage";
    if (!this.devDocContainer) return;
    this.devDocContainer.setAttribute("force", "true");
    this.devDocContainer.setAttribute("path", "_100529_service_results_doc");
  }
  openReferenceMode() {
    if (this.menu.setMenuActive) this.menu.setMenuActive("opReferences");
    this.isReferenceOpen = false;
  }
  openHelpAssistantMode() {
    if (this.menu.setMenuActive) this.menu.setMenuActive("opAssistant");
    this.isHelpAssistant = false;
  }
  updated(changedProperties) {
    var _a2;
    if (changedProperties.has("msize")) {
      if (!this.visible) return;
      (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
    }
  }
  render() {
    return html`
            <mls-editor-100529 ismls2="true"></mls-editor-100529>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, ServiceResults);
__decorateElement(_init, 5, "c2", _c2_dec, ServiceResults);
ServiceResults = __decorateElement(_init, 0, "ServiceResults", _ServiceResults_decorators, ServiceResults);
__runInitializers(_init, 1, ServiceResults);
export {
  ServiceResults
};
