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
var _inputDiff_dec, _c1_dec, _coping_dec, _withDiff_dec, _withTryAgain_dec, _withReject_dec, _withAccept_dec, _withCopy_dec, _language_dec, _msize_dec, _a, _CollabShowCodeDiff_decorators, _init;
import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import {
  collab_check,
  collab_copy,
  collab_repeat,
  collab_thumbs_down,
  collab_thumbs_up
} from "./_100554_collabIcons";
import { CollabLitElement } from "./_100554_collabLitElement";
function initCollabShowCodeDiff100554() {
  return true;
}
const message_pt = {
  diff: "Com Diferen\uFFFDa",
  reject: "Rejeitar",
  tryAgain: "Tentar Novamente",
  accept: "Aceitar",
  copy: "Copiar",
  copied: "Copiado"
};
const message_en = {
  diff: "With Diff",
  reject: "Reject",
  tryAgain: "Try Again",
  accept: "Accept",
  copy: "Copy",
  copied: "Copied"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_CollabShowCodeDiff_decorators = [customElement("collab-show-code-diff-100554")];
let _CollabShowCodeDiff = class _CollabShowCodeDiff extends (_a = CollabLitElement, _msize_dec = [property({ type: String })], _language_dec = [property({ type: String, reflect: true })], _withCopy_dec = [property({ type: Boolean, reflect: true })], _withAccept_dec = [property({ type: Boolean, reflect: true })], _withReject_dec = [property({ type: Boolean, reflect: true })], _withTryAgain_dec = [property({ type: Boolean, reflect: true })], _withDiff_dec = [property({ type: Boolean, reflect: true })], _coping_dec = [property({ type: Boolean })], _c1_dec = [query("mls-editor-100529")], _inputDiff_dec = [query("#diff_check")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en-us"];
    this.msize = __runInitializers(_init, 8, this, "400.00,420.00,106.00,0"), __runInitializers(_init, 11, this);
    this.language = __runInitializers(_init, 12, this, "typescript"), __runInitializers(_init, 15, this);
    this.withCopy = __runInitializers(_init, 16, this, true), __runInitializers(_init, 19, this);
    this.withAccept = __runInitializers(_init, 20, this, false), __runInitializers(_init, 23, this);
    this.withReject = __runInitializers(_init, 24, this, false), __runInitializers(_init, 27, this);
    this.withTryAgain = __runInitializers(_init, 28, this, false), __runInitializers(_init, 31, this);
    this.withDiff = __runInitializers(_init, 32, this, false), __runInitializers(_init, 35, this);
    this.coping = __runInitializers(_init, 36, this, false), __runInitializers(_init, 39, this);
    this.onAccept = () => {
      console.info("not implement");
    };
    this.onReject = () => {
      console.info("not implement");
    };
    this.onTryAgain = () => {
      console.info("not implement");
    };
    this.actualEditor = "result";
    this.actualTextDiffOriginal = "";
    this.actualTextDiffModified = "";
    this.actualTextResult = "";
  }
  init() {
    if (this.actualEditor === "diff") this.setDiffValue(this.actualTextDiffOriginal, this.actualTextDiffModified);
    else this.setResultValue(this.actualTextResult);
  }
  createEditorDiff() {
    var _a2;
    if (!this.c1 || this._ed1Diff) return;
    if (this._ed1Result) {
      this._ed1Result.dispose();
      (_a2 = this.modelResult) == null ? void 0 : _a2.dispose();
      this._ed1Result = void 0;
      this.modelResult = void 0;
    }
    const opt = {
      automaticLayout: true,
      renderSideBySide: false,
      readOnly: true
    };
    this._ed1Diff = monaco.editor.createDiffEditor(this.c1, opt);
    this.c1["mlsEditor"] = this._ed1Diff;
  }
  createEditorResult() {
    var _a2, _b;
    if (!this.c1 || this._ed1Result) return;
    if (this._ed1Diff) {
      this._ed1Diff.dispose();
      (_a2 = this.modelDiffModified) == null ? void 0 : _a2.dispose();
      (_b = this.modelDiffOriginal) == null ? void 0 : _b.dispose();
      this._ed1Diff = void 0;
      this.modelDiffModified = void 0;
      this.modelDiffOriginal = void 0;
    }
    const opt = {
      automaticLayout: true,
      readOnly: true
    };
    this._ed1Result = monaco.editor.create(this.c1, opt);
    this.c1["mlsEditor"] = this._ed1Result;
  }
  createModelDiff(editorType, srcOriginal, srcModified) {
    if (!this.modelDiffModified) this.modelDiffModified = monaco.editor.createModel(srcModified, editorType);
    else this.modelDiffModified.setValue(srcModified);
    if (!this.modelDiffOriginal) this.modelDiffOriginal = monaco.editor.createModel(srcOriginal, editorType);
    else this.modelDiffOriginal.setValue(srcOriginal);
  }
  createModelResult(editorType, src) {
    if (!this.modelResult) this.modelResult = monaco.editor.createModel(src, editorType);
    else this.modelResult.setValue(src);
  }
  setDiffValue(srcOriginal, srcModified) {
    this.createEditorDiff();
    this.createModelDiff(this.language, srcOriginal, srcModified);
    if (!this._ed1Diff || !this.modelDiffOriginal || !this.modelDiffModified) return;
    this._ed1Diff.setModel({
      original: this.modelDiffOriginal,
      modified: this.modelDiffModified
    });
    this.actualTextDiffModified = srcModified;
    this.actualTextDiffOriginal = srcOriginal;
  }
  setResultValue(src) {
    this.createEditorResult();
    this.createModelResult(this.language, src);
    if (!this._ed1Result || !this.modelResult) return;
    this._ed1Result.setModel(this.modelResult);
    this.actualTextResult = src;
  }
  setMsizeEditor() {
    var _a2;
    (_a2 = this.c1) == null ? void 0 : _a2.setAttribute("msize", this.msize);
  }
  onCopyClick() {
    var _a2, _b;
    this.coping = true;
    const value = this.actualEditor && this.actualEditor === "result" ? (_a2 = this.modelResult) == null ? void 0 : _a2.getValue() : (_b = this.modelDiffModified) == null ? void 0 : _b.getValue();
    navigator.clipboard.writeText(value || "");
    setTimeout(() => {
      this.coping = false;
    }, 3e3);
  }
  onAcceptClick() {
    if (this.onAccept && typeof this.onAccept === "function") {
      this.onAccept();
    }
  }
  onRejectClick() {
    if (this.onReject && typeof this.onReject === "function") {
      this.onReject();
    }
  }
  onTryAgainClick() {
    if (this.onTryAgain && typeof this.onTryAgain === "function") {
      this.onTryAgain();
    }
  }
  getCssMonaco() {
    return __async(this, null, function* () {
      var _a2;
      const cssPath = `../../../monaco/${(_a2 = window.latest) == null ? void 0 : _a2.monaco}/monaco.css`;
      const response = yield fetch(cssPath);
      const cssText = yield response.text();
      return cssText;
    });
  }
  loadCSS() {
    return __async(this, null, function* () {
      var _a2;
      if (this.styleElement) return;
      let cssText = "";
      if (_CollabShowCodeDiff.monaco_css) cssText = _CollabShowCodeDiff.monaco_css;
      else if (_CollabShowCodeDiff.inLoadingCss) {
        cssText = yield _CollabShowCodeDiff.loadingPromise;
      } else {
        _CollabShowCodeDiff.inLoadingCss = true;
        _CollabShowCodeDiff.loadingPromise = this.getCssMonaco();
        cssText = yield _CollabShowCodeDiff.loadingPromise;
        _CollabShowCodeDiff.monaco_css = cssText;
        _CollabShowCodeDiff.inLoadingCss = false;
      }
      if (!cssText) return;
      this.styleElement = document.createElement("style");
      this.styleElement.innerHTML = _CollabShowCodeDiff.monaco_css;
      (_a2 = this.shadowRoot) == null ? void 0 : _a2.appendChild(this.styleElement);
    });
  }
  renderWithCopy() {
    return html`
            <div @click=${this.onCopyClick} class="action-item" style="display:${this.coping ? "none" : "flex"}">
                ${collab_copy}
                <span>${this.msg.copy}</span>
            </div>
            <div class="action-item copied" style="display:${this.coping ? "flex" : "none"}">
                ${collab_check}
                <span>${this.msg.copied}</span>
            </div>
            `;
  }
  renderWithAccept() {
    return html`
            <div @click=${this.onAcceptClick} class="action-item ${!this.withAccept ? "disabled" : ""}">
                ${collab_thumbs_up}
                <span>${this.msg.accept}</span>
            </div>
        `;
  }
  renderTryAgain() {
    return html`
            <div @click=${this.onTryAgainClick} class="action-item ${!this.withTryAgain ? "disabled" : ""}">
                ${collab_repeat}
                <span>${this.msg.tryAgain}</span>
            </div>
        `;
  }
  renderReject() {
    return html`
            <div @click=${this.onRejectClick} class="action-item ${!this.withReject ? "disabled" : ""}">
                ${collab_thumbs_down}
                <span>${this.msg.reject}</span>
            </div>
        `;
  }
  handleChangeDiff() {
    if (!this.inputDiff) return;
    if (this.inputDiff.checked) {
      this.actualEditor = "diff";
      this.createEditorDiff();
      this.setDiffValue(this.actualTextDiffOriginal, this.actualTextDiffModified);
    } else {
      this.actualEditor = "result";
      this.createEditorResult();
      this.setResultValue(this.actualTextResult);
    }
  }
  renderShowDiff() {
    return html`
            <div class="${!this.withDiff ? "disabled" : ""}">
                <input @change=${this.handleChangeDiff} id="diff_check" type="checkbox"></input>
                <label for="diff_check">${this.msg.diff}<label>
            </div>
        `;
  }
  firstUpdated() {
    this.loadCSS();
    this.dispatchEvent(new CustomEvent("show-diff-ready"));
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            <div class="actions">
                    <span class="language">${this.language}</span>
                
                    <div class="actions-list">
                        ${this.renderShowDiff()}
                        ${this.renderWithAccept()}
                        ${this.renderReject()}
                        ${this.renderTryAgain()}
                        ${this.withCopy ? this.renderWithCopy() : ""}
                    </div>
            </div>

            <mls-editor-100529 style="display: block;height:600px;" ismls2="true"></mls-editor-100529>
    `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "language", _language_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "withCopy", _withCopy_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "withAccept", _withAccept_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "withReject", _withReject_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "withTryAgain", _withTryAgain_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "withDiff", _withDiff_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "coping", _coping_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "c1", _c1_dec, _CollabShowCodeDiff);
__decorateElement(_init, 5, "inputDiff", _inputDiff_dec, _CollabShowCodeDiff);
_CollabShowCodeDiff = __decorateElement(_init, 0, "CollabShowCodeDiff", _CollabShowCodeDiff_decorators, _CollabShowCodeDiff);
_CollabShowCodeDiff.monaco_css = "";
_CollabShowCodeDiff.inLoadingCss = false;
_CollabShowCodeDiff.styles = css`
      :host{
        display:block;
      }
      .actions{
        height:30px; 
        background: #b4b4b4; 
        display:flex; 
        align-items:center;
        padding:0 1rem; 
        color:#fff;
        .actions-list{
          display:flex;
          gap:1rem;
        }
      }
      .language {
        flex:1;
      }
      
      .action-item{

        user-select: none;
        display:flex; 
        align-items:center;
        justify-content: center;
        cursor:pointer;
        min-width: 50px;
      }
      .disabled {
        cursor:default;
        text-decoration: line-through;
        pointer-events: none;
      }
      .copied{
        cursor:default;
        pointer-events: none;
      }
    `;
__runInitializers(_init, 1, _CollabShowCodeDiff);
let CollabShowCodeDiff = _CollabShowCodeDiff;
export {
  CollabShowCodeDiff,
  initCollabShowCodeDiff100554
};
