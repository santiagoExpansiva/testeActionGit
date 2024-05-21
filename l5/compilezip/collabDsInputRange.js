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
var _prop_dec, _value_dec, _useSelect_dec, _a, _CollabDSInputRange_decorators, _init;
import { html, css, LitElement, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
function initCollabDSInputRange() {
}
;
_CollabDSInputRange_decorators = [customElement("collab-ds-input-range-100554")];
class CollabDSInputRange extends (_a = LitElement, _useSelect_dec = [property()], _value_dec = [property()], _prop_dec = [property()], _a) {
  constructor() {
    super(...arguments);
    this.arraySelect = [];
    this.useSelect = __runInitializers(_init, 8, this, "true"), __runInitializers(_init, 11, this);
    this.value = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.prop = __runInitializers(_init, 16, this, ""), __runInitializers(_init, 19, this);
    this.min = 0;
    this.max = 100;
  }
  render() {
    return html`
            ${this.renderInput()}
            ${this.renderSelect()}
            
        `;
  }
  renderInput() {
    return html`
            <input type="range" .value="${this.onlyNumber(this.value)}" min="${this.min}" max="${this.max}"   @input="${(e) => this.changeRange(e)}"></input>
        `;
  }
  renderSelect() {
    return html`
            <div>
                <input type="search" .value="${this.onlyNumber(this.value)}" @input="${this.changeInput}"> </input>
                <select @change="${this.changeSelect}" style="${this.useSelect === "false" ? "display:none" : ""}">
                    ${repeat(
      this.arraySelect,
      (key) => key,
      (k, index) => {
        return html`<option value="${k}">${k}</option>`;
      }
    )}
                </select>
            </div>
        `;
  }
  updated() {
    if (!this.shadowRoot) return;
    const sel = this.shadowRoot.querySelector("select");
    if (!sel) return;
    sel.value = this.onlyTxt(this.value);
  }
  //---------IMPLEMENTS-------------
  onlyNumber(str) {
    const regexNum = /(\d+(?:\.\d+)?)/;
    const res = str.match(regexNum);
    return res && res[0] ? res[0] : "";
  }
  onlyTxt(str) {
    const regexStr = /[a-zA-Z]+/;
    const res = str.match(regexStr);
    return res && res[0] ? res[0].replace(".", "") : "";
  }
  changeRange(e) {
    this.allChange(e, "range");
  }
  changeInput(e) {
    this.allChange(e, "input");
  }
  changeSelect(e) {
    this.allChange(e, "sel");
  }
  allChange(e, mode) {
    e.stopPropagation();
    if (!this.shadowRoot) return;
    const parent = this.shadowRoot;
    let input = parent.querySelector('input[type="search"]');
    let range = parent.querySelector('input[type="range"]');
    let sel = parent.querySelector("select");
    if (!input || !sel || !range) return;
    if (mode === "range") {
      input.value = range.value;
    } else if (mode === "input") {
      const tot = this.onlyNumber(input.value);
      const max = range.max;
      if (!max || max < tot) range.max = tot;
      range.value = tot;
    }
    this.value = input.value + sel.value;
    this.fireEvents(
      {
        key: this.prop,
        value: input.value + sel.value
      }
    );
  }
  fireEvents(obj) {
    obj.target = this;
    const onChangePropEvento = new CustomEvent("onchange", {
      bubbles: true,
      detail: obj
    });
    this.dispatchEvent(onChangePropEvento);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "useSelect", _useSelect_dec, CollabDSInputRange);
__decorateElement(_init, 5, "value", _value_dec, CollabDSInputRange);
__decorateElement(_init, 5, "prop", _prop_dec, CollabDSInputRange);
CollabDSInputRange = __decorateElement(_init, 0, "CollabDSInputRange", _CollabDSInputRange_decorators, CollabDSInputRange);
CollabDSInputRange.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, CollabDSInputRange);
export {
  CollabDSInputRange,
  initCollabDSInputRange
};
