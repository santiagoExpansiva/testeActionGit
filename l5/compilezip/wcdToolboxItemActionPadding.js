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
var _tpChange_dec, _a, _WCDToolboxItemActionPadding_decorators, _init;
import { html, LitElement, render } from "lit";
import { customElement, property } from "lit/decorators.js";
_WCDToolboxItemActionPadding_decorators = [customElement("wcd-toolbox-item-action-padding-100554")];
class WCDToolboxItemActionPadding extends (_a = LitElement, _tpChange_dec = [property({ type: String, reflect: true })], _a) {
  constructor() {
    super(...arguments);
    this.startX = 0;
    this.startY = 0;
    this.startTop = 0;
    this.startBottom = 0;
    this.startLeft = 0;
    this.startRight = 0;
    this.timeonChangeProp = -1;
    this.myMsg = {
      margin: "Margin",
      padding: "Padding",
      top: "Top",
      left: "Left",
      bottom: "Bottom",
      right: "Right"
    };
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
      render(this.renderPadding(), this.elExternal);
    });
  }
  renderPadding() {
    if (!this.elMain) return html``;
    return html`
            <div style="display:flex; flex-direction:column; gap:.5rem ;padding:1rem" class="myAuxGroup">
                <p style=" margin-bottom: 5px;">A propriedade <b>padding</b> define uma a distância entre o conteúdo de um elemento e suas bordas</p>
                <h4 style="display:flex; gap:1.5rem;margin:0px" >${this.myMsg.padding}<input type="checkbox" prop="padding"></h4>
                <div style="display:flex; gap:.5rem">
                    <div style="width:70px">${this.myMsg.top}</div>
                    <input prop="paddingTop" type="text" .value="${this.elMain.style.paddingTop}"  group="padding" @input="${(e) => this.onChangeProp(e)}" />
                </div>
                <div style="display:flex; gap:.5rem">
                    <div style="width:70px">${this.myMsg.right}</div>
                    <input prop="paddingRight" type="text" .value="${this.elMain.style.paddingRight}"  group="padding" @input="${(e) => this.onChangeProp(e)}" />
                </div> 
                <div style="display:flex; gap:.5rem">
                    <div style="width:70px">${this.myMsg.bottom}</div>
                    <input prop="paddingBottom" type="text" .value="${this.elMain.style.paddingBottom}"  group="padding" @input="${(e) => this.onChangeProp(e)}" />
                </div>
                <div style="display:flex; gap:.5rem">
                    <div style="width:70px">${this.myMsg.left}</div>
                    <input prop="paddingLeft" type="text" .value="${this.elMain.style.paddingLeft}"  group="padding" @input="${(e) => this.onChangeProp(e)}" />
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
    var _a2;
    const prop = el.getAttribute("prop");
    const group = el ? el.getAttribute("group") : "";
    const elGroup = (_a2 = el.closest(".myAuxGroup")) == null ? void 0 : _a2.querySelector(`input[prop="${group}"]`);
    let isGroup = false;
    if (elGroup) isGroup = elGroup.checked;
    if (!prop || !this.elMain || !this.myParent) return;
    if (isGroup) {
      this.elMain.style.padding = el.value;
      ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].forEach((pr) => {
        var _a3;
        const field = (_a3 = el.closest(".myAuxGroup")) == null ? void 0 : _a3.querySelector(`input[prop="${pr}"]`);
        if (field) field.value = el.value;
      });
      this.myParent.updateBaseNoPadding(this.elMain, this.myParent);
      this.myParent.updateBackgroundAuxSize("show");
      this.fireEvent(`{"padding":"${this.elMain.style.padding}"}`);
      return;
    }
    this.elMain.style[prop] = el.value;
    this.myParent.updateBaseNoPadding(this.elMain, this.myParent);
    this.myParent.updateBackgroundAuxSize("show");
    this.fireEvent();
  }
  //-------------------------------------------
  initDragging(e) {
    if (!this.elMain || !document.defaultView) return;
    this.startX = e.clientX;
    this.startY = e.clientY;
    const st = document.defaultView.getComputedStyle(this.elMain);
    this.startTop = parseInt(st.paddingTop, 10);
    this.startBottom = parseInt(st.paddingBottom, 10);
    this.startLeft = parseInt(st.paddingLeft, 10);
    this.startRight = parseInt(st.paddingRight, 10);
    const doDragging = (e2) => {
      if (!this.elMain || !this.myParent) return;
      this.myParent.style.background = "#f9cc9d80";
      const deltaX = e2.clientX - this.startX;
      const deltaY = e2.clientY - this.startY;
      if (!this.tpChange || ["top"].includes(this.tpChange)) {
        this.elMain.style.paddingTop = this.startTop + deltaY + "px";
      }
      if (!this.tpChange || ["bottom"].includes(this.tpChange)) {
        this.elMain.style.paddingBottom = this.startBottom + deltaY + "px";
      }
      if (!this.tpChange || ["left"].includes(this.tpChange)) {
        this.elMain.style.paddingLeft = this.startLeft + deltaX + "px";
      }
      if (!this.tpChange || ["right"].includes(this.tpChange)) {
        this.elMain.style.paddingRight = this.startRight + deltaX * -1 + "px";
      }
      this.renderOutdoorScenary();
      this.myParent.updateBaseNoPadding(this.elMain, this.myParent);
      this.myParent.updateBackgroundAuxSize("show");
    };
    const stopDragging = (e2) => {
      if (!this.elMain || !this.myParent) return;
      this.myParent.style.background = "";
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
      if (this.tpChange === "top") ret = `{"paddingTop":"${this.elMain.style.paddingTop}"}`;
      if (this.tpChange === "bottom") ret = `{"paddingBottom":"${this.elMain.style.paddingBottom}"}`;
      if (this.tpChange === "left") ret = `{"paddingLeft":"${this.elMain.style.paddingLeft}"}`;
      if (this.tpChange === "right") ret = `{"paddingRight":"${this.elMain.style.paddingRight}"}`;
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
__decorateElement(_init, 5, "tpChange", _tpChange_dec, WCDToolboxItemActionPadding);
WCDToolboxItemActionPadding = __decorateElement(_init, 0, "WCDToolboxItemActionPadding", _WCDToolboxItemActionPadding_decorators, WCDToolboxItemActionPadding);
__runInitializers(_init, 1, WCDToolboxItemActionPadding);
const getTemplate = (mode = "", position = "") => {
  let ret = templateActionPadding.buttonPadding;
  if (mode === "paddingTop") ret = templateActionPadding.paddingTop;
  if (mode === "paddingRight") ret = templateActionPadding.paddingRight;
  if (mode === "paddingBottom") ret = templateActionPadding.paddingBottom;
  if (mode === "paddingLeft") ret = templateActionPadding.paddingLeft;
  if (position !== "") ret.position = position;
  return ret;
};
const templateActionPadding = {
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
    isDblClick: false
  },
  //padding
  buttonPadding: {
    position: "p-l4",
    tp: "button",
    format: "",
    title: "padding",
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"/></svg>',
    onclick: (e, wc) => {
      wc.setIconsWcdToolbox(
        [
          templateActionPadding.backButton,
          templateActionPadding.paddingTop,
          templateActionPadding.paddingRight,
          templateActionPadding.paddingBottom,
          templateActionPadding.paddingLeft
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
    isDblClick: false
  },
  paddingTop: {
    position: "p-m1",
    tp: "action",
    format: "square",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-padding-100554",
    cursor: "ns-resize",
    attrs: [{ attr: "tpchange", value: "top" }],
    isDblClick: false
  },
  paddingRight: {
    position: "p-r2",
    tp: "action",
    format: "square",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-padding-100554",
    cursor: "ew-resize",
    attrs: [{ attr: "tpchange", value: "right" }],
    isDblClick: false
  },
  paddingBottom: {
    position: "p-m3",
    tp: "action",
    format: "square",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-padding-100554",
    cursor: "ns-resize",
    attrs: [{ attr: "tpchange", value: "bottom" }],
    isDblClick: false
  },
  paddingLeft: {
    position: "p-l2",
    tp: "action",
    format: "square",
    title: "",
    iconSvg: "",
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-padding-100554",
    cursor: "ew-resize",
    attrs: [{ attr: "tpchange", value: "left" }],
    isDblClick: false
  }
};
export {
  WCDToolboxItemActionPadding,
  getTemplate
};
