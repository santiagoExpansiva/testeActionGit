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
var _c2_dec, _msize_dec, _a, _ServiceDsAssetsEditor100554_decorators, _init;
import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
_ServiceDsAssetsEditor100554_decorators = [customElement("service-ds-assets-editor-100554")];
let _ServiceDsAssetsEditor100554 = class _ServiceDsAssetsEditor100554 extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _c2_dec = [query("mls-editor-100529")], _a) {
  constructor() {
    super();
    this.details = {
      icon: "&#xf121",
      state: "foreground",
      tooltip: "Assets Editor",
      visible: false,
      position: "right",
      tags: ["ds_assets"],
      widget: "_100554_serviceDsAssetsEditor",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opEditor") return this.showEditor();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Assets Editor",
      actions: {
        opEditor: "Editor"
      },
      icons: {},
      actionDefault: "opEditor",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.editorTypeByExtensions = {
      ".json": "json",
      ".txt": "plaintext",
      ".ts": "typescript",
      ".js": "javascript",
      ".css": "css",
      ".less": "less",
      ".html": "html",
      ".java": "java",
      ".scss": "scss",
      ".xml": "xml"
    };
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible) {
        this.createEditor();
        this.showEditor2();
        setTimeout(() => {
          if (el && typeof el.layout === "function") el.layout();
        }, 100);
      }
    });
  }
  setEvents() {
    mls.events.addEventListener([this.level], ["DSAssetsUnSelected"], (ev) => {
      this.onDsAssetsUnSelected(ev);
    });
    mls.events.addEventListener([this.level], ["DSAssetsChanged"], (ev) => {
      this.onDsAssetsChanged(ev);
    });
  }
  createRenderRoot() {
    return this;
  }
  onDsAssetsUnSelected(ev) {
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.service.includes("_100554_serviceDsAssetsEditor")) return;
    this.showNav2Item(false);
  }
  onDsAssetsChanged(ev) {
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.position === "right") return;
    if (params.info.helper.includes("_100554_serviceDsAssetsEditor")) {
      this.data = params;
      this.showNav2Item(true);
      this.openMe();
    } else this.showNav2Item(false);
  }
  createEditor() {
    if (!this.c2) return;
    if (this._ed1) {
      this.setInitialModels("Loading...", "textplain");
      this.setMsizeEditor();
      return;
    }
    this._ed1 = monaco.editor.create(this.c2, mls.editor.conf["l3_assets_visualization_editor"]);
    this.c2["mlsEditor"] = this._ed1;
    this.setMsizeEditor();
  }
  getUri(shortFN) {
    _ServiceDsAssetsEditor100554.modelCount = _ServiceDsAssetsEditor100554.modelCount + 1 || 1;
    return monaco.Uri.parse(`file://server/${shortFN}_${_ServiceDsAssetsEditor100554.modelCount}.ts`);
  }
  setInitialModels(src, mode) {
    const uri = this.getUri("l3_assets_visualization_editor");
    this.model = monaco.editor.getModel(uri);
    let val = src;
    if (mode === "json") val = JSON.stringify(JSON.parse(src), null, 2);
    if (this.model) this.model.setValue(src);
    else this.model = monaco.editor.createModel(val, mode, uri);
  }
  setMsizeEditor() {
    var _a2;
    if (!this.visible) return;
    (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
  }
  showEditor() {
    this.menu.title = "Editor";
    this.showEditor2();
    return true;
  }
  showEditor2() {
    return __async(this, null, function* () {
      const obj = yield this.getValue();
      if (!obj || !this._ed1) return;
      this.setInitialModels(obj.value, obj.mode);
      this._ed1.setModel(this.model);
      return true;
    });
  }
  getValue() {
    return __async(this, null, function* () {
      var _a2;
      if (!this.data) return;
      if (!this.data.info.filesSelectedArr) return void 0;
      const [fileSelected] = this.data.info.filesSelectedArr;
      if (!fileSelected) return void 0;
      const { folder, extension, level, project, shortName } = fileSelected;
      const keyFile = mls.stor.getKeyToFiles(project, level, shortName, folder, extension);
      const value = yield (_a2 = mls.stor.files[keyFile]) == null ? void 0 : _a2.getContent();
      const mode = this.editorTypeByExtensions[extension] ? this.editorTypeByExtensions[extension] : "plaintext";
      return new Promise((resolve, reject) => {
        if (typeof value === "string") {
          resolve({ value, mode });
          return;
        }
        const file = value;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          resolve({ value: reader.result, mode });
        });
        reader.readAsBinaryString(file);
      });
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("msize")) {
      if (!this.visible) return;
      this.setMsizeEditor();
    }
  }
  render() {
    return html`<mls-editor-100529 ismls2="true"></mls-editor-100529>`;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _ServiceDsAssetsEditor100554);
__decorateElement(_init, 5, "c2", _c2_dec, _ServiceDsAssetsEditor100554);
_ServiceDsAssetsEditor100554 = __decorateElement(_init, 0, "ServiceDsAssetsEditor100554", _ServiceDsAssetsEditor100554_decorators, _ServiceDsAssetsEditor100554);
__runInitializers(_init, 1, _ServiceDsAssetsEditor100554);
let ServiceDsAssetsEditor100554 = _ServiceDsAssetsEditor100554;
export {
  ServiceDsAssetsEditor100554
};
