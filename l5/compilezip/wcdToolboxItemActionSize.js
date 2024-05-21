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
var _tpChange_dec, _a, _WCDToolboxItemActionSize_decorators, _init;
import { html, LitElement, render } from "lit";
import { customElement, property } from "lit/decorators.js";
_WCDToolboxItemActionSize_decorators = [customElement("wcd-toolbox-item-action-size-100554")];
class WCDToolboxItemActionSize extends (_a = LitElement, _tpChange_dec = [property({ type: String, reflect: true })], _a) {
  constructor() {
    super(...arguments);
    this.startX = 0;
    this.startY = 0;
    this.startWidth = 0;
    this.startHeight = 0;
    this.timeonChangeProp = -1;
    //-------------------------------------------
    this.tpMeasures = ["px", "em", "rem", "vh", "vw", "vmin", "vmax", "ex", "ch", "auto"];
  }
  createRenderRoot() {
    return this;
  }
  render() {
    this.renderOutdoorScenary();
    return html``;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (!this.elMain || !this.myParent) return;
    this.myParent.updateBaseNoPadding(this.elMain, this.myParent);
    this.myParent.updateBackgroundAuxSize("show");
    this.onmousedown = (e) => this.initDragging(e);
  }
  //-----------------
  renderOutdoorScenary() {
    return __async(this, null, function* () {
      if (!this.myParent || this.myParent.level !== "4") return;
      this.elExternal = yield this.myParent.getAndSetScenaryOutDoor("Styles");
      if (!this.elExternal) return;
      render(this.renderSize(), this.elExternal);
      setTimeout(() => {
        if (!this.elExternal) return;
        const el = this.elExternal.querySelector("#scriptInputRange");
        if (el) return;
        const script = document.createElement("script");
        script.src = "/_100554_collabDsInputRange";
        script.id = "scriptInputRange";
        script.type = "module";
        this.elExternal.appendChild(script);
      }, 500);
    });
  }
  renderSize() {
    if (!this.elMain) return html``;
    return html`
            <div style="display:flex; flex-direction:column; gap:.5rem ;padding:1rem" class="myAuxGroup">
                <p style=" margin-bottom: 5px;">A <b>width</b> propriedade CSS define a largura de um elemento.<br/>A <b>height</b> propriedade CSS especifica a altura de um elemento.</p>
                <h4 style="display:flex; gap:1.5rem;margin:0px" >Size</h4>
                <div style="display:flex; gap:.5rem">
                    <div style="width:70px">Width</div>
                    <collab-ds-input-range-100554 prop="width" value="${this.elMain.style.width}" .arraySelect=${this.tpMeasures} @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div style="display:flex; gap:.5rem">
                    <div style="width:70px">Height</div>
                    <collab-ds-input-range-100554 prop="height" value="${this.elMain.style.height}" .arraySelect=${this.tpMeasures} @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div> 
            </div>
        `;
  }
  onChangeProp(e) {
    const el = e.currentTarget;
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      this.changeEl(el);
    }, 500);
  }
  changeEl(el) {
    const prop = el.getAttribute("prop");
    if (!prop || !this.elMain || !this.myParent) return;
    this.elMain.style[prop] = el.value;
    this.myParent.updateBaseNoPadding(this.elMain, this.myParent);
    this.myParent.updateBackgroundAuxSize("show");
    this.fireEvent();
  }
  initDragging(e) {
    if (!this.elMain || !document.defaultView) return;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.startWidth = parseInt(document.defaultView.getComputedStyle(this.elMain).width, 10);
    this.startHeight = parseInt(document.defaultView.getComputedStyle(this.elMain).height, 10);
    const doDragging = (e2) => {
      if (!this.elMain || !this.myParent) return;
      console.info(this.tpChange);
      if (!this.tpChange || ["all", "width"].includes(this.tpChange)) {
        this.elMain.style.width = this.startWidth + e2.clientX - this.startX + "px";
      }
      if (!this.tpChange || ["all", "height"].includes(this.tpChange)) {
        this.elMain.style.height = this.startHeight + e2.clientY - this.startY + "px";
      }
      this.renderOutdoorScenary();
      this.myParent.updateBaseNoPadding(this.elMain, this.myParent);
      this.myParent.updateBackgroundAuxSize("show");
    };
    const stopDragging = (e2) => {
      if (!this.elMain) return;
      document.body.removeEventListener("mousemove", doDragging, false);
      document.body.removeEventListener("mouseup", stopDragging, false);
      this.fireEvent();
    };
    document.body.addEventListener("mousemove", doDragging, false);
    document.body.addEventListener("mouseup", stopDragging, false);
  }
  fireEvent(ret = "") {
    if (!this.elMain || !this.myParent) return;
    if (ret === "") {
      ret = `{"width":"${this.elMain.style.width}", "height":"${this.elMain.style.height}"}`;
      if (this.tpChange === "width") ret = `{"width":"${this.elMain.style.width}"}`;
      if (this.tpChange === "height") ret = `{"height":"${this.elMain.style.height}"}`;
    }
    const evento = new CustomEvent("onChange", {
      detail: { valor: `{"tp":"style","style":${ret} }` },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(evento);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "tpChange", _tpChange_dec, WCDToolboxItemActionSize);
WCDToolboxItemActionSize = __decorateElement(_init, 0, "WCDToolboxItemActionSize", _WCDToolboxItemActionSize_decorators, WCDToolboxItemActionSize);
__runInitializers(_init, 1, WCDToolboxItemActionSize);
const getTemplate = (mode = "", position = "") => {
  let ret = templateActionSize.buttonSize;
  if (mode === "all") ret = templateActionSize.size;
  if (mode === "height") ret = templateActionSize.sizeHeight;
  if (mode === "width") ret = templateActionSize.sizeWidth;
  if (position !== "") ret.position = position;
  return ret;
};
const templateActionSize = {
  backButton: {
    position: "",
    tp: "back-button",
    format: "",
    title: "Back",
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',
    onclick: (e, wc) => {
      wc.setIconsWcdToolbox([], true, "size");
      wc.backNavigationScenaryOutdoor();
    },
    menuItens: [],
    menuSubItens: [],
    widget: "",
    cursor: "pointer",
    attrs: void 0,
    isDblClick: true
  },
  buttonSize: {
    position: "p-r4",
    tp: "button",
    format: "",
    title: "Size",
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>',
    onclick: (e, wc) => {
      wc.setIconsWcdToolbox(
        [
          templateActionSize.backButton,
          templateActionSize.sizeHeight,
          templateActionSize.sizeWidth
        ],
        false,
        "padding"
      );
    },
    menuItens: [],
    menuSubItens: [],
    widget: "",
    cursor: "pointer",
    attrs: void 0,
    isDblClick: true
  },
  size: {
    position: "p-r3",
    tp: "action",
    format: "circle",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-size-100554",
    cursor: "nwse-resize",
    attrs: [{ attr: "tpchange", value: "all" }],
    isDblClick: true
  },
  sizeWidth: {
    position: "p-r2",
    tp: "action",
    format: "square",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-size-100554",
    cursor: "ew-resize",
    attrs: [{ attr: "tpchange", value: "width" }],
    isDblClick: true
  },
  sizeHeight: {
    position: "p-m3",
    tp: "action",
    format: "square",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-size-100554",
    cursor: "ns-resize",
    attrs: [{ attr: "tpchange", value: "height" }],
    isDblClick: true
  }
};
export {
  WCDToolboxItemActionSize,
  getTemplate
};
