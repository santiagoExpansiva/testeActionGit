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
var _styleAlready_dec, _groupName_dec, _error_dec, _tags_dec, _level_dec, _widget_dec, _father_dec, _a, _ServicePreviewAddStyle_decorators, _init;
import { html, repeat, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
const initServicePreviewAddStyle = "";
const message_pt = {
  groupAndSubgroup: "Grupo e subgrupo",
  tagsForSearch: "Tags para busca",
  exInputList: "ex: entrada, lista",
  addInDesingSystem: "Adicionar no Sistema de Design",
  thisComponentAlreadyHasStyleAdded: "Este componente j\uFFFD tem estilo adicionado",
  notAdded: "Este componente n\uFFFDo \uFFFD adicionado no Design System, adicione abaixo"
};
const message_en = {
  groupAndSubgroup: "Group and subgroup",
  tagsForSearch: "Tags for search",
  exInputList: "ex: input,list",
  addInDesingSystem: "Add in Desing System",
  thisComponentAlreadyHasStyleAdded: "This component already has style added",
  notAdded: "This component is not added in Design System, please add below"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServicePreviewAddStyle_decorators = [customElement("service-preview-add-style-100554")];
class ServicePreviewAddStyle extends (_a = LitElement, _father_dec = [property()], _widget_dec = [property()], _level_dec = [property()], _tags_dec = [property({ type: Array })], _error_dec = [property()], _groupName_dec = [property()], _styleAlready_dec = [property()], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.father = __runInitializers(_init, 8, this), __runInitializers(_init, 11, this);
    this.widget = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.level = __runInitializers(_init, 16, this, ""), __runInitializers(_init, 19, this);
    this.tags = __runInitializers(_init, 20, this, []), __runInitializers(_init, 23, this);
    this.error = __runInitializers(_init, 24, this, ""), __runInitializers(_init, 27, this);
    this.groupName = __runInitializers(_init, 28, this, ""), __runInitializers(_init, 31, this);
    this.styleAlready = __runInitializers(_init, 32, this, false), __runInitializers(_init, 35, this);
    this.setTimeLoader = -1;
  }
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }
  render() {
    const lang = this.father.getMessageKey(messages);
    this.msg = lang ? messages[lang] : message_en;
    if (this.styleAlready) return this.renderStyleAlreadyr();
    else return this.renderAdd();
  }
  renderStyleAlreadyr() {
    return html`<h3>${this.msg.thisComponentAlreadyHasStyleAdded}</h3>`;
  }
  renderAdd() {
    return html`
            <div>
                <h4 style="text-align:center">${this.msg.notAdded}</h4>
                <span>${this.msg.groupAndSubgroup}</span>
                <input type="text" class="inputGroup" .value="${this.groupName}"></input>
            </div>
            <div style="display:flex; flex-direction: column;">
                <span>${this.msg.tagsForSearch}</span>
                <mls-input-tags>
                    ${repeat(
      this.tags,
      (item) => item,
      (vl, index) => this.renderItemTag(vl, index)
    )}
                    <input type="text" @keydown="${this.addInputTag}"></input>
                </mls-input-tags>
                <span style="font-size:.8rem; color: #595959;">${this.msg.exInputList}</span>
            </div>
            <div style="display:flex; justify-content:center;">
                <button @click="${this.addComponent}">${this.msg.addInDesingSystem}</button>
            </div>
            <h3 style="color:red">${this.error}</h3>
        `;
  }
  renderItemTag(vl, idx) {
    return html`
            <div>
                ${vl}
                <span .idx="${idx}" @click="${this.deleteItemTag}">x</span>
            </div>
        `;
  }
  //-----------IMPLEMENTS---------------
  init() {
    return __async(this, null, function* () {
      try {
        this.showLoader(true);
        yield this.initds();
        yield this.getGroup();
        this.verifyAlready();
        this.showLoader(false);
      } catch (e) {
        this.error = e.message;
      }
    });
  }
  verifyAlready() {
    if (!this.widget || !this.dsInstance) return;
    const componentName = this.widget;
    const comp = this.dsInstance.components.find(componentName);
    if (!comp) this.styleAlready = false;
  }
  getGroup() {
    return __async(this, null, function* () {
      mls.actual[0].setFullName(this.widget);
      const model = mls.l2.editor.get({ project: mls.actual[0].project, shortName: mls.actual[0].path });
      if (!model || !model.compilerResults) return;
      const { variables } = model.compilerResults.tripleSlashMLS;
      if (!variables) return;
      const { groupName } = variables;
      if (!groupName) return;
      this.groupName = groupName;
    });
  }
  initds() {
    return __async(this, null, function* () {
      this.dsInstance = mls.l3.getDSInstance(mls.actual[5].project, mls.actual[3].mode);
    });
  }
  addInputTag(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const { value } = el;
    if (e.keyCode === 13) {
      this.addTag(value);
      el.value = "";
    } else if (e.keyCode === 188) {
      e.preventDefault();
      this.addTag(value);
      el.value = "";
    } else if (e.keyCode === 8 && value.length === 0) {
      this.deleteTag(this.tags.length - 1);
    }
  }
  addTag(vl) {
    if (this.tags.includes(vl)) return;
    this.tags.push(vl);
    this.tags = [...this.tags];
  }
  deleteTag(idx) {
    if (idx > this.tags.length || idx < 0) return;
    this.tags.splice(idx, 1);
    this.tags = [...this.tags];
  }
  deleteItemTag(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const idx = +el.idx;
    this.deleteTag(idx);
  }
  showLoader(show) {
    if (!this.father) return;
    clearTimeout(this.setTimeLoader);
    this.setTimeLoader = setTimeout(() => {
      this.father.loading = show;
    }, 200);
  }
  addComponent() {
    return __async(this, null, function* () {
      if (!this.widget || !this.shadowRoot || !this.dsInstance) return;
      const group = this.shadowRoot.querySelector(".inputGroup");
      if (!group || !group.value) throw new Error("Not found group");
      this.showLoader(true);
      const componentName = this.widget;
      const widget = {
        docPath: "",
        examples: [],
        group: group.value,
        l4MarketingRef: "",
        name: componentName,
        reference: void 0,
        styles: [],
        tags: this.tags,
        widgetExampleRef: {
          path: "",
          tagname: ""
        }
      };
      try {
        yield this.dsInstance.components.add(widget);
        this.styleAlready = true;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.showLoader(false);
      }
    });
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "father", _father_dec, ServicePreviewAddStyle);
__decorateElement(_init, 5, "widget", _widget_dec, ServicePreviewAddStyle);
__decorateElement(_init, 5, "level", _level_dec, ServicePreviewAddStyle);
__decorateElement(_init, 5, "tags", _tags_dec, ServicePreviewAddStyle);
__decorateElement(_init, 5, "error", _error_dec, ServicePreviewAddStyle);
__decorateElement(_init, 5, "groupName", _groupName_dec, ServicePreviewAddStyle);
__decorateElement(_init, 5, "styleAlready", _styleAlready_dec, ServicePreviewAddStyle);
ServicePreviewAddStyle = __decorateElement(_init, 0, "ServicePreviewAddStyle", _ServicePreviewAddStyle_decorators, ServicePreviewAddStyle);
ServicePreviewAddStyle.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServicePreviewAddStyle);
export {
  ServicePreviewAddStyle,
  initServicePreviewAddStyle
};
