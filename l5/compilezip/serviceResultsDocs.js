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
var _onlyWithComents_dec, _loading_dec, _position_dec, _level_dec, _project_dec, _shortName_dec, _a, _ServiceResultDocs100554_decorators, _init;
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getJson } from "./_100554_jsDocLib";
const message_pt = {
  onlyWithJsdocs: "Apenas com JSDoc"
};
const message_en = {
  onlyWithJsdocs: "Only with JSDoc"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceResultDocs100554_decorators = [customElement("service-results-docs-100554")];
let _ServiceResultDocs100554 = class _ServiceResultDocs100554 extends (_a = LitElement, _shortName_dec = [property()], _project_dec = [property()], _level_dec = [property()], _position_dec = [property()], _loading_dec = [property({ type: Boolean })], _onlyWithComents_dec = [property({ type: Boolean })], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.shortName = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.project = __runInitializers(_init, 12, this, 0), __runInitializers(_init, 15, this);
    this.level = __runInitializers(_init, 16, this, 0), __runInitializers(_init, 19, this);
    this.position = __runInitializers(_init, 20, this, "left"), __runInitializers(_init, 23, this);
    this.loading = __runInitializers(_init, 24, this, true), __runInitializers(_init, 27, this);
    this.onlyWithComents = __runInitializers(_init, 28, this, false), __runInitializers(_init, 31, this);
    this.data = [];
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_ServiceResultDocs100554.prototype, this, "connectedCallback").call(this);
      yield this.getJsDoc();
      this.loading = false;
    });
  }
  getJsDoc() {
    return __async(this, null, function* () {
      this.data = getJson("", this.onlyWithComents);
      return;
    });
  }
  goToItem(sel, position) {
    var _a2;
    (_a2 = this.querySelector('[data-doc="' + sel + '"]')) == null ? void 0 : _a2.scrollIntoView();
    const params = {
      action: "gotoPosition",
      extension: ".ts",
      filePosition: position,
      folder: "",
      level: this.level,
      shortName: this.shortName,
      project: this.project,
      position: this.position
    };
    console.info({ goToItem: position });
    mls.events.fire([this.level], ["MonacoAction"], JSON.stringify(params));
  }
  render() {
    return html`
            <div class="docs_container">
                <div class="doc-menu" style="min-width: 200px; overflow: auto;">
                    <div class="check-container">
                        <input id="service_results_docs_check" type="checkbox">
                        <label for="service_results_docs_check">${this.msg.onlyWithJsdocs}</label>
                    </div>
                    <div>
                        ${this.data.map((groups) => {
      var _a2;
      return html`
                            <div>
                                <span class="groups">${groups.name}</span>
                                <div>
                                    ${(_a2 = groups.members) == null ? void 0 : _a2.map((subgroup) => html`
                                        <div class="subgroup">${subgroup.name}</div>
                                    `)}
                                </div>
                            </div>
                        `;
    })}
                    </div>
                </div>

            
            </div>
        `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "shortName", _shortName_dec, _ServiceResultDocs100554);
__decorateElement(_init, 5, "project", _project_dec, _ServiceResultDocs100554);
__decorateElement(_init, 5, "level", _level_dec, _ServiceResultDocs100554);
__decorateElement(_init, 5, "position", _position_dec, _ServiceResultDocs100554);
__decorateElement(_init, 5, "loading", _loading_dec, _ServiceResultDocs100554);
__decorateElement(_init, 5, "onlyWithComents", _onlyWithComents_dec, _ServiceResultDocs100554);
_ServiceResultDocs100554 = __decorateElement(_init, 0, "ServiceResultDocs100554", _ServiceResultDocs100554_decorators, _ServiceResultDocs100554);
_ServiceResultDocs100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceResultDocs100554);
let ServiceResultDocs100554 = _ServiceResultDocs100554;
export {
  ServiceResultDocs100554
};
