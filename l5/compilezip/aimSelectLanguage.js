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
var _listcontainer_dec, _a, _AimSelectWidget100554_decorators, _init;
import { html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { CollabLitElement } from "./_100554_collabLitElement";
import { collab_ban } from "./_100554_collabIcons";
import { languages } from "./_100554_collabLanguages";
const message_pt = {
  "btn_cancel": "Cancelar",
  "btn_confirm": "Confirmar",
  "label_select_all": "Selecionar todos",
  "clear_all": "Limpar sele\uFFFD\uFFFDo"
};
const message_en = {
  "btn_cancel": "Cancel",
  "btn_confirm": "Confirm",
  "label_select_all": "Select all",
  "clear_all": "Clear selection"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_AimSelectWidget100554_decorators = [customElement("aim-select-language-100554")];
class AimSelectWidget100554 extends (_a = CollabLitElement, _listcontainer_dec = [query(".select-grid")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
  }
  get value() {
    if (!this.listcontainer) return [];
    const all = this.listcontainer.querySelectorAll("input");
    const values = Array.from(all).map((inp) => inp.checked ? inp["langObj"] : void 0).filter((item) => !!item);
    return values;
  }
  getLanguages() {
    return languages.sort((a, b) => a.name.localeCompare(b.name, "pt", { sensitivity: "base" }));
  }
  handleSelectAll(e) {
    const inp = e.target;
    if (!this.listcontainer) return;
    const all = this.listcontainer.querySelectorAll("input");
    if (inp.checked) all.forEach((inp2) => inp2.checked = true);
    else all.forEach((inp2) => inp2.checked = false);
  }
  handleClearAll(e) {
    var _a2;
    const all = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelectorAll("input");
    if (all) all.forEach((inp) => inp.checked = false);
  }
  handleConfirm() {
    const val = this.value;
    this.dispatchEvent(new CustomEvent("select-language-confirm", {
      detail: val,
      bubbles: true,
      composed: true
    }));
  }
  handleCancel() {
    this.dispatchEvent(new CustomEvent("select-language-cancel"));
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    const languages2 = this.getLanguages();
    return html`
        <div> 
            <div class="select-btn">
                <div class="select-btn-group">
                    <div class="select-check-all">
                        <button>
                            <input id="select-check-all" type="checkbox" @change=${this.handleSelectAll}></input>
                            <label for="select-check-all">${this.msg.label_select_all}</label>
                        </button>
                    </div>
                    <div class="select-clear-all">
                        <button @click=${this.handleClearAll}>
                            <div>${collab_ban}</div>
                            <span>${this.msg.clear_all}</span>
                        </button>
                    </div>
                </div>
                <div class="select-btn-actions">
                    <button @click=${this.handleConfirm}>${this.msg.btn_confirm}</button>
                    <button  @click=${this.handleCancel}>${this.msg.btn_cancel}</button>
                </div>
            </div>
            <hr>

            <div class="select-grid">
                ${languages2.map((lang2) => {
      return html`
            
        
                    <div class="select-grid-item">
                        <input id="sl_${lang2.code}" .langObj=${lang2} type="checkbox"></input>
                        <div class="flags ${lang2.code}"></div>
                        <label for="sl_${lang2.code}">${lang2.name}</label>
                    </div>
                    `;
    })}
            </div>
        </div>`;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "listcontainer", _listcontainer_dec, AimSelectWidget100554);
AimSelectWidget100554 = __decorateElement(_init, 0, "AimSelectWidget100554", _AimSelectWidget100554_decorators, AimSelectWidget100554);
AimSelectWidget100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, AimSelectWidget100554);
export {
  AimSelectWidget100554
};
