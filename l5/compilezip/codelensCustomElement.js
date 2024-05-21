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
var _CodeLensCustomElement100554_decorators, _init, _a;
import { html, css, unsafeHTML } from "lit";
import { customElement } from "lit/decorators.js";
import { CollabLitElement } from "./_100554_collabLitElement";
function initCodelensCustomElement() {
  return true;
}
const message_pt = {
  p1: "\uFFFD um recurso poderoso fornecido pelo Lit, uma biblioteca JavaScript para construir interfaces de usu\uFFFDrio web eficientes e reativas. \uFFFD usado para definir e registrar elementos personalizados com a API customElements do navegador. Elementos personalizados permitem que voc\uFFFD crie componentes reutiliz\uFFFDveis e autocontidos que podem ser usados como elementos HTML padr\uFFFDo dentro de sua aplica\uFFFD\uFFFDo web.  Uso Para criar um elemento personalizado usando o decorador @customElement no Lit, voc\uFFFD precisa definir uma classe que estende LitElement, a classe base fornecida pelo Lit. Esta classe encapsular\uFFFD o comportamento, a renderiza\uFFFD\uFFFDo e a l\uFFFDgica de atualiza\uFFFD\uFFFDo para o seu elemento personalizado.",
  usage: "Uso",
  p2: 'O decorador @customElement registra automaticamente seu elemento personalizado com a API customElements do navegador usando o nome da tag especificado. No exemplo acima, o elemento personalizado \uFFFD registrado com o nome da tag "my-custom-element". Isso permite que voc\uFFFD use o elemento personalizado como se fosse um elemento HTML padr\uFFFDo dentro de sua aplica\uFFFD\uFFFDo.'
};
const message_en = {
  p1: "Is a powerful feature provided by Lit, a JavaScript library for building efficient and reactive web user interfaces. It is used to define and register custom elements with the browsers customElements API. Custom elements allow you to create reusable and self-contained components that can be used like standard HTML elements within your web application.  Usage To create a custom element using the @customElement decorator in Lit, you need to define a class that extends LitElement, the base class provided by Lit. This class will encapsulate the behavior, rendering, and updating logic for your custom element.",
  usage: "Usage",
  p2: 'The @customElement decorator automatically registers your custom element with the browsers customElements API using the specified tag name. In the example above, the custom element is registered with the tag name "my-custom-element". This allows you to use the custom element as if it were a standard HTML element within your application.'
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_CodeLensCustomElement100554_decorators = [customElement("codelens-custom-element-100554")];
class CodeLensCustomElement100554 extends (_a = CollabLitElement) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.textCode = `
    import { customElement, LitElement, html } from 'lit';
    <br>
    <br>
    @customElement('my-custom-element')
    <br>
    class MyCustomElement extends LitElement {
    <br>
     [...]
    <br>
    }
    `;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        <h1> @customElement</h1>
        <p> ${this.msg.p1}</p>
        <hr>
        <h2>${this.msg.usage}:</h2>
        <code>${unsafeHTML(this.textCode)}</code>
        <div>
            <p>${this.msg.p2}</p>
        </div>
        <hr>
        <div class="container-image">
            <img src="https://lit.dev/images/docs/components/lit-element-inheritance.png" data-mlsline="11">
        </div>
        <a href="https://lit.dev/docs/components/overview/" target="_blank" data-mlsline="12">see more</a>
        `;
  }
}
_init = __decoratorStart(_a);
CodeLensCustomElement100554 = __decorateElement(_init, 0, "CodeLensCustomElement100554", _CodeLensCustomElement100554_decorators, CodeLensCustomElement100554);
CodeLensCustomElement100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, CodeLensCustomElement100554);
export {
  CodeLensCustomElement100554,
  initCodelensCustomElement
};
