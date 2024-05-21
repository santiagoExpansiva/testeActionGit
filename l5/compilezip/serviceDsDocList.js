var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
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
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
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
var _containerMain_dec, _loading_dec, _docIdSelected_dec, _list_dec, _a, _ServiceDsDocList100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { collab_plus, collab_chevron_right } from "./_100554_collabIcons";
const message_pt = {
  loading: "Carregando...",
  add: "Adicionar"
};
const message_en = {
  loading: "Loading...",
  add: "Add"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsDocList100554_decorators = [customElement("service-ds-doc-list-100554")];
let _ServiceDsDocList100554 = class _ServiceDsDocList100554 extends (_a = ServiceBase, _list_dec = [property()], _docIdSelected_dec = [property()], _loading_dec = [property({ type: Boolean })], _containerMain_dec = [query(".list-docs-container")], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.list = __runInitializers(_init, 8, this, []), __runInitializers(_init, 11, this);
    this.docIdSelected = __runInitializers(_init, 12, this, 0), __runInitializers(_init, 15, this);
    this.loading = __runInitializers(_init, 16, this, true), __runInitializers(_init, 19, this);
    this.details = {
      icon: "&#xf02d",
      state: "foreground",
      tooltip: "Documentation List",
      visible: true,
      position: "left",
      tags: ["ds_docs"],
      widget: "_100554_serviceDsDocList",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opList") return true;
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "List",
      actions: {},
      icons: {},
      actionDefault: "opList",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible) mls.events.fire([3], ["DSDocSelected"], "Doc Selected", 1e3);
      else mls.events.fire([3], ["DSDocUnSelected"], "Doc UnSelected", 0);
      if (reinit) {
        const { project } = mls.actual[5];
        const { mode } = mls.actual[3];
        if (this.lastProject !== project || this.lastDsIndex !== mode) {
          this.getState();
        }
      }
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      var _a2;
      __superGet(_ServiceDsDocList100554.prototype, this, "connectedCallback").call(this);
      yield this.getState();
      this.loading = false;
      const firstItem = (_a2 = this.list[0].item) == null ? void 0 : _a2.id;
      if (firstItem) this.selectDoc(firstItem);
    });
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSDocPageChanged"], (ev) => {
      this.onDocPageChanged(ev);
    });
  }
  getState() {
    return __async(this, null, function* () {
      const allDocs = yield this.getListDocs();
      this.list = this.createFolderStructure(allDocs);
    });
  }
  getListDocs() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) return [];
      const dss = mls.l5.ds.list(project);
      this.lastDsIndex = mode;
      this.lastProject = project;
      const dsInfo = dss[mode];
      if (!dsInfo) return [];
      this.dsInstance = mls.l3.getDSInstance(project, mode);
      yield this.dsInstance.init();
      this.list = [];
      const allItems = [];
      Object.keys(this.dsInstance.docs.list).forEach((doc) => {
        if (!this.dsInstance) return;
        allItems.push(this.dsInstance.docs.list[doc]);
      });
      return allItems;
    });
  }
  createFolderStructure(arr) {
    const map = /* @__PURE__ */ new Map();
    const root = {
      id: 0,
      item: void 0,
      children: []
    };
    map.set(0, root);
    for (const obj of arr) {
      const { id, parentID } = obj;
      const folder = {
        id,
        item: obj,
        children: []
      };
      if (map.has(parentID)) {
        const parentFolder = map.get(parentID);
        parentFolder.children.push(folder);
        map.set(id, folder);
      }
    }
    return root.children;
  }
  onDocPageChanged(ev) {
    if (!ev.desc) return;
    const st = JSON.parse(ev.desc);
    if (st.op === "Add") this.addDoc(st.id);
    if (st.op === "Change") this.changedMe(st.id, st.content);
    if (st.op === "Update") this.updateDoc(st.id, st.parentID, st.title);
    else if (st.op === "Delete") this.removeDoc(st.id);
  }
  addDoc(parentID) {
    return __async(this, null, function* () {
      if (!this.dsInstance) return;
      const idx = yield this.dsInstance.docs.add(parentID, "NewDocument", "Describe your new documentation here");
      yield this.getState();
      this.selectDoc(idx);
    });
  }
  changedMe(id, content) {
    return __async(this, null, function* () {
      if (!this.dsInstance) return;
      const doc = this.dsInstance.docs.list[id];
      if (!doc) return;
      doc.setContent(content);
    });
  }
  updateDoc(id, parentID, title) {
    return __async(this, null, function* () {
      if (!this.dsInstance) return;
      yield this.dsInstance.docs.update(id, parentID, title, "");
      this.getState();
    });
  }
  removeDoc(id) {
    return __async(this, null, function* () {
      if (!this.dsInstance) return;
      if (!this.containerMain) return;
      const el = this.containerMain.querySelector(`details[docId = "${id}"]`);
      if (!el) return;
      const doc = this.dsInstance.docs.list[id];
      let nextEl = el.nextElementSibling || el.closest(`details[docId = "${doc.parentID}"]`);
      nextEl = nextEl || el.previousElementSibling;
      const nextElId = nextEl == null ? void 0 : nextEl.getAttribute("docId");
      yield this.dsInstance.docs.remove(id);
      yield this.getState();
      if (nextElId) this.selectDoc(+nextElId);
    });
  }
  addNewDoc() {
    return __async(this, null, function* () {
      let selectedParentIndex = 0;
      this.addDoc(selectedParentIndex);
    });
  }
  selectDoc(id) {
    setTimeout(() => {
      let docToSelect;
      if (!this.containerMain) return;
      docToSelect = this.containerMain.querySelector(`details[docId = "${id}"]`);
      if (docToSelect) docToSelect.click();
    }, 100);
  }
  onDetailsClick(doc, e) {
    var _a2;
    this.docIdSelected = doc.id;
    const target = e.target;
    const details = target.closest("details");
    const summary = details.querySelector("summary");
    const isSelected = summary.classList.contains("selected");
    e.stopPropagation();
    if (details.open && !isSelected) e.preventDefault();
    if (isSelected) {
      return;
    }
    this.seeDocumentation(doc.item, (_a2 = doc.item) == null ? void 0 : _a2.title, doc.children.length > 0);
  }
  seeDocumentation(item, title, hasChildren) {
    return __async(this, null, function* () {
      if (!item || !title) return;
      const text = yield item.getContent();
      const obj = {
        op: "Open",
        title,
        content: text,
        id: item.id,
        parentID: item.parentID,
        hasChildren
      };
      mls.events.fire([3], ["DSDocPageClicked"], JSON.stringify(obj));
    });
  }
  renderList(items) {
    return items.map((doc) => {
      var _a2, _b;
      return html`
            <details
                class="${doc.children.length > 0 ? "" : "nochildren"}"
                docId="${doc.id.toString()}"
                parentId="${(_a2 = doc.item) == null ? void 0 : _a2.parentID.toString()}"
                @click=${(e) => {
        this.onDetailsClick(doc, e);
      }}
            >
                <summary class= "${doc.id === this.docIdSelected ? "selected" : ""}" >
                    <div>
                        <p>${(_b = doc.item) == null ? void 0 : _b.title}</p>
                        <span></span>
                        ${collab_chevron_right}
                    </div>
                </summary>
                ${doc.children.length > 0 ? html`<div style="padding-left:1rem">${this.renderList(doc.children)}<div>` : ""}
            </details>
            `;
    });
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            <div>
                ${this.loading ? html`<p>${this.msg.loading}</p>` : html`
                <div>
                    <div class="list-docs-container">
                        ${this.renderList(this.list)}
                    </div>
                    <div class="list-docs-actions">
                        <button @click=${() => {
      this.addNewDoc();
    }}>
                            <span>${this.msg.add}</span>
                            ${collab_plus}
                        </button>
                    </div>
                    

                </div>`}`;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "list", _list_dec, _ServiceDsDocList100554);
__decorateElement(_init, 5, "docIdSelected", _docIdSelected_dec, _ServiceDsDocList100554);
__decorateElement(_init, 5, "loading", _loading_dec, _ServiceDsDocList100554);
__decorateElement(_init, 5, "containerMain", _containerMain_dec, _ServiceDsDocList100554);
_ServiceDsDocList100554 = __decorateElement(_init, 0, "ServiceDsDocList100554", _ServiceDsDocList100554_decorators, _ServiceDsDocList100554);
_ServiceDsDocList100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceDsDocList100554);
let ServiceDsDocList100554 = _ServiceDsDocList100554;
export {
  ServiceDsDocList100554
};
