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
var _helper_dec, _error_dec, _a, _ServiceDsStyleFlex_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  display: "Exibi\uFFFD\uFFFDo",
  flexDirection: "Dire\uFFFD\uFFFDo flex\uFFFDvel",
  flexWrap: "Envolt\uFFFDrio flex\uFFFDvel",
  justifyContent: "Justificar conte\uFFFDdo",
  alignItems: "Alinhar itens",
  alignContent: "Alinhar conte\uFFFDdo",
  alignSelf: "Alinhar-se",
  order: "Ordem"
};
const message_en = {
  display: "Display",
  flexDirection: "Flex direction",
  flexWrap: "Flex wrap",
  justifyContent: "Justify content",
  alignItems: "Align items",
  alignContent: "Align content",
  alignSelf: "Align self",
  order: "Order"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleFlex_decorators = [customElement("service-ds-style-flex-100554")];
class ServiceDsStyleFlex extends (_a = ServiceBase, _error_dec = [property()], _helper_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.myUpp = false;
    this.error = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.helper = __runInitializers(_init, 12, this, "_100554_serviceDsStyleFlex"), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#xf009",
      state: "foreground",
      position: "right",
      tooltip: "Flex",
      tags: ["ds_styles"],
      visible: false,
      widget: "_100554_serviceDsStyleFlex",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Flex",
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
      "display: flex;flex-direction: row; justify-content: flex-start;border: 1px solid #cccccc;margin-left: 10px; width:120px;padding: 5px; cursor: pointer;background:white",
      "display: flex; flex-direction: row; justify-content: flex-end; border: 1px solid rgb(204, 204, 204); margin-left: 10px; width: 120px; padding: 5px; cursor: pointer;background:white",
      "display: flex; flex-direction: row; justify-content: center; border: 1px solid rgb(204, 204, 204); margin-left: 10px; width: 120px; padding: 5px; cursor: pointer;background:white",
      "display: flex; flex-direction: row; justify-content: space-between; border: 1px solid rgb(204, 204, 204); margin-left: 10px; width: 120px; padding: 5px; cursor: pointer;background:white",
      "display: flex;flex-direction: column; justify-content: flex-start;border: 1px solid #cccccc;margin-left: 10px; width:60px;height:200px; padding: 5px; cursor: pointer;background:white",
      "display: flex;flex-direction: column; justify-content: flex-end;border: 1px solid #cccccc;margin-left: 10px; width:60px;height:200px; padding: 5px; cursor: pointer;background:white",
      "display: flex;flex-direction: column; justify-content: center;border: 1px solid #cccccc;margin-left: 10px; width:60px;height:200px; padding: 5px; cursor: pointer;background:white",
      "display: flex;flex-direction: column; justify-content: space-between;border: 1px solid #cccccc;margin-left: 10px; width:60px;height:200px; padding: 5px; cursor: pointer;background:white"
    ];
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
    return html`${this.renderFlex()}${this.renderFlexItem()}${this.renderGallery()}`;
  }
  renderFlex() {
    return html`
            <div>
                <h5>Flex</h5>
                <div class="groupEdit">
                    <span>${this.msg.display}</span>
                    <select @change="${() => this.onChangeProp("display")}" style="width:150px" prop="display">
                        <option value=""></option>
                        <option value="flex">Flex</option>
                        <option value="inline-flex">Inline Flex</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.flexDirection}</span>
                    <select @change="${() => this.onChangeProp("flex-direction")}" style="width:150px" prop="flex-direction">
                        <option value=""></option>
                        <option value="row">Row</option>
                        <option value="row-reverse">Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>   
                </div>
                <div class="groupEdit">
                    <span>${this.msg.flexWrap}</span>
                    <select @change="${() => this.onChangeProp("flex-wrap")}" style="width:150px" prop="flex-wrap">
                        <option value=""></option>
                        <option value="nowrap">Nowrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>  
                </div>
                <div class="groupEdit">
                    <span>${this.msg.justifyContent}</span>
                    <select @change="${() => this.onChangeProp("justify-content")}" style="width:150px" prop="justify-content">
                        <option value=""></option>
                        <option value="flex-start">Flex start</option>
                        <option value="flex-end">Flex end</option>
                        <option value="center">Center</option>
                        <option value="space-between">Space between</option>
                        <option value="space-around">Space around</option>
                    </select>  
                </div>
                <div class="groupEdit">
                    <span>${this.msg.alignItems}</span>
                    <select @change="${() => this.onChangeProp("align-items")}" style="width:150px" prop="align-items">
                        <option value=""></option>
                        <option value="flex-start">Flex start</option>
                        <option value="flex-end">Flex end</option>
                        <option value="center">Center</option>
                        <option value="baseline">Baseline</option>
                        <option value="stretch">Stretch</option>
                    </select>  
                </div>
                <div class="groupEdit">
                    <span>${this.msg.alignContent}</span>
                    <select @change="${() => this.onChangeProp("align-content")}" style="width:150px" prop="align-content">
                        <option value=""></option>
                        <option value="flex-start">Flex start</option>
                        <option value="flex-end">Flex end</option>
                        <option value="center">Center</option>
                        <option value="space-between">Space between</option>
                        <option value="space-around">Space around</option>
                        <option value="stretch">Stretch</option>
                    </select>  
                </div>
            </div>
        
        `;
  }
  renderFlexItem() {
    return html`
            <div>
                <h5>Flex-Item</h5>
                <div class="groupEdit">
                    <span>${this.msg.alignSelf}</span>
                    <select @change="${() => this.onChangeProp("align-self")}" style="width:150px" prop="align-self">
                        <option value=""></option>
                        <option value="auto">auto</option>
                        <option value="flex-start">Flex start</option>
                        <option value="flex-end">Flex end</option>
                        <option value="center">Center</option>
                        <option value="baseline">Baseline</option>
                        <option value="stretch">Stretch</option>
                    </select>
                </div>
                <div class="groupEdit">
                    <span>${this.msg.order}</span>
                    <select @change="${() => this.onChangeProp("order")}" style="width:150px" prop="order">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        
                    </select>   
                </div>
                
            </div>
        
        `;
  }
  renderGallery() {
    return html`
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; padding: 1rem; flex-wrap: wrap; cursor:pointer;border:none">
                ${repeat(
      this.arrayGallery.slice(0, 4),
      (key) => key,
      (css2, index) => {
        return html`<div style="${css2}" @click="${this.clickGallery}" .gallery=${css2}>
                            <span style="background: #363636; padding: 0.5rem; margin: 0.25rem;" .gallery=${css2}></span>
                            <span style="background: #363636; padding: 0.5rem; margin: 0.25rem;" .gallery=${css2}></span>
                            <span style="background: #363636; padding: 0.5rem; margin: 0.25rem;" .gallery=${css2}></span>
                        </div>`;
      }
    )}
            </div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; padding: 1rem; flex-wrap: wrap; cursor:pointer">
                ${repeat(
      this.arrayGallery.slice(4, 8),
      (key) => key,
      (css2, index) => {
        return html`<div style="${css2}" @click="${this.clickGallery}" .gallery=${css2}>
                    <span style="background: #363636; padding: 0.5rem; margin: 0.25rem;" .gallery=${css2}></span>
                    <span style="background: #363636; padding: 0.5rem; margin: 0.25rem;" .gallery=${css2}></span>
                    <span style="background: #363636; padding: 0.5rem; margin: 0.25rem;" .gallery=${css2}></span>
                </div>`;
      }
    )}
            </div>
        
        `;
  }
  onChangeProp(prop) {
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
    if (!css2) return;
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
    this.setValues(changes);
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc));
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleFlex);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleFlex);
ServiceDsStyleFlex = __decorateElement(_init, 0, "ServiceDsStyleFlex", _ServiceDsStyleFlex_decorators, ServiceDsStyleFlex);
ServiceDsStyleFlex.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleFlex);
export {
  ServiceDsStyleFlex
};
