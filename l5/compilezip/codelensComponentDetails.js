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
var _CodeLensComponentDetails100554_decorators, _init, _a;
import { html, css, unsafeHTML } from "lit";
import { customElement } from "lit/decorators.js";
import { CollabLitElement } from "./_100554_collabLitElement";
function initCodelensComponentDetails() {
  return true;
}
const message_pt = {
  usage: "Uso",
  p1: "O par\uFFFDmetro mlsComponentDetails \uFFFD usado para determinar se h\uFFFD depend\uFFFDncias em quaisquer componentes da web. Esta defini\uFFFD\uFFFDo \uFFFD importante para o funcionamento/compila\uFFFD\uFFFDo adequada do componente.<br> Para fazer esta defini\uFFFD\uFFFDo, use JsDoc no in\uFFFDcio do arquivo, configurando a tag mlsComponentDetails."
};
const message_en = {
  usage: "Usage",
  p1: "The parameter mlsComponentDetails is used to determine if there are any dependencies on any web components. This definition is important for the proper functioning/compilation of the component.<br> To make this definition, use JsDoc at the beginning of the file, setting the mlsComponentDetails tag."
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_CodeLensComponentDetails100554_decorators = [customElement("codelens-component-details-100554")];
class CodeLensComponentDetails100554 extends (_a = CollabLitElement) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.textCode = `
        /**
         <br>
         * @mlsComponentDetails {"webComponentDependencies": ["my-web-component-100541"]}
        <br>
         */
        <br>
        <br>

        import { html, LitElement } from 'lit';
        <br>
        import { customElement } from 'lit/decorators.js';
        <br>
         <br>
        @customElement('example-100541')
        <br>
        export class Example extends LitElement { [...] }

    `;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        <h1> mlsComponentDetails</h1>
        <p> ${this.msg.p1} </p>
        
        <hr>
        <h2>${this.msg.usage}:</h2>
        <code>${unsafeHTML(this.textCode)}</code>

        `;
  }
}
_init = __decoratorStart(_a);
CodeLensComponentDetails100554 = __decorateElement(_init, 0, "CodeLensComponentDetails100554", _CodeLensComponentDetails100554_decorators, CodeLensComponentDetails100554);
CodeLensComponentDetails100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, CodeLensComponentDetails100554);
export {
  CodeLensComponentDetails100554,
  initCodelensComponentDetails
};
