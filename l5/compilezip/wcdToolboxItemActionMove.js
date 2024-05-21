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
var _WCDToolboxItemActionMove_decorators, _init, _a;
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
_WCDToolboxItemActionMove_decorators = [customElement("wcd-toolbox-item-action-move-100554")];
class WCDToolboxItemActionMove extends (_a = LitElement) {
  createRenderRoot() {
    return this;
  }
  render() {
    return html``;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    this.onclick = (event) => {
      this.initClick(event);
    };
  }
  beforeRemove() {
    if (!this.myElements) return;
    document.body.onmouseup = () => {
    };
    this.myElements.forEach((i) => {
      this.changeStateDrop(i);
    });
  }
  clearDrag() {
    if (!this.myElements) return;
    this.myElements.forEach((i) => {
      this.changeStateDrop(i);
    });
  }
  stopDragging(e) {
    try {
      e.stopPropagation();
      if (!this.myParent || !this.elFCA) return;
      const myGrandFather = this.myParent.parentElement;
      document.body.style.cursor = "";
      const aux = this.getAux(e.target);
      if (!aux || !aux.elBase) {
        this.clearDrag();
        return;
      }
      const elBase = aux.elBase;
      const oldParent = myGrandFather.getIcaParent(this.elFCA);
      const newParent = myGrandFather.getIcaParent(elBase);
      let father = elBase.parentElement;
      father = father ? father : document.body;
      const move = aux.tagName.toLocaleLowerCase();
      const newEl = this.elFCA.cloneNode(true);
      switch (move) {
        case "wcd-dragdrop-aux-before":
          father.insertBefore(newEl, elBase);
          this.elFCA.remove();
          break;
        case "wcd-dragdrop-aux-after":
          father.insertBefore(newEl, elBase.nextSibling);
          this.elFCA.remove();
          break;
        case "wcd-dragdrop-aux-in":
          const elIn = elBase.querySelector(elBase.widget);
          if (elIn) elIn.appendChild(this.elFCA);
          break;
        default:
          "";
      }
      newEl.setAttribute("rendertype", "edit");
      setTimeout(() => {
        newEl.click();
      }, 100);
      setTimeout(() => {
        if (this.myParent) mls.events.fire(+this.myParent.level, "WCDEventChange", `{"op":"Navigation"}`);
      }, 500);
      this.clearDrag();
    } catch (err) {
      this.clearDrag();
    }
  }
  getAux(el) {
    if (el.tagName.toLocaleLowerCase().startsWith("wcd-dragdrop-aux-")) {
      return el;
    }
    const parent = el.parentElement;
    if (!parent) return;
    const tag = parent.tagName.toLowerCase();
    if (tag.startsWith("wcd-dragdrop-aux-")) {
      return parent;
    }
    return this.getAux(parent);
  }
  initClick(e) {
    if (!this.elMain || !this.elFCA || !this.myParent || !document.defaultView) return;
    const myGrandFather = this.myParent.parentElement;
    const scope = myGrandFather.getMyScope();
    if (!scope) return;
    this.myElements = myGrandFather.getICAComponents(scope);
    this.myElements = this.onlyNeedAddTag(this.myElements);
    this.myElements.forEach((i) => {
      this.changeStateDrag(i, scope, myGrandFather);
    });
    if (!this.myParent.shadowRoot) return;
    Array.from(this.myParent.shadowRoot.children).forEach((i) => {
      const tag = i.tagName.toLocaleLowerCase();
      if (tag !== "wcd-toolbox-item-action-move-100554") i.remove();
    });
  }
  onlyNeedAddTag(array) {
    const a = [];
    for (let i = 0; i <= array.length; i++) {
      const elBase = array[i];
      const next = array[i + 1];
      if (!next) {
        a.push(elBase);
        continue;
      }
      const parent = next.getIcaParent(next);
      if (!parent && (!next.parentElement || next.parentElement.tagName !== "BODY")) continue;
      if (next.parentElement && next.parentElement.tagName === "BODY") a.push(elBase);
      else if (parent !== elBase) a.push(elBase);
    }
    return a;
  }
  changeStateDrag(elBase, elScope, elMove) {
    if (!elBase) return;
    if (elBase.getAttribute("renderType") === "editactive" || !this.myParent) return;
    const valid = elBase.allowCommand("move", elScope, elMove);
    if (!valid.before && !valid.after && !valid.inside) return;
    const content = document.createElement("wcd-dragdrop-aux");
    content.style.position = "absolute";
    content.style.display = "flex";
    content.style.gap = "1rem";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.background = "#0c66e461";
    const before = document.createElement("wcd-dragdrop-aux-before");
    const after = document.createElement("wcd-dragdrop-aux-after");
    const inn = document.createElement("wcd-dragdrop-aux-in");
    before.onclick = (e) => this.stopDragging(e);
    after.onclick = (e) => this.stopDragging(e);
    inn.onclick = (e) => this.stopDragging(e);
    before.elBase = elBase;
    after.elBase = elBase;
    inn.elBase = elBase;
    const cssItens = `width:18px; height:18px; border-radius:50%;box-shadow: 0 0 4px 1px rgba(57,76,96,.15), 0 0 0 1px rgba(43,59,74,.3); background:#fff; display:flex;justify-content:center; align-items: center; cursor:pointer `;
    before.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
    before.title = "Before";
    before.style.cssText = cssItens;
    after.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`;
    after.title = "after";
    after.style.cssText = cssItens;
    inn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"/></svg>`;
    inn.title = "in";
    inn.style.cssText = cssItens;
    if (valid.before) content.appendChild(before);
    if (valid.after) content.appendChild(after);
    if (valid.inside) content.appendChild(inn);
    elBase.style.position = "relative";
    this.myParent.updateSize(elBase, content, true);
    elBase.appendChild(content);
  }
  changeStateDrop(elBase) {
    if (!elBase) return;
    if (elBase.getAttribute("renderType") === "editactive") return;
    elBase.style.position = "";
    const content = elBase.querySelector(":scope > wcd-dragdrop-aux");
    if (!content) return;
    content.remove();
  }
}
_init = __decoratorStart(_a);
WCDToolboxItemActionMove = __decorateElement(_init, 0, "WCDToolboxItemActionMove", _WCDToolboxItemActionMove_decorators, WCDToolboxItemActionMove);
__runInitializers(_init, 1, WCDToolboxItemActionMove);
const getTemplate = (mode = "", position = "") => {
  let ret = templateActionMove.move;
  if (position !== "") ret.position = position;
  return ret;
};
const templateActionMove = {
  move: {
    position: "p-m2",
    tp: "action",
    format: "",
    title: "Move",
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z"/></svg>',
    onclick: void 0,
    menuItens: [],
    menuSubItens: [],
    widget: "wcd-toolbox-item-action-move-100554",
    cursor: "pointer",
    attrs: void 0,
    isDblClick: false
  }
};
export {
  WCDToolboxItemActionMove,
  getTemplate
};
