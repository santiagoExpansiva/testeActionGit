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
var _codeBlock_dec, _accepting_dec, _coping_dec, _withAccept_dec, _withCopy_dec, _language_dec, _a, _CollabShowCodeSnippet100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { collab_check, collab_copy, collab_double_check } from "./_100554_collabIcons";
import { CollabLitElement } from "./_100554_collabLitElement";
function initCollabShowCodeSnippet100554() {
  return true;
}
const message_pt = {
  copy: "Copiar",
  copied: "Copiado",
  accept: "Aceitar",
  accepted: "Aceito"
};
const message_en = {
  copy: "Copy",
  copied: "Copied",
  accept: "Accept",
  accepted: "Accepted"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_CollabShowCodeSnippet100554_decorators = [customElement("collab-show-code-snippet-100554")];
class CollabShowCodeSnippet100554 extends (_a = CollabLitElement, _language_dec = [property({ type: String, reflect: true })], _withCopy_dec = [property({ type: Boolean, reflect: true })], _withAccept_dec = [property({ type: Boolean, reflect: true })], _coping_dec = [property({ type: Boolean })], _accepting_dec = [property({ type: Boolean })], _codeBlock_dec = [query(".code")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en-us"];
    this.language = __runInitializers(_init, 8, this, "typescript"), __runInitializers(_init, 11, this);
    this.withCopy = __runInitializers(_init, 12, this, true), __runInitializers(_init, 15, this);
    this.withAccept = __runInitializers(_init, 16, this, false), __runInitializers(_init, 19, this);
    this.coping = __runInitializers(_init, 20, this, false), __runInitializers(_init, 23, this);
    this.accepting = __runInitializers(_init, 24, this, false), __runInitializers(_init, 27, this);
    this.text = ``;
    this.onAccept = () => {
      console.info("not implement");
    };
  }
  set textIn(text) {
    this.text = text;
    if (!this.codeBlock) return;
    this.waitForLoadIfNeeded(() => {
      this.setCode();
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("language")) {
      if (!window.hljsLoaded) {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
        script.onload = () => {
          window.hljsLoaded = true;
          this.setCode();
        };
        document.head.appendChild(script);
      } else {
        this.setCode();
      }
    }
  }
  waitForLoadIfNeeded(callback, timeout = 1e4, interval = 100) {
    let elapsedTime = 0;
    const checkVariable = () => {
      if (window.hljsLoaded) {
        callback();
      } else if (elapsedTime < timeout) {
        elapsedTime += interval;
        setTimeout(checkVariable, interval);
      } else {
        console.error(`Error on load highlight.js. please tyy again`);
      }
    };
    checkVariable();
  }
  setCode() {
    if (!this.codeBlock) return;
    this.codeBlock.innerHTML = "";
    this.codeBlock.removeAttribute("data-highlighted");
    this.codeBlock.classList.add("language-" + this.language);
    const res = window.hljs.highlight(this.text, { language: this.language });
    window.hljs.highlightElement(this.codeBlock, { language: this.language });
    this.codeBlock.innerHTML = res.value;
  }
  onCopyClick() {
    this.coping = true;
    navigator.clipboard.writeText(this.text);
    setTimeout(() => {
      this.coping = false;
    }, 3e3);
  }
  onAcceptClick() {
    if (this.onAccept && typeof this.onAccept === "function") {
      this.accepting = true;
      this.onAccept();
      setTimeout(() => {
        this.accepting = false;
      }, 3e3);
    }
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
       <div class="actions">
            <span class="language">${this.language}</span>
            <div class="actions-list">
             ${this.withAccept ? this.renderWithAccept() : ""}
             ${this.withCopy ? this.renderWithCopy() : ""}
            </div>
       </div>

       <pre><code class="code"></code></pre>
    `;
  }
  renderWithCopy() {
    return html`
      <div @click=${this.onCopyClick} class="action-item" style="display:${this.coping ? "none" : "flex"}">
        <div>
          ${collab_copy}
        </div>
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
      <div @click=${this.onAcceptClick} class="action-item" style="display:${this.accepting ? "none" : "flex"}">
        <div>
          ${collab_check}
        </div>
        <span>${this.msg.accept}</span>
    </div>
    <div class="action-item accepted" style="display:${this.accepting ? "flex" : "none"}">
      ${collab_double_check}
      <span>${this.msg.accepted}Accepted</span>
    </div>
    `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "language", _language_dec, CollabShowCodeSnippet100554);
__decorateElement(_init, 5, "withCopy", _withCopy_dec, CollabShowCodeSnippet100554);
__decorateElement(_init, 5, "withAccept", _withAccept_dec, CollabShowCodeSnippet100554);
__decorateElement(_init, 5, "coping", _coping_dec, CollabShowCodeSnippet100554);
__decorateElement(_init, 5, "accepting", _accepting_dec, CollabShowCodeSnippet100554);
__decorateElement(_init, 5, "codeBlock", _codeBlock_dec, CollabShowCodeSnippet100554);
CollabShowCodeSnippet100554 = __decorateElement(_init, 0, "CollabShowCodeSnippet100554", _CollabShowCodeSnippet100554_decorators, CollabShowCodeSnippet100554);
CollabShowCodeSnippet100554.styles = css`
    pre code.hljs {
        display: block;
        overflow-x: auto;
        padding: 1em
      }
      code.hljs {
        padding: 3px 5px
      }
      /*
      * Visual Studio 2015 dark style
      * Author: Nicolas LLOBERA <nllobera@gmail.com>
      */
      .hljs {
        background: #1E1E1E;
        color: #DCDCDC
      }
      .hljs-keyword,
      .hljs-literal,
      .hljs-symbol,
      .hljs-name {
        color: #569CD6
      }
      .hljs-link {
        color: #569CD6;
        text-decoration: underline
      }
      .hljs-built_in,
      .hljs-type {
        color: #4EC9B0
      }
      .hljs-number,
      .hljs-class {
        color: #B8D7A3
      }
      .hljs-string,
      .hljs-meta .hljs-string {
        color: #D69D85
      }
      .hljs-regexp,
      .hljs-template-tag {
        color: #9A5334
      }
      .hljs-subst,
      .hljs-function,
      .hljs-title,
      .hljs-params,
      .hljs-formula {
        color: #DCDCDC
      }
      .hljs-comment,
      .hljs-quote {
        color: #57A64A;
        font-style: italic
      }
      .hljs-doctag {
        color: #608B4E
      }
      .hljs-meta,
      .hljs-meta .hljs-keyword,
      .hljs-tag {
        color: #9B9B9B
      }
      .hljs-variable,
      .hljs-template-variable {
        color: #BD63C5
      }
      .hljs-attr,
      .hljs-attribute {
        color: #9CDCFE
      }
      .hljs-section {
        color: gold
      }
      .hljs-emphasis {
        font-style: italic
      }
      .hljs-strong {
        font-weight: bold
      }
      /*.hljs-code {
        font-family:'Monospace';
      }*/
      .hljs-bullet,
      .hljs-selector-tag,
      .hljs-selector-id,
      .hljs-selector-class,
      .hljs-selector-attr,
      .hljs-selector-pseudo {
        color: #D7BA7D
      }
      .hljs-addition {
        background-color: #144212;
        display: inline-block;
        width: 100%
      }
      .hljs-deletion {
        background-color: #600;
        display: inline-block;
        width: 100%
      }
      pre {
        margin: 0;
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
        display:flex; 
        align-items:center;
        justify-content: center;
        cursor:pointer;
        min-width: 70px;
      }
      .accepted{
        cursor:default;

      }
      .copied {
        cursor:default;
      }
    `;
__runInitializers(_init, 1, CollabShowCodeSnippet100554);
export {
  CollabShowCodeSnippet100554,
  initCollabShowCodeSnippet100554
};
