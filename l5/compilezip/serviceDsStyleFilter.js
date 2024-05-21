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
var _helper_dec, _error_dec, _opened_dec, _a, _ServiceDsStyleFilter_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabDSInputRange } from "./_100554_collabDsInputRange";
const message_pt = {
  loading: "Carregando...",
  grayscale: "Tons de cinza",
  blur: "Desfoque",
  sepia: "Sepia",
  saturate: "Saturar",
  opacity: "Opacidade",
  brightness: "Brilho",
  contrast: "Contraste",
  hueRotate: "Rota\uFFFD\uFFFDo de matiz",
  invert: "Inverter"
};
const message_en = {
  loading: "Loading...",
  grayscale: "Grayscale",
  blur: "Blur",
  sepia: "Sepia",
  saturate: "Saturate",
  opacity: "Opacity",
  brightness: "Brightness",
  contrast: "Contrast",
  hueRotate: "Hue-rotate",
  invert: "Invert"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleFilter_decorators = [customElement("service-ds-style-filter-100554")];
class ServiceDsStyleFilter extends (_a = ServiceBase, _opened_dec = [property()], _error_dec = [property()], _helper_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.filter = {
      grayscale: "",
      blur: "",
      sepia: "",
      saturate: "",
      opacity: "",
      brightness: "",
      contrast: "",
      huerotate: "",
      invert: ""
    };
    this.myUpp = false;
    this.opened = __runInitializers(_init, 8, this, false), __runInitializers(_init, 11, this);
    this.error = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.helper = __runInitializers(_init, 16, this, "_100554_serviceDsStyleFilter"), __runInitializers(_init, 19, this);
    this.details = {
      icon: "&#xf0b0",
      state: "foreground",
      position: "right",
      tooltip: "Filter",
      visible: false,
      tags: ["ds_styles"],
      widget: "_100554_serviceDsStyleFilter",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Filter",
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
    this.timeonChangeProp = -1;
    this.timeLoader = -1;
    this.arrayGallery = [
      "",
      "filter: brightness(20%) sepia(1) hue-rotate(180deg) saturate(5);",
      "filter: brightness(20%) sepia(1) hue-rotate(310deg) saturate(5);",
      "filter: brightness(70%) sepia(1) hue-rotate(360deg) saturate(6);",
      "filter: brightness(70%) sepia(1) hue-rotate(206deg) saturate(6);",
      "filter: brightness(40%) sepia(1) hue-rotate(-42deg) saturate(6);",
      "filter: brightness(40%) sepia(1) hue-rotate(-40deg);",
      "filter: blur(2px);",
      "filter: invert(100%) sepia(2);",
      "filter: brightness(40%) sepia(1) hue-rotate(-40deg);"
    ];
    initCollabDSInputRange();
    this.setEvents();
  }
  onServiceClick(visible, reinit) {
    if (visible || reinit) {
      if (this.opened === false) this.opened = true;
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
  onDSStyleSelected(ev) {
    const params = ev.desc ? JSON.parse(ev.desc) : [];
    if (params.service.length > 0 && !params.service.includes(this.helper) || !this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", "A");
    if (this.showNav2Item) this.showNav2Item(true);
  }
  onDSStyleUnSelected(ev) {
    const params = ev.desc ? JSON.parse(ev.desc) : [];
    if (params.service.includes(this.helper) || !this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", "H");
    if (this.showNav2Item) this.showNav2Item(false);
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
    return html` ${this.opened ? html`${this.renderFilter()}${this.renderGallery()}` : html`${this.msg.loading}`} 
        `;
  }
  renderFilter() {
    return html`
            <div>
                <div class="groupEdit">
                    <span>${this.msg.grayscale}</span>
                    <collab-ds-input-range-100554 prop="grayscale" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.blur}</span>
                    <collab-ds-input-range-100554 prop="blur" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.sepia}</span>
                    <collab-ds-input-range-100554 prop="sepia" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.saturate}</span>
                    <collab-ds-input-range-100554 prop="saturate" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.opacity}</span>
                    <collab-ds-input-range-100554 prop="opacity" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.brightness}</span>
                    <collab-ds-input-range-100554 prop="brightness" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.contrast}</span>
                    <collab-ds-input-range-100554 prop="contrast" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.hueRotate}</span>
                    <collab-ds-input-range-100554 prop="huerotate" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.invert}</span>
                    <collab-ds-input-range-100554 prop="invert" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
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
                                <img style="width:60px;${css2}" @click="${this.clickGallery}" .gallery=${css2} src="https://angrytools.com/css-generator/img/rose.jpg" />
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
  mountValue() {
    if (!this.shadowRoot) return;
    let value = "";
    const elG = this.shadowRoot.querySelector('*[prop="grayscale"]');
    const elB = this.shadowRoot.querySelector('*[prop="blur"]');
    const elS = this.shadowRoot.querySelector('*[prop="sepia"]');
    const elSt = this.shadowRoot.querySelector('*[prop="saturate"]');
    const elO = this.shadowRoot.querySelector('*[prop="opacity"]');
    const elBr = this.shadowRoot.querySelector('*[prop="brightness"]');
    const elC = this.shadowRoot.querySelector('*[prop="contrast"]');
    const elH = this.shadowRoot.querySelector('*[prop="huerotate"]');
    const elI = this.shadowRoot.querySelector('*[prop="invert"]');
    value += elG.value ? "grayscale(" + elG.value + "%)" : "";
    value += elB.value ? " blur(" + elB.value + "px)" : "";
    value += elS.value ? " sepia(" + elS.value + ")" : "";
    value += elSt.value ? " saturate(" + elSt.value + ")" : "";
    value += elO.value ? " opacity(" + elO.value + ")" : "";
    value += elBr.value ? " brightness(" + elBr.value + "%)" : "";
    value += elC.value ? " contrast(" + elC.value + "%)" : "";
    value += elH.value ? " hue-rotate(" + elH.value + "deg)" : "";
    value += elI.value ? " invert(" + elI.value + "%)" : "";
    const change = {
      key: "filter",
      value
    };
    this.emitEvent(change);
  }
  setValues(block) {
    if (!this.shadowRoot) return;
    const myFilter = this.filter;
    Object.keys(myFilter).forEach((item) => {
      myFilter[item] = "";
    });
    const textFilter = block.find((item) => item.key === "filter");
    if (!textFilter) return;
    this.myUpp = true;
    const { value } = textFilter;
    const filter = value.split(" ");
    filter.forEach((item) => {
      var _a2;
      const prop = item.substr(0, item.indexOf("(")).replace("-", "");
      item = item.substr(item.indexOf("("), item.length);
      const num = (_a2 = item.match(/[\.-\d]/g)) == null ? void 0 : _a2.join("");
      if (myFilter[prop] !== void 0) myFilter[prop] = num;
    });
    const elG = this.shadowRoot.querySelector('*[prop="grayscale"]');
    const elB = this.shadowRoot.querySelector('*[prop="blur"]');
    const elS = this.shadowRoot.querySelector('*[prop="sepia"]');
    const elSt = this.shadowRoot.querySelector('*[prop="saturate"]');
    const elO = this.shadowRoot.querySelector('*[prop="opacity"]');
    const elBr = this.shadowRoot.querySelector('*[prop="brightness"]');
    const elC = this.shadowRoot.querySelector('*[prop="contrast"]');
    const elH = this.shadowRoot.querySelector('*[prop="huerotate"]');
    const elI = this.shadowRoot.querySelector('*[prop="invert"]');
    if (elG) elG.value = this.filter.grayscale;
    if (elB) elB.value = this.filter.blur;
    if (elS) elS.value = this.filter.sepia;
    if (elSt) elSt.value = this.filter.saturate;
    if (elO) elO.value = this.filter.opacity;
    if (elBr) elBr.value = this.filter.brightness;
    if (elC) elC.value = this.filter.contrast;
    if (elH) elH.value = this.filter.huerotate;
    if (elI) elI.value = this.filter.invert;
    this.myUpp = false;
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
    if (changes.length <= 0) changes.push({ key: "filter", value: "" });
    this.setValues(changes);
    const rc = {
      emitter: "right",
      value: changes,
      helper: this.helper
    };
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc));
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "opened", _opened_dec, ServiceDsStyleFilter);
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleFilter);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleFilter);
ServiceDsStyleFilter = __decorateElement(_init, 0, "ServiceDsStyleFilter", _ServiceDsStyleFilter_decorators, ServiceDsStyleFilter);
ServiceDsStyleFilter.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleFilter);
export {
  ServiceDsStyleFilter
};
