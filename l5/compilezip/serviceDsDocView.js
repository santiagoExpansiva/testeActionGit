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
var _docTitle_dec, _editor_dec, _doc_dec, _a, _ServiceDsDocView100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initEditorQuillDocs } from "./_100554_editorQuillDocs";
import { collab_plus, collab_trash } from "./_100554_collabIcons";
const message_pt = {
  noDocumentationSelected: "Nenhum documento selecionado",
  addChild: "Adicionar filho",
  removeThis: "Remover este"
};
const message_en = {
  noDocumentationSelected: "No documentation selected",
  addChild: "Add child",
  removeThis: "Remove this"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsDocView100554_decorators = [customElement("service-ds-doc-view-100554")];
class ServiceDsDocView100554 extends (_a = ServiceBase, _doc_dec = [property()], _editor_dec = [query("editor-quill-docs-100554")], _docTitle_dec = [query(".title")], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf06e",
      state: "foreground",
      tooltip: "Documentation View",
      visible: false,
      position: "right",
      tags: ["ds_docs"],
      widget: "_100554_serviceDsDocView",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opView") return true;
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "View",
      actions: {},
      icons: {},
      actionDefault: "opView",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    initEditorQuillDocs();
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible && reinit) {
      }
    });
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSDocPageClicked"], (ev) => {
      this.onDSDocPageClicked(ev);
    });
    mls.events.addEventListener([3], ["DSDocSelected"], (ev) => {
      this.showNav2Item(true);
      this.openMe();
    });
    mls.events.addEventListener([3], ["DSDocUnSelected"], (ev) => {
      this.showNav2Item(false);
    });
  }
  onDSDocPageClicked(ev) {
    return __async(this, null, function* () {
      if (!ev.desc) return;
      this.doc = JSON.parse(ev.desc);
      if (!this.editor) {
        yield this.waitForEditorLoad();
      }
      if (this.editor && this.doc) this.editor.text = this.doc.content;
    });
  }
  waitForEditorLoad() {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        if (this.editor) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1e3);
      setTimeout(() => {
        clearInterval(intervalId);
        reject("Editor not found");
      }, 5e3);
    });
  }
  fireComunication(op) {
    this.setError("");
    if (!this.doc) {
      this.setError("No documentation selected.");
      return;
    }
    if (op === "Delete" && this.doc.hasChildren) {
      this.setError("Please, remove the subitens first.");
      return;
    }
    if (!this.docTitle || !this.editor) return;
    this.doc.title = this.docTitle.innerText;
    this.doc.content = this.editor.text;
    this.doc.op = op;
    const json = JSON.stringify(this.doc);
    mls.events.fire([3], ["DSDocPageChanged"], json);
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            ${!this.doc ? html`
                <h4>${this.msg.noDocumentationSelected}!</h4>
                ` : html`
                <div style="padding: 1rem;">
                    <div style="display:flex; gap:1rem; justify-content: center;">
                        <button class="btn-docs" @click=${() => {
      this.fireComunication("Add");
    }}>
                            <span>${this.msg.addChild}</span>
                            ${collab_plus}
                        </button>
                        <button class="btn-docs" @click=${() => {
      this.fireComunication("Delete");
    }}>
                            <span>${this.msg.removeThis}</span>
                            ${collab_trash}
                        </button>
                    </div>
                    <div style="width:100%; display: flex; align-items: center;">
                        <h1 contenteditable class="title" @blur=${() => {
      this.fireComunication("Update");
    }}>${this.doc.title}</h1>
                    </div>
                    <editor-quill-docs-100554 opened="false" .cbFinishEdit=${() => {
      this.fireComunication("Change");
    }}></editor-quill-docs-100554>
                </div>
            `}            
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "doc", _doc_dec, ServiceDsDocView100554);
__decorateElement(_init, 5, "editor", _editor_dec, ServiceDsDocView100554);
__decorateElement(_init, 5, "docTitle", _docTitle_dec, ServiceDsDocView100554);
ServiceDsDocView100554 = __decorateElement(_init, 0, "ServiceDsDocView100554", _ServiceDsDocView100554_decorators, ServiceDsDocView100554);
ServiceDsDocView100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsDocView100554);
export {
  ServiceDsDocView100554
};
