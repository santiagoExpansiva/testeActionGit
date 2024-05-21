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
var _modeInternal_dec, _isTryAgain_dec, _withDiff_dec, _textarea_dec, _detailsResult_dec, _codeDiff_dec, _a, _AimTaskResultLess_decorators, _init;
import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { AimTaskBase } from "./_100554_aimTaskBase";
import { initCollabShowCodeDiff100554 } from "./_100554_collabShowCodeDiff";
import { getActiveOpServiceIfIsValid, isValidRef } from "./_100554_aimActionStyleNew";
const message_pt = {
  title: "View Less Result",
  p1: "Por favor digite as mudan\uFFFDas necess\uFFFDrias abaixo.",
  cancel: "Cancelar",
  confirm: "Confirmar"
};
const message_en = {
  title: "Ver Resultado do Less",
  p1: "Por favor, digite as mudan\uFFFDas necess\uFFFDrias abaixo.",
  cancel: "Cancelar",
  confirm: "Confirmar"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_AimTaskResultLess_decorators = [customElement("aim-task-result-less-100554")];
class AimTaskResultLess extends (_a = AimTaskBase, _codeDiff_dec = [query("collab-show-code-diff-100554")], _detailsResult_dec = [query("#details_result")], _textarea_dec = [query("textarea")], _withDiff_dec = [property({ type: Boolean })], _isTryAgain_dec = [property({ type: Boolean, reflect: true })], _modeInternal_dec = [property({ type: String, reflect: true })], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.withDiff = __runInitializers(_init, 20, this, false), __runInitializers(_init, 23, this);
    this.isTryAgain = __runInitializers(_init, 24, this, false), __runInitializers(_init, 27, this);
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
      const isValid = isValidRef(this.taskRoot, activeOpService);
      this.withDiff = isValid;
      if (this.withDiff) this.codeDiff.setAttribute("withdiff", "true");
      if (this.modeInternal === "waiting for user") {
        this.codeDiff.setAttribute("withaccept", "true");
        this.codeDiff.setAttribute("withreject", "true");
        this.codeDiff.setAttribute("withtryagain", "true");
      }
      const value = activeOpService.getEditorComponentSource();
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
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    const body = child._tempResult || "";
    const { contentLess, contentsAfterLess, contentsBeforeLess } = this.extractBlocks(body);
    this.result = contentLess;
    return html`
        <details @click=${this.handleClick}>
            <summary>${this.msg.title}</summary>
            <div style=${!this.isTryAgain ? "display: block" : "display:none"}>
                <div>${contentsBeforeLess}</div>
                <div style='margin: 10px;'>
                    <collab-show-code-diff-100554
                        language="less"
                        .onAccept=${this.onAccept.bind(this)}
                        .onTryAgain=${this.onTryAgain.bind(this)}
                        .onReject=${this.onReject.bind(this)}
                        ${this.withDiff ? "withdiff" : ""}      
                    ></collab-show-code-diff-100554>
                </div> 
                <div>${contentsAfterLess}</div>
            </div>

            <div style=${this.isTryAgain ? "display: block" : "display:none"}>
                <div>
                    <div>${this.msg.p1}</div>
                    <div style='margin: 10px;'>
                        <div>
                            <label>Prompt:</label>
                            <textarea rows="5" placeholder="Digite aqui seu prompt" style="width:100%"></textarea>
                        </div>
                        <br>
                        <div class="buttonGroup">
                            <button @click="${this.handleCancelTryAgain}">${this.msg.cancel}</button>
                            <button @click="${this.handleConfirmTryAgain}">${this.msg.confirm}</button>
                        </div>
                    </div> 
                </div> 
            </div>
        </details>
        `;
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
  onAccept() {
    this.notifyCompleteByStatus("ok", this.result);
    this.modeInternal = "processed";
    this.closeMe();
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
    const regex = new RegExp("^(.*?)```less(.*)```(.*)", "s");
    const matches = src.match(regex);
    let contentLess = "";
    let contentsBeforeLess = "";
    let contentsAfterLess = "";
    if (matches) {
      contentsBeforeLess = matches[1] || "";
      contentLess = matches[2] || "";
      contentsAfterLess = matches[3] || "";
    }
    return { contentLess, contentsAfterLess, contentsBeforeLess };
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "codeDiff", _codeDiff_dec, AimTaskResultLess);
__decorateElement(_init, 5, "detailsResult", _detailsResult_dec, AimTaskResultLess);
__decorateElement(_init, 5, "textarea", _textarea_dec, AimTaskResultLess);
__decorateElement(_init, 5, "withDiff", _withDiff_dec, AimTaskResultLess);
__decorateElement(_init, 5, "isTryAgain", _isTryAgain_dec, AimTaskResultLess);
__decorateElement(_init, 5, "modeInternal", _modeInternal_dec, AimTaskResultLess);
AimTaskResultLess = __decorateElement(_init, 0, "AimTaskResultLess", _AimTaskResultLess_decorators, AimTaskResultLess);
__runInitializers(_init, 1, AimTaskResultLess);
export {
  AimTaskResultLess
};
