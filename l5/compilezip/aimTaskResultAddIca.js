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
var _modeInternal_dec, _isAccept_dec, _isTryAgain_dec, _withDiff_dec, _textarea_dec, _detailsResult_dec, _codeDiff_dec, _a, _AimTaskResulAddIca_decorators, _init;
import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { AimTaskBase } from "./_100554_aimTaskBase";
import { initCollabShowCodeDiff100554 } from "./_100554_collabShowCodeDiff";
import { getActiveOpServiceIfIsValid } from "./_100554_aimActionAddIca";
const message_pt = {
  title_result: "Ver typescript resultado",
  tryagain_title_1: "M\uFFFDtodos para implementar",
  tryagain_title_2: "Por favor digite as mudan\uFFFDas necess\uFFFDrias abaixo.",
  tryagain_placeholder: "Digite aqui seu prompt.",
  accept_answer: "Deseja gerar o .HTML para o componente ?",
  btn_confirmar: "Confirmar",
  btn_cancelar: "Cancelar",
  btn_yes: "Sim",
  btn_no: "N\uFFFDo"
};
const message_en = {
  title_result: "View TypeScript Result",
  tryagain_title_1: "Methods to implement",
  tryagain_title_2: "Please type the necessary changes below.",
  tryagain_placeholder: "Type your prompt here.",
  accept_answer: "Do you want to generate the .HTML for the component?",
  btn_confirmar: "Confirm",
  btn_cancelar: "Cancel",
  btn_yes: "Yes",
  btn_no: "No"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_AimTaskResulAddIca_decorators = [customElement("aim-task-result-add-ica-100554")];
class AimTaskResulAddIca extends (_a = AimTaskBase, _codeDiff_dec = [query("collab-show-code-diff-100554")], _detailsResult_dec = [query("#details_result")], _textarea_dec = [query("textarea")], _withDiff_dec = [property({ type: Boolean })], _isTryAgain_dec = [property({ type: Boolean, reflect: true })], _isAccept_dec = [property({ type: Boolean, reflect: true })], _modeInternal_dec = [property({ type: String, reflect: true })], _a) {
  constructor() {
    super();
    this.msg = messages["en-us"];
    this.withDiff = __runInitializers(_init, 20, this, false), __runInitializers(_init, 23, this);
    this.isTryAgain = __runInitializers(_init, 24, this, false), __runInitializers(_init, 27, this);
    this.isAccept = __runInitializers(_init, 28, this, false), __runInitializers(_init, 31, this);
    this.result = "";
    this.alreadyInit = false;
    initCollabShowCodeDiff100554();
  }
  onInitializing() {
    if (this.taskChild.mode !== "error" && this.taskChild.mode !== "processed") {
      this.modeInternal = this.taskRoot.mode = this.taskChild.mode = "waiting for user";
    }
    this.openMe();
  }
  setValues() {
    return __async(this, null, function* () {
      if (!this.codeDiff) return;
      this.codeDiff.actualTextResult = this.result.trim();
      this.codeDiff.actualTextDiffModified = this.result.trim();
      const activeOpService = getActiveOpServiceIfIsValid(this);
      if (!activeOpService) return;
      this.withDiff = false;
      if (this.withDiff) this.codeDiff.setAttribute("withdiff", "true");
      if (this.modeInternal === "waiting for user") {
        this.codeDiff.setAttribute("withaccept", "true");
        this.codeDiff.setAttribute("withreject", "true");
        this.codeDiff.setAttribute("withtryagain", "true");
      }
      const value = activeOpService.getEditorValue();
      this.codeDiff.actualTextDiffOriginal = value.trim();
    });
  }
  handleClick(e) {
    var _a2;
    this.setValues();
    if (this.alreadyInit) return;
    (_a2 = this.codeDiff) == null ? void 0 : _a2.init();
    this.alreadyInit = true;
  }
  renderBody(taskRoot, child) {
    const body = child.result || "";
    const { contentTS, contentsAfterTS, contentsBeforeTS } = this.extractBlocks(body);
    this.result = contentTS;
    return html`
        <details @click=${this.handleClick}>
            <summary>${this.msg.title_result}</summary>
            <div style=${!this.isTryAgain && !this.isAccept ? "display: block" : "display:none"}>
                <div>${contentsBeforeTS}</div>
                <div style='margin: 10px;'>
                    <collab-show-code-diff-100554
                        language="typescript"
                        .onAccept=${this.onAccept.bind(this)}
                        .onTryAgain=${this.onTryAgain.bind(this)}
                        .onReject=${this.onReject.bind(this)}      
                    ></collab-show-code-diff-100554>
                </div> 
                <div>${contentsAfterTS}</div>
            </div>
            ${this.isAccept ? this.renderAccept() : ""}
            ${this.isTryAgain ? this.renderTryAgain() : ""}


        </details>
        `;
  }
  renderAccept() {
    return html`
            <div>
                <div>
                    <div>${this.msg.accept_answer}</div>
                    <div style='margin: 10px;'>
                        <div class="buttonGroup">
                            <button @click="${this.handleCancelAcceptHTML}">${this.msg.btn_no}</button>
                            <button @click="${this.handleConfirmAcceptHTML}">${this.msg.btn_yes}</button>
                        </div>
                    </div> 
                </div> 
            </div>
        `;
  }
  renderTryAgain() {
    const methodsToImplements = this.getFcToImplements(this.result);
    return html`
            <div>
                <div>
                    <label>${this.msg.tryagain_title_1}</label>
                    <div class="prompt-suggestion">
                        ${methodsToImplements.map((prompt) => html`
                            <span @click=${this.onSuggestClick}>
                                <span >${prompt}</span>
                            </span>
                        `)}
                    </div>
                    <div>${this.msg.tryagain_title_2}</div>
                    <div style='margin: 10px;'>
                        <div>
                            <label>Prompt:</label>
                            <textarea rows="5" placeholder=${this.msg.tryagain_placeholder} style="width:100%"></textarea>
                        </div>
                        <br>
                        <div class="buttonGroup">
                            <button @click="${this.handleCancelTryAgain}">${this.msg.btn_cancelar}</button>
                            <button @click="${this.handleConfirmTryAgain}">${this.msg.btn_confirmar}</button>
                        </div>
                    </div> 
                </div> 
            </div>
            `;
  }
  onSuggestClick(e) {
    if (!this.textarea) return;
    let text = "";
    const target = e.target;
    const txtEl = target.querySelector("span");
    if (!txtEl) text = target.innerText;
    else text = txtEl.innerText;
    this.textarea.value = "implement  " + text;
  }
  getFcToImplements(result) {
    const lines = result.split("\n");
    const methods = [];
    for (let i = 0; i <= lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      if (line.includes("**implement_here**")) {
        const previLine = i - 1;
        if (i < 0) continue;
        const fcLine = lines[previLine];
        const regex = /^\s*(\w+)\s*\(/;
        const regex2 = /(?:private\s+)?(\b\w+\b)\s*\(/g;
        const match = regex.exec(fcLine);
        let fcName = match ? match[1] : null;
        if (!fcName) {
          const match2 = regex2.exec(fcLine);
          fcName = match2 ? match2[1] : null;
        }
        if (fcName) methods.push(fcName);
      }
    }
    ;
    return methods;
  }
  closeMe() {
    const det = this.querySelector("details");
    if (det) det.open = false;
  }
  openMe() {
    const det = this.closest("details");
    if (det) det.open = true;
  }
  handleCancelTryAgain() {
    this.isTryAgain = false;
  }
  handleConfirmTryAgain() {
    let prompt = "";
    if (this.textarea) prompt = this.textarea.value;
    this.isTryAgain = false;
    this.notifyCompleteByStatus("userEvent", this.result, prompt);
    this.closeMe();
  }
  handleCancelAcceptHTML() {
    this.notifyCompleteByStatus("ok", this.result);
    this.modeInternal = "processed";
    this.isAccept = false;
    this.closeMe();
  }
  handleConfirmAcceptHTML() {
    this.isAccept = false;
    this.notifyCompleteByStatus("userEvent", this.result, "[html]");
  }
  onAccept() {
    if (this.detailsResult) this.detailsResult.open = false;
    this.isAccept = true;
  }
  onReject() {
    this.notifyCompleteByStatus("rejected", "");
    this.modeInternal = "processed";
    this.closeMe();
  }
  onTryAgain(e) {
    if (this.detailsResult) this.detailsResult.open = false;
    this.isTryAgain = true;
  }
  extractBlocks(src) {
    const regex = new RegExp("^(.*?)```typescript(.*)```(.*)", "s");
    const matches = src.match(regex);
    let contentTS = "";
    let contentsBeforeTS = "";
    let contentsAfterTS = "";
    if (matches) {
      contentsBeforeTS = matches[1] || "";
      contentTS = matches[2] || "";
      contentsAfterTS = matches[3] || "";
    }
    return { contentTS, contentsAfterTS, contentsBeforeTS };
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "codeDiff", _codeDiff_dec, AimTaskResulAddIca);
__decorateElement(_init, 5, "detailsResult", _detailsResult_dec, AimTaskResulAddIca);
__decorateElement(_init, 5, "textarea", _textarea_dec, AimTaskResulAddIca);
__decorateElement(_init, 5, "withDiff", _withDiff_dec, AimTaskResulAddIca);
__decorateElement(_init, 5, "isTryAgain", _isTryAgain_dec, AimTaskResulAddIca);
__decorateElement(_init, 5, "isAccept", _isAccept_dec, AimTaskResulAddIca);
__decorateElement(_init, 5, "modeInternal", _modeInternal_dec, AimTaskResulAddIca);
AimTaskResulAddIca = __decorateElement(_init, 0, "AimTaskResulAddIca", _AimTaskResulAddIca_decorators, AimTaskResulAddIca);
__runInitializers(_init, 1, AimTaskResulAddIca);
export {
  AimTaskResulAddIca
};
