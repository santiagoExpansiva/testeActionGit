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
var _helper_dec, _error_dec, _a, _ServiceDsStyleTypography_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabDSInputRange } from "./_100554_collabDsInputRange";
import { initCollabDsInputSelectColor } from "./_100554_collabDsInputSelectColor";
const message_pt = {
  color: "Cor",
  fontFamily: "Fam\uFFFDlia de fontes",
  fontWeight: "Peso da fonte",
  fontStyle: "Estilo da fonte",
  fontSize: "Tamanho da fonte",
  letterSpacing: "Espa\uFFFDamento entre letras",
  wordSpacing: "Espa\uFFFDamento entre palavras",
  lineHeight: "Altura da linha",
  textAlign: "Alinhar texto",
  variant: "Variante",
  transform: "Transformar",
  decoration: "Decora\uFFFD\uFFFDo",
  textOverflow: "Text-overflow"
};
const message_en = {
  color: "Color",
  fontFamily: "Font Family",
  fontWeight: "Font Weight",
  fontStyle: "Font Style",
  fontSize: "Font Size",
  letterSpacing: "Letter Spacing",
  wordSpacing: "Word Spacing",
  lineHeight: "Line Height",
  textAlign: "Text align",
  variant: "Variant",
  transform: "Transform",
  decoration: "Decoration",
  textOverflow: "Text-overflow"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleTypography_decorators = [customElement("service-ds-style-typography-100554")];
class ServiceDsStyleTypography extends (_a = ServiceBase, _error_dec = [property()], _helper_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.myUpp = false;
    this.error = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.helper = __runInitializers(_init, 12, this, "_100554_serviceDsStyleTypography"), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#xf031",
      state: "foreground",
      position: "right",
      tooltip: "Typography",
      visible: false,
      tags: ["ds_styles"],
      widget: "_100554_serviceDsStyleTypography",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Typography",
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
    this.myUpp = true;
    ar.forEach((i) => {
      if (!this.shadowRoot || !i.key) return;
      const value = i.value;
      const prop = i.key;
      const el = this.shadowRoot.querySelector('*[prop="' + prop + '"]');
      if (el) el.value = value;
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
    return html`
            <div>
                <div class="groupEdit">
                    <span>${this.msg.color}</span>
                    <input type="color" prop="color" @change="${(e) => this.onChangeProp2("color")}"></input>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.fontFamily}</span>
                    <select style="width:160px" prop="font-family" @change="${(e) => this.onChangeProp2("font-family")}">
                        <option value=""></option>
                        <option value="COURIER">Courier</option>
                        <option value="VERDANA">Verdana</option>
                        <option value="ARIAL">Arial</option>
                        <option value="TIMES NEW ROMAN">Times new Roman</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.fontWeight}</span>
                    <select style="width:160px" prop="font-weight" @change="${(e) => this.onChangeProp2("font-weight")}">
                        <option value=""></option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.fontStyle}</span>
                    <select style="width:160px" prop="font-style" @change="${(e) => this.onChangeProp2("font-style")}">
                        <option value=""></option>
                        <option value="NULL">null</option>
                        <option value="NORMAL">normal</option>
                        <option value="ITALIC">italic</option>
                    </select>
                </div> 
                <div class="groupEdit">
                    <span>${this.msg.fontSize}</span>
                    <collab-ds-input-range-100554 prop="font-size" value="0px" .arraySelect=${this.tpMeasures}  group="radius" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit"> 
                    <span>${this.msg.letterSpacing}</span>
                    <collab-ds-input-range-100554 prop="letter-spacing" value="0px" .arraySelect=${this.tpMeasures}  group="radius" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit"> 
                    <span>${this.msg.wordSpacing}</span>
                    <collab-ds-input-range-100554 prop="word-spacing" value="0px" .arraySelect=${this.tpMeasures}  group="radius" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit"> 
                    <span>${this.msg.lineHeight}</span>
                    <collab-ds-input-range-100554 prop="line-height" value="0px" .arraySelect=${this.tpMeasures}  group="radius" @onchange="${(e) => this.onChangeProp(e)}"></collab-ds-input-range-100554>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.textAlign}</span>
                    <select style="width:160px" prop="text-align" @change="${(e) => this.onChangeProp2("text-align")}">
                        <option value=""></option>
                        <option value="CENTER">center</option>
                        <option value="END">end</option>
                        <option value="INHERIT">inherit</option>
                        <option value="INITIAL">initial</option>
                        <option value="JUSTIFY">justify</option>
                        <option value="LEFT">left</option>
                        <option value="REVERT">revert</option>
                        <option value="RIGHT">right</option>
                        <option value="START">start</option>
                        <option value="UNSET">unset</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.variant}</span>
                    <select style="width:160px" prop="variant" @change="${(e) => this.onChangeProp2("variant")}">
                        <option value=""></option>
                        <option value="NORMAL">normal</option>
                        <option value="SMALL-CAPS">small-caps</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.transform}</span>
                    <select style="width:160px" prop="transform" @change="${(e) => this.onChangeProp2("transform")}">
                        <option value=""></option>
                        <option value="UPPERCASE">uppercase</option>
                        <option value="LOWERCASE">lowercase</option>
                        <option value="CAPITALIZE">capitalize</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.decoration}</span>
                    <select style="width:160px" prop="decoration" @change="${(e) => this.onChangeProp2("decoration")}">
                        <option value=""></option>
                        <option value="NORMAL">normal</option>
                        <option value="UNDERLINE">underline</option>
                        <option value="OVERLINE">overline</option>
                        <option value="LINE-THROUGH">line-through</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.textOverflow}</span>
                    <select style="width:160px" prop="text-overflow" @change="${(e) => this.onChangeProp2("text-overflow")}">
                        <option value=""></option>
                        <option value="ELLIPSIS">ellipsis</option>
                        <option value="CLIP">clip</option>
                        <option value="INITIAL">initial</option>
                    </select>
                </div>
            </div>
        `;
  }
  onChangeProp(obj) {
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      this.emitEvent(obj.detail);
    }, 500);
  }
  onChangeProp2(prop) {
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      if (!this.shadowRoot) return;
      const el = this.shadowRoot.querySelector('*[prop="' + prop + '"]');
      this.emitEvent({ key: prop, value: el.value });
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
    if (obj.target) delete obj.target;
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
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleTypography);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleTypography);
ServiceDsStyleTypography = __decorateElement(_init, 0, "ServiceDsStyleTypography", _ServiceDsStyleTypography_decorators, ServiceDsStyleTypography);
ServiceDsStyleTypography.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleTypography);
export {
  ServiceDsStyleTypography
};