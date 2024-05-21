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
var _helper_dec, _error_dec, _a, _ServiceDsStyleTextShadow_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabDSInputRange } from "./_100554_collabDsInputRange";
import { initCollabDsInputSelectColor } from "./_100554_collabDsInputSelectColor";
const message_pt = {
  textShadow: "Sombra do texto",
  xOffset: "X Offset",
  yOffset: "Y Offset",
  blur: "Desfoque",
  color: "Cor"
};
const message_en = {
  textShadow: "Text Shadow",
  xOffset: "X Offset",
  yOffset: "Y Offset",
  blur: "Blur",
  color: "Color"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleTextShadow_decorators = [customElement("service-ds-style-tesxtshadow-100554")];
class ServiceDsStyleTextShadow extends (_a = ServiceBase, _error_dec = [property()], _helper_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.myUpp = false;
    this.error = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.helper = __runInitializers(_init, 12, this, "_100554_serviceDsStyleTesxtshadow"), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#x54",
      state: "foreground",
      position: "right",
      tooltip: "Text Shadow",
      visible: false,
      tags: ["ds_styles"],
      widget: "_100554_serviceDsStyleTesxtshadow",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Shadow",
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
    this.arrayGallery = [
      "",
      "text-shadow: 2px 2px;",
      "text-shadow: 2px 2px 5px;",
      "text-shadow: 0 0 3px",
      "text-shadow: 3px 3px 3px;",
      "text-shadow: 3px -3px 3px;"
    ];
    initCollabDSInputRange();
    initCollabDsInputSelectColor();
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
    if (!this.shadowRoot) return;
    const textShadowLine = ar.find((item) => item.key === "text-shadow");
    if (!textShadowLine) return;
    this.myUpp = true;
    let { value } = textShadowLine;
    let vColor = "";
    if (value.indexOf("rgb") >= 0) {
      vColor = value.substr(value.indexOf("rgb"), value.indexOf(")") + 1);
      value = value.replace(vColor, "").trim();
    } else if (value.indexOf("#") >= 0) {
      vColor = value.substr(value.indexOf("#"), value.indexOf(" ") + 1).trim();
      value = value.replace(vColor, "").trim();
    } else if (/[a-z]/.test(value.substr(0, 1))) {
      vColor = value.substr(value.indexOf(value.substr(0, 2)), value.indexOf(" ") + 1).trim();
      value = value.replace(vColor, "").trim();
    }
    const arrayValues = value.split(" ");
    const elX = this.shadowRoot.querySelector('*[prop="x"]');
    const elY = this.shadowRoot.querySelector('*[prop="y"]');
    const elC = this.shadowRoot.querySelector('*[prop="color"]');
    const elB = this.shadowRoot.querySelector('*[prop="blur"]');
    if (elX && arrayValues.length > 0) elX.value = arrayValues[0];
    else elX.value = "";
    if (elY && arrayValues.length > 1) elY.value = arrayValues[1];
    else elY.value = "";
    if (elB && arrayValues.length > 2) elB.value = arrayValues[2];
    else elB.value = "";
    if (elC) elC.value = vColor;
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
    return html`${this.renderColumn()}${this.renderGallery()}`;
  }
  renderColumn() {
    return html`
            <div>
                <h5>${this.msg.textShadow}</h5>
                <div class="groupEdit">
                    <span>${this.msg.xOffset}</span>
                    <collab-ds-input-range-100554 prop="x" value="0px" .arraySelect=${this.tpMeasures}  @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.yOffset}</span>
                    <collab-ds-input-range-100554 prop="y" value="0px" .arraySelect=${this.tpMeasures}  @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.blur}</span>
                    <collab-ds-input-range-100554 prop="blur" value="0px" .arraySelect=${this.tpMeasures}  @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.color}</span>
                    <collab-ds-input-select-color-100554 prop="color" useInput="false" useSelect="false" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-select-color-100554>
                </div>
                
            </div>
        `;
  }
  renderGallery() {
    return html`
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; padding: 1rem; flex-wrap: wrap; cursor:pointer">
                ${repeat(
      this.arrayGallery,
      (key) => key,
      (css2, index) => {
        return html`
                        <h5 style="${css2}" @click="${this.clickGallery}" .gallery=${css2}>Text</h5>
                        `;
      }
    )}
            </div>
        
        `;
  }
  onChangeProp(obj) {
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      this.mountValue();
    }, 500);
  }
  mountValue() {
    if (!this.shadowRoot) return;
    const elX = this.shadowRoot.querySelector('*[prop="x"]');
    const elY = this.shadowRoot.querySelector('*[prop="y"]');
    const elC = this.shadowRoot.querySelector('*[prop="color"]');
    const elB = this.shadowRoot.querySelector('*[prop="blur"]');
    let value = "";
    if (elC) value += elC.value;
    if (elX) value += " " + elX.value;
    if (elY) value += " " + elY.value;
    if (elB) value += " " + elB.value;
    const change = {
      key: "text-shadow",
      value
    };
    this.emitEvent(change);
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
  clickGallery(e) {
    const el = e.target;
    if (!el) return;
    const css2 = el.gallery;
    const commands = css2.split(";");
    const changes = [];
    commands.forEach((item) => {
      const [key, value] = item.split(":");
      if (!key) return;
      changes.push({
        key: key.trim(),
        value: value.trim()
      });
    });
    const rc = {
      emitter: "right",
      value: changes,
      helper: this.helper
    };
    if (changes.length <= 0) changes.push({ key: "text-shadow", value: "" });
    this.setValues(changes);
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc));
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleTextShadow);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleTextShadow);
ServiceDsStyleTextShadow = __decorateElement(_init, 0, "ServiceDsStyleTextShadow", _ServiceDsStyleTextShadow_decorators, ServiceDsStyleTextShadow);
ServiceDsStyleTextShadow.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleTextShadow);
export {
  ServiceDsStyleTextShadow
};
