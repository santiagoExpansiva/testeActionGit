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
var _activeTab_dec, _a, _ServiceFca100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabFCATree } from "./_100554_collabFcaTree";
const message_pt = {};
const message_en = {};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceFca100554_decorators = [customElement("service-fca-100554")];
class ServiceFca100554 extends (_a = ServiceBase, _activeTab_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.activeTab = __runInitializers(_init, 8, this, "AboutFCA"), __runInitializers(_init, 11, this);
    this.details = {
      icon: "&#xf2db",
      state: "background",
      position: "left",
      tooltip: "Service FCA",
      visible: true,
      widget: "_100554_serviceFca",
      level: [4]
    };
    this.onClickIcon = (op) => {
      this.activeTab = op;
    };
    this.menu = {
      title: "",
      actions: {},
      icons: {
        AboutFCA: "About FCA;3f",
        Navigation: "Navigation;f041",
        Properties: "Properties;f0ce",
        Styles: "Styles;f5ad",
        Animation: "Animation;f5ae"
      },
      actionDefault: "",
      // call after close icon clicked
      iconDefault: "AboutFCA",
      setMode: void 0,
      // child will set this
      onClickIcon: this.onClickIcon,
      getLastMode: void 0,
      updateTitle: void 0
    };
    initCollabFCATree;
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    if (visible && reinit) {
      if (this.activeTab !== "Navigation") return;
      const elTree = this.querySelector("collab-fca-tree-100554");
      if (elTree && elTree.forceUpdate) elTree.forceUpdate();
    }
  }
  //--------------COMPONENT---------------
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
            ${this.renderContent()}
        `;
  }
  renderContent() {
    switch (this.activeTab) {
      case "Navigation":
        return this.renderNavigation();
      case "Properties":
        return this.renderProperties();
      case "Styles":
        return this.renderStyles();
      case "Animation":
        return this.renderAnimation();
      case "AboutFCA":
        return this.renderAboutFCA();
      default:
        return html``;
    }
  }
  renderNavigation() {
    return html`<collab-fca-tree-100554 .myParent=${this}></collab-fca-tree-100554>`;
  }
  renderProperties() {
    return html`<div>In development: Properties</div>`;
  }
  renderStyles() {
    return html`<div></div>`;
  }
  renderAnimation() {
    return html`<div>In development: Animation</div>`;
  }
  renderAboutFCA() {
    return html`<div>In develpoment: AboutFCA</div>`;
  }
  //------------IMPLEMENTATION------------------
  setEvents() {
    mls.events.addListener(4, "WCDEvent", (ev) => this.onWCDEvent(ev));
    mls.events.addListener(4, "WCDEventChange", (ev) => this.onWCDEventChange(ev));
  }
  onWCDEvent(ev) {
    if (!ev.desc) return;
    const data = JSON.parse(ev.desc);
    if (this.menu.setIconActive) {
      this.openMe();
      this.menu.setIconActive(data.op);
    }
  }
  onWCDEventChange(ev) {
    if (this.activeTab !== "Navigation") return;
    const elTree = this.querySelector("collab-fca-tree-100554");
    if (elTree && elTree.forceUpdate) elTree.forceUpdate();
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "activeTab", _activeTab_dec, ServiceFca100554);
ServiceFca100554 = __decorateElement(_init, 0, "ServiceFca100554", _ServiceFca100554_decorators, ServiceFca100554);
ServiceFca100554.styles = css``;
__runInitializers(_init, 1, ServiceFca100554);
export {
  ServiceFca100554
};
