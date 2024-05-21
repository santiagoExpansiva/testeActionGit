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
var _avaliableServices_dec, _userServices_dec, _actualLevel_dec, _positionToolbar_dec, _error_dec, _currentScenario_dec, _a, _CollabConfig100554_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { CollabLitElement } from "./_100554_collabLitElement";
const message_pt = {
  addService: "Adicionar Servi\uFFFDo",
  back: "Voltar",
  hidden: "Oculto",
  style: "Estilo"
};
const message_en = {
  addService: "Add Service",
  back: "Back",
  hidden: "Hidden",
  style: "Style"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_CollabConfig100554_decorators = [customElement("collab-config-service-100554")];
let _CollabConfig100554 = class _CollabConfig100554 extends (_a = CollabLitElement, _currentScenario_dec = [property({ type: String })], _error_dec = [property({ type: String })], _positionToolbar_dec = [property({ type: String })], _actualLevel_dec = [property({ type: Number })], _userServices_dec = [property({ type: Array })], _avaliableServices_dec = [property({ type: Array })], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.currentScenario = __runInitializers(_init, 8, this, "list"), __runInitializers(_init, 11, this);
    this.error = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.positionToolbar = __runInitializers(_init, 16, this, "left"), __runInitializers(_init, 19, this);
    this.actualLevel = __runInitializers(_init, 20, this, -1), __runInitializers(_init, 23, this);
    this.userServices = __runInitializers(_init, 24, this, []), __runInitializers(_init, 27, this);
    this.avaliableServices = __runInitializers(_init, 28, this, []), __runInitializers(_init, 31, this);
    this.infos = {};
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    this.style.height = "100%";
    return html`
        <div class="bodyServiceConfig">
            ${this.currentScenario === "list" ? html`
                    ${this.renderHeader()}
                    ${this.renderListServices()}
                ` : html`
                    ${this.renderHeader()}
                    ${this.renderListAddServices()} 
                `}
        </div>`;
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_CollabConfig100554.prototype, this, "connectedCallback").call(this);
      this.setInfos();
      yield this.getServices();
    });
  }
  renderHeader() {
    return html`
        
        <div class="header">
            
            ${this.currentScenario === "list" ? html`
                    <button @click="${this.goToScenaryAdd}">${this.msg.addService}</button>
                ` : html`
                    <button @click="${this.goToScenaryList}">${this.msg.back}</button>
                `}
            ${this.error ? html`
                    <div style="color:red">${this.error}</div>
                ` : html``}
            <div style="font-size:90%; display: flex; justify-content: center; align-items: center; padding-right: 0.5rem;">
                <span style="margin-right:5px">Position:</span>
                ${this.positionToolbar === "left" ? html`<input type="radio" value="left" id="leftradioopt" name="radioOpt" checked 
                @click="${this.onclickPositionLeft}" />
                <label for="leftradioopt" style="margin-right:5px">left</label>
                <input type="radio" value="right" id="rightradioopt" name="radioOpt" @click="${this.onclickPositionRight}"/>
                <label for="rightradioopt">right</label>` : html`<input type="radio" value="left" id="leftradioopt" name="radioOpt"  
                @click="${this.onclickPositionLeft}" />
                <label for="leftradioopt" style="margin-right:5px">left</label>
                <input type="radio" value="right" id="rightradioopt" name="radioOpt" @click="${this.onclickPositionRight}" checked/>
                <label for="rightradioopt">right</label>`}
                
            </div>
        </div>
        `;
  }
  onclickPositionLeft() {
    this.positionToolbar = "left";
    this.getServices();
  }
  onclickPositionRight() {
    this.positionToolbar = "right";
    this.getServices();
  }
  renderListAddServices() {
    return html`
        <ul class="listView">
            ${repeat(
      this.avaliableServices,
      (item) => item.icon,
      (service, index) => {
        return html`
                        <li>
                            <div class="groupInfos" style="justify-content:start;">
                                <div>#${index + 1}</div>
                                <div>
                                    ${service.tooltip}
                                </div>
                            </div>
                            <div class="groupInfos" style="justify-content:end;">
                                <div>
                                    <a myIndex="${index}" @click="${this.activeService}">Active</a>
                                </div>
                            </div>
                        </li>
                    `;
      }
    )}    
        </ul>
        `;
  }
  renderListServices() {
    return html`
        <ul class="listView">
            ${repeat(
      this.userServices,
      (item) => item.widget,
      (service, index) => {
        return html`
                    <li>
                        <div class="groupInfos" style="justify-content:start;">
                            <div>#${index + 1}</div>
                            <div>
                                ${service.tooltip}
                                <span class="badge" style="display:${service.visible ? "none" : "inline-block"}">${this.msg.hidden}<span>
                            </div>
                        </div>
                        <div class="groupInfos" style="justify-content:end;display:flex; gap:1rem;">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <span class="fa fa-ellipsis-vertical" style="cursor:pointer" @click="${this.openHiddenConfigs}"></span>
                                <span class="groupHidden" style="display:none">
                                    <a myIndex="${index}" @click="${this.desactiveService}">Desactivate</a>
                                    <span style="margin: 0px 1rem">|</span>
                                    <label>${this.msg.style}</label>
                                    <select  myIndex="${index}" @change="${this.changeClassName}"> 
                                        <option value="" ?selected="${service && !["separator-left", "separator-right"].includes(service.classname)}"></option>
                                        <option value="separator-left" ?selected="${service.classname === "separator-left"}">separator-left</option>
                                        <option value="separator-right" ?selected="${service.classname === "separator-right"}">separator-right</option>
                                    </select>
                                    
                                </span>
                            </div>
                            <div>
                                <span class="fa fa-arrow-up-long" style="cursor:pointer" move="up" myIndex="${index}" @click="${this.moveElement}"></span>
                                <span class="fa fa-arrow-down-long" style="cursor:pointer" move="down" myIndex="${index}" @click="${this.moveElement}"></span>
                            </div>
                        </div>
                    </li>
                    `;
      }
    )}
        </ul>
        `;
  }
  setInfos() {
    var _a2;
    this.infos.nav = (_a2 = this.closest("collab-nav-3")) == null ? void 0 : _a2.previousElementSibling;
    if (!this.infos.nav) return;
    const level = this.infos.nav.getAttribute("level");
    this.actualLevel = level ? +level : -1;
  }
  goToScenaryAdd() {
    this.currentScenario = "add";
  }
  goToScenaryList() {
    this.currentScenario = "list";
  }
  openHiddenConfigs(e) {
    var _a2;
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const elHidden = (_a2 = el.parentElement) == null ? void 0 : _a2.querySelector(".groupHidden");
    if (!elHidden) return;
    const state = elHidden.style.display === "" ? "none" : "";
    elHidden.style.display = state;
  }
  changeClassName(e) {
    const el = e.target;
    if (!el) return;
    const indexs = el.getAttribute("myIndex");
    let indexOri = indexs ? +indexs : -1;
    if (!this.userServices[indexOri]) return;
    this.userServices = [...this.userServices];
    this.fireChangeClassName(indexOri, el.value);
  }
  desactiveService(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const indexs = el.getAttribute("myIndex");
    let indexOri = indexs ? +indexs : -1;
    const userArray = [...this.userServices];
    const avaliableArray = [...this.avaliableServices];
    const obj = userArray[indexOri];
    if (!obj || obj.isStatic) {
      this.error = "This service cannot be deactivated!";
      setTimeout(() => {
        this.error = "";
      }, 3e3);
      return;
    }
    ;
    avaliableArray.push(obj);
    userArray.splice(indexOri, 1);
    this.userServices = userArray;
    this.avaliableServices = avaliableArray;
    this.fireRemoveService(indexOri);
  }
  activeService(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const indexs = el.getAttribute("myIndex");
    let indexOri = indexs ? +indexs : -1;
    const userArray = [...this.userServices];
    const avaliableArray = [...this.avaliableServices];
    const obj = avaliableArray[indexOri];
    if (!obj) return;
    userArray.push(obj);
    avaliableArray.splice(indexOri, 1);
    this.userServices = userArray;
    this.avaliableServices = avaliableArray;
    this.fireAddService(obj);
  }
  moveElement(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const move = el.getAttribute("move");
    const indexs = el.getAttribute("myIndex");
    let indexOri = indexs ? +indexs : -1;
    let indexDest = -1;
    if (indexOri < 0 || move === "up" && indexOri === 0 || move === "down" && indexOri === this.userServices.length - 1) return;
    indexDest = move === "up" ? indexOri - 1 : indexDest = indexOri + 1;
    if (indexDest === indexOri) return;
    const objTo = this.userServices[indexDest];
    const objFrom = this.userServices[indexOri];
    if (objTo.isStatic) {
      this.error = "This service cannot be moved to this position!";
      setTimeout(() => {
        this.error = "";
      }, 3e3);
      return;
    }
    if (!objFrom) return;
    if (objFrom.isStatic) {
      this.error = "This service is static, cannot be moved";
      setTimeout(() => {
        this.error = "";
      }, 3e3);
      return;
    }
    if (indexOri < indexDest) {
      this.userServices.splice(indexDest + 1, 0, objFrom);
      this.userServices.splice(indexOri, 1);
    } else {
      this.userServices.splice(indexDest, 0, objFrom);
      this.userServices.splice(indexOri + 1, 1);
    }
    this.userServices = [...this.userServices];
    this.fireMoveService(indexOri, indexDest);
  }
  getServices() {
    return __async(this, null, function* () {
      const arrayUserServices = yield this.getUserServices();
      const arrayAvaliableServices = yield this.getAvaliableServices();
      this.userServices = arrayUserServices[this.actualLevel][this.positionToolbar];
      this.avaliableServices = arrayAvaliableServices[this.actualLevel][this.positionToolbar];
    });
  }
  getAvaliableServices() {
    return __async(this, null, function* () {
      if (!this.infos.nav) return [];
      const avaliableServices = yield this.infos.nav.getAvaliableServices();
      return avaliableServices;
    });
  }
  getUserServices() {
    return __async(this, null, function* () {
      if (!this.infos.nav) return [];
      const avaliableServices = this.infos.nav.getUserServices();
      return avaliableServices;
    });
  }
  fireChangeClassName(index, cls) {
    return __async(this, null, function* () {
      if (!this.infos.nav) return;
      yield this.infos.nav.updateClassName(index, cls, this.actualLevel, this.positionToolbar);
    });
  }
  fireAddService(service) {
    return __async(this, null, function* () {
      if (!this.infos.nav) return;
      yield this.infos.nav.addService(service, this.actualLevel, this.positionToolbar);
    });
  }
  fireRemoveService(index) {
    return __async(this, null, function* () {
      if (!this.infos.nav) return;
      yield this.infos.nav.removeService(index, this.actualLevel, this.positionToolbar);
    });
  }
  fireMoveService(indexOri, indexDest) {
    return __async(this, null, function* () {
      if (!this.infos.nav) return;
      yield this.infos.nav.moveService(indexOri, indexDest, this.actualLevel, this.positionToolbar);
    });
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "currentScenario", _currentScenario_dec, _CollabConfig100554);
__decorateElement(_init, 5, "error", _error_dec, _CollabConfig100554);
__decorateElement(_init, 5, "positionToolbar", _positionToolbar_dec, _CollabConfig100554);
__decorateElement(_init, 5, "actualLevel", _actualLevel_dec, _CollabConfig100554);
__decorateElement(_init, 5, "userServices", _userServices_dec, _CollabConfig100554);
__decorateElement(_init, 5, "avaliableServices", _avaliableServices_dec, _CollabConfig100554);
_CollabConfig100554 = __decorateElement(_init, 0, "CollabConfig100554", _CollabConfig100554_decorators, _CollabConfig100554);
_CollabConfig100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _CollabConfig100554);
let CollabConfig100554 = _CollabConfig100554;
export {
  CollabConfig100554
};
