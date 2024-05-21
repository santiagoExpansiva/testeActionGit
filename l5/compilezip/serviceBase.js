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
var _loading_dec, _msize_dec, _visible_dec, _position_dec, _a, _ServiceBase_decorators, _init;
import { CollabLitElement } from "./_100554_collabLitElement";
import { customElement, property, state } from "lit/decorators.js";
_ServiceBase_decorators = [customElement("service-base-100554")];
class ServiceBase extends (_a = CollabLitElement, _position_dec = [property({ type: String, reflect: true })], _visible_dec = [property({ type: String })], _msize_dec = [property({ type: String, noAccessor: true })], _loading_dec = [state()], _a) {
  constructor() {
    super(...arguments);
    this.position = __runInitializers(_init, 8, this, "left"), __runInitializers(_init, 11, this);
    this.visible = __runInitializers(_init, 12, this, "false"), __runInitializers(_init, 15, this);
    this.msize = __runInitializers(_init, 16, this, ""), __runInitializers(_init, 19, this);
    this.loading = __runInitializers(_init, 20, this, false), __runInitializers(_init, 23, this);
  }
  // @property({ type: Number, reflect: true })
  get level() {
    return +(this.getAttribute("level") || 7);
  }
  get serviceContent() {
    return this.getNav3ServiceContent();
  }
  get nav3Service() {
    return this.getNav3Service();
  }
  get serviceItemNav() {
    return this.getServiceItemNav();
  }
  get tooltipEl() {
    return this.getTooltip();
  }
  getActualRef() {
    var _a2;
    return ((_a2 = this.nav3Service) == null ? void 0 : _a2.getAttribute("data-service")) || "";
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback();
    this["mlsWidget"] = this;
    (_a2 = this.serviceContent) == null ? void 0 : _a2.addEventListener("focusin", this.checkFocus.bind(this));
  }
  checkFocus() {
    if (!this.serviceContent) return;
    if (this.serviceContent.contains(document.activeElement)) {
      this.setActualServicePosition();
    }
  }
  checkMouse() {
    this.setActualServicePosition();
  }
  setActualServicePosition() {
    if (!this.serviceContent || !this.nav3Service) return;
    const service = this.serviceContent.getAttribute("data-service") || "";
    const position = this.nav3Service.getAttribute("toolbarposition") || "";
    mls.setActualPosition(position);
    mls.setActualService(service);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "visible") {
      const visible = newVal === "true";
      const reinit = oldVal !== null && visible !== false;
      if (this.onServiceClick && typeof this.onServiceClick === "function") this.onServiceClick(visible, reinit, this.getNav3ServiceContent());
    }
    if (name === "msize") {
      const [width, height, top, left] = this.msize.split(",");
      if (height) this.style.height = height + "px";
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("loading")) {
      const loading = changedProperties.get("loading");
      if (loading !== void 0) {
        const nav3Service = this.getNav3Service();
        if (!nav3Service) return;
        nav3Service["serviceBind"] = this.details.widget;
        nav3Service.setAttribute("loading", (!loading).toString());
      }
    }
  }
  setError(error) {
    const nav3Service = this.getNav3Service();
    if (!nav3Service) return;
    nav3Service["serviceBind"] = this.details.widget;
    nav3Service.setAttribute("error", error);
  }
  toogleBadge(show, serviceName) {
    const mlsNav2 = this.getMlsNav2();
    if (!mlsNav2) {
      console.error("Function toogleBadge: mls-nav-2 dont exist");
      return;
    }
    mlsNav2.toogleBadge(show, serviceName);
  }
  openMe() {
    const itemService = this.serviceItemNav;
    if (itemService) itemService.click();
  }
  showNav2Item(show) {
    const itemService = this.serviceItemNav;
    if (itemService && itemService.show) itemService.show(show);
  }
  openService(service, position, level) {
    let page = this.closest("collab-page");
    if (!page) return;
    const toolbar = page.querySelector(`collab-nav-2[toolbarposition="${position}"]`);
    if (!toolbar) return;
    if (this.level !== level) {
      toolbar.state[level][position] = service;
      this.selectLevel(level);
      return;
    }
    const item = toolbar.querySelector(`collab-nav-2-item[data-service="${service}"]`);
    if (item) item.click();
    return;
  }
  selectLevel(level) {
    const page = this.closest("collab-page");
    const nav = page == null ? void 0 : page.querySelector("collab-nav-1");
    const objIndex = {
      0: 7,
      1: 6,
      2: 5,
      3: 4,
      4: 3,
      5: 2,
      6: 1,
      7: 0
    };
    if (!nav) return;
    nav.setAttribute("tabindexactive", objIndex[level]);
  }
  getMlsNav2() {
    var _a2;
    const mlsNav2 = (_a2 = this.closest("collab-nav-3")) == null ? void 0 : _a2.previousElementSibling;
    return mlsNav2;
  }
  getNav3ServiceContent() {
    const parentToolbarContent = this.closest("collab-nav-3-service");
    return parentToolbarContent;
  }
  getNav3Service() {
    const parentToolbarContent = this.closest("collab-nav-3");
    return parentToolbarContent;
  }
  getTooltip() {
    const tooltip = document.querySelector("collab-tooltip");
    return tooltip;
  }
  getServiceItemNav() {
    const toolbar = this.getMlsNav2();
    if (!toolbar) return null;
    const content = this.getNav3ServiceContent();
    if (!content) return null;
    const dataservice = content.getAttribute("data-service");
    const item = toolbar.querySelector(`collab-nav-2-item[data-service="${dataservice}"]`);
    return item;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "position", _position_dec, ServiceBase);
__decorateElement(_init, 5, "visible", _visible_dec, ServiceBase);
__decorateElement(_init, 5, "msize", _msize_dec, ServiceBase);
__decorateElement(_init, 5, "loading", _loading_dec, ServiceBase);
ServiceBase = __decorateElement(_init, 0, "ServiceBase", _ServiceBase_decorators, ServiceBase);
__runInitializers(_init, 1, ServiceBase);
export {
  ServiceBase
};
