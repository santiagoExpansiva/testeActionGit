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
var _input_dec, _hint_dec, _autofocus_dec, _readonly_dec, _disabled_dec, _required_dec, _value_dec, _errormessage_dec, _pattern_dec, _widget_dec, _label_dec, _name_dec, _a, _WcInputColor_decorators, _init;
import { html, LitElement, ifDefined, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
_WcInputColor_decorators = [customElement("wc-input-color-100554")];
class WcInputColor extends (_a = LitElement, _name_dec = [property({ type: String })], _label_dec = [property({ type: String })], _widget_dec = [property({ type: String })], _pattern_dec = [property({ type: String })], _errormessage_dec = [property({ type: String })], _value_dec = [property({ type: String })], _required_dec = [property({ type: Boolean })], _disabled_dec = [property({ type: Boolean })], _readonly_dec = [property({ type: Boolean })], _autofocus_dec = [property({ type: Boolean })], _hint_dec = [property({ type: String })], _input_dec = [query(".input_control")], _a) {
  constructor() {
    super(...arguments);
    this.value = __runInitializers(_init, 28, this, ""), __runInitializers(_init, 31, this);
    this.required = __runInitializers(_init, 32, this, false), __runInitializers(_init, 35, this);
    this.disabled = __runInitializers(_init, 36, this, false), __runInitializers(_init, 39, this);
    this.readonly = __runInitializers(_init, 40, this, false), __runInitializers(_init, 43, this);
    this.autofocus = __runInitializers(_init, 44, this, false), __runInitializers(_init, 47, this);
    this.error = "";
  }
  render() {
    return html`
        <label class="form-control-label">
          ${this.label}
        </label>

        <input
            class="input_control"
            type="color"
            name=${ifDefined(this.name)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            .value=${this.value}
            ?autofocus=${this.autofocus}
            pattern=${ifDefined(this.pattern)}  
        />
        <small class="form_hint">${this.hint}</small>
        <div class="form_error_message">${this.error}</div>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "name", _name_dec, WcInputColor);
__decorateElement(_init, 5, "label", _label_dec, WcInputColor);
__decorateElement(_init, 5, "widget", _widget_dec, WcInputColor);
__decorateElement(_init, 5, "pattern", _pattern_dec, WcInputColor);
__decorateElement(_init, 5, "errormessage", _errormessage_dec, WcInputColor);
__decorateElement(_init, 5, "value", _value_dec, WcInputColor);
__decorateElement(_init, 5, "required", _required_dec, WcInputColor);
__decorateElement(_init, 5, "disabled", _disabled_dec, WcInputColor);
__decorateElement(_init, 5, "readonly", _readonly_dec, WcInputColor);
__decorateElement(_init, 5, "autofocus", _autofocus_dec, WcInputColor);
__decorateElement(_init, 5, "hint", _hint_dec, WcInputColor);
__decorateElement(_init, 5, "input", _input_dec, WcInputColor);
WcInputColor = __decorateElement(_init, 0, "WcInputColor", _WcInputColor_decorators, WcInputColor);
WcInputColor.styles = css`
    :host {
        display: block;
    }
    
    .input_control {
        display: block;
        font-size: 1rem;
        cursor:pointer;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.25rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        outline:none;
    }
    .form_hint{
        color: blue;
    }
    .form_error_message{
        color: red;
    }
    `;
__runInitializers(_init, 1, WcInputColor);
export {
  WcInputColor
};
