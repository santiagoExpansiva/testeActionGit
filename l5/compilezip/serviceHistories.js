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
var _c2_dec, _msize_dec, _a, _ServiceHistories100554_decorators, _init;
import { html } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  loading: "Carregando...",
  noHistoriesSelected: "Nenhum historico selecionado"
};
const message_en = {
  loading: "Loading...",
  noHistoriesSelected: "No histories selected"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceHistories100554_decorators = [customElement("service-histories-100554")];
let _ServiceHistories100554 = class _ServiceHistories100554 extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _c2_dec = [query("mls-editor-100529")], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.details = {
      icon: "&#xf15c",
      state: "background",
      tooltip: "Histories",
      visible: false,
      position: "all",
      widget: "_100554_serviceHistories",
      level: [2]
    };
    this.onClickLink = (op) => {
      if (op === "opHistories") return this.showStart();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Histories",
      actions: {
        opHistories: "Start"
      },
      icons: {},
      actionDefault: "opHistories",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink
    };
    this.hashOriginal = "";
    this.hashModified = "";
    this.histories = {};
    mls.events.addEventListener([2], ["HistoriesSelected"], (ev) => this.onSelectHistories(ev));
    mls.events.addEventListener([2], ["ToolBarSelected"], (ev) => {
      this.onToolbarSelected(ev);
    });
  }
  createRenderRoot() {
    return this;
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  get confE() {
    return `l${this.level}_${this.position}_histories`;
  }
  showStart() {
    return true;
  }
  onToolbarSelected(ev) {
    if (!ev || !ev.desc) return;
    const params = ev.desc ? JSON.parse(ev.desc) : {};
    const item = this.serviceItemNav;
    if (!item) return;
    if (!["_100529_service_Source"].includes(params.to) && this.visible === "true" && this.position !== params.position) this.showNav2Item(false);
  }
  onSelectHistories(ev) {
    return __async(this, null, function* () {
      if (!ev.desc) return;
      const params = JSON.parse(ev.desc);
      if (params.position === this.position) return;
      if (params.level !== this.level) return;
      if (!this.serviceItemNav) return;
      this.showNav2Item(true);
      this.serviceItemNav.setAttribute("mode", "A");
      this.openMe();
      const key = mls.stor.getKeyToFiles(params.project, params.level, params.shortName, params.folder, params.extension);
      const storFile = mls.stor.files[key];
      if (!storFile) return;
      this.fileInfo = storFile;
      this.hashModified = params.hashModified;
      this.hashOriginal = params.hashOriginal;
      let src2 = "";
      if (this.hashModified === "local") {
        const info = this.fileInfo.getValueInfo ? yield this.fileInfo.getValueInfo() : void 0;
        src2 = info && info.content ? info.content : yield this.fileInfo.getContent();
      } else {
        src2 = this.hashModified ? yield this.getHistories(this.hashModified) : "";
      }
      const src1 = this.hashOriginal ? yield this.getHistories(this.hashOriginal) : "";
      this.setInitialHistories(src1, src2);
      this.setMsizeEditor();
    });
  }
  getHistories(hash) {
    return __async(this, null, function* () {
      if (this.histories[hash]) return this.histories[hash];
      if (!this.fileInfo) return "";
      const content = yield this.fileInfo.getHistoryContent(hash);
      if (content) this.histories[hash] = content;
      return this.histories[hash];
    });
  }
  setInitialHistories(srcOriginal, srcModified) {
    const modelOriginal = this.createOrGetModel("typescript", srcOriginal, "original");
    const modelModified = this.createOrGetModel("typescript", srcModified, "modified");
    if (!this._ed1) return;
    this._ed1.updateOptions({ readOnly: true });
    this._ed1.setModel({
      original: modelOriginal,
      modified: modelModified
    });
  }
  createOrGetModel(editorType, src, tp) {
    const uri = this.getUri(`${this.constructor.name}_${this.position}_${tp}`);
    let model1 = monaco.editor.getModel(uri);
    if (!model1) {
      model1 = monaco.editor.createModel(src, editorType, uri);
    }
    return model1;
  }
  getUri(shortFN) {
    _ServiceHistories100554.modelCount = _ServiceHistories100554.modelCount + 1 || 1;
    return monaco.Uri.parse(`file://server/${shortFN}_${_ServiceHistories100554.modelCount}.ts`);
  }
  createEditor() {
    if (!this.c2 || this._ed1) return;
    const opt = {
      automaticLayout: true
    };
    this._ed1 = monaco.editor.createDiffEditor(this.c2, opt);
    this.c2["mlsEditor"] = this._ed1;
    this.setMsizeEditor();
  }
  setMsizeEditor() {
    var _a2;
    if (!this.visible) return;
    (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible) {
        this.createEditor();
        this.setInitialHistories(this.msg.loading, this.msg.loading);
        if (!this.fileInfo) this.setInitialHistories(this.msg.noHistoriesSelected, this.msg.noHistoriesSelected);
        setTimeout(() => {
          if (el && typeof el.layout === "function") el.layout();
        }, 100);
      }
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("msize")) {
      if (!this.visible) return;
      this.setMsizeEditor();
    }
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            <mls-editor-100529 ismls2="true"></mls-editor-100529>
        `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _ServiceHistories100554);
__decorateElement(_init, 5, "c2", _c2_dec, _ServiceHistories100554);
_ServiceHistories100554 = __decorateElement(_init, 0, "ServiceHistories100554", _ServiceHistories100554_decorators, _ServiceHistories100554);
__runInitializers(_init, 1, _ServiceHistories100554);
let ServiceHistories100554 = _ServiceHistories100554;
export {
  ServiceHistories100554
};
