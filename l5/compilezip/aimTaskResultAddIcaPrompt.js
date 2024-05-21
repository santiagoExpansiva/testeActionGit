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
var _textarea_dec, _hasError_dec, _modeInternal_dec, _a, _AimTaskResulAddIcaPrompt_decorators, _init;
import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { AimTaskBase } from "./_100554_aimTaskBase";
const message_pt = {
  tryagain_title_2: "O prompt \uFFFD valido",
  tryagain_title_3: "O prompt enviado esta fora de contexto por favor digite um prompt referente a cria\uFFFD\uFFFDo de um web component",
  tryagain_title_4: "O prompt precisa ser melhorado, por favor digite as mudan\uFFFDas necess\uFFFDrias abaixo.",
  tryagain_title_5: "Segue abaixo algumas sugest\uFFFDes para melhorar o seu prompt",
  error_message: "O prompt deve ser preenchido.",
  tryagain_placeholder: "Digite aqui seu prompt.",
  tryagain_processed: "Prompt j\uFFFD validado.",
  btn_confirmar: "Confirmar",
  btn_cancelar: "Cancelar"
};
const message_en = {
  tryagain_title_2: "The prompt is valid",
  tryagain_title_3: "The prompt sent is out of context, please type a prompt related to the creation of a web component",
  tryagain_title_4: "The prompt needs improvement, please type the necessary changes below.",
  tryagain_title_5: "Below are some suggestions to improve your prompt",
  error_message: "The prompt must be filled.",
  tryagain_placeholder: "Type your prompt here.",
  tryagain_processed: "Prompt already validated.",
  btn_confirmar: "Confirm",
  btn_cancelar: "Cancel"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_AimTaskResulAddIcaPrompt_decorators = [customElement("aim-task-result-add-ica-prompt-100554")];
class AimTaskResulAddIcaPrompt extends (_a = AimTaskBase, _modeInternal_dec = [property({ type: String, reflect: true })], _hasError_dec = [property()], _textarea_dec = [query("textarea")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en-us"];
    this.hasError = __runInitializers(_init, 12, this, false), __runInitializers(_init, 15, this);
  }
  onInitializing() {
    if (this.taskChild.mode !== "error" && this.taskChild.mode !== "processed") {
      this.modeInternal = this.taskRoot.mode = this.taskChild.mode = "waiting for user";
    }
    if (!this.taskChild.result) {
      this.taskChild.mode === "error";
      this.notifyCompleteByStatus("error", "");
      return;
    }
    this.result = this.getResult(this.taskChild.result);
    if (this.result === 0) {
      this.notifyCompleteByStatus("ok", "");
      return;
    }
    this.openMe();
  }
  getResult(str) {
    const firstStr = str.substring(0, 24).toLowerCase();
    if (firstStr.startsWith("sim")) return 0;
    if (firstStr.startsWith("nao")) return 1;
    if (firstStr.startsWith("forne\uFFFDa mais informa\uFFFD\uFFFDes")) return 2;
  }
  renderBody(taskRoot, child) {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    let prompt = taskRoot.args ? JSON.parse(taskRoot.args).prompt : "";
    const body = child.result || "";
    this.result = this.getResult(body);
    if (this.modeInternal !== "waiting for user") return html`<div>${this.msg.tryagain_processed}</div>`;
    return html`
         <div>
             ${this.result === 0 ? html`<span>${this.msg.tryagain_title_2}</span>` : html`

                     ${this.result === 2 ? this.renderListSuggestions(body) : ""}

                     <div style='margin: 10px;'>
                         <label>${this.result === 2 ? this.msg.tryagain_title_4 : this.msg.tryagain_title_3} </label>

                         <textarea
                         rows="5"
                         placeholder=${this.msg.tryagain_placeholder} 
                         .value="${prompt}"
                         style="width:100%"></textarea >
                         ${this.hasError ? html`<small style="color:red;"> ${this.msg.error_message}</small>` : ""}
                     </div>
                     <br>
                     <div class="buttonGroup">
                         <button @click="${this.handleCancelTryAgain}">${this.msg.btn_cancelar}</button>
                         <button @click="${this.handleConfirmTryAgain}">${this.msg.btn_confirmar}</button>
                     </div>
             `}            
         </div> 
         `;
  }
  renderListSuggestions(str) {
    return html`
        <span>${this.msg.tryagain_title_5}</span>
        <pre style="white-space: pre-line;">
            ${str}
        </pre>
    `;
  }
  closeMe() {
    const det = this.querySelector("details");
    if (det) det.open = false;
  }
  openMe() {
    const detRoot = this.closest("details");
    setTimeout(() => {
      const detInternal2 = this.querySelector("details");
      if (detInternal2) detInternal2.open = true;
    }, 150);
    if (detRoot) detRoot.open = true;
  }
  handleCancelTryAgain() {
    this.notifyCompleteByStatus("error", "");
  }
  handleConfirmTryAgain() {
    let prompt = "";
    if (this.textarea) prompt = this.textarea.value;
    if (prompt === "") {
      this.hasError = true;
      return;
    }
    this.notifyCompleteByStatus("userEvent", "", prompt);
    this.closeMe();
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "modeInternal", _modeInternal_dec, AimTaskResulAddIcaPrompt);
__decorateElement(_init, 5, "hasError", _hasError_dec, AimTaskResulAddIcaPrompt);
__decorateElement(_init, 5, "textarea", _textarea_dec, AimTaskResulAddIcaPrompt);
AimTaskResulAddIcaPrompt = __decorateElement(_init, 0, "AimTaskResulAddIcaPrompt", _AimTaskResulAddIcaPrompt_decorators, AimTaskResulAddIcaPrompt);
__runInitializers(_init, 1, AimTaskResulAddIcaPrompt);
export {
  AimTaskResulAddIcaPrompt
};
