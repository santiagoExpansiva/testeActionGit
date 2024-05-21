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
var _range_dec, _input_dec, _inputmode_dec, _hint_dec, _autofocus_dec, _readonly_dec, _disabled_dec, _required_dec, _step_dec, _minvalue_dec, _maxvalue_dec, _errormessage_dec, _pattern_dec, _label_dec, _placeholder_dec, _name_dec, _datasource_dec, _a, _WCInputNumber_decorators, _init;
import { html, ifDefined, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { IcaFormsInputNumberBase } from "./_100554_icaFormsInputNumberBase";
import { propertyDataSource, propertyCompositeDataSource } from "./_100554_icaLitElement";
_WCInputNumber_decorators = [customElement("wc-input-number-range-100554")];
class WCInputNumber extends (_a = IcaFormsInputNumberBase, _datasource_dec = [propertyDataSource({ type: String })], _name_dec = [property({ type: String })], _placeholder_dec = [property({ type: String })], _label_dec = [propertyCompositeDataSource({ type: String })], _pattern_dec = [property({ type: String })], _errormessage_dec = [property({ type: String })], _maxvalue_dec = [property({ type: Number })], _minvalue_dec = [property({ type: Number })], _step_dec = [property({ type: Number })], _required_dec = [property({ type: Boolean })], _disabled_dec = [property({ type: Boolean })], _readonly_dec = [property({ type: Boolean })], _autofocus_dec = [property({ type: Boolean })], _hint_dec = [property({ type: String })], _inputmode_dec = [property({ type: String })], _input_dec = [query('input[type="number"]')], _range_dec = [query('input[type="range"]')], _a) {
  constructor() {
    super(...arguments);
    this.required = __runInitializers(_init, 44, this, false), __runInitializers(_init, 47, this);
    this.disabled = __runInitializers(_init, 48, this, false), __runInitializers(_init, 51, this);
    this.readonly = __runInitializers(_init, 52, this, false), __runInitializers(_init, 55, this);
    this.autofocus = __runInitializers(_init, 56, this, false), __runInitializers(_init, 59, this);
    this.hint = __runInitializers(_init, 60, this, ""), __runInitializers(_init, 63, this);
    this.inputmode = __runInitializers(_init, 64, this, "none"), __runInitializers(_init, 67, this);
    this.error = "";
  }
  render() {
    return html`
        <label class="form-control-label" for="input">
          ${this.label}
        </label>

        <input 
            type="range"
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            min=${ifDefined(this.minvalue)}    
            max=${ifDefined(this.maxvalue)}
            step=${ifDefined(this.step)}
            .value=${this.datasource}
            @input=${this.handleSliderChange}
        />

        <input
            id="input"
            class="input_control"
            type="number"
            name=${ifDefined(this.name)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            min=${ifDefined(this.minvalue)}    
            max=${ifDefined(this.maxvalue)}
            step=${ifDefined(this.step)}
            .value=${this.datasource}
            ?autofocus=${this.autofocus}
            pattern=${ifDefined(this.pattern)}
            inputmode=${ifDefined(this.inputmode)}
            @input=${this.handleChange}
        />

        <div class="form_error_message">${this.error}</div>
        `;
  }
  handleSliderChange(event) {
    const sliderElement = event.target;
    this.datasource = Number(sliderElement.value);
  }
  handleChange() {
    if (!this.input) return;
    let newval = +this.input.value;
    if (!isNaN(newval) && (this.minvalue === void 0 || newval >= this.minvalue) && (this.maxvalue === void 0 || newval <= this.maxvalue)) {
      if (this.range) this.range.value = newval.toString();
      this.datasource = newval;
      this.error = "";
      this.requestUpdate();
    } else {
      this.error = this.errormessage || "";
      this.requestUpdate();
    }
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "datasource", _datasource_dec, WCInputNumber);
__decorateElement(_init, 5, "name", _name_dec, WCInputNumber);
__decorateElement(_init, 5, "placeholder", _placeholder_dec, WCInputNumber);
__decorateElement(_init, 5, "label", _label_dec, WCInputNumber);
__decorateElement(_init, 5, "pattern", _pattern_dec, WCInputNumber);
__decorateElement(_init, 5, "errormessage", _errormessage_dec, WCInputNumber);
__decorateElement(_init, 5, "maxvalue", _maxvalue_dec, WCInputNumber);
__decorateElement(_init, 5, "minvalue", _minvalue_dec, WCInputNumber);
__decorateElement(_init, 5, "step", _step_dec, WCInputNumber);
__decorateElement(_init, 5, "required", _required_dec, WCInputNumber);
__decorateElement(_init, 5, "disabled", _disabled_dec, WCInputNumber);
__decorateElement(_init, 5, "readonly", _readonly_dec, WCInputNumber);
__decorateElement(_init, 5, "autofocus", _autofocus_dec, WCInputNumber);
__decorateElement(_init, 5, "hint", _hint_dec, WCInputNumber);
__decorateElement(_init, 5, "inputmode", _inputmode_dec, WCInputNumber);
__decorateElement(_init, 5, "input", _input_dec, WCInputNumber);
__decorateElement(_init, 5, "range", _range_dec, WCInputNumber);
WCInputNumber = __decorateElement(_init, 0, "WCInputNumber", _WCInputNumber_decorators, WCInputNumber);
WCInputNumber.styles = css`
    :host {
        display: flex;
        align-items: center;
        gap:1rem;
    }

    .form-control-label{
        width:100px;
    }

    .input_control {
        display: block;
        width:100px;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
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
    .form_error_message{
        color: red;
    }
    `;
__runInitializers(_init, 1, WCInputNumber);
export {
  WCInputNumber
};
