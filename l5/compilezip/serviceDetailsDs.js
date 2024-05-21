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
var _state_dec, _a, _ServiceDetailsDs100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  resume: "Resumo",
  name: "Nome",
  createdBy: "Criado por",
  lastUpdated: "\uFFFDltima atualiza\uFFFD\uFFFDo",
  lastUpdatedBy: "\uFFFDltima atualiza\uFFFD\uFFFDo por",
  documentation: "Documenta\uFFFD\uFFFDo",
  tokens: "Tokens",
  assets: "Ativos",
  components: "Componentes",
  style: "Estilo"
};
const message_en = {
  resume: "Resume",
  name: "Name",
  createdBy: "Created By",
  lastUpdated: "Last Updated",
  lastUpdatedBy: "Last updated by",
  documentation: "Documentation",
  tokens: "Tokens",
  assets: "Assets",
  components: "Components",
  style: "Style"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_ServiceDetailsDs100554_decorators = [customElement("service-details-ds-100554")];
class ServiceDetailsDs100554 extends (_a = ServiceBase, _state_dec = [property()], _a) {
  constructor() {
    super();
    this.myMessage = messages["en-us"];
    this.details = {
      icon: "&#xf229",
      state: "background",
      tooltip: "Details Design System",
      visible: true,
      position: "right",
      widget: "_100554_serviceDetailsDs",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opOverview") return this.showOverview();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Details",
      actions: {
        opOverview: "Resume"
      },
      icons: {},
      actionDefault: "opOverview",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.state = __runInitializers(_init, 8, this, { assets: 0, components: 0, createdBy: "", documentation: 0, lastUpdated: "", lastUpdatedBy: "", name: "", style: 0, tokens: 0 }), __runInitializers(_init, 11, this);
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible && reinit) {
      }
    });
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSSelected"], (ev) => {
      if (!this.serviceItemNav) return;
      this.serviceItemNav.setAttribute("mode", "A");
      this.openMe();
    });
  }
  showOverview() {
    return true;
  }
  init() {
    return __async(this, null, function* () {
      const { mode } = mls.actual[3];
      const { project } = mls.actual[5];
      if (mode === void 0 || project === void 0) return;
      this.ds = mls.l3.getDSInstance(project, mode);
      yield this.ds.init();
      this.setResume(project, mode);
    });
  }
  setResume(project, index) {
    return __async(this, null, function* () {
      const dsInfo = mls.l5.getProjectDesingSystems(project);
      const { dsName } = dsInfo[index];
      if (!this.ds) return;
      this.state.name = dsName;
      this.state.createdBy = this.ds.createdBy;
      this.state.lastUpdated = this.getLastModifiedFormated(this.ds.lastUpdated);
      this.state.lastUpdatedBy = this.ds.lastUpdatedBy;
      this.state.components = Object.keys(this.ds.components.list).length;
      this.state.assets = this.getAssetsLenght(project, dsName);
      this.state.documentation = Object.keys(this.ds.docs.list).length;
      this.state.tokens = Object.keys(this.ds.tokens.list).length;
      this.state.style = yield this.getStyleLines();
    });
  }
  getStyleLines() {
    return __async(this, null, function* () {
      if (!this.ds) return 0;
      const style = yield this.ds.css.list.definitions.getContent();
      const lenght = style.split("\n").length;
      return lenght;
    });
  }
  getAssetsLenght(project, nameDs) {
    const listFiles = mls.stor.files;
    const onlyProjects = Object.keys(listFiles).filter((file) => listFiles[file].project === project);
    const l3files = onlyProjects.filter((item) => {
      const { level, folder } = listFiles[item];
      return level === 3 && folder.startsWith(`ds/${nameDs}/assets`);
    });
    return l3files.length;
  }
  getLastModifiedFormated(dt) {
    let lastUpdated;
    const dateToday = /* @__PURE__ */ new Date();
    const dtLastWrite = new Date(dt);
    const _MS_PER_DAY = 1e3 * 60 * 60 * 24;
    function dateDiffInDays(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    const diffDays = dateDiffInDays(dtLastWrite, dateToday);
    const moreThanTwoDays = diffDays > 1;
    if (diffDays === 0) lastUpdated = "today";
    else if (diffDays < 30) lastUpdated = `${diffDays} ${moreThanTwoDays ? "days" : "day"} ago`;
    else {
      const lastWriteYear = dtLastWrite.getFullYear();
      const lastWriteMounth = dtLastWrite.getMonth();
      const lastWriteDay = dtLastWrite.getDate();
      const mounthFilter = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "June",
        6: "July",
        7: "Aug",
        8: "Sept",
        9: "Oct",
        10: "Nov",
        11: "Dec"
      };
      lastUpdated = `on ${lastWriteYear}, ${lastWriteDay} ${mounthFilter[lastWriteMounth]} `;
    }
    return lastUpdated;
  }
  onLinkClick(service) {
    this.openService(service, "left", 3);
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.myMessage = messages[lang];
    this.init();
    return html`
            <div class="mls-ds-resume">
                <details open="open">
                    <summary>${this.myMessage.resume}</summary>
                    <ul>
                        <li>
                            <i class="fa fa-file-signature"></i>
                            <span>${this.myMessage.name}:</span>
                            <span>${this.state.name}</span>
                        </li>
                        <li>
                            <i class="fa fa-user"></i>
                            <span>${this.myMessage.createdBy}:</span>
                            <span>${this.state.createdBy}</span>
                        </li>
                        <li>
                            <i class="fa fa-calendar-days"></i>
                            <span>${this.myMessage.lastUpdated}:</span>
                            <span>${this.state.lastUpdated}</span>
                        </li>
                        <li>
                            <i class="fa fa-regular fa-user"></i>
                            <span>${this.myMessage.lastUpdatedBy}:</span>
                            <span>${this.state.lastUpdatedBy}</span>
                        </li>
                        <li>
                            <i class="fa fa-book"></i>
                            <span>${this.myMessage.documentation}:</span>
                            <a href="#"  @click=${(e) => {
      e.preventDefault();
      this.onLinkClick("_100554_serviceDsDocList");
    }}> ${this.state.documentation} docs </a>
                        </li>
                        <li>
                            <i class="fa fa-list-check"></i>
                            <span>${this.myMessage.tokens}:</span>
                            <a href="#" @click=${(e) => {
      e.preventDefault();
      this.onLinkClick("_100554_serviceDsTokens");
    }}>${this.state.tokens} tokens</a>
                        </li>
                        <li>
                            <i class="fa fa-folder-tree"></i>
                            <span>${this.myMessage.assets}:</span>
                            <a href="#" @click=${(e) => {
      e.preventDefault();
      this.onLinkClick("_100529_service_assets");
    }}>${this.state.assets} assets </a>
                        </li>
                        <li>
                            <i class="fa fa-cubes"></i>
                            <span>${this.myMessage.components}:</span>
                            <a href="#"" @click=${(e) => {
      e.preventDefault();
      this.onLinkClick("_100554_serviceDsComponentsList");
    }}>${this.state.components} components </a>
                        </li>
                        <li>
                            <i class="fa fa-pen-nib"></i>
                            <span>${this.myMessage.style}:</span>
                            <a href="#""  @click=${(e) => {
      e.preventDefault();
      this.onLinkClick("_100529_service_styles");
    }}>${this.state.style} lines</a>
                        </li>
                    </ul>
                </details>
            </div>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "state", _state_dec, ServiceDetailsDs100554);
ServiceDetailsDs100554 = __decorateElement(_init, 0, "ServiceDetailsDs100554", _ServiceDetailsDs100554_decorators, ServiceDetailsDs100554);
ServiceDetailsDs100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDetailsDs100554);
export {
  ServiceDetailsDs100554
};
