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
var _selectWidget_dec, _error_dec, _itens_dec, _a, _ServiceDsComponentsList100554_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { collab_cubes, collab_caret_righttv } from "./_100554_collabIcons";
const message_pt = {};
const message_en = {};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsComponentsList100554_decorators = [customElement("service-ds-components-list-100554")];
class ServiceDsComponentsList100554 extends (_a = ServiceBase, _itens_dec = [property()], _error_dec = [property()], _selectWidget_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.itens = __runInitializers(_init, 8, this, []), __runInitializers(_init, 11, this);
    this.error = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#xf1b3",
      state: "foreground",
      position: "left",
      tooltip: "Components",
      visible: true,
      tags: ["ds_components"],
      widget: "_100554_serviceDsComponentsList",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Details",
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
    this.timeShowLoader = -1;
    this.myMsg = {
      noItems: "No items"
    };
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    if (visible) {
      this.init();
      mls.events.fire([this.level], ["DSWidgetsSelected"], "", 300);
    } else {
      mls.events.fire([this.level], ["DSWidgetsUnSelected"], "", 0);
    }
  }
  //--------------- COMPONENTE---------------
  connectedCallback() {
    super.connectedCallback();
    this.updateMyMessages();
    this.init();
  }
  render() {
    if (this.error !== "") {
      setTimeout(() => this.error = "", 3e3);
      return html`${this.error}`;
    }
    return html` ${this.itens ? this.renderItens() : this.renderNoItens()}
            
        `;
  }
  renderNoItens() {
    return html`
            <span>${this.myMsg.noItems}</span>  
        `;
  }
  renderItens() {
    return html`
            
                <ul>
                    ${repeat(
      this.itens.sort((a, b) => a.group.localeCompare(b.group)),
      (i) => i.group,
      (item, index) => {
        return this.renderGroup(item, index);
      }
    )}
                </ul> 
        
        `;
  }
  renderGroup(item, index) {
    return html`
        <li @click=${this.openMeList}>

            <div style="display:flex; align-items:center;">
                ${collab_caret_righttv}
                <label style="font-weight:500">${item.group}</label>
            </div>
            <ul>
                ${repeat(
      item.components.sort((a, b) => a.name.localeCompare(b.name)),
      (i) => i.name,
      (it, indexI) => {
        return this.renderComponent(it, indexI);
      }
    )}
            </ul>
        </li>
        `;
  }
  renderComponent(item, index) {
    return html`
        <li
            style="padding-left: 1.1rem;"
            class=${item.name === this.selectWidget ? "selected" : ""} 
            .item=${item} 
            @click=${(e) => {
      this.openComponent(e, item.name);
    }}
        > 
            <div style="display:flex;align-items:center;gap:.5rem">
                ${collab_cubes}
                <span>${item.name}</span>
            </div>
        </li>
        `;
  }
  //------------------- EVENTS---------------
  setEvents() {
    mls.events.addListener(3, "DSWidgetsChanged", (ev) => this.onDsWidgetsChanged(ev));
  }
  //----------- IMPLEMENTATION---------------
  init() {
    return __async(this, null, function* () {
      try {
        this.showLoader(true);
        const { project } = mls.actual[5];
        const { mode } = mls.actual[3];
        this.ds = mls.l3.getDSInstance(project, mode);
        if (!this.ds) throw new Error("No found getDSInstance:" + mode + "," + project);
        yield this.ds.init();
        this.setList();
        this.showLoader(false);
      } catch (e) {
        console.info(e);
        this.showLoader(false);
      }
    });
  }
  setList() {
    if (!this.ds) return;
    const { list } = this.ds.components;
    const components = [];
    Object.keys(list).forEach((comp) => {
      components.push(list[comp]);
    });
    const groupedData = components.reduce((acc, obj) => {
      const key = obj.group;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
    const rc = [];
    Object.keys(groupedData).forEach((group) => {
      const obj = {
        group,
        icon: "fa-solid fa-bolt",
        components: groupedData[group]
      };
      rc.push(obj);
    });
    this.itens = rc;
  }
  onDsWidgetsChanged(ev) {
    if (!ev.desc) return;
    const data = JSON.parse(ev.desc);
    if (data.position === this.position) return;
    if (data.op === "update") this.setList();
  }
  openComponent(e, widget) {
    e.stopPropagation();
    let el = e.target;
    if (!el) return;
    el = el.closest("li");
    if (!el) return;
    this.selectWidget = widget;
    const info = el.item;
    this.fireComunication(info);
  }
  openMeList(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const li = el.closest("li");
    if (!li) return;
    li.classList.toggle("open");
  }
  showLoader(show) {
    clearTimeout(this.timeShowLoader);
    this.timeShowLoader = setTimeout(() => {
      this.loading = show;
    }, 200);
  }
  updateMyMessages() {
    if (!window["message"]) return;
    const m = window["message"];
    if (m.noItems) this.myMsg.noItems = m.noItems;
  }
  fireComunication(info) {
    const obj = {
      op: "widgets",
      position: this.position,
      value: info
    };
    mls.events.fire([this.level], ["DSWidgetsChanged"], JSON.stringify(obj), 300);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "itens", _itens_dec, ServiceDsComponentsList100554);
__decorateElement(_init, 5, "error", _error_dec, ServiceDsComponentsList100554);
__decorateElement(_init, 5, "selectWidget", _selectWidget_dec, ServiceDsComponentsList100554);
ServiceDsComponentsList100554 = __decorateElement(_init, 0, "ServiceDsComponentsList100554", _ServiceDsComponentsList100554_decorators, ServiceDsComponentsList100554);
ServiceDsComponentsList100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsComponentsList100554);
export {
  ServiceDsComponentsList100554
};
