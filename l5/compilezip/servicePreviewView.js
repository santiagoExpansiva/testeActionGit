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
var _heightP_dec, _widthP_dec, _lastCompiledUrl_dec, _error_dec, _stylechanged_dec, _watch_dec, _isDsComponent_dec, _level_dec, _mode_dec, _page_dec, _father_dec, _a, _ServicePreviewView_decorators, _init;
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getDependenciesByHtml } from "./_100554_libCompile";
import { convertFileNameToTag } from "./_100554_utilsLit";
const initServicePreviewView = "";
const message_pt = {
  pageNotDefined: "P\uFFFDgina n\uFFFDo definida",
  notFoundStorfile: "Arquivo n\uFFFDo encontrado",
  configure: "Configure seu HTML pela op\uFFFD\uFFFDo do editor!",
  width: "Largura",
  height: "Altura"
};
const message_en = {
  pageNotDefined: "Page not defined",
  notFoundStorfile: "Not found storfile",
  configure: "Configure your html by editor option!",
  width: "Width",
  height: "Height"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServicePreviewView_decorators = [customElement("service-preview-view-100554")];
class ServicePreviewView extends (_a = LitElement, _father_dec = [property()], _page_dec = [property()], _mode_dec = [property()], _level_dec = [property()], _isDsComponent_dec = [property()], _watch_dec = [property()], _stylechanged_dec = [property()], _error_dec = [property()], _lastCompiledUrl_dec = [property()], _widthP_dec = [property()], _heightP_dec = [property()], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.file = void 0;
    this.mfile = void 0;
    this.page = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.mode = __runInitializers(_init, 16, this, "d"), __runInitializers(_init, 19, this);
    this.level = __runInitializers(_init, 20, this, ""), __runInitializers(_init, 23, this);
    this.isDsComponent = __runInitializers(_init, 24, this, false), __runInitializers(_init, 27, this);
    this.watch = __runInitializers(_init, 28, this, true), __runInitializers(_init, 31, this);
    this.stylechanged = __runInitializers(_init, 32, this, ""), __runInitializers(_init, 35, this);
    this.error = __runInitializers(_init, 36, this, ""), __runInitializers(_init, 39, this);
    this.lastCompiledUrl = __runInitializers(_init, 40, this, ""), __runInitializers(_init, 43, this);
    this.widthP = __runInitializers(_init, 44, this, "300"), __runInitializers(_init, 47, this);
    this.heightP = __runInitializers(_init, 48, this, "600"), __runInitializers(_init, 51, this);
    this.objVariations = {
      0: "en-US",
      1: "pt-BR"
    };
    this.lastHTML = "";
    this.timeShow = -1;
    this.infoDS = {};
    this.scrollMobile = `
        .scroll-custom::-webkit-scrollbar {
            width: 5px;
        }
        .scroll-custom::-webkit-scrollbar-track {
            background: #ddd;
        }
        .scroll-custom::-webkit-scrollbar-thumb {
            background: #666;
        }
        .scroll-custom::scrollbar {
            width: 2px;
        }
        .scroll-custom::scrollbar-track {
            background: #ddd;
        }
        .scroll-custom::scrollbar-thumb {
            background: #666;
        };
    `;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "stylechanged") {
      if (newVal === "true") this.addStyles();
      return;
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  render() {
    const lang = this.father && this.father.getMessageKey ? this.father.getMessageKey(messages) : "en-us";
    this.msg = messages[lang];
    if (this.error !== "") return this.renderError();
    else return this.renderPreview();
  }
  renderError() {
    return html`<h3 style="color:red">${this.error}</h3>`;
  }
  renderPreview() {
    this.watch = this.father.watch;
    this.verifyWC().then((res) => {
      this.isDsComponent = res;
    });
    if (this.mode === "m") {
      this.style.cssText = `
                width:100%;
                height:100vh;
                min-height:700px;
                display: flex!important;
                flex-direction: column;
                align-items: center;
                padding-top:.5rem;
            `;
      return html` 
                
                <div class="groupSetMobile">
                    <div>
                        <label>${this.msg.width}:</label>
                        <input type="number" value="300" @input="${this.changeWidthP}">
                    </div>
                    <div>
                        <label>${this.msg.height}:</label>
                        <input type="number" value="700" @input="${this.changeHeightP}">
                    </div>
                    </div> 
                <div class="phone" style="width:${this.widthP}px; height:${this.heightP}px">
                    <div class="phone_mic"></div>
                    <div class="phone_screen">
                        <iframe style="width:100%; height:100%; border:none; display:none"  src="/_100554_servicePreview" @load="${this.load}" ></iframe>
                    </div>
                    <div class="phone_button"></div>
                </div>
                
            `;
    } else {
      this.style.cssText = `
                display: block;
                width: 100%;
                height: 100%;
            `;
      return html`
    
            <iframe
                style="width:100%; height:100%; border:none; display:none" src="/_100554_servicePreview"
                @load="${this.load}" >
            </iframe>`;
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("level")) {
      const oldLevel = changedProperties.get("level");
      if (!oldLevel) return;
      this.fireChangeFCA();
    }
  }
  //-------- IMPLEMENTS---------
  fireChangeFCA() {
    if (!this.shadowRoot) return;
    const iframe = this.shadowRoot.querySelector("iframe");
    if (!iframe || !iframe.contentDocument) return;
    this.changeLevelFca(iframe.contentDocument.body);
  }
  changeLevelFca(el) {
    let tagEl = el.tagName.toLowerCase();
    if (tagEl.startsWith("fca-")) {
      el.setAttribute("level", this.level);
    }
    for (const i of el.children) {
      this.changeLevelFca(i);
    }
  }
  addStyles() {
    return __async(this, null, function* () {
      var _a2, _b;
      if (!this.mfile) return;
      let txt = yield this.getFileContent();
      const ret = yield getDependenciesByHtml(this.mfile, txt, true);
      const iframe = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("iframe");
      if (!iframe) return;
      this.mountCSS(ret, iframe);
      this.mountTokens(ret, iframe);
      const tag = convertFileNameToTag(`_${this.mfile.project}_${this.mfile.shortName}`);
      const el = (_b = iframe.contentDocument) == null ? void 0 : _b.body.querySelector(tag);
      if (!el) return;
      const css2 = ret.css.join(" \n");
      const enhacement = yield this.getEnhacement();
      if (!enhacement) return;
      enhacement.setStylesProcessed(css2, el, tag);
    });
  }
  getEnhacement() {
    return __async(this, null, function* () {
      if (!this.mfile) return;
      const enhacementName = this.mfile.compilerResults.tripleSlashMLS.variables.enhancement;
      if (!enhacementName) throw new Error("enhacementName not valid");
      const mModule = yield mls.l2.enhancement.getEnhancementInstance(this.mfile);
      return mModule;
    });
  }
  load() {
    var _a2;
    if (!this.shadowRoot) return;
    const iframe = this.shadowRoot.querySelector("iframe");
    const head = (_a2 = iframe.contentDocument) == null ? void 0 : _a2.querySelector("head");
    if (head) {
      const base = document.createElement("base");
      base.href = document.baseURI;
      head.appendChild(base);
    }
    this.init(iframe);
  }
  init(iframe) {
    return __async(this, null, function* () {
      var _a2;
      try {
        this.setMyFile();
        yield this.setHTml(iframe);
        iframe.style.display = "";
        const html2 = (_a2 = iframe.contentDocument) == null ? void 0 : _a2.querySelector("html");
        if (html2) html2.lang = this.objVariations[window.globalVariation] || "en-US";
        this.showLoader(false);
      } catch (e) {
        this.error = e.message;
        this.showLoader(false);
      }
    });
  }
  setMyFile() {
    if (!this.page || this.page === "") throw new Error(this.msg.pageNotDefined);
    mls.actual[0].setFullName(this.page);
    const info = mls.actual[0];
    const key = mls.stor.getKeyToFiles(
      info.project,
      2,
      info.path,
      "",
      ".html"
    );
    const mkey = mls.l2.editor.getKey(
      {
        project: info.project,
        shortName: info.path
      }
    );
    if (!mls.stor.files[key]) throw new Error(this.msg.notFoundStorfile + ": " + key);
    if (!mls.l2.editor.mfiles[mkey]) throw new Error(this.msg.notFoundStorfile + " mfile: " + mkey);
    this.file = mls.stor.files[key];
    this.mfile = mls.l2.editor.mfiles[mkey];
  }
  setHTml(iframe) {
    return __async(this, null, function* () {
      if (!iframe.contentDocument || !this.mfile) return;
      let txt = yield this.getFileContent();
      if (this.lastHTML === txt) {
        const h = this.lastCompiledUrl;
        this.lastCompiledUrl = h;
        return;
      }
      this.lastHTML = txt;
      iframe.contentDocument.body.innerHTML = txt;
      iframe.contentDocument.body.style.paddingTop = "10px";
      iframe.contentDocument.body["service"] = this.father;
      const ret = yield getDependenciesByHtml(this.mfile, txt, true);
      this.mountJSImporMap(ret, iframe);
      this.mountJS(ret, iframe);
      this.mountCSS(ret, iframe);
      this.mountTokens(ret, iframe);
    });
  }
  getFileContent() {
    return __async(this, null, function* () {
      let txt = "<h3>" + this.msg.configure + "</h3>";
      if (this.file && this.file.getValueInfo)
        txt = (yield this.file.getValueInfo()).content;
      if (this.file && txt === null)
        txt = yield this.file.getContent();
      return txt;
    });
  }
  mountJSImporMap(info, ifr) {
    try {
      if (info.importsMap.length <= 0 || !ifr.contentDocument) return;
      const js = '{"imports": { ' + info.importsMap.join(",\n") + "} }";
      const script = document.createElement("script");
      script.type = "importmap";
      script.textContent = js;
      ifr.contentDocument.head.appendChild(script);
    } catch (e) {
      console.info("Error mountJSImporMap: " + e.message);
      return;
    }
  }
  mountJS(info, ifr) {
    var _a2;
    function loadScripts(scripts) {
      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          var _a3;
          const script = document.createElement("script");
          script.type = "module";
          script.id = src.replace("/", "");
          script.src = src;
          script.onload = resolve;
          script.onerror = reject;
          (_a3 = ifr.contentDocument) == null ? void 0 : _a3.body.appendChild(script);
        });
      };
      let nextScript = Promise.resolve();
      for (const script of scripts) {
        nextScript = nextScript.then(() => loadScript(script));
      }
      return nextScript;
    }
    try {
      if (info.importsJs.length <= 0 || !ifr.contentDocument) return;
      const s = document.createElement("script");
      s.textContent = `
				window['mls'] = window['mls']  ? window['mls']  : parent.mls ? parent.mls : top['mls'];
				window['globalVariation'] = window['globalVariation']  ? window['globalVariation']  : parent.globalVariation ? parent.globalVariation : top['globalVariation'];
				window['latest'] = window['latest']  ? window['latest']  : parent.latest ? parent.latest : top['latest'];
				window['Quill'] = window['Quill']  ? window['Quill']  : parent.Quill ? parent.Quill : top['Quill'];
				window['l2_html'] = window['l2_html']  ? window['l2_html']  : parent.l2_html ? parent.l2_html : top['l2_html'];
                window['monaco'] = window['monaco']  ? window['monaco']  : parent.monaco ? parent.monaco : top['monaco'];
				window['l2_fieldTypes'] = window['l2_fieldTypes']  ? window['l2_fieldTypes']  : parent.l2_fieldTypes ? parent.l2_fieldTypes : top['l2_fieldTypes'];window['litDisableBundleWarning'] = true; window['collabActualLevel'] = ${this.level};
				`;
      (_a2 = ifr.contentDocument) == null ? void 0 : _a2.body.appendChild(s);
      loadScripts(info.importsJs).then(() => {
        this.simulateService(info, ifr);
      });
    } catch (e) {
      console.info("Error mountJS: " + e.message);
    }
  }
  simulateService(info, ifr) {
    return __async(this, null, function* () {
      if (!ifr || !ifr.contentDocument || !ifr.contentWindow) return;
      if (this.file && this.mfile) {
        const txt = this.mfile.model.getValue();
        if (txt.indexOf("extends ServiceBase") === -1) return;
        const tag = convertFileNameToTag(`_${this.file.project}_${this.file.shortName}`);
        const instance = ifr.contentDocument.body.querySelector(tag);
        if (instance) {
          this.addFA(ifr);
          this.addTooltip(ifr);
          this.addNav3(ifr, instance);
        }
      }
    });
  }
  addTooltip(ifr) {
    if (!ifr || !ifr.contentDocument || !ifr.contentWindow) return;
    if (!ifr.contentWindow.customElements.get("collab-tooltip")) {
      ifr.contentWindow.customElements.define("collab-tooltip", window["l4_html"].MlsTooltip);
    }
    ifr.contentWindow.customElements.whenDefined("collab-tooltip").then(() => {
      if (!ifr.contentDocument) return;
      const collaTbTooltip = document.createElement("collab-tooltip");
      ifr.contentDocument.body.appendChild(collaTbTooltip);
    });
  }
  addNav3(ifr, instance) {
    if (!ifr || !ifr.contentDocument || !ifr.contentWindow) return;
    if (!ifr.contentWindow.customElements.get("mls-nav3-100529")) {
      ifr.contentWindow.customElements.define("mls-nav3-100529", window["l4_html"]._100529_mls_nav3);
    }
    ifr.contentWindow.customElements.whenDefined("mls-nav3-100529").then(() => {
      if (!ifr.contentDocument) return;
      const collabNav = document.createElement("collab-nav");
      collabNav.style.position = "relative";
      collabNav.style.width = "100%";
      collabNav.style.display = "block";
      collabNav["mlsWidget"] = instance;
      const mlsnav3 = document.createElement("mls-nav3-100529");
      mlsnav3.setAttribute("is-mls2", "true");
      collabNav.appendChild(mlsnav3);
      ifr.contentDocument.body.insertBefore(collabNav, instance);
    });
  }
  addFA(ifr) {
    if (!ifr || !ifr.contentDocument || !ifr.contentWindow) return;
    const styleFA = document.createElement("link");
    styleFA.rel = "stylesheet";
    styleFA.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
    styleFA.type = "text/css";
    ifr.contentDocument.head.appendChild(styleFA);
  }
  removeOlderStyle(ifr) {
    const id = this.getIdStyle();
    if (!ifr.contentDocument || !id) return;
    const st = ifr.contentDocument.body.querySelectorAll(`#${id}`);
    st.forEach((s) => s.remove());
  }
  removeOlderTokens(ifr) {
    const id = this.getIdTokens();
    if (!ifr.contentDocument || !id) return;
    const st = ifr.contentDocument.body.querySelectorAll(`#${id}`);
    st.forEach((s) => s.remove());
  }
  mountCSS(info, ifr) {
    try {
      if (!ifr.contentDocument) return;
      this.removeOlderStyle(ifr);
      let cls = "";
      if (this.mode === "m") cls = this.scrollMobile;
      const css2 = info.css.join(" \n");
      const style = document.createElement("style");
      style.textContent = css2 + " \n" + cls;
      style.id = this.getIdStyle();
      ifr.contentDocument.body.className = "scroll-custom";
      ifr.contentDocument.body.style.width = "98%";
      ifr.contentDocument.body.appendChild(style);
    } catch (e) {
      console.info("Error mountCSS: " + e.message);
    }
  }
  getIdStyle() {
    if (!this.mfile) return "";
    return "_" + this.mfile.project + "_" + this.mfile.shortName;
  }
  getIdTokens() {
    if (!this.mfile) return "ds_tokens";
    return "_" + this.mfile.project + "_ds_tokens";
  }
  mountTokens(info, ifr) {
    try {
      if (!ifr.contentDocument) return;
      this.removeOlderTokens(ifr);
      const css2 = info.tokens[0];
      const style = document.createElement("style");
      style.textContent = css2;
      style.id = this.getIdTokens();
      ifr.contentDocument.body.appendChild(style);
    } catch (e) {
      console.info("Error mountTokens: " + e.message);
    }
  }
  changeWidthP(e) {
    const el = e.target;
    if (!el) return;
    if (el.value === "" || +el.value < 200) return;
    this.widthP = el.value;
  }
  changeHeightP(e) {
    const el = e.target;
    if (!el) return;
    if (el.value === "" || +el.value < 250) return;
    this.heightP = el.value;
  }
  showLoader(show) {
    clearTimeout(this.timeShow);
    this.timeShow = setTimeout(() => {
      if (!this.father) return;
      this.father.loading = show;
    }, 200);
  }
  verifyWC() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      if (!project) throw new Error("No project selected");
      this.infoDS = {
        ds: mls.l3.getDSInstance(project, 0),
        level: +this.level,
        project
      };
      let comp;
      yield this.infoDS.ds.init();
      mls.actual[0].setFullName(this.page);
      const info = mls.actual[0];
      const compName = `_${info.project}_${info.path}`;
      if (this.infoDS.ds && this.infoDS.ds.components) comp = this.infoDS.ds.components.find(compName);
      if (comp) return true;
      const isAWebComponent = yield this.checkIfIsAWebComponent(compName);
      if (!isAWebComponent) return false;
      yield this.addComponent(compName, this.infoDS.ds);
      return !!comp;
    });
  }
  checkIfIsAWebComponent(widget) {
    return __async(this, null, function* () {
      mls.actual[0].setFullName(widget);
      const { project, path } = mls.actual[0];
      if (!project || !path) return false;
      if (path === "servicePreviewView") return false;
      const model = mls.l2.editor.get({ project, shortName: path });
      if (!model) return false;
      const file = model.storFile;
      if (!file) return false;
      const content = yield file.getContent();
      if (typeof content !== "string") return false;
      const regex = /css\`\[\[mls_getDefaultDesignSystem\]\]\`/;
      if (regex.test(content)) return true;
      return false;
    });
  }
  getGroup(widget) {
    return __async(this, null, function* () {
      const defaultGroup = "other";
      mls.actual[0].setFullName(widget);
      const model = mls.l2.editor.get({ project: mls.actual[0].project, shortName: mls.actual[0].path });
      if (!model || !model.compilerResults) return defaultGroup;
      const { variables } = model.compilerResults.tripleSlashMLS;
      if (!variables) return defaultGroup;
      const { groupName } = variables;
      if (!groupName) return defaultGroup;
      return groupName;
    });
  }
  addComponent(name, ds) {
    return __async(this, null, function* () {
      if (!name || !ds) return;
      const group = yield this.getGroup(name);
      const componentName = name;
      const widget = {
        docPath: "",
        examples: [],
        group,
        l4MarketingRef: "",
        name: componentName,
        reference: void 0,
        styles: [],
        tags: [],
        widgetExampleRef: {
          path: "",
          tagname: ""
        }
      };
      try {
        yield ds.components.add(widget);
      } catch (err) {
        const msg = "Error on add component in design system";
        this.error = msg;
        throw new Error("Error on add component in design system");
      }
    });
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "father", _father_dec, ServicePreviewView);
__decorateElement(_init, 5, "page", _page_dec, ServicePreviewView);
__decorateElement(_init, 5, "mode", _mode_dec, ServicePreviewView);
__decorateElement(_init, 5, "level", _level_dec, ServicePreviewView);
__decorateElement(_init, 5, "isDsComponent", _isDsComponent_dec, ServicePreviewView);
__decorateElement(_init, 5, "watch", _watch_dec, ServicePreviewView);
__decorateElement(_init, 5, "stylechanged", _stylechanged_dec, ServicePreviewView);
__decorateElement(_init, 5, "error", _error_dec, ServicePreviewView);
__decorateElement(_init, 5, "lastCompiledUrl", _lastCompiledUrl_dec, ServicePreviewView);
__decorateElement(_init, 5, "widthP", _widthP_dec, ServicePreviewView);
__decorateElement(_init, 5, "heightP", _heightP_dec, ServicePreviewView);
ServicePreviewView = __decorateElement(_init, 0, "ServicePreviewView", _ServicePreviewView_decorators, ServicePreviewView);
ServicePreviewView.styles = css`
        :host{
            position:relative;
        }

        .watchDesktop{
            position: absolute;
            background: white;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 2px;
            top: 3px;
            right: 46px;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .groupSetMobile{
            display:flex;
            width:300px;
            gap:.8rem;
            justify-content: center;
            align-items: center;
            margin-bottom:1rem;
        }

        .groupSetMobile div{
            display:flex;
            flex-direction: column;
            
        }

        .groupSetMobile label{
            font-size:.8rem;
            font-weight:bold;
        }

        .groupSetMobile input{
            border:1px solid #cac7c7;
            outline:none;
            width:100px;
            height:20px;
            border-radius:5px;
        }

        .phone {
            z-index: 1;
            padding: 0 0.5rem;
            border: 0.25rem solid #404040;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            //box-shadow: 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
            box-shadow:0px 5px 3px 3px rgba(0, 0, 0, 0.3);
            background:white;
        }

        .phone_mic {
            height: 0.25rem;
            width: 4rem;
            margin: 1rem auto;
            border-radius: 999rem;
            background-color: #505050;
        }

        .phone_screen {
            position: relative;
            flex: 1 0 auto;
            border: 1px solid #505050;
            border-radius:5px;
        }

        .phone_screen iframe{
            border-radius:5px;
        }
        
        .phone_button {
            width: 1.5rem;
            height: 1.5rem;
            border: 2px solid #505050;
            border-radius: 50%;
            margin: 1rem auto;
        }
    
    `;
__runInitializers(_init, 1, ServicePreviewView);
export {
  ServicePreviewView,
  initServicePreviewView
};
