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
var _selectedvalue_dec, _options_dec, _label_dec, _disabled_dec, _required_dec, _hint_dec, _a, _WcSelectOne_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IcaFormsInputSelectOne } from "./_100554_icaFormsInputSelectOne";
import { propertyDataSource, propertyCompositeDataSource } from "./_100554_icaLitElement";
_WcSelectOne_decorators = [customElement("wc-select-one-100554")];
class WcSelectOne extends (_a = IcaFormsInputSelectOne, _hint_dec = [propertyDataSource({ type: String })], _required_dec = [property({ type: Boolean })], _disabled_dec = [property({ type: Boolean })], _label_dec = [propertyCompositeDataSource({ type: String })], _options_dec = [propertyDataSource()], _selectedvalue_dec = [propertyDataSource()], _a) {
  constructor() {
    super(...arguments);
    this.required = __runInitializers(_init, 12, this, false), __runInitializers(_init, 15, this);
    this.disabled = __runInitializers(_init, 16, this, false), __runInitializers(_init, 19, this);
  }
  render() {
    return html`
        <label>${this.label}<label>
        <br>
        <select
            class="select_control" 
            ?disabled=${this.disabled} 
            ?required=${this.required}
            .value=${this.selectedvalue} 
            @change=${this.handleChange}
        >
            ${this.renderOpt()}
        </select>
        <small> ${this.hint || ""}</small>
    `;
  }
  renderOpt() {
    if (this.options) {
      return html`
                ${this.options.map((opt) => {
        return html`<option value=${opt.key}>${opt.value}</option>`;
      })}
        `;
    }
  }
  handleChange(event) {
    const selectElement = event.target;
    this.selectedvalue = selectElement.value;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "hint", _hint_dec, WcSelectOne);
__decorateElement(_init, 5, "required", _required_dec, WcSelectOne);
__decorateElement(_init, 5, "disabled", _disabled_dec, WcSelectOne);
__decorateElement(_init, 5, "label", _label_dec, WcSelectOne);
__decorateElement(_init, 5, "options", _options_dec, WcSelectOne);
__decorateElement(_init, 5, "selectedvalue", _selectedvalue_dec, WcSelectOne);
WcSelectOne = __decorateElement(_init, 0, "WcSelectOne", _WcSelectOne_decorators, WcSelectOne);
WcSelectOne.styles = css`
    :host {
        display: block;
    }

    .select_control {
        display: block;
        width:100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        outline:none;
    }
    `;
__runInitializers(_init, 1, WcSelectOne);
export {
  WcSelectOne
};
