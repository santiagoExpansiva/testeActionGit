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
var _CodeLensServiceDetails100554_decorators, _init, _a;
import { html, css, unsafeHTML } from "lit";
import { customElement } from "lit/decorators.js";
import { CollabLitElement } from "./_100554_collabLitElement";
function initCodelensServiceDetails() {
  return true;
}
const message_pt = {
  title: "Detalhes do servi\uFFFDo",
  p1: "Para que seu service esteja disponivel para uso, \uFFFD preciso configurar corretamente o service details, assim definindo o nome, icone, posi\uFFFD\uFFFDes, level entre outras defini\uFFFD\uFFFDes.",
  icon: "Icone",
  p2: 'Para definir o icone, voc\uFFFD precisa primeiro escolher um que mais representa ao seu service, no <a href="https://fontawesome.com/icons" target="_blank">FontAwesome </a>. Ap\uFFFDs escolher, copie o seu unicode e preencha na propriedade icon.',
  example: "Exemplo",
  state: "Estado",
  p3: ' \uFFFD possivel escolher entre o state <b>"foreground"</b> e <b>"background"</b>. No caso do foreground, o seu service ser\uFFFD executado somente quando chamado em tela pelo usu\uFFFDrio. No caso do background, seu service \uFFFD instanciado, assim que inicia o level em que ele executa. ',
  exampleCustom: "Exemplo Personalizado por posi\uFFFD\uFFFDo:",
  p4: "Tamb\uFFFDm \uFFFD possivel customizar, determinadas propriedades para cada level/position",
  exampleLevel: "Exemplo Personalizado por n\uFFFDvel:",
  p5: "Tamb\uFFFDm \uFFFD possivel customizar, determinadas propriedades para cada level, nesse caso as configura\uFFFD\uFFFDes ser\uFFFDo aplicadas tanto para a posi\uFFFD\uFFFDo left e right"
};
const message_en = {
  title: "Service Details",
  p1: "For your service to be available for use, it is necessary to properly configure the service details, thus defining the name, icon, positions, level, among other settings.",
  icon: "Icon",
  p2: 'To set the icon, you first need to choose one that best represents your service, on <a href="https://fontawesome.com/icons" target="_blank">FontAwesome</a>. After choosing, copy its unicode and fill in the icon property.',
  example: "Example",
  state: "State",
  p3: 'You can choose between the states <b>"foreground"</b> and <b>"background"</b>. In the case of foreground, your service will only be executed when called on screen by the user. In the case of background, your service is instantiated as soon as the level it executes on starts.',
  exampleCustom: "Custom Example by Position:",
  p4: "It is also possible to customize certain properties for each level/position.",
  exampleLevel: "Custom Example by Level:",
  p5: "It is also possible to customize certain properties for each level; in this case, the settings will be applied to both the left and right positions."
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_CodeLensServiceDetails100554_decorators = [customElement("codelens-service-details-100554")];
class CodeLensServiceDetails100554 extends (_a = CollabLitElement) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.textExampleIcon = `
    public details: IService = {
        <br>
        &nbsp;&nbsp;icon: '&#x[seu unicode]',
        <br>
        &nbsp;&nbsp;...
        <br>
    }
    `;
    this.textExampleNormal = `
    public details: IService = {
        <br>
        &nbsp;&nbsp;icon:'&#x[seu unicode]',
        <br>
        &nbsp;&nbsp;state: 'background',
        <br>
        &nbsp;&nbsp;tooltip: 'My service',
        <br>
        &nbsp;&nbsp;visible: true,
        <br>
        &nbsp;&nbsp;position: "right",
        <br>
        &nbsp;&nbsp;level: [3]
        <br>
    }
    `;
    this.textExampleCustom = `
    public details: IService = {
        <br>
        &nbsp;&nbsp;icon:'&#x[seu unicode]',
        <br>
        &nbsp;&nbsp;state: 'background',
        <br>
        &nbsp;&nbsp;tooltip: 'My service',
        <br>
        &nbsp;&nbsp;visible: true,
        <br>
        &nbsp;&nbsp;position: "all",
        <br>
        &nbsp;&nbsp;level: [4,5]
        <br>
        &nbsp;&nbsp;customConfiguration: {
            <br>
            &nbsp;&nbsp&nbsp;&nbsp4: {
                <br>
                &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbspleft: {
                    <br>
                    &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsptooltip: 'My title 1'
                    <br>
                &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp},
                <br>
                &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbspright: {
                    <br>
                    &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbspshow: false
                    <br>
                &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp}
                <br>
            &nbsp;&nbsp&nbsp;&nbsp},
            <br>
            &nbsp;&nbsp&nbsp;&nbsp5: {
                <br>
                &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbspright: {
                    <br>
                    &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsptooltip: 'My title 2',
                    <br>
                    &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbspclassname: 'separator-left'
                    <br>
                &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp}
                <br>
            &nbsp;&nbsp&nbsp;&nbsp}
            <br>
        &nbsp;&nbsp}
        <br>
    }
    `;
    this.textExampleCustomLevel = `
    public details: IService = {
        <br>
        &nbsp;&nbsp;icon:'&#x[seu unicode]',
        <br>
        &nbsp;&nbsp;state: 'background',
        <br>
        &nbsp;&nbsp;tooltip: 'My service',
        <br>
        &nbsp;&nbsp;visible: true,
        <br>
        &nbsp;&nbsp;position: "all",
        <br>
        &nbsp;&nbsp;level: [3,4,5]
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;customConfiguration: {
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4: {
                <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tooltip: 'My service title left and right'
                  <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br>
    }
    `;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        <h1> ${this.msg.title} </h1>
        <p> ${this.msg.p1}
        </p>
        <h2>${this.msg.icon}</h2>
        <p> ${this.msg.p2} </p>
        <p>${this.msg.example}:</p>
        <div style="    border: 1px solid #c3c3c3;padding: 1rem;">
            <code>${unsafeHTML(this.textExampleIcon)}</code>
        </div>
        <h2>${this.msg.state}</h2>
        <p>${this.msg.p3}</p>
        <h2>${this.msg.example}:</h2>
        <div style="    border: 1px solid #c3c3c3;padding: 1rem;">
            <code>${unsafeHTML(this.textExampleNormal)}</code>
        </div>
        <h2>${this.msg.exampleCustom}</h2>
        <p>${this.msg.p4}</p>
        <div style="    border: 1px solid #c3c3c3;padding: 1rem;">
            <code>${unsafeHTML(this.textExampleCustom)}</code>
        </div>
        <h2>${this.msg.exampleLevel}</h2>
        <p>${this.msg.p5}</p>
        <div style="    border: 1px solid #c3c3c3;padding: 1rem;">
            <code>${unsafeHTML(this.textExampleCustomLevel)}</code>
        </div>
    
        
        `;
  }
}
_init = __decoratorStart(_a);
CodeLensServiceDetails100554 = __decorateElement(_init, 0, "CodeLensServiceDetails100554", _CodeLensServiceDetails100554_decorators, CodeLensServiceDetails100554);
CodeLensServiceDetails100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, CodeLensServiceDetails100554);
export {
  CodeLensServiceDetails100554,
  initCodelensServiceDetails
};
