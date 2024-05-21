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
var _develpoment_dec, _trace_dec, _params_dec, _url_dec, _a, _IcaDeepLinking100554_decorators, _init;
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IcaLitElement } from "./_100554_icaLitElement";
_IcaDeepLinking100554_decorators = [customElement("ica-deep-linking-100554")];
class IcaDeepLinking100554 extends (_a = IcaLitElement, _url_dec = [property()], _params_dec = [property()], _trace_dec = [property()], _develpoment_dec = [property()], _a) {
  constructor() {
    super(...arguments);
    this.params = __runInitializers(_init, 12, this, /* @__PURE__ */ new Set()), __runInitializers(_init, 15, this);
    this.trace = __runInitializers(_init, 16, this, []), __runInitializers(_init, 19, this);
    this.develpoment = __runInitializers(_init, 20, this, false), __runInitializers(_init, 23, this);
    this.timeoutChangePrompt = 0;
  }
  exec(params) {
    this.trace.push(`Find elements in page`);
    this.findAndChangeElementsInPage(params);
  }
  findAndChangeElementsInPage(params) {
    const allElements = document.querySelectorAll("*");
    const pathToChange = this.findParameterReferences(allElements, Array.from(params));
    for (let changes of pathToChange) {
      this.trace.push(`Set state: key => ${changes.key} value => ${changes.value} `);
      window.globalStateManagment.setState(changes.key, changes.value);
    }
  }
  findParameterReferences(elements, parameters) {
    const fields = [];
    parameters.forEach((param) => {
      const paramName = param.key.split(".").pop();
      elements.forEach((element) => {
        const attributes = element.getAttributeNames();
        attributes.forEach((attribute) => {
          const attributeValue = element.getAttribute(attribute);
          if (attributeValue) {
            const matches = attributeValue.match(new RegExp(`{{\\s*[^{}]*\\b${paramName}\\b[^{}]*\\s*}}`, "g"));
            if (matches) {
              matches.forEach((match) => {
                fields.push({
                  fieldName: `${element.tagName.toLowerCase()}[${attribute}]`,
                  value: match,
                  newValue: param.value
                });
              });
            }
          }
        });
      });
    });
    fields.forEach((field) => {
      field.value = field.value.replace(/{{|}}/g, "");
    });
    const uniqueValues = {};
    fields.forEach((field) => {
      if (!uniqueValues[field.value]) {
        uniqueValues[field.value] = field.newValue;
      }
    });
    return Object.entries(uniqueValues).map(([key, value]) => ({ key, value }));
  }
  setParamsByUrl() {
    this.trace.push(`---------------------------- `);
    this.trace.push(`Set params by url: ${this.url} `);
    if (!this.url) return;
    const urlParams = new URLSearchParams(this.url.substring(this.url.indexOf("?") + 1));
    this.params = /* @__PURE__ */ new Set();
    for (const [key, value] of urlParams) {
      this.params.add({ key, value });
    }
  }
  setParamsByPrompt(value) {
    this.trace.push(`---------------------------- `);
    const jsonParams = JSON.parse(value);
    this.trace.push(`Set params by prompt: ${JSON.stringify(jsonParams)} `);
    this.params = /* @__PURE__ */ new Set();
    for (const obj of jsonParams) {
      this.params.add({ key: obj.key, value: obj.value });
    }
  }
  createPrompt() {
    return html`
      <textarea
      rows="10"
      style="width:100%;"
      placeholder="Alterar o globalState..."
      .value = ${JSON.stringify(Array.from(this.params), null, 2) || ""}
      @input=${(e) => this.handleChange(e.target.value)}>
    `;
  }
  createDetailsIcon() {
    return html`
      <details>
        <summary>Trace</summary>
        <div style="margin-left:2rem;">
            <pre style="white-space: pre-line;font-size: 12px;">
                ${this.trace.join("\n")}
            </pre>
        </div>

      </details>
    `;
  }
  getAllWebComponentTags() {
    const webComponentTags = [];
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      if (element.tagName.includes("-")) {
        webComponentTags.push(element.tagName.toLowerCase());
      }
    });
    return webComponentTags;
  }
  handleChange(inputValue) {
    if (this.timeoutChangePrompt) clearTimeout(this.timeoutChangePrompt);
    this.timeoutChangePrompt = setTimeout(() => {
      this.setParamsByPrompt(inputValue);
      this.exec(this.params);
    }, 1e3);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("url")) {
      const allWcs = this.getAllWebComponentTags();
      this.trace.push("Check and waiting all web components defined");
      Promise.all(allWcs.map((wc) => customElements.whenDefined(wc))).then(() => __async(this, null, function* () {
        this.setParamsByUrl();
        this.exec(this.params);
      }));
    }
  }
  renderOptional() {
    return html`
            ${this.createPrompt()}
            ${this.createDetailsIcon()}
        `;
  }
  render() {
    return html`${this.develpoment ? this.renderOptional() : ""}`;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "url", _url_dec, IcaDeepLinking100554);
__decorateElement(_init, 5, "params", _params_dec, IcaDeepLinking100554);
__decorateElement(_init, 5, "trace", _trace_dec, IcaDeepLinking100554);
__decorateElement(_init, 5, "develpoment", _develpoment_dec, IcaDeepLinking100554);
IcaDeepLinking100554 = __decorateElement(_init, 0, "IcaDeepLinking100554", _IcaDeepLinking100554_decorators, IcaDeepLinking100554);
__runInitializers(_init, 1, IcaDeepLinking100554);
export {
  IcaDeepLinking100554
};
