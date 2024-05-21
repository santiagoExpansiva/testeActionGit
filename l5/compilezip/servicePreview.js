var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
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
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
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
var _watch_dec, _error_dec, _itens_dec, _a, _ServicePreview100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { convertTagToFileName } from "./_100554_utilsLit";
import { initServicePreviewView } from "./_100554_servicePreviewView";
import { initServicePreviewAddStyle } from "./_100554_servicePreviewAddStyle";
const message_pt = {
  variations: "Varia\uFFFD\uFFFDo",
  editStyle: "Editar estilo",
  pause: "Parar preview"
};
const message_en = {
  variations: "Variation",
  editStyle: "Edit style",
  pause: "Pause preview"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServicePreview100554_decorators = [customElement("service-preview-100554")];
let _ServicePreview100554 = class _ServicePreview100554 extends (_a = ServiceBase, _itens_dec = [property()], _error_dec = [property()], _watch_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.itens = __runInitializers(_init, 8, this), __runInitializers(_init, 11, this);
    this.error = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.watch = __runInitializers(_init, 16, this, true), __runInitializers(_init, 19, this);
    this.lastMode = "icPreviewD";
    this.lastLevel = -1;
    this.elPreview = void 0;
    this.info = {};
    this.levels = [1, 2, 3, 4, 5, 6, 7];
    this.details = {
      icon: "&#xf06e",
      state: "foreground",
      position: "right",
      tooltip: "Preview",
      visible: true,
      widget: "_100554_servicePreview",
      level: [1, 2, 3, 4, 5, 6, 7]
    };
    this.onClickLink = (op) => {
      if (op === "opAboutTag") return this.opAboutTag();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
      this.lastMode = op;
      if (op === "icPreviewD") this.preview("d");
      if (op === "icPreviewM") this.preview("m");
    };
    this.onClickButton = (op, opMenu) => {
      if (op === "btWatch") return this.toogleWatch();
      if (op === "btEditStyle") return this.editStyles();
      if (op === "btVariations") return this.onBtVariationsClick(opMenu);
      else throw new Error("Invalid option");
    };
    this.objVariations = {
      0: "en-US",
      1: "pt-BR"
    };
    this.menu = {
      title: "Preview",
      actions: {},
      icons: {
        icPreviewD: "Desktop;f390",
        icPreviewM: "Mobile;f3cf"
      },
      buttons: {
        btVariations: this.msg.variations + ";f1ab:menu:0 - Default,1 - Portugues",
        btEditStyle: this.msg.editStyle + ";f0d0",
        btWatch: this.msg.pause + ";Update Preview;f04c;f04b"
      },
      actionDefault: "",
      // call after close icon clicked
      iconDefault: "icPreviewD",
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      onClickIcon: this.onClickIcon,
      onClickButton: this.onClickButton
    };
    this.timeEvent = -1;
    this.htmlAbout = "";
    initServicePreviewView;
    initServicePreviewAddStyle;
    this.setEvents();
  }
  getIframePreviewHTML() {
    var _a2, _b, _c, _d, _e;
    const htmlEl = (_e = (_d = (_c = (_b = (_a2 = this.previousElementSibling) == null ? void 0 : _a2.querySelector("service-preview-view-100554")) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.querySelector("iframe")) == null ? void 0 : _d.contentDocument) == null ? void 0 : _e.querySelector("html");
    return htmlEl;
  }
  onBtVariationsClick(opMenu) {
    if (!opMenu) return true;
    const htmlEl = this.getIframePreviewHTML();
    const variation = opMenu.substring(0, 1);
    if (htmlEl) htmlEl.lang = this.objVariations[variation];
    window.globalVariation = !isNaN(+variation) ? +variation : 0;
    if (window.top) window.top.window.globalVariation = !isNaN(+variation) ? +variation : 0;
    this.requestUpdateAllIcaComponentsInPage();
    return true;
  }
  toogleWatch() {
    this.watch = !this.watch;
    if (this.watch) {
      this.onReloader();
    }
    return this.watch;
  }
  editStyles() {
    this.openService("_100554_serviceDsStyles", "left", 3);
    return true;
  }
  onServiceClick(visible, reinit) {
    if (visible && !reinit && this.menu.setIconActive) {
      this.menu.setIconActive(this.lastMode);
    } else if (visible && reinit && this.elPreview && this.menu.setIconActive && this.lastLevel == this.level) {
      this.menu.setIconActive(this.lastMode);
    }
    if (this.elPreview) {
      this.lastLevel = this.level;
      this.elPreview.setAttribute("level", this.level.toString());
    } else {
      this.preview(this.lastMode);
    }
  }
  // -------------- EVENTS -------------------
  setEvents() {
    mls.events.addListener(2, "FileAction", this.onMLSFileAction.bind(this));
    mls.events.addEventListener([3], ["DSStyleChanged", "DSColorChanged", "DSCustomChanged", "DSTYPOChanged"], (ev) => __async(this, null, function* () {
      const rc = JSON.parse(ev.desc);
      if (rc.emitter === "right" || rc.emitter === "right-get" || rc.emitter === "left" && rc.helper) return;
      if (this.watch) this.onStyleChanged();
    }));
  }
  onReloader() {
    clearTimeout(this.timeEvent);
    this.timeEvent = setTimeout(() => __async(this, null, function* () {
      this.onServiceClick(true, false);
      mls.events.fire(+this.level, "WCDEventChange", `{"op":"Navigation"}`);
    }), 500);
  }
  onStyleChanged() {
    if (this.elPreview) {
      this.lastLevel = this.level;
      this.elPreview.setAttribute("stylechanged", "true");
    }
  }
  onMLSFileAction(ev) {
    return __async(this, null, function* () {
      try {
        if (this.visible === "false" || !this.visible) return;
        if (ev.level !== +this.level || ev.type !== "FileAction") return;
        const fileAction = JSON.parse(ev.desc);
        const eventsValid = ["open", "statusOrErrorChanged", "changed", "new"];
        if (fileAction.position === this.position || !eventsValid.includes(fileAction.action)) return;
        if (this.watch) this.onReloader();
      } catch (e) {
        console.info(e);
      }
    });
  }
  activeMe(status, click) {
    if (!this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", status);
    if (click) this.serviceItemNav.click();
  }
  // -------------- COMPONENT ---------------
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_ServicePreview100554.prototype, this, "connectedCallback").call(this);
      const dsIndex = mls.actual[3].mode && +this.level !== 2 ? mls.actual[3].mode : 0;
      const ds = mls.l3.getDSInstance(mls.actual[5].project, dsIndex);
      yield ds.init();
    });
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html``;
  }
  // -------------- IMPLEMENTS-----------------
  setAboutTag(tag) {
    return __async(this, null, function* () {
      try {
        if (!tag) return false;
        const file = convertTagToFileName(tag.toLocaleLowerCase());
        this.htmlAbout = `  
                <h3>About this Component</h3>
                <ul>
                    <li>Reference: ${file}</li>
                    <li>Tag: ${tag} </li>
                    <li>Level: 2 </li>                    
                </ul>`;
        if (this.menu.setMenuActive && this.htmlAbout) this.menu.setMenuActive("opAboutTag");
      } catch (e) {
        console.info(e);
        return false;
      }
    });
  }
  opAboutTag() {
    const doc = document.createElement("div");
    doc.innerHTML = this.htmlAbout;
    if (this.menu.setMode) this.menu.setMode("page", doc);
    return true;
  }
  preview(mode) {
    return __async(this, null, function* () {
      if (!mls.actual[2].left) return true;
      const fullname = `_${mls.actual[2].left.project}_${mls.actual[2].left.shortName}`;
      this.menu.title = "Preview: " + fullname;
      if (this.menu.updateTitle) this.menu.updateTitle();
      const doc = document.createElement("service-preview-view-100554");
      doc.setAttribute("page", fullname);
      doc.setAttribute("level", this.level);
      doc.setAttribute("mode", mode);
      doc.father = this;
      this.lastLevel = this.level;
      this.elPreview = doc;
      if (this.menu.setMode) this.menu.setMode("page", doc);
      return true;
    });
  }
  requestUpdateAllIcaComponentsInPage() {
    var _a2, _b, _c, _d, _e;
    const elements = (_e = (_d = (_c = (_b = (_a2 = this.previousElementSibling) == null ? void 0 : _a2.querySelector("service-preview-view-100554")) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.querySelector("iframe")) == null ? void 0 : _d.contentDocument) == null ? void 0 : _e.querySelectorAll("*");
    if (!elements) return;
    elements.forEach((el) => {
      if (el.tagName.split("-").length > 1 && el.globalVariation !== void 0) {
        el.globalVariation = window.globalVariation;
      }
    });
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "itens", _itens_dec, _ServicePreview100554);
__decorateElement(_init, 5, "error", _error_dec, _ServicePreview100554);
__decorateElement(_init, 5, "watch", _watch_dec, _ServicePreview100554);
_ServicePreview100554 = __decorateElement(_init, 0, "ServicePreview100554", _ServicePreview100554_decorators, _ServicePreview100554);
_ServicePreview100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServicePreview100554);
let ServicePreview100554 = _ServicePreview100554;
export {
  ServicePreview100554
};
