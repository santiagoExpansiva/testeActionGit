var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
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
var _group_dec, _state_dec, _a, _ServiceDsComponentDetails100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabInputTag } from "./_100554_collabInputTag";
const message_pt = {
  noComponentSelected: "Nenhum componente selecionado",
  component: "Componente",
  editStyle: "Editar estilo",
  removeComponent: "Remover componente",
  group: "Grupo",
  tags: "Tags"
};
const message_en = {
  noComponentSelected: "No component selected",
  component: "Component",
  editStyle: "Edit style",
  removeComponent: "Remove component",
  group: "Group",
  tags: "Tags"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsComponentDetails100554_decorators = [customElement("service-ds-component-details-100554")];
class ServiceDsComponentDetails100554 extends (_a = ServiceBase, _state_dec = [property()], _group_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf1b3",
      state: "foreground",
      position: "right",
      tooltip: "Details Component",
      visible: false,
      tags: ["ds_components"],
      widget: "_100554_serviceDsComponentDetails",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Details Component",
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
    mls.events.addListener(3, "DSWidgetsChanged", (ev) => this.onDsWidgetsChanged(ev));
    mls.events.addListener(3, "DSWidgetsSelected", (ev) => this.onDsWidgetsSelected());
    mls.events.addListener(3, "DSWidgetsUnSelected", (ev) => this.onDsWidgetsUnSelected());
    initCollabInputTag();
  }
  onServiceClick(visible, reinit, el) {
  }
  onDsWidgetsSelected() {
    this.showNav2Item(true);
    if (this.visible === "false") this.openMe();
  }
  onDsWidgetsUnSelected() {
    this.showNav2Item(false);
  }
  onDsWidgetsChanged(ev) {
    if (!ev.desc) return;
    const data = JSON.parse(ev.desc);
    if (data.position === this.position) return;
    if (!data.value) return;
    this.state = __spreadValues({}, data.value);
    this.group = data.value.group;
  }
  onEditStyleClick() {
    if (!this.state) return;
    this.openService("_100554_serviceDsStyles", "left", 3);
    mls.actual[0].setFullName(this.state.name);
    const info = mls.actual[0];
    const rc = {
      emitter: "right",
      less: "",
      isComponent: true,
      widget: `_${info.project}_${info.path}`,
      helper: "_100554_servicePreview",
      origemLevel: +this.level,
      dsindex: mls.actual[3].mode
    };
    mls.events.fire(3, "DSStyleChanged", JSON.stringify(rc), 500);
  }
  removeComponent() {
    return __async(this, null, function* () {
      if (!this.state) return;
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) return;
      const ds = mls.l3.getDSInstance(project, mode);
      yield ds.init();
      yield ds.components.remove(this.state.name);
      this.state = void 0;
      const params = {
        op: "update",
        position: this.position,
        value: void 0
      };
      mls.events.fire(3, "DSWidgetsChanged", JSON.stringify(params), 300);
    });
  }
  updateComponent() {
    return __async(this, null, function* () {
      if (!this.state) return;
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) return;
      const ds = mls.l3.getDSInstance(project, mode);
      yield ds.init();
      yield ds.components["update"](this.state.name, this.state);
      const params = {
        op: "update",
        position: this.position,
        value: void 0
      };
      mls.events.fire(3, "DSWidgetsChanged", JSON.stringify(params), 300);
    });
  }
  handleInputChangeGroup(event) {
    if (!event || !this.state) return;
    const target = event.target;
    if (!target) return;
    if (target.value === "") return;
    this.state.group = target.value;
    this.group = target.value;
    if (this.timeoutGroup) clearTimeout(this.timeoutGroup);
    this.timeoutGroup = setTimeout(() => {
      this.updateComponent();
    }, 1e3);
  }
  handleInputChangeTags(value) {
    if (!this.state) return;
    this.state.tags = value.split(",");
    this.updateComponent();
  }
  render() {
    var _a2;
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        ${!this.state ? html`<h4>${this.msg.noComponentSelected}!</h4>` : html`
                <section>
                    <p> ${this.msg.component}: ${(_a2 = this.state) == null ? void 0 : _a2.name}</p>
                    <div class="actions">
                        <button class="edit" @click=${() => this.onEditStyleClick()}>${this.msg.editStyle}</button>
                        <button class="remove" @click=${() => this.removeComponent()}>${this.msg.removeComponent}</button>
                    </div>

                    <div>
                        <label>${this.msg.group}:</label>
                        <br>
                        <input .value=${this.group} @input="${this.handleInputChangeGroup}"></input>
                    </div>
                    <div>
                        <label>${this.msg.tags}:</label>
                        <collab-input-tag-100554 .onValueChanged=${(value) => {
      this.handleInputChangeTags(value);
    }} .value=${this.state.tags.join(",")}></collab-input-tag-100554>
                    </div>
                <section>
                
                `}
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "state", _state_dec, ServiceDsComponentDetails100554);
__decorateElement(_init, 5, "group", _group_dec, ServiceDsComponentDetails100554);
ServiceDsComponentDetails100554 = __decorateElement(_init, 0, "ServiceDsComponentDetails100554", _ServiceDsComponentDetails100554_decorators, ServiceDsComponentDetails100554);
ServiceDsComponentDetails100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsComponentDetails100554);
export {
  ServiceDsComponentDetails100554
};
