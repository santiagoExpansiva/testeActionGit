var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var _c2_dec, _msize_dec, _a, _ServiceEditProject100554_decorators, _init;
import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  loading: "Carregando...",
  menu_title: "Configura\uFFFD\uFFFDo do projeto"
};
const message_en = {
  loading: "Loading...",
  menu_title: "Project Configs"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceEditProject100554_decorators = [customElement("service-edit-project-100554")];
let _ServiceEditProject100554 = class _ServiceEditProject100554 extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _c2_dec = [query("mls-editor-100529")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf085",
      state: "foreground",
      position: "right",
      tooltip: "Service Edit Project",
      visible: true,
      widget: "_100554_serviceEditProject",
      level: [5]
    };
    this.onClickLink = (op) => {
      if (op === "opConfig") return this.showStart();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: this.msg.menu_title,
      actions: {},
      icons: {},
      actionDefault: "opConfig",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.template = `window.project_config`;
    this.timeoutChangesEditorStyle = 0;
  }
  onServiceClick(visible, reinit, el) {
    if (visible) {
      setTimeout(() => {
        this.setMsizeEditor();
      }, 100);
    }
  }
  showStart() {
    return true;
  }
  setMsizeEditor() {
    var _a2;
    if (!this.visible) return;
    (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
  }
  createEditor() {
    if (!this.c2 || this._ed1) return;
    const opt = {
      automaticLayout: true
    };
    this._ed1 = monaco.editor.create(this.c2, opt);
    this.c2["mlsEditor"] = this._ed1;
    this.setMsizeEditor();
  }
  loadProjectConfigs() {
    return __async(this, null, function* () {
      this.fileInfo = yield this.getFileOrCreate();
      const src = yield this.getFileContent(this.fileInfo);
      this.setInitialConfig(src);
    });
  }
  getFileContent(file) {
    return __async(this, null, function* () {
      if (!file) throw new Error("No file find");
      let src;
      const info = file.getValueInfo ? yield file.getValueInfo() : null;
      const haveInfo = info && !!info.content;
      src = haveInfo ? info == null ? void 0 : info.content : "";
      if (!src) {
        src = yield file.getContent();
        if (!src) console.log("error on getContent, src is null");
      }
      if (src instanceof Blob) throw new Error("html file must be string");
      if (!src) src = "{}";
      return src;
    });
  }
  setInitialConfig(value) {
    const newValue = this.template + " = " + value;
    this.model = this.createOrGetModel("typescript", newValue);
    if (!this.model || !this._ed1) return;
    this._ed1.setModel(this.model);
  }
  getFileOrCreate() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const shortName = "project";
      if (project === void 0) throw new Error("No project selected!");
      const key = mls.stor.getKeyToFiles(project, this.level, shortName, "", ".json");
      let configFile = mls.stor.files[key];
      if (!configFile) {
        yield this.createConfigFile(project, shortName);
        configFile = mls.stor.files[key];
      }
      return configFile;
    });
  }
  createConfigFile(project, shortName) {
    return __async(this, null, function* () {
      const det = mls.l5.getProjectDetails(project);
      const newConfig = {
        name: det.name,
        designSystems: [],
        languages: []
      };
      const content = JSON.stringify(newConfig);
      const params = {
        project,
        level: 5,
        shortName,
        extension: ".json",
        versionRef: "0",
        folder: ""
      };
      const file = yield mls.stor.addOrUpdateFile(params);
      file.status = "new";
      const fileInfo = {
        content,
        contentType: "string"
      };
      yield mls.stor.localStor.setContent(file, fileInfo);
    });
  }
  createOrGetModel(editorType, src) {
    if (!this.fileInfo) return;
    const uri = this.getUri(`${this.constructor.name}_${this.fileInfo.project}}`);
    let model1 = monaco.editor.getModel(uri);
    if (!model1) {
      model1 = monaco.editor.createModel(src, editorType, uri);
      this.setEventsModel(model1);
    }
    return model1;
  }
  setEventsModel(model) {
    model.onDidChangeContent((event) => {
      if (this.timeoutChangesEditorStyle) clearTimeout(this.timeoutChangesEditorStyle);
      this.timeoutChangesEditorStyle = setTimeout(() => {
        this.onEditorChange();
      }, 1e3);
    });
  }
  onEditorChange() {
    return __async(this, null, function* () {
      if (!this.model || !this.fileInfo) return;
      const val = this.model.getValue();
      const errors = monaco.editor.getModelMarkers({ resource: this.model.uri });
      if (errors && errors.length > 0) return;
      const that = this;
      (function scope() {
        return __async(this, null, function* () {
          eval(val);
          if (window.project_config && typeof window.project_config === "object") {
            yield mls.stor.localStor.setContent(that.fileInfo, {
              contentType: "string",
              content: JSON.stringify(window.project_config, null, 2)
            });
          }
        });
      }).call(this);
    });
  }
  getUri(shortFN) {
    _ServiceEditProject100554.modelCount = _ServiceEditProject100554.modelCount + 1 || 1;
    return monaco.Uri.parse(`file://server/${shortFN}_${_ServiceEditProject100554.modelCount}.ts`);
  }
  firstUpdated() {
    this.createEditor();
    this.loadProjectConfigs();
  }
  createRenderRoot() {
    return this;
  }
  updated(changedProperties) {
    if (changedProperties.has("msize")) {
      if (!this.visible) return;
      this.setMsizeEditor();
    }
  }
  render() {
    return html`
            <mls-editor-100529 ismls2="true"></mls-editor-100529>
        `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _ServiceEditProject100554);
__decorateElement(_init, 5, "c2", _c2_dec, _ServiceEditProject100554);
_ServiceEditProject100554 = __decorateElement(_init, 0, "ServiceEditProject100554", _ServiceEditProject100554_decorators, _ServiceEditProject100554);
__runInitializers(_init, 1, _ServiceEditProject100554);
let ServiceEditProject100554 = _ServiceEditProject100554;
export {
  ServiceEditProject100554
};
