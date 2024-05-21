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
var _inputName_dec, _mode_dec, _currentScenario_dec, _state_dec, _a, _ServiceSelectDsAdd100554_decorators, _init;
import { html, css, classMap } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { CollabLitElement } from "./_100554_collabLitElement";
const initServiceSelectDsAdd = () => {
  return true;
};
const message_pt = {
  addNew: "Adicionar um novo sistema de design",
  p1: "Aqui voc\uFFFD pode criar um novo sistema de design selecionando um sistema de design padr\uFFFDo vazio ou selecionando um modelo.",
  empty: "Vazio",
  templates: "Modelos",
  next: "Pr\uFFFDximo",
  project: "Projeto",
  resume: "Resumo",
  name: "Nome",
  create: "Criar Sistema de Design"
};
const message_en = {
  addNew: "Add a new design system",
  p1: "Here you can create a new design system selecting empty default design system or select a template.",
  empty: "Empty",
  templates: "Templates",
  next: "Next",
  project: "Project",
  resume: "Resume",
  name: "Name",
  create: "Create Design System"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceSelectDsAdd100554_decorators = [customElement("service-select-ds-add-100554")];
class ServiceSelectDsAdd100554 extends (_a = CollabLitElement, _state_dec = [property()], _currentScenario_dec = [property({ type: String })], _mode_dec = [property({ type: String })], _inputName_dec = [query("#l5_ds_add_input_name")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.state = __runInitializers(_init, 8, this, {
      dsAvaliables: [],
      copyFrom: {
        name: void 0,
        dsindex: void 0,
        project: void 0,
        widgetIOName: void 0
      },
      name: void 0,
      project: void 0
    }), __runInitializers(_init, 11, this);
    this.currentScenario = __runInitializers(_init, 12, this, "sc1"), __runInitializers(_init, 15, this);
    this.mode = __runInitializers(_init, 16, this, "default"), __runInitializers(_init, 19, this);
  }
  onBtnNext1Click() {
    if (this.mode === "template") {
      this.changeScenario("sc2");
      this.fireEvent(0);
      return;
    }
    this.state.copyFrom.name = "config_ds_default";
    this.state.copyFrom.dsindex = 0;
    this.state.copyFrom.project = 100529;
    this.state.copyFrom.widgetIOName = "_100529_config_ds_default";
    this.changeScenario("sc3");
  }
  onBtnNext2Click() {
    this.changeScenario("sc3");
  }
  onBtnNext3Click() {
    this.addDs();
  }
  onRadioClick(mode) {
    this.mode = mode;
  }
  changeScenario(scenario) {
    this.currentScenario = scenario;
  }
  validateLettersAndNumbers(str) {
    const pattern = /^[A-Za-z0-9]+$/;
    return pattern.test(str);
  }
  addDs() {
    return __async(this, null, function* () {
      if (!this.service || !this.inputName) return;
      this.service.setError("");
      this.service.loading = true;
      const isValidName = this.validateLettersAndNumbers(this.inputName.value);
      if (!this.inputName.value || !isValidName) {
        this.service.setError("Name invalid!");
        this.service.loading = false;
        return;
      }
      if (!this.state.project) {
        this.service.setError("Project invalid!");
        this.service.loading = false;
        return;
      }
      this.state.name = this.inputName.value;
      try {
        if (!this.state.copyFrom || !this.state.copyFrom.widgetIOName) return;
        const dsAdded = yield mls.l5.ds.addDesignSystem(this.state.project, this.state.name, this.state.copyFrom.widgetIOName);
        this.service.setLastDsSelected(dsAdded.dsIndex, this.state.project);
        this.service.loading = true;
        if (this.service.menu.setMenuActive) this.service.menu.setMenuActive("opSelect");
      } catch (err) {
        this.service.setError(err.message);
      } finally {
        this.service.loading = false;
      }
    });
  }
  getDsAvaliable() {
    const projects = this.getProjectsInMemory();
    const rc = [];
    projects.forEach((prj) => {
      const dsByPrj = mls.l5["getProjectDesingSystems"](prj);
      dsByPrj.forEach((info) => {
        rc.push({
          dsindex: info.dsIndex,
          name: info.dsName,
          project: prj,
          widgetIOName: info.widgetIOName
        });
      });
    });
    return rc;
  }
  getProjectsInMemory() {
    const projectInMemory = /* @__PURE__ */ new Set();
    Object.entries(mls.stor.files).forEach((item) => {
      const [key, value] = item;
      projectInMemory.add(value.project);
    });
    return Array.from(projectInMemory);
  }
  fireEvent(index) {
    this.state.copyFrom = this.state.dsAvaliables[index];
    if (!this.state.copyFrom) return;
    const params = {
      service: ["_100529_service_styles_preview"],
      isAddShowPreview: true,
      dsInfoAddShowPreview: {
        index: this.state.dsAvaliables[index].dsindex,
        project: this.state.dsAvaliables[index].project
      }
    };
    mls.events.fire([3], ["DSStyleSelected"], JSON.stringify(params), 0);
  }
  renderScenario() {
    switch (this.currentScenario) {
      case "sc1":
        return html`
                    ${this.renderSc1()}
                `;
      case "sc2":
        return html`
                    ${this.renderSc2()}
                `;
      case "sc3":
        return html`
                    ${this.renderSc3()}
                `;
    }
  }
  renderSc1() {
    return html`
            <section id="service_selectds_section_1">
                    <h1>${this.msg.addNew}</h1>
                    <h4>${this.msg.p1}</h4>
                    <div class="ds-type-select">
                        <div class="ds-type-select-item ${classMap({ active: this.mode === "default" })}">
                            <input
                             name="typeGroup"
                             type="radio"
                             checked="checked"
                             value="default"
                             @click=${(e) => {
      this.onRadioClick("default");
    }}
                             >
                            <div>
                                <svg fill="#000000" height="40px" width="40px" version="1.1" id="XMLID_89_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"> 
                                    <g id="template"> 	<g> 		<path d="M8,22H0V2h24v20H8z M2,20h4V7.9H2V20z M8,20h14V8H8V20z M6,6h16V4H2v2H6z"></path> 	
                                        </g> 
                                    </g> 
                                </svg>
                            </div>
                            <span >${this.msg.empty}</span>
                        </div>
                        <div class="ds-type-select-item ${classMap({ active: this.mode === "template" })}" >
                            <input 
                                name="typeGroup" 
                                type="radio" 
                                value="template" 
                                @click=${(e) => {
      this.onRadioClick("template");
    }}
                                >
                            <div >
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                    <path d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> 
                                    <path d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> 
                                </svg>
                            </div>
                            <span >${this.msg.templates}</span>
                        </div>
                    </div>
                    <hr >
                    <div class="next-action" >
                        <button @click=${(e) => {
      e.preventDefault();
      this.onBtnNext1Click();
    }} >${this.msg.next}</button>
                    </div>
                </section>`;
  }
  renderSc2() {
    return html`
            <section>
                <div >
                    <label >${this.msg.templates}:</label>
                    <div >
                        <select @change=${(e) => {
      this.fireEvent(+e.target.value);
    }}> 
                            ${this.state.dsAvaliables.map((ds, index) => html`
                                <option value=${index}>${this.msg.project}: ${ds.project} Name: ${ds.name}</option>
                            `)}
                            </select>
                    </div>
                </div>
                <hr >
                <div >
                    <button @click=${(e) => {
      e.preventDefault();
      this.onBtnNext2Click();
    }}>${this.msg.next}</button>
                </div>
            </section>
        `;
  }
  renderSc3() {
    return html`
            <section >
                <div>
                    <label >${this.msg.resume}:</label>
                    <ul >
                        <li>Project: ${this.state.project}</li>
                        <li>Template: ${this.state.copyFrom.project + "_" + this.state.copyFrom.name}</li>
                    </ul>
                    <label>${this.msg.name}:</label>
                    <div>
                        <input id="l5_ds_add_input_name" >
                    </div>
                    <hr >
                    <div >
                        <button @click=${(e) => {
      e.preventDefault();
      this.onBtnNext3Click();
    }}>${this.msg.create} </button>
                    </div>
                </div>
            </section>
        `;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    this.state.project = mls.actual[5].project;
    this.state.dsAvaliables = this.getDsAvaliable();
    return html`
            <section class="service-selectds-add">
                ${this.renderScenario()}
            </section>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "state", _state_dec, ServiceSelectDsAdd100554);
__decorateElement(_init, 5, "currentScenario", _currentScenario_dec, ServiceSelectDsAdd100554);
__decorateElement(_init, 5, "mode", _mode_dec, ServiceSelectDsAdd100554);
__decorateElement(_init, 5, "inputName", _inputName_dec, ServiceSelectDsAdd100554);
ServiceSelectDsAdd100554 = __decorateElement(_init, 0, "ServiceSelectDsAdd100554", _ServiceSelectDsAdd100554_decorators, ServiceSelectDsAdd100554);
ServiceSelectDsAdd100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceSelectDsAdd100554);
export {
  ServiceSelectDsAdd100554,
  initServiceSelectDsAdd
};
