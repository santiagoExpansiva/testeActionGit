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
var _selectLanguage_dec, _actualLanguage_dec, _a, _ServiceUserSettings100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  languageLabel: "Linguagens",
  alterarLabel: "Alterar"
};
const message_en = {
  languageLabel: "Languages",
  alterarLabel: "Change"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceUserSettings100554_decorators = [customElement("service-user-settings-100554")];
class ServiceUserSettings100554 extends (_a = ServiceBase, _actualLanguage_dec = [property()], _selectLanguage_dec = [query(".select-language")], _a) {
  constructor() {
    super(...arguments);
    this.myMessage = messages["en-us"];
    this.details = {
      icon: "&#xf4fe",
      state: "foreground",
      position: "right",
      tooltip: "User Settings",
      visible: true,
      widget: "_100554_serviceUserSettings",
      level: [0]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "User Settings",
      actions: {},
      icons: {},
      actionDefault: "",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.actualLanguage = __runInitializers(_init, 8, this, "pt-BR"), __runInitializers(_init, 11, this);
  }
  onServiceClick(visible, reinit, el) {
    if (visible && reinit) {
      this.requestUpdate();
    }
  }
  getUserSettings() {
    const userSettings = localStorage.getItem("userSettings");
    if (!userSettings) {
      this.actualLanguage = "default";
      return;
    }
    const data = JSON.parse(userSettings);
    if (!data || !data.language) {
      this.actualLanguage = "default";
      return;
    }
    this.actualLanguage = data.language;
  }
  setUserLanguage(language) {
    let data = { language: "" };
    const userSettings = localStorage.getItem("userSettings");
    if (userSettings) data = JSON.parse(userSettings);
    if (language === "default") this.actualLanguage = this.getUserDefault();
    else this.actualLanguage = language;
    data.language = language;
    localStorage.setItem("userSettings", JSON.stringify(data));
  }
  getNavigatorLanguage() {
    const lg = navigator.language ? navigator.language : "";
    return lg;
  }
  getUserDefault() {
    const navigatorLanguage = this.getNavigatorLanguage();
    const acceptLanguages = ["en-US", "pt-BR"];
    const defaultLang = acceptLanguages.includes(navigatorLanguage) ? navigatorLanguage : "en-US";
    return defaultLang;
  }
  handleChanceLanguageClick() {
    if (!this.selectLanguage) return;
    const language = this.selectLanguage.value;
    this.setUserLanguage(language);
    location.reload();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.myMessage = messages[lang];
    this.getUserSettings();
    return html`
        <section>
            <details> 
                <summary>${this.myMessage.languageLabel}</summary>
                <div>
                    <select style="width:200px" .value=${this.actualLanguage} class="select-language">
                        <option value="default">Default</option>
                        <option value="pt-BR">pt-BR</option>
                        <option value="en-US">en-US</option>
                    </select>
                    <button style="margin-top:1rem" @click=${this.handleChanceLanguageClick}>${this.myMessage.alterarLabel}</button>
                </div>
            </details>
        </section>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "actualLanguage", _actualLanguage_dec, ServiceUserSettings100554);
__decorateElement(_init, 5, "selectLanguage", _selectLanguage_dec, ServiceUserSettings100554);
ServiceUserSettings100554 = __decorateElement(_init, 0, "ServiceUserSettings100554", _ServiceUserSettings100554_decorators, ServiceUserSettings100554);
ServiceUserSettings100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceUserSettings100554);
export {
  ServiceUserSettings100554
};