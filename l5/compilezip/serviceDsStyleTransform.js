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
var _helper_dec, _error_dec, _a, _ServiceDsStyleTransform_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabDSInputRange } from "./_100554_collabDsInputRange";
const message_pt = {
  scaleX: "Escala x",
  scaleY: "Escala y",
  skewX: "Inclinar x",
  skewY: "Inclinar Y",
  translateX: "Traduzir x",
  translateY: "Traduzir y",
  rotate: "Girar"
};
const message_en = {
  scaleX: "Scale x",
  scaleY: "Scale y",
  skewX: "Skew x",
  skewY: "Skew Y",
  translateX: "Translate x",
  translateY: "Translate y",
  rotate: "Rotate"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleTransform_decorators = [customElement("service-ds-style-transform-100554")];
class ServiceDsStyleTransform extends (_a = ServiceBase, _error_dec = [property()], _helper_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.filter = {
      scaleX: "",
      scaleY: "",
      rotate: "",
      translateX: "",
      translateY: "",
      skewX: "",
      skewY: ""
    };
    this.myUpp = false;
    this.error = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.helper = __runInitializers(_init, 12, this, "_100554_serviceDsStyleTransform"), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#xf2f1",
      state: "foreground",
      position: "right",
      tooltip: "Transform",
      visible: false,
      widget: "_100554_serviceDsStyleTransform",
      tags: ["ds_styles"],
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Transform",
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
      "transform: scale(1.5);",
      "transform: rotate(90deg);",
      "transform: rotate(181deg);",
      "transform: rotate(270deg);",
      "transform: skew(50deg);",
      "transform: skew(50deg, -50deg);",
      "transform: skew(-50deg, 0deg);",
      "transform: skew(-50deg, 50deg);"
    ];
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
    return html`${this.renderTransform()}${this.renderGallery()}`;
  }
  renderTransform() {
    return html`
            <div>
                <div class="groupEdit">
                    <span>${this.msg.scaleX}</span>
                    <collab-ds-input-range-100554 prop="scaleX" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.scaleY}</span>
                    <collab-ds-input-range-100554 prop="scaleY" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.skewX}</span>
                    <collab-ds-input-range-100554 prop="skewX" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.skewY}</span>
                    <collab-ds-input-range-100554 prop="skewY" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.translateX}</span>
                    <collab-ds-input-range-100554 prop="translateX" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.translateY}</span>
                    <collab-ds-input-range-100554 prop="translateY" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.rotate}</span>
                    <collab-ds-input-range-100554 prop="rotate" value="0px" useSelect="false" @onchange="${(e) => this.onChangeProp(e.detail)}"></collab-ds-input-range-100554>
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
        return html`<h5 style="${css2}" @click="${this.clickGallery}" .gallery=${css2}>Item</h5>`;
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
    const elSX = this.shadowRoot.querySelector('*[prop="scaleX"]');
    const elSY = this.shadowRoot.querySelector('*[prop="scaleY"]');
    const elSKX = this.shadowRoot.querySelector('*[prop="skewX"]');
    const elSKY = this.shadowRoot.querySelector('*[prop="skewY"]');
    const elTX = this.shadowRoot.querySelector('*[prop="translateX"]');
    const elTY = this.shadowRoot.querySelector('*[prop="translateY"]');
    const elR = this.shadowRoot.querySelector('*[prop="rotate"]');
    let value = "";
    if (elSX.value || elSY.value) {
      value += "scale(" + (elSX.value ? elSX.value : "1") + (elSY.value ? ", " + elSY.value : "") + ")";
    }
    if (elR.value) {
      value += elR.value ? " rotate(" + elR.value + "deg)" : "";
    }
    if (elTX.value || elTY.value) {
      value += "translate(" + (elTX.value ? elTX.value + "px" : "0px") + (elTY.value ? ", " + elTY.value : ", 0") + "px)";
    }
    if (elSKX.value || elSKY.value) {
      value += "skew(" + (elSKX.value ? elSKX.value + "deg" : "0deg") + (elSKY.value ? ", " + elSKY.value : ", 0") + "deg)";
    }
    const change = {
      key: "transform",
      value
    };
    this.emitEvent(change);
  }
  setValues(block) {
    Object.keys(this.filter).forEach((item) => {
      this.filter[item] = "";
    });
    const textTransform = block.find((item) => item.key === "transform");
    if (!textTransform || !this.shadowRoot) return;
    this.myUpp = true;
    let { value } = textTransform;
    const myFilter = this.filter;
    const filter = value.split(")");
    filter.forEach((item) => {
      var _a2;
      if (!item) return;
      const prop = item.substr(0, item.indexOf("(")).trim();
      item = item.substr(item.indexOf("("), item.length);
      if (prop.indexOf("scale") >= 0 || prop.indexOf("translate") >= 0 || prop.indexOf("skew") >= 0) {
        item.split(",").forEach((vl, index) => {
          var _a3;
          if (!vl) return;
          const num = (_a3 = vl.match(/[\.-\d]/g)) == null ? void 0 : _a3.join("");
          const prefx = index === 0 ? "X" : "Y";
          if (myFilter[prop + prefx] !== void 0) myFilter[prop + prefx] = num;
        });
      } else {
        const num = (_a2 = item.match(/[\.-\d]/g)) == null ? void 0 : _a2.join("");
        if (myFilter[prop] !== void 0) myFilter[prop] = num;
      }
    });
    const elSX = this.shadowRoot.querySelector('*[prop="scaleX"]');
    const elSY = this.shadowRoot.querySelector('*[prop="scaleY"]');
    const elSKX = this.shadowRoot.querySelector('*[prop="skewX"]');
    const elSKY = this.shadowRoot.querySelector('*[prop="skewY"]');
    const elTX = this.shadowRoot.querySelector('*[prop="translateX"]');
    const elTY = this.shadowRoot.querySelector('*[prop="translateY"]');
    const elR = this.shadowRoot.querySelector('*[prop="rotate"]');
    if (elSX) elSX.value = this.filter.scaleX;
    if (elSY) elSY.value = this.filter.scaleY;
    if (elSKX) elSKX.value = this.filter.skewX;
    if (elSKY) elSKY.value = this.filter.skewY;
    if (elTX) elTX.value = this.filter.translateX;
    if (elTY) elTY.value = this.filter.translateY;
    if (elR) elR.value = this.filter.rotate;
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
    if (changes.length <= 0) changes.push({ key: "transform", value: "" });
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
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleTransform);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleTransform);
ServiceDsStyleTransform = __decorateElement(_init, 0, "ServiceDsStyleTransform", _ServiceDsStyleTransform_decorators, ServiceDsStyleTransform);
ServiceDsStyleTransform.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleTransform);
export {
  ServiceDsStyleTransform
};
