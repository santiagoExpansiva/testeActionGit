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
var _actualKeyGitHub_dec, _actualProjectDetails_dec, _a, _ServiceProjectDetails100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  noProjectSelected: "Nenhum projeto selecionado!",
  resume: "Resumo",
  name: "Nome",
  projectDriver: "Driver do Projeto",
  projectURL: "URL do Projeto",
  designSystems: "Sistemas de Design",
  files: "Arquivos",
  keyGithub: "Chave do GitHub"
};
const message_en = {
  noProjectSelected: "No project selected!",
  resume: "Resume",
  name: "Name",
  projectDriver: "ProjectDriver",
  projectURL: "ProjectURL",
  designSystems: "DesignSystems",
  files: "Files",
  keyGithub: "Key Github"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceProjectDetails100554_decorators = [customElement("service-project-details-100554")];
class ServiceProjectDetails100554 extends (_a = ServiceBase, _actualProjectDetails_dec = [property()], _actualKeyGitHub_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf15b",
      state: "foreground",
      position: "right",
      tooltip: "Project Details",
      visible: true,
      widget: "_100554_serviceProjectDetails",
      level: [5]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Project",
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
    mls.events.addListener(5, "ProjectSelected", (ev) => this.onProjectSelected(ev));
  }
  onServiceClick(visible, reinit, el) {
  }
  getDetailsProject(project) {
    const details = mls.l5.getProjectSettings(project);
    if (!this.actualProjectDetails) this.actualProjectDetails = {};
    this.actualProjectDetails.designSystems = details.designSystems ? details.designSystems.length : 0;
    this.actualProjectDetails.name = details.name;
    this.actualProjectDetails.projectDriver = details.projectDriver;
    this.actualProjectDetails.projectURL = details.projectURL;
    this.actualProjectDetails.files = Object.keys(mls.stor.files).filter((item) => item.startsWith(project.toString())).length;
    this.actualKeyGitHub = localStorage == null ? void 0 : localStorage.getItem("keyGitHub");
    this.requestUpdate();
  }
  onProjectSelected(ev) {
    if (!ev.desc) return;
    const data = JSON.parse(ev.desc);
    this.getDetailsProject(data.value);
  }
  getLastProject() {
    const lastPrjId = localStorage.getItem("l5-last-project");
    if (lastPrjId) this.getDetailsProject(+lastPrjId);
  }
  handleChangeKey() {
    if (this.actualKeyGitHub) {
      localStorage == null ? void 0 : localStorage.setItem("keyGitHub", this.actualKeyGitHub);
    }
  }
  handleInputChangeKey(value) {
    this.actualKeyGitHub = value;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    this.getLastProject();
    return html`
            ${!this.actualProjectDetails ? html`<h4> ${this.msg.noProjectSelected}</h4>` : html`
                <section class="section-details">
                    <details open>
                        <summary>${this.msg.resume}</summary>
                        <ul>
                            <li>${this.msg.name}: ${this.actualProjectDetails.name}</li>
                            <li>${this.msg.projectDriver}: ${this.actualProjectDetails.projectDriver}</li>
                            <li>${this.msg.projectURL}: ${this.actualProjectDetails.projectURL}</li>
                            <li>${this.msg.designSystems}: ${this.actualProjectDetails.designSystems}</li>
                            <li>${this.msg.files}: ${this.actualProjectDetails.files}</li>
                        </ul>
                    </details>
                </section>
                <section
                    style=${this.actualProjectDetails.projectDriver === "github" ? "display: block" : "display:none"} 
                    class="section-config-github">
                    <div>
                        <label>${this.msg.keyGithub}</label>
                        <textarea .value=${this.actualKeyGitHub} @input="${this.handleInputChangeKey}"></textarea rows=4>
                        <button @click=${this.handleChangeKey}>Alterar</button>
                    </div>
                </section>


                `}`;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "actualProjectDetails", _actualProjectDetails_dec, ServiceProjectDetails100554);
__decorateElement(_init, 5, "actualKeyGitHub", _actualKeyGitHub_dec, ServiceProjectDetails100554);
ServiceProjectDetails100554 = __decorateElement(_init, 0, "ServiceProjectDetails100554", _ServiceProjectDetails100554_decorators, ServiceProjectDetails100554);
ServiceProjectDetails100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceProjectDetails100554);
export {
  ServiceProjectDetails100554
};
