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
var _helper_dec, _error_dec, _a, _ServiceDsStyleSpacing_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabDSInputRange } from "./_100554_collabDsInputRange";
const message_pt = {
  margin: "Margem",
  padding: "Preenchimento",
  top: "Topo",
  left: "Esquerda",
  bottom: "Inferior",
  right: "Direita"
};
const message_en = {
  margin: "Margin",
  padding: "Padding",
  top: "Top",
  left: "Left",
  bottom: "Bottom",
  right: "Right"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleSpacing_decorators = [customElement("service-ds-style-spacing-100554")];
class ServiceDsStyleSpacing extends (_a = ServiceBase, _error_dec = [property()], _helper_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.myUpp = false;
    this.error = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.helper = __runInitializers(_init, 12, this, "_100554_serviceDsStyleSpacing"), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#xe4ba",
      state: "foreground",
      position: "right",
      tooltip: "Spacing",
      tags: ["ds_styles"],
      visible: false,
      widget: "_100554_serviceDsStyleSpacing",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Spacing",
      actions: {},
      icons: {},
      actionDefault: "",
      // call after close icon clicked
      iconDefault: "",
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      onClickIcon: this.onClickIcon
    };
    //-------------IMPLEMENTS--------------
    this.tpMeasures = ["px", "em", "rem", "vh", "vw", "vmin", "vmax", "ex", "ch", "auto"];
    this.timeonChangeProp = -1;
    this.timeLoader = -1;
    initCollabDSInputRange();
    this.setEvents();
  }
  onServiceClick(visible, reinit) {
    if (visible || reinit) {
      this.fireEventAboutMe();
    }
  }
  //-------------EVENTS--------------
  setEvents() {
    mls.events.addEventListener([3], ["DSStyleChanged"], (ev) => {
      this.onstylechanged(ev.desc);
    });
    mls.events.addEventListener([3], ["DSStyleSelected"], (ev) => {
      this.onDSStyleSelected(ev);
    });
    mls.events.addEventListener([3], ["DSStyleUnSelected"], (ev) => {
      this.onDSStyleUnSelected(ev);
    });
    mls.events.addEventListener([3], ["DSStyleCursorChanged"], (ev) => {
      this.onDSStyleCursorChanged(ev);
    });
  }
  onstylechanged(desc) {
    const obj = JSON.parse(desc);
    if (obj.emitter === "left" && this.visible === "true" && obj.value.length > 0) {
      this.setValues(obj.value);
    }
  }
  setValues(ar) {
    this.myUpp = true;
    ar.forEach((i) => {
      if (!this.shadowRoot || !i.key) return;
      const value = i.value;
      const prop = i.key;
      if (["margin", "padding"].includes(prop)) {
        this.uppProp(value, prop);
      } else {
        const el = this.shadowRoot.querySelector('*[prop="' + prop + '"]');
        if (el) el.value = value;
      }
    });
    this.myUpp = false;
  }
  onDSStyleSelected(ev) {
    const params = ev.desc ? JSON.parse(ev.desc) : [];
    if (params.service.length > 0 && !params.service.includes(this.helper) || !this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", "A");
    this.showNav2Item(true);
  }
  onDSStyleUnSelected(ev) {
    const params = ev.desc ? JSON.parse(ev.desc) : [];
    if (params.service.includes(this.helper) || !this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", "H");
    this.showNav2Item(false);
  }
  onDSStyleCursorChanged(ev) {
    const rc = JSON.parse(ev.desc);
    if (rc.helper === this.helper) {
      if (this.visible === "true" || !this.serviceItemNav) return;
      this.serviceItemNav.click();
    }
  }
  //-------------COMPONENT-----------
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`${this.renderMargin()}${this.renderPadding()}`;
  }
  renderMargin() {
    return html`
            <div>
                <h5 style="display:flex; gap:1.5rem" >${this.msg.margin}<input type="checkbox" prop="margin"></h5>
                <div class="groupEdit">
                    <span>${this.msg.top}</span>
                    <collab-ds-input-range-100554 prop="margin-top" value="0px" .arraySelect=${this.tpMeasures} group="margin" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.left}</span>
                    <collab-ds-input-range-100554 prop="margin-left" value="0px" .arraySelect=${this.tpMeasures} group="margin" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>    
                </div>
                <div class="groupEdit">
                    <span>${this.msg.bottom}</span>
                    <collab-ds-input-range-100554 prop="margin-bottom" value="0px" .arraySelect=${this.tpMeasures} group="margin" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554> 
                </div>
                <div class="groupEdit">
                    <span>${this.msg.right}</span>
                    <collab-ds-input-range-100554 prop="margin-right" value="0px" .arraySelect=${this.tpMeasures} group="margin" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554> 
                </div>
            </div>
        `;
  }
  renderPadding() {
    return html`
            <div>
                <h5 style="display:flex; gap:1.5rem" >${this.msg.padding}<input type="checkbox" prop="padding"></h5>
                <div class="groupEdit">
                    <span>${this.msg.top}</span>
                    <collab-ds-input-range-100554 prop="padding-top" value="0px" .arraySelect=${this.tpMeasures} group="padding" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.left}</span>
                    <collab-ds-input-range-100554 prop="padding-left" value="0px" .arraySelect=${this.tpMeasures} group="padding" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>    
                </div>
                <div class="groupEdit">
                    <span>${this.msg.bottom}</span>
                    <collab-ds-input-range-100554 prop="padding-bottom" value="0px" .arraySelect=${this.tpMeasures} group="padding" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554> 
                </div>
                <div class="groupEdit">
                    <span>${this.msg.right}</span>
                    <collab-ds-input-range-100554 prop="padding-right" value="0px" .arraySelect=${this.tpMeasures} group="padding" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554> 
                </div>
            </div>
        `;
  }
  onChangeProp(e) {
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      const el = e.detail.target;
      this.beforeEmitEvent(el, e.detail);
    }, 500);
  }
  beforeEmitEvent(el, obj) {
    if (!this.shadowRoot) return;
    const group = el ? el.getAttribute("group") : "";
    const elGroup = this.shadowRoot.querySelector(`input[prop="${group}"]`);
    let isGroup = false;
    if (elGroup) isGroup = elGroup.checked;
    if (isGroup) {
      this.uppProp(el.value, group);
      return;
    }
    this.emitEvent({
      key: el.getAttribute("prop"),
      value: el.value
    });
  }
  uppProp(value, group) {
    if (!this.shadowRoot) return;
    const info = {
      margin: {
        p1: "margin-top",
        p2: "margin-left",
        p3: "margin-right",
        p4: "margin-bottom"
      },
      padding: {
        p1: "padding-top",
        p2: "padding-left",
        p3: "padding-bottom",
        p4: "padding-right"
      }
    };
    const prop = group;
    const elP1 = this.shadowRoot.querySelector(`*[prop="${info[group].p1}"]`);
    const elP2 = this.shadowRoot.querySelector(`*[prop="${info[group].p2}"]`);
    const elP3 = this.shadowRoot.querySelector(`*[prop="${info[group].p3}"]`);
    const elP4 = this.shadowRoot.querySelector(`*[prop="${info[group].p4}"]`);
    const ar = [];
    if (elP1) ar.push(elP1);
    if (elP2) ar.push(elP2);
    if (elP3) ar.push(elP3);
    if (elP4) ar.push(elP4);
    ar.forEach((i) => {
      i.value = value;
    });
    this.emitEvent({
      key: prop,
      value
    });
  }
  fireEventAboutMe() {
    const rc = {
      emitter: "right-get"
    };
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc), 500);
  }
  emitEvent(obj) {
    if (this.myUpp) return;
    const rc = {
      emitter: this.position,
      value: [obj],
      helper: this.helper
    };
    if (typeof mls !== "object") return;
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc));
  }
  showLoader(loader) {
    clearTimeout(this.timeLoader);
    this.timeLoader = setTimeout(() => {
      this.loading = loader;
    }, 200);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleSpacing);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleSpacing);
ServiceDsStyleSpacing = __decorateElement(_init, 0, "ServiceDsStyleSpacing", _ServiceDsStyleSpacing_decorators, ServiceDsStyleSpacing);
ServiceDsStyleSpacing.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleSpacing);
export {
  ServiceDsStyleSpacing
};
