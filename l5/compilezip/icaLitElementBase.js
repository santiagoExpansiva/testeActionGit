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
var _styleel_dec, _level_dec, _renderType_dec, _isICAGroup_dec, _widget_dec, _changeState_dec, _a, _init;
import { collabState } from "./_100554_collabLitElement";
import { IcaLitElement } from "./_100554_icaLitElement";
import * as icaGlobal from "./_100554_icaGlobal";
import * as states from "./_100554_icaCollabStore";
import { convertFileNameToTag, convertTagToFileName } from "./_100554_utilsLit";
import { initWCDToolbox } from "./_100554_wcdToolbox";
import { html, unsafeHTML } from "lit";
import { property } from "lit/decorators.js";
const _IcaLitElementBase = class _IcaLitElementBase extends (_a = IcaLitElement, _changeState_dec = [property({ type: String }), collabState(states.CHANGESTATE)], _widget_dec = [property({ type: String, reflect: true })], _isICAGroup_dec = [property({ type: Boolean, reflect: true })], _renderType_dec = [property({ type: String })], _level_dec = [property({ type: String })], _styleel_dec = [property({ type: String })], _a) {
  constructor() {
    super();
    this.changeState = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.styleel = __runInitializers(_init, 28, this, ""), __runInitializers(_init, 31, this);
    this.internalInnerHTML = "";
    this.isLoadMyAction = {};
    this.lastWidget = "";
    this.styleElMain = void 0;
    initWCDToolbox();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialConfigs();
  }
  firstUpdated(changedProperties) {
    return __async(this, null, function* () {
      __superGet(_IcaLitElementBase.prototype, this, "firstUpdated").call(this, changedProperties);
      const tempeEl = document.createElement("span");
      tempeEl.style.cssText = this.styleel ? this.styleel : "";
      this.styleElMain = tempeEl.style;
    });
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (this.lastWidget !== this.widget) {
      this.lastWidget = this.widget;
      this.updateStyleDisplay();
    }
    if (this.renderType === "edit") {
      this.setEventsIfRenderTypeEdit();
    }
    if (this.renderType === "editactive") {
      this.addWCDToolbox();
    }
    this.performPreSlotAllocationOperations();
  }
  changeStateStyle(style) {
    debugger;
    if (!this.styleElMain || !style) return;
    const el = this.querySelector(`${this.widget}:first-child`);
    if (el) {
      this.styleElMain.cssText = el.style.cssText;
      Object.assign(this.styleElMain, style);
      el.style.cssText = this.styleElMain.cssText;
      this.styleel = el.style.cssText;
    }
  }
  addWCDToolbox() {
    const wcd = document.createElement("wcd-toolbox-100554");
    if (this.level) wcd.setAttribute("level", this.level.toString());
    if (this.widget) wcd.setAttribute("widget", this.widget);
    let act = this.actions[this.level];
    if (!act) act = [];
    wcd.actions = act;
    this.appendChild(wcd);
  }
  updateStyleDisplay() {
    const el = this.querySelector(this.widget);
    if (el) {
      const d = window.getComputedStyle(el);
      this.style.display = d.display;
    }
  }
  setEventsIfRenderTypeEdit() {
    this.onclick = (e) => __async(this, null, function* () {
      e.stopPropagation();
      if (e.target.tagName.startsWith("WCD-")) return;
      const all = this.findElementsStartingWithIca();
      Array.from(all).forEach((i) => {
        const wcd = i.querySelector("wcd-toolbox-100554");
        if (wcd) wcd.remove();
        i.setAttribute("renderType", "edit");
      });
      const inGroup = this.closest(`*[${icaGlobal.ATTRGROUP}]`);
      if (inGroup && inGroup !== this && inGroup.getAttribute(`${icaGlobal.ATTRGROUP}`) === "true") {
        inGroup.click();
        return;
      }
      this.onclick = void 0;
      if (!this.isLoadMyAction[this.level] || this.isLoadMyAction[this.level] === false) {
        this.isLoadMyAction[this.level] = true;
        yield this.setActions(this.level);
      }
      this.setAttribute("renderType", "editactive");
      if (this.level !== "4") return;
      mls.events.fire(4, "WCDEvent", `{"op":"Navigation"}`);
      mls.events.fire(+this.level, "WCDEventChange", `{"op":"Navigation"}`);
    });
  }
  findElementsStartingWithIca() {
    let elements = [];
    function traverseShadowRoot(element) {
      if (element.tagName.toLowerCase().startsWith("ica")) {
        elements.push(element);
        return;
      }
      if (element.shadowRoot) {
        element.shadowRoot.querySelectorAll("*").forEach((item) => {
          traverseShadowRoot(item);
        });
      } else {
        const children = Array.from(element.children);
        if (children.length > 0) {
          children.forEach((child) => traverseShadowRoot(child));
        }
      }
    }
    document.body.querySelectorAll("*").forEach((item) => {
      traverseShadowRoot(item);
    });
    return elements;
  }
  shouldUpdate(changedProperties) {
    const oldValue = changedProperties.get("renderType");
    if (oldValue === "editactive" && this.renderType !== "editactive") {
      super.setCollabState(states.CHANGESTATE, "");
    } else if (changedProperties.get("changeState") !== void 0 && this.changeState) {
      return false;
    }
    if (changedProperties.get("level") && !this.isLoadMyAction[this.level] && this.renderType === "editactive") {
      this.auxSetMyActions();
    }
    return true;
  }
  auxSetMyActions() {
    return __async(this, null, function* () {
      yield this.setActions(this.level);
      this.isLoadMyAction[this.level] = true;
      this.renderType = "edit";
      setTimeout(() => {
        this.click();
      }, 200);
    });
  }
  importAction(imports, actions, level, mode = "", position = "") {
    return __async(this, null, function* () {
      try {
        if (!imports.startsWith("./")) imports = "./" + imports;
        const { getTemplate } = yield import(imports);
        const temp = getTemplate(mode, position);
        actions[level].push(temp);
      } catch (e) {
        console.info(e);
      }
    });
  }
  getICAComponents(scope) {
    let ret = [];
    const reentrance = (el) => {
      const tag = el.tagName.toLowerCase();
      if (tag.startsWith(`${icaGlobal.PREFIX}-`)) {
        ret.push(el);
      }
      const isGroup = el.getAttribute(`${icaGlobal.ATTRGROUP}`);
      if (!isGroup || isGroup === "false") {
        Array.from(el.children).forEach((i) => {
          reentrance(i);
        });
      }
    };
    Array.from(scope.children).forEach((i) => {
      reentrance(i);
    });
    return ret;
  }
  getMyScope() {
    let ret = this.closest(`${icaGlobal.ICAPAGE}`);
    if (!ret) ret = this.closest("body");
    return ret;
  }
  getIcaParent(target) {
    const parent = target.parentElement;
    if (!parent) return;
    const tag = parent.tagName.toLowerCase();
    if (!tag.startsWith(`${icaGlobal.PREFIX}-`)) return this.getIcaParent(parent);
    else if (tag.startsWith(`${icaGlobal.PREFIX}-`)) return parent;
  }
  doChangeState(js) {
    const info = JSON.parse(js);
    if (this.renderType === "editactive") {
      switch (info.tp) {
        case "menu":
          console.info(info.menu);
          break;
        case "style":
          this.changeStateStyle(info.style);
          break;
        case "html":
          this.changeStateHtml(info.html);
          break;
        default:
          "";
          break;
      }
    }
    mls.events.fire(+this.level, "WCDEventChange", `{"op":"Navigation"}`);
  }
  performPreSlotAllocationOperations() {
    return __async(this, null, function* () {
      if (!this.widget) return;
      const tag = convertFileNameToTag(this.widget);
      if (tag.startsWith(icaGlobal.PREFIX) || tag.startsWith(icaGlobal.PREFIXWCD)) return;
      Promise.all([tag].map((wc) => customElements.whenDefined(wc))).then(() => __async(this, null, function* () {
        let childrens = Array.from(this.children).filter((child) => child.tagName !== tag.toUpperCase());
        const widgetElement = this.querySelector(tag);
        if (!widgetElement || !childrens || childrens.length === 0) return;
        childrens.forEach((child) => {
          if (child.tagName.toLowerCase().startsWith(icaGlobal.PREFIXWCD)) return;
          child.remove();
          widgetElement.appendChild(child);
        });
        const slots = widgetElement.shadowRoot ? Array.from(widgetElement.shadowRoot.querySelectorAll(`slot`)) : Array.from(widgetElement.querySelectorAll(`slot`));
        if (!slots || slots.length === 0) return;
        const slotWithoutName = slots.find((slot) => !slot.getAttribute("name"));
        childrens.forEach((element) => {
          var _a2, _b;
          const elementSlotName = element.getAttribute("slot");
          if (elementSlotName) {
            const slotByName = slots.find((slot) => slot.getAttribute("name") === elementSlotName);
            if (slotByName) (_a2 = slotByName.parentNode) == null ? void 0 : _a2.insertBefore(element, slotByName);
          } else if (slotWithoutName) {
            (_b = slotWithoutName.parentNode) == null ? void 0 : _b.insertBefore(element, slotWithoutName);
          }
        });
        slots.forEach((sl) => sl.remove());
      }));
    });
  }
  setInitialConfigs() {
    return __async(this, null, function* () {
      if (this.widget) {
        const fileName = convertTagToFileName(this.widget);
        yield import("./" + fileName);
      }
    });
  }
  render() {
    this.style.display = "block";
    const attrs = this.getAttributes();
    let code = `
            <${this.widget} ${attrs}>
            </${this.widget}>
        `;
    return html`${unsafeHTML(code)}`;
  }
  getAttributes() {
    const excludesProps = ["rendertype", "level", "widget"];
    let attributes = "";
    const attributeNames = this.getAttributeNames();
    for (const attrName of attributeNames) {
      if (excludesProps.includes(attrName)) continue;
      let attrValue = this.getAttribute(attrName);
      if (attrName === "style") attrValue = this.styleel || null;
      if (attrValue !== null) {
        attributes += `${attrName}="${attrValue}" `;
      }
    }
    return attributes;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "changeState", _changeState_dec, _IcaLitElementBase);
__decorateElement(_init, 5, "widget", _widget_dec, _IcaLitElementBase);
__decorateElement(_init, 5, "isICAGroup", _isICAGroup_dec, _IcaLitElementBase);
__decorateElement(_init, 5, "renderType", _renderType_dec, _IcaLitElementBase);
__decorateElement(_init, 5, "level", _level_dec, _IcaLitElementBase);
__decorateElement(_init, 5, "styleel", _styleel_dec, _IcaLitElementBase);
let IcaLitElementBase = _IcaLitElementBase;
export {
  IcaLitElementBase
};
