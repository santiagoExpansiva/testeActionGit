var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
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
var _currentScenario_dec, _lastPluginIdAdd_dec, _filterTerm_dec, _avaliablePlugins_dec, _userPlugins_dec, _a, _ServicePlugins_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  installPlugin: "Instalar plugin",
  createNewPlugin: "Criar novo plugin",
  backList: "Voltar \uFFFD lista",
  noPluginsInstalled: "Nenhum plugin instalado",
  desactivate: "Desativar",
  activate: "Ativar",
  delete: "Excluir",
  reference: "Refer\uFFFDncia",
  noPluginsAvaliables: "Nenhum plugin dispon\uFFFDvel",
  install: "Instalar",
  p1: "O que s\uFFFDo plugins?",
  p2: "Plugins s\uFFFDo trechos de c\uFFFDdigo que incorporam funcionalidades adicionais ao seu projeto. Eles s\uFFFDo desenvolvidos para estender e aprimorar as capacidades do seu projeto.",
  p3: "Como os plugins funcionam?",
  p4: "Quando voc\uFFFD instala e ativa um plugin, ele introduz novos recursos ou funcionalidades ao seu projeto. Os plugins podem modificar a maneira como o seu projeto opera, adicionando novas op\uFFFD\uFFFDes de configura\uFFFD\uFFFDo, intelig\uFFFDncia artificial, widgets, c\uFFFDdigos curtos, entre outras funcionalidades.",
  p5: "Onde encontrar plugins?",
  p6: 'Voc\uFFFD pode localizar plugins diretamente no (L5) do seu projeto, na se\uFFFD\uFFFDo de Servi\uFFFDos (Service) chamado "Plugins". Neste local, \uFFFD poss\uFFFDvel gerenciar e adicionar novos plugins ao seu projeto.',
  p7: "Como criar um plugin?",
  p8: "Para criar um plugin..."
};
const message_en = {
  installPlugin: "Install plugin",
  createNewPlugin: "Create new plugin",
  backList: "Back list",
  noPluginsInstalled: "No plugins  installed",
  desactivate: "Desactivate",
  activate: "Activate",
  delete: "Delete",
  reference: "Reference",
  noPluginsAvaliables: "No plugins avaliables",
  install: "Install",
  p1: "What are plugins?",
  p2: "Plugins are snippets of code that incorporate additional functionality into your project. They are developed to extend and enhance your projects capabilities.",
  p3: "How do plugins work?",
  p4: "When you install and activate a plugin, it introduces new features or functionality to your project. Plugins can modify the way your project operates, adding new configuration options, artificial intelligence, widgets, short codes, among other features.",
  p5: "Where to find plugins?",
  p6: 'You can find plugins directly in (L5) of your project, in the Services section called "Plugins". Here, you can manage and add new plugins to your project.',
  p7: "How to create a plugin?",
  p8: "To create a plugin..."
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServicePlugins_decorators = [customElement("service-plugins-100554")];
class ServicePlugins extends (_a = ServiceBase, _userPlugins_dec = [property({ type: Array })], _avaliablePlugins_dec = [property({ type: Array })], _filterTerm_dec = [property({ type: String })], _lastPluginIdAdd_dec = [property({ type: Number })], _currentScenario_dec = [property({ type: String })], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.userPlugins = __runInitializers(_init, 8, this, this.getUserPluginsByProject(this.project)), __runInitializers(_init, 11, this);
    this.avaliablePlugins = __runInitializers(_init, 12, this, this.getAvaliablePlugins(this.project)), __runInitializers(_init, 15, this);
    this.filterTerm = __runInitializers(_init, 16, this, ""), __runInitializers(_init, 19, this);
    this.lastPluginIdAdd = __runInitializers(_init, 20, this, -1), __runInitializers(_init, 23, this);
    this.currentScenario = __runInitializers(_init, 24, this, "list"), __runInitializers(_init, 27, this);
    this.details = {
      icon: "&#xf1e6",
      state: "foreground",
      tooltip: "Plugins",
      visible: true,
      position: "all",
      widget: "_100554_servicePlugins",
      level: [5]
    };
    this.onClickLink = (op) => {
      if (op === "opPlugins") return this.showInitial();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Plugins",
      actions: {},
      icons: {},
      actionDefault: "opPlugins",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink
    };
  }
  get project() {
    return window["mls"] ? mls.actual[5].project : 0;
  }
  showInitial() {
    return true;
  }
  onServiceClick(visible, reinit) {
    if (visible && reinit) {
      this.userPlugins = this.getUserPluginsByProject(this.project);
      this.avaliablePlugins = this.getAvaliablePlugins(this.project);
      this.currentScenario = "list";
    }
  }
  getExamplesPlugins() {
    return [
      // Exemplos de plugins comuns do WordPress
      { prjID: 1, name: "SEO Optimizer", description: "Enhances your site's SEO.", category: "SEO", ref: "https://example.com/plugin/seo-optimizer", status: "active" },
      { prjID: 2, name: "Contact Form Builder", description: "Create custom contact forms.", category: "Forms", ref: "https://example.com/plugin/contact-form-builder", status: "inactive" },
      { prjID: 3, name: "Social Media Integration", description: "Integrate social media platforms.", category: "Social Media", ref: "https://example.com/plugin/social-media-integration", status: "active" },
      { prjID: 4, name: "E-commerce Solution", description: "Manage your online store.", category: "E-commerce", ref: "https://example.com/plugin/e-commerce-solution", status: "active" },
      { prjID: 5, name: "Event Calendar", description: "Schedule and display events.", category: "Event Management", ref: "https://example.com/plugin/event-calendar", status: "inactive" },
      { prjID: 6, name: "Gallery Manager", description: "Create and manage image galleries.", category: "Media", ref: "https://example.com/plugin/gallery-manager", status: "active" },
      { prjID: 7, name: "Advanced Analytics", description: "Provides detailed analytics for your site.", category: "Analytics", ref: "https://example.com/plugin/advanced-analytics", status: "active" },
      { prjID: 8, name: "Backup and Restore", description: "Back up and restore your site data.", category: "Utilities", ref: "https://example.com/plugin/backup-restore", status: "inactive" },
      { prjID: 9, name: "Custom CSS Editor", description: "Edit the CSS of your site directly.", category: "Design", ref: "https://example.com/plugin/custom-css-editor", status: "active" },
      { prjID: 10, name: "Drag and Drop Builder", description: "Build your pages with a drag and drop interface.", category: "Page Builder", ref: "https://example.com/plugin/drag-drop-builder", status: "active" },
      { prjID: 11, name: "Email Marketing Integration", description: "Integrate email marketing services.", category: "Marketing", ref: "https://example.com/plugin/email-marketing", status: "active" },
      { prjID: 12, name: "Fast Cache Cleaner", description: "Speed up your site by cleaning cache.", category: "Performance", ref: "https://example.com/plugin/fast-cache-cleaner", status: "inactive" },
      { prjID: 13, name: "Google Maps Embed", description: "Embed Google Maps in your site.", category: "Maps", ref: "https://example.com/plugin/google-maps-embed", status: "active" },
      { prjID: 14, name: "Help Desk Support", description: "Add a help desk system to your site.", category: "Support", ref: "https://example.com/plugin/help-desk-support", status: "inactive" },
      { prjID: 15, name: "Image Optimizer", description: "Optimize images for better performance.", category: "Media", ref: "https://example.com/plugin/image-optimizer", status: "active" },
      { prjID: 16, name: "Job Board", description: "Create a job board for your site.", category: "Business", ref: "https://example.com/plugin/job-board", status: "active" },
      { prjID: 17, name: "Knowledge Base", description: "Build a knowledge base for your users.", category: "Content", ref: "https://example.com/plugin/knowledge-base", status: "inactive" },
      { prjID: 18, name: "Live Chat", description: "Enable live chat support on your site.", category: "Communication", ref: "https://example.com/plugin/live-chat", status: "active" },
      { prjID: 19, name: "Membership Management", description: "Manage user memberships on your site.", category: "Community", ref: "https://example.com/plugin/membership-management", status: "inactive" },
      { prjID: 20, name: "Newsletter Subscription", description: "Allow users to subscribe to your newsletters.", category: "Marketing", ref: "https://example.com/plugin/newsletter-subscription", status: "active" },
      { prjID: 21, name: "Online Booking", description: "Manage online bookings and appointments.", category: "Booking", ref: "https://example.com/plugin/online-booking", status: "active" },
      { prjID: 22, name: "Payment Gateway Integration", description: "Integrate various payment gateways.", category: "E-commerce", ref: "https://example.com/plugin/payment-gateway", status: "inactive" },
      { prjID: 23, name: "Quiz and Survey", description: "Create quizzes and surveys for your users.", category: "Interactive", ref: "https://example.com/plugin/quiz-survey", status: "active" },
      { prjID: 24, name: "Related Posts", description: "Show related posts at the end of each article.", category: "Content", ref: "https://example.com/plugin/related-posts", status: "inactive" },
      { prjID: 25, name: "Security Firewall", description: "Enhance the security of your site.", category: "Security", ref: "https://example.com/plugin/security-firewall", status: "active" },
      { prjID: 26, name: "SEO Friendly URLs", description: "Generate SEO friendly URLs for your site.", category: "SEO", ref: "https://example.com/plugin/seo-friendly-urls", status: "inactive" },
      { prjID: 27, name: "Social Sharing Buttons", description: "Add social sharing buttons to your posts.", category: "Social Media", ref: "https://example.com/plugin/social-sharing-buttons", status: "active" },
      { prjID: 28, name: "Theme Customizer", description: "Customize the look and feel of your site.", category: "Design", ref: "https://example.com/plugin/theme-customizer", status: "inactive" },
      { prjID: 29, name: "User Profile Editor", description: "Let users edit their profiles on your site.", category: "User Management", ref: "https://example.com/plugin/user-profile-editor", status: "active" },
      { prjID: 30, name: "Video Embedder", description: "Easily embed videos into your posts.", category: "Media", ref: "https://example.com/plugin/video-embedder", status: "inactive" }
    ];
  }
  backListClicked() {
    this.changeScenario("list");
  }
  installPluginClicked() {
    this.changeScenario("add");
  }
  createNewPluginClicked() {
    this.changeScenario("help");
  }
  searchInputChanged(event) {
    const searchTerm = event.target.value;
    this.filterTerm = searchTerm;
    const plugins = this.filterPlugins(this.getUserPluginsByProject(this.project));
    this.userPlugins = plugins;
  }
  activateClicked(plugin) {
    console.log("Activate clicked for:", plugin.name);
    this.changeStatus(this.project, plugin.prjID, "active");
    this.userPlugins = this.getUserPluginsByProject(this.project);
  }
  deactivateClicked(plugin) {
    console.info("Deactivate clicked for:", plugin.name);
    this.changeStatus(this.project, plugin.prjID, "inactive");
    this.userPlugins = this.getUserPluginsByProject(this.project);
  }
  deleteClicked(plugin) {
    console.log("Delete clicked for:", plugin.name);
    this.deletePlugin(this.project, plugin.prjID);
    this.userPlugins = this.getUserPluginsByProject(this.project);
    this.avaliablePlugins = this.getAvaliablePlugins(this.project);
  }
  addPluginClicked(plugin) {
    this.addPlugin(this.project, plugin.prjID);
    this.lastPluginIdAdd = plugin.prjID;
    this.userPlugins = this.getUserPluginsByProject(this.project);
    this.avaliablePlugins = this.getAvaliablePlugins(this.project);
    this.changeScenario("list");
    setTimeout(() => {
      this.scrollToAddPlugin(plugin.prjID);
    }, 400);
  }
  getAvaliablePlugins(project) {
    const pluginsUser = this.getUserPluginsByProject(project);
    const allPlugins = this.getExamplesPlugins();
    const avaliablePlugins = allPlugins.filter((itemA) => !pluginsUser.some((itemB) => itemB.prjID === itemA.prjID));
    return avaliablePlugins;
  }
  getUserPlugins() {
    const data = localStorage.getItem("collab-user-plugins");
    const plugins = data ? JSON.parse(data) : {};
    return plugins;
  }
  getUserPluginsByProject(project) {
    let plugins = this.getUserPlugins();
    if (!plugins[project]) return [];
    const rc = this.mergeAndRemoveMissing(this.getExamplesPlugins(), plugins[project]);
    return rc;
  }
  mergeAndRemoveMissing(arr1, arr2) {
    const filteredArr1 = arr1.filter((obj1) => arr2.some((obj2) => obj2.prjID === obj1.prjID));
    const mergedArray = filteredArr1.map((obj1) => {
      const matchingObject = arr2.find((obj2) => obj2.prjID === obj1.prjID);
      return __spreadValues(__spreadValues({}, obj1), matchingObject);
    });
    return mergedArray;
  }
  addPlugin(project, pluginId) {
    const userPlugins = __spreadValues({}, this.getUserPlugins());
    if (!userPlugins[project]) userPlugins[project] = [];
    const findPlugin = userPlugins[project].find((item) => item.prjID === pluginId);
    if (findPlugin) throw new Error("Plugin already installed");
    userPlugins[project].push({ prjID: pluginId, status: "active" });
    localStorage.setItem("collab-user-plugins", JSON.stringify(userPlugins));
  }
  changeStatus(project, pluginId, status) {
    const plugins = this.getUserPlugins();
    if (!plugins[project]) plugins[project] = [];
    const findPlugin = plugins[project].find((item) => item.prjID === pluginId);
    if (findPlugin) {
      findPlugin.status = status;
    } else plugins[project].push({ prjID: pluginId, status });
    localStorage.setItem("collab-user-plugins", JSON.stringify(plugins));
  }
  deletePlugin(project, pluginId) {
    const plugins = this.getUserPlugins();
    if (!plugins[project]) plugins[project] = [];
    const index = plugins[project].findIndex((item) => item.prjID === pluginId);
    if (!index) return;
    plugins[project].splice(index, 1);
    localStorage.setItem("collab-user-plugins", JSON.stringify(plugins));
  }
  groupPluginsByCategory(plugins) {
    return plugins.reduce((acc, plugin) => {
      if (!acc[plugin.category]) {
        acc[plugin.category] = [];
      }
      acc[plugin.category].push(plugin);
      return acc;
    }, {});
  }
  filterPlugins(plugins) {
    if (!this.filterTerm.trim()) return plugins;
    const searchTerm = this.filterTerm.toLowerCase();
    return plugins.filter(
      (plugin) => plugin.name.toLowerCase().includes(searchTerm) || plugin.description.toLowerCase().includes(searchTerm) || plugin.ref.toLowerCase().includes(searchTerm)
    );
  }
  changeScenario(scenario) {
    this.currentScenario = scenario;
  }
  scrollToAddPlugin(pluginId) {
    const el = this.shadowRoot.querySelector(`[plugin-id="${pluginId}"`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  renderHeader() {
    return html` <div>${this.currentScenario === "list" ? html`
                <div class="header">
                    <div>
                        <button @click="${this.installPluginClicked}">${this.msg.installPlugin}</button>
                        <button @click="${this.createNewPluginClicked}">${this.msg.createNewPlugin}</button>
                    </div>
                    <input type="text" placeholder="Search plugin..." @input="${this.searchInputChanged}">
                </div>
            ` : html`
                    <div class="header">
                        <div>
                            <button @click="${this.backListClicked}">${this.msg.backList}Back List</button>
                        </div>
                    </div>
                `}
                </div>            
        `;
  }
  renderListPlugins() {
    const groupedPlugins = this.groupPluginsByCategory(this.userPlugins);
    const sortedCategories = Object.keys(groupedPlugins).sort();
    return html`
        <h4 style="${sortedCategories.length === 0 ? "display:block" : "display:none"}">${this.msg.noPluginsInstalled}</h4>
        <ul class="plugin-list">
            ${sortedCategories.map((category) => html`
                <li class="headerCategory">
                    <details open ">
                        <summary>${category}</summary>
                            ${groupedPlugins[category].map((plugin) => html`
                                <div
                                plugin-id="${plugin.prjID}"
                                class="${plugin.status === "active" ? "plugin active" : "plugin"}"
                                style="${plugin.prjID === this.lastPluginIdAdd ? "background:#edffed" : ""}"
                                
                                >
                                    <div class= "plugin-title">
                                        <h3>${plugin.name}</h3>
                                        <div class="plugin-actions">
                                            ${plugin.status === "active" ? html`<a  href="#" @click="${(e) => {
      e.preventDefault();
      this.deactivateClicked(plugin);
    }}">${this.msg.desactivate}</a>` : html`<a  href="#" @click="${(e) => {
      e.preventDefault();
      this.activateClicked(plugin);
    }}">${this.msg.activate}</a>`}
                                            <a href="#" @click="${(e) => {
      e.preventDefault();
      this.deleteClicked(plugin);
    }}">${this.msg.delete}</a>
                                        </div>
                                    </div>
                                    <div class="plugin-info">    
                                        <p>${plugin.description}</p>
                                        <p><strong>${this.msg.reference}:</strong> ${plugin.ref}</p>
                                    </div>
                                </div>
                            `)}
                    </details>
                </li>        
            `)}
        </ul>
    `;
  }
  renderListAvaliablePlugins() {
    const groupedPlugins = this.groupPluginsByCategory(this.avaliablePlugins);
    const sortedCategories = Object.keys(groupedPlugins).sort();
    return html`
        <h4 style="${sortedCategories.length === 0 ? "display:block" : "display:none"}">${this.msg.noPluginsAvaliables}!</h4>
        
        <ul class="plugin-list">
            ${sortedCategories.map((category) => html`
                <li class="headerCategory">
                    <details open ">
                        <summary>${category}</summary>
                            ${groupedPlugins[category].map((plugin) => html`
                                <div class="plugin">
                                    <div class= "plugin-title">
                                        <h3>${plugin.name}</h3>
                                        <div class="plugin-actions">
                                            <a href="#" @click="${(e) => {
      e.preventDefault();
      this.addPluginClicked(plugin);
    }}">${this.msg.install}</a>
                                        </div>
                                    </div>
                                    <div class="plugin-info">    
                                        <p>${plugin.description}</p>
                                        <p><strong>${this.msg.reference}:</strong> ${plugin.ref}</p>
                                    </div>
                                </div>
                            `)}
                    </details>
                </li>        
            `)}
        </ul>
    `;
  }
  renderHelper() {
    return html`
            <h2>${this.msg.p1}</h2>
            <p>${this.msg.p2}</p>
            <h2>${this.msg.p3}</h2>
            <p>${this.msg.p4}</p>

            <h2>${this.msg.p5}</h2>
            <p>${this.msg.p6}</p>

            <h2>${this.msg.p7}</h2>
            <p>${this.msg.p8}</p>
        `;
  }
  renderScenario() {
    switch (this.currentScenario) {
      case "list":
        return html`
                    ${this.renderHeader()}
                    ${this.renderListPlugins()}
                `;
      case "add":
        return html`
                    ${this.renderHeader()}
                    ${this.renderListAvaliablePlugins()}
                `;
      case "help":
        return html`
                    ${this.renderHeader()}
                    ${this.renderHelper()}
                `;
    }
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            <section>
                ${this.renderScenario()}
            </section>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "userPlugins", _userPlugins_dec, ServicePlugins);
__decorateElement(_init, 5, "avaliablePlugins", _avaliablePlugins_dec, ServicePlugins);
__decorateElement(_init, 5, "filterTerm", _filterTerm_dec, ServicePlugins);
__decorateElement(_init, 5, "lastPluginIdAdd", _lastPluginIdAdd_dec, ServicePlugins);
__decorateElement(_init, 5, "currentScenario", _currentScenario_dec, ServicePlugins);
ServicePlugins = __decorateElement(_init, 0, "ServicePlugins", _ServicePlugins_decorators, ServicePlugins);
ServicePlugins.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServicePlugins);
export {
  ServicePlugins
};
