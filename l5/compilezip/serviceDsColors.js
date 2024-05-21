var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __reflectGet = Reflect.get;
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
var _select_theme_dec, _service_color_inp_themename_dec, _service_color_inp_themedesc_dec, _service_color_revert_dec, _service_color_update_dec, _service_color_delete_dec, _service_color_add_dec, _newDataTokens_dec, _themeList_dec, _showAddContainer_dec, _a, _ServiceDsColors100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  themes: "Temas",
  deleteThisTheme: "Deletar este tema",
  updateThisTheme: "Atualizar este tema",
  revertTokensToOriginal: "Reverter tokens para o original",
  addTheme: "Adicionar tema",
  themeName: "Nome do tema",
  description: "Descri\uFFFD\uFFFDo",
  confirm: "Confirmar",
  cancel: "Cancelar"
};
const message_en = {
  themes: "Themes",
  deleteThisTheme: "Delete this theme",
  updateThisTheme: "Update this theme",
  revertTokensToOriginal: "Revert tokens to original",
  addTheme: "Add theme",
  themeName: "Theme name",
  description: "Description",
  confirm: "Confirm",
  cancel: "Cancel"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsColors100554_decorators = [customElement("service-ds-colors-100554")];
let _ServiceDsColors100554 = class _ServiceDsColors100554 extends (_a = ServiceBase, _showAddContainer_dec = [property()], _themeList_dec = [property()], _newDataTokens_dec = [property()], _service_color_add_dec = [query("#service_color_add")], _service_color_delete_dec = [query("#service_color_delete")], _service_color_update_dec = [query("#service_color_update")], _service_color_revert_dec = [query("#service_color_revert")], _service_color_inp_themedesc_dec = [query("#service_color_inp_themedesc")], _service_color_inp_themename_dec = [query("#service_color_inp_themename")], _select_theme_dec = [query("#select_theme")], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf53f",
      state: "foreground",
      tooltip: "Colors",
      visible: false,
      position: "right",
      tags: ["ds_tokens"],
      widget: "_100554_serviceDsColors",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opHelper") return this.showHelper();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Colors",
      actions: {
        opHelper: "Colors"
      },
      icons: {},
      actionDefault: "opHelper",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.themes = {};
    this.showAddContainer = __runInitializers(_init, 8, this, false), __runInitializers(_init, 11, this);
    this.themeList = __runInitializers(_init, 12, this, []), __runInitializers(_init, 15, this);
    this.newDataTokens = __runInitializers(_init, 16, this, {}), __runInitializers(_init, 19, this);
    this.defaultThemeList = [];
    this.userThemeList = [];
    this.selectedTheme = "default";
    this.keysName = {
      default: "",
      lightAiry: "Light and Airy",
      minimalist: "Minimalist Monochrome",
      vibrantenergetic: "Vibrant and Energetic",
      pasteldream: "Pastel Dream",
      retrovibes: "Retro Vibes",
      nature: "Nature-Inspired",
      urbanchic: "Urban Chic",
      sunsetgradient: "Sunset Gradient",
      oceandepths: "Ocean Depths"
    };
    this.mythemes = {
      lightAiry: {
        isdefault: true,
        description: "This theme uses light and soft tones to create a sense of lightness and space.",
        tokens: [
          { key: "text-primary-color-lighter", value: "#91a9d3", category: "color" },
          { key: "text-primary-color", value: "#1890FF", category: "color" },
          { key: "text-primary-color-darker", value: "#0C53B7", category: "color" },
          { key: "text-secondary-color-lighter", value: "#F0F5FF", category: "color" },
          { key: "text-secondary-color", value: "#096DD9", category: "color" },
          { key: "text-secondary-color-darker", value: "#054A91", category: "color" },
          { key: "bg-primary-color-lighter", value: "#F4F8FF", category: "color" },
          { key: "bg-primary-color", value: "#E6F7FF", category: "color" },
          { key: "bg-primary-color-darker", value: "#D6E4FF", category: "color" },
          { key: "bg-secondary-color-lighter", value: "#F0F5FF", category: "color" },
          { key: "bg-secondary-color", value: "#BAE7FF", category: "color" },
          { key: "bg-secondary-color-darker", value: "#91D5FF", category: "color" },
          { key: "grey-color-lighter", value: "#F5F5F5", category: "color" },
          { key: "grey-color-light", value: "#D9D9D9", category: "color" },
          { key: "grey-color", value: "#BFBFBF", category: "color" },
          { key: "grey-color-dark", value: "#8C8C8C", category: "color" },
          { key: "grey-color-darker", value: "#595959", category: "color" },
          { key: "error-color", value: "#FF4D4F", category: "color" },
          { key: "success-color", value: "#52C41A", category: "color" },
          { key: "warning-color", value: "#FAAD14", category: "color" },
          { key: "info-color", value: "#1890FF", category: "color" },
          { key: "active-color", value: "#1890FF", category: "color" },
          { key: "link-color", value: "#1890FF", category: "color" },
          { key: "link-hover-color", value: "#40A9FF", category: "color" },
          { key: "_dark-text-primary-color-lighter", value: "#e7ebee", category: "color" },
          { key: "_dark-text-primary-color", value: "#1890FF", category: "color" },
          { key: "_dark-text-primary-color-darker", value: "#40A9FF", category: "color" },
          { key: "_dark-text-secondary-color-lighter", value: "#002140", category: "color" },
          { key: "_dark-text-secondary-color", value: "#096DD9", category: "color" },
          { key: "_dark-text-secondary-color-darker", value: "#40A9FF", category: "color" },
          { key: "_dark-bg-primary-color-lighter", value: "#001529", category: "color" },
          { key: "_dark-bg-primary-color", value: "#002140", category: "color" },
          { key: "_dark-bg-primary-color-darker", value: "#002855", category: "color" },
          { key: "_dark-bg-secondary-color-lighter", value: "#001529", category: "color" },
          { key: "_dark-bg-secondary-color", value: "#002140", category: "color" },
          { key: "_dark-bg-secondary-color-darker", value: "#002855", category: "color" },
          { key: "_dark-grey-color-lighter", value: "#F5F5F5", category: "color" },
          { key: "_dark-grey-color-light", value: "#D9D9D9", category: "color" },
          { key: "_dark-grey-color", value: "#BFBFBF", category: "color" },
          { key: "_dark-grey-color-dark", value: "#8C8C8C", category: "color" },
          { key: "_dark-grey-color-darker", value: "#595959", category: "color" },
          { key: "_dark-error-color", value: "#FF4D4F", category: "color" },
          { key: "_dark-success-color", value: "#52C41A", category: "color" },
          { key: "_dark-warning-color", value: "#FAAD14", category: "color" },
          { key: "_dark-info-color", value: "#1890FF", category: "color" },
          { key: "_dark-active-color", value: "#1890FF", category: "color" },
          { key: "_dark-link-color", value: "#1890FF", category: "color" },
          { key: "_dark-link-hover-color", value: "#40A9FF", category: "color" }
        ]
      }
    };
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
  showHelper() {
    return true;
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSColorChanged"], (ev) => {
      const visible = this.visible === "true";
      if (!visible) return;
      this.onDSColorChanged(ev);
    });
    mls.events.addEventListener([3], ["DSTokenSelected"], (ev) => {
      this.showNav2Item(true);
    });
    mls.events.addEventListener([3], ["DSTokenUnSelected"], (ev) => {
      this.showNav2Item(false);
    });
  }
  init() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) return;
      this.ds = mls.l3.getDSInstance(project, mode);
      if (!this.ds) return;
      yield this.ds.init();
      this.getThemes();
      this.updateActualTokens();
      if (this.actualTokens) this.getColorsItem(this.actualTokens["default"]);
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_ServiceDsColors100554.prototype, this, "connectedCallback").call(this);
      this.loading = true;
      yield this.init();
      this.loading = false;
    });
  }
  setTooltip() {
    if (!this.tooltipEl) return;
    if (this.tooltipEl) this.tooltipEl.tooltip(this.service_color_add);
    if (this.tooltipEl) this.tooltipEl.tooltip(this.service_color_delete);
    if (this.tooltipEl) this.tooltipEl.tooltip(this.service_color_update);
    if (this.tooltipEl) this.tooltipEl.tooltip(this.service_color_revert);
  }
  getThemes() {
    return __async(this, null, function* () {
      this.themeList = yield this.getAllThemes();
      this.themeList.unshift("default");
      this.themes = __spreadValues({}, this.mythemes);
    });
  }
  getAllThemes() {
    return __async(this, null, function* () {
      this.defaultThemeList = this.getThemesDefault();
      this.userThemeList = yield this.getUserThemes();
      const mergedThemes = this.mergeThemes(this.userThemeList, this.defaultThemeList);
      return mergedThemes;
    });
  }
  getThemesDefault() {
    return Object.keys(this.mythemes);
  }
  getUserThemes() {
    return __async(this, null, function* () {
      var _a2;
      const themes = yield ((_a2 = this.ds) == null ? void 0 : _a2.tokens)["getThemeList"]();
      return themes;
    });
  }
  mergeThemes(userThemes, defaultThemes) {
    return [...userThemes, ...defaultThemes];
  }
  getTokens(tokens) {
    const themes = {};
    tokens.forEach((token) => {
      const themeName = "default";
      if (!themes[themeName]) {
        themes[themeName] = {
          isdefault: true,
          tokens: [],
          description: ""
        };
      }
      themes[themeName].tokens.push(token);
    });
    return themes;
  }
  onDSColorChanged(ev) {
    console.info("onDSColorChanged");
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.emitter !== "left") return;
    const [key, value, mode] = params.value.split(";");
    if (mode === "line") {
      this.scrollToKey(key);
      return;
    }
    if (mode === "helper") return;
    this.updateActualTokens();
    this.scrollToKey(key);
    if (mode === "refresh") return;
    this.onChangeTokens();
  }
  scrollToKey(key) {
    if (key.startsWith("[")) return;
    setTimeout(() => {
      if (!this.shadowRoot) return;
      const allelements = this.shadowRoot.querySelectorAll("mls-l3-color-item");
      allelements.forEach((el) => el.classList.remove("active"));
      let element = this.shadowRoot.querySelector(`mls-l3-color-item[key="${key}"]`);
      if (!element) element = this.shadowRoot.querySelector(`mls-l3-color-item[keydark="${key}"]`);
      if (!element) return;
      element.classList.add("active");
    }, 300);
  }
  updateActualTokens() {
    if (!this.ds) return;
    const tokens = this.ds.tokens.list;
    const arrTokens = Object.keys(tokens).map((tok) => tokens[tok]);
    const onlyColorsTokens = arrTokens.filter((tok) => tok.category === "color");
    this.actualTokens = this.getTokens(onlyColorsTokens);
  }
  getColorsItem(data) {
    this.newDataTokens = {};
    data.tokens.forEach((token) => {
      if (!token.key || !token.value) return;
      const isDark = token.key.startsWith("_dark-");
      const key = isDark ? token.key.substring(6, token.key.length) : token.key;
      if (!this.newDataTokens[key]) this.newDataTokens[key] = { light: "", dark: "" };
      this.newDataTokens[key][isDark ? "dark" : "light"] = token.value;
    });
  }
  onChangeTokens(fireEvent = false) {
    return __async(this, null, function* () {
      this.setError("");
      if (!this.actualTokens) return;
      if (this.selectedTheme === "default") {
        this.getColorsItem(this.actualTokens["default"]);
        return;
      }
      if (this.selectedTheme && !this.themes[this.selectedTheme] && this.ds) {
        const theme = yield this.ds.tokens["getTheme"](this.selectedTheme);
        theme.isdefault = false;
        this.themes[this.selectedTheme] = theme;
      }
      if (!fireEvent) {
        if (!this.actualTokens) return;
        this.getColorsItem(this.actualTokens["default"]);
        return;
      }
      this.getColorsItem(this.themes[this.selectedTheme]);
      const allTokens = this.themes[this.selectedTheme].tokens;
      this.actualTokens["default"] = __spreadValues({}, this.themes[this.selectedTheme]);
      const params = {
        emitter: "right",
        value: JSON.stringify(allTokens) + ";;helper"
      };
    });
  }
  onChangeTheme(e) {
    this.setError("");
    const target = e.target;
    const theme = target.value;
    this.selectedTheme = theme;
    this.onChangeTokens(true);
  }
  handleAddThemeClick() {
    this.setError("");
    this.showAddContainer = true;
  }
  onCancelAction() {
    this.showAddContainer = false;
  }
  onConfirmAction() {
    return __async(this, null, function* () {
      this.setError("");
      const onlyLetterNumbers = /^[a-zA-Z0-9]+$/;
      if (!this.service_color_inp_themename || !this.service_color_inp_themedesc) return;
      if (!onlyLetterNumbers.test(this.service_color_inp_themename.value)) {
        this.setError("Theme name accept only letters and numbers!");
        return;
      }
      yield this.saveTheme(this.service_color_inp_themename.value, this.service_color_inp_themedesc.value);
      this.onCancelAction();
    });
  }
  updateTheme() {
    return __async(this, null, function* () {
      var _a2, _b;
      this.setError("");
      if (((_a2 = this.themes[this.selectedTheme]) == null ? void 0 : _a2.isdefault) || this.selectedTheme === "default") {
        this.setError("This is a system theme, cannot be updated!");
        return;
      }
      if (!this.actualTokens || !this.ds) return;
      this.toogleIconOnAction(this.service_color_update, true);
      const theme = {
        description: ((_b = this.themes[this.selectedTheme]) == null ? void 0 : _b.description) || "",
        tokens: this.actualTokens["default"].tokens
      };
      yield this.ds.tokens["updateTheme"](this.selectedTheme, theme);
      this.themes[this.selectedTheme].description = theme.description;
      this.themes[this.selectedTheme].tokens = theme.tokens;
      this.toogleIconOnAction(this.service_color_update, false);
    });
  }
  deleteTheme() {
    return __async(this, null, function* () {
      var _a2;
      this.setError("");
      if (((_a2 = this.themes[this.selectedTheme]) == null ? void 0 : _a2.isdefault) || this.selectedTheme === "default") {
        this.setError("This is a system theme, cannot be deleted!");
        return;
      }
      if (!this.ds) return;
      this.toogleIconOnAction(this.service_color_update, true);
      yield this.ds.tokens["removeTheme"](this.selectedTheme);
      this.selectedTheme = "default";
      yield this.getThemes();
      this.toogleIconOnAction(this.service_color_delete, false);
    });
  }
  saveTheme(themename, description) {
    return __async(this, null, function* () {
      if (!this.actualTokens || !this.ds) return;
      const { tokens } = this.actualTokens["default"];
      const newTheme = {
        description,
        tokens
      };
      yield this.ds.tokens["setTheme"](themename, JSON.stringify(newTheme));
      yield this.getThemes();
    });
  }
  revertTokensColors() {
    return __async(this, null, function* () {
      this.setError("");
      this.toogleIconOnAction(this.service_color_revert, true);
      if (!this.ds || !this.actualTokens) return;
      try {
        const tokens = yield this.ds.tokens["getOriginalTokens"]();
        const tokensColors = tokens.filter((tok) => tok.category === "color");
        this.actualTokens["default"].tokens = tokensColors;
        if (this.select_theme) this.select_theme.value = "default";
        this.getColorsItem(this.actualTokens["default"]);
        const params = {
          emitter: "right",
          value: JSON.stringify(tokensColors) + ";;helper"
        };
      } catch (err) {
        this.setError(err.message);
      } finally {
        this.toogleIconOnAction(this.service_color_revert, false);
      }
    });
  }
  toogleIconOnAction(el, force) {
    const parent = el.closest(".action-item");
    if (!parent) return;
    if (force) parent.classList.add("clicked");
    else {
      setTimeout(() => {
        parent.classList.remove("clicked");
      }, 1e3);
    }
  }
  handleClickColorItem(el) {
    this.setActive(el);
    const input = el.querySelector("input");
    if (!input) return;
    input.click();
  }
  handleInputColorItem(key, e) {
    const target = e.target;
    const container = target.closest("div");
    const value = target.value;
    if (!container) return;
    container.style.backgroundColor = value;
    const params = {
      emitter: "right",
      value: `${key};${value};helper`
    };
    mls.events.fire([3], ["DSColorChanged"], JSON.stringify(params), 0);
  }
  setActive(element) {
    const mlscolor = element.closest("mls-l3-color");
    if (!mlscolor) return;
    const allelements = mlscolor.querySelectorAll("mls-l3-color-item");
    allelements.forEach((el) => el.classList.remove("active"));
    const actualItem = element.closest("mls-l3-color-item");
    if (actualItem) actualItem.classList.add("active");
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.setTooltip();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            <div class="service_tokens_color">
                <fieldset>
                    <legend>${this.msg.themes}</legend>
                    <div class="header">
                        <div class="row-primary ${this.showAddContainer ? "disabled" : ""}">
                            <div>
                                <label>${this.msg.themes}</label>
                                <select id="select_theme" @change=${(e) => {
      this.onChangeTheme(e);
    }}>
                                    ${this.themeList.map((theme) => html`
                                        <option value="${theme}">${this.keysName[theme] || theme}</option>
                                    `)}
                                </select>
                            </div>
                            <div class="actions">
                                <div 
                                id="service_color_add" 
                                data-tooltip="Add new theme" 
                                class="action-item"
                                @click=${() => {
      this.handleAddThemeClick();
    }}>
                                    <i class="fa fa-plus"></i>
                                </div>
                                <div id="service_color_update" data-tooltip="${this.msg.deleteThisTheme}" class="action-item" @click=${() => {
      this.updateTheme();
    }} >
                                    <i class="fa fa-floppy-disk"></i>
                                </div>
                                <div id="service_color_delete" data-tooltip="${this.msg.updateThisTheme}" class="action-item" @click=${() => {
      this.deleteTheme();
    }}>
                                    <i class="fa fa-trash"></i>
                                </div>
                                <div id="service_color_revert" data-tooltip="${this.msg.revertTokensToOriginal}" class="action-item" @click=${() => {
      this.revertTokensColors();
    }}>
                                    <i class="fa fa-undo"></i>
                                </div>
                            </div>
                        </div>
                        <div class="row-form" style="${this.showAddContainer ? "display:block" : "display:none;"}">
                            <fieldset>
                                <legend>${this.msg.addTheme}</legend>
                                <label>${this.msg.themeName}:</label>
                                <input id="service_color_inp_themename">
                                <label>${this.msg.description}:</label>
                                <textarea id="service_color_inp_themedesc" maxlength="200"></textarea>
                            </fieldset>
                            <div>
                                <div id="service_color_confirm" class="action-item" @click=${() => {
      this.onConfirmAction();
    }}>
                                    <i class="fa fa-check" title="${this.msg.confirm}"></i>
                                </div>
                                <div id="service_color_cancel" class="action-item" @click=${() => {
      this.onCancelAction();
    }}>
                                    <i class="fa fa-xmark" title="${this.msg.cancel}"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Colors</legend>
                    <div>
                        <mls-l3-color class="ds-colors-section">
                            <div class="desc"></div>
                            <div class="colors-container">
                                ${Object.entries(this.newDataTokens).map((item) => {
      const [keyname, values] = item;
      const val = values;
      return html`
                    <mls-l3-color-item key=${keyname}>
                        <div class="ds-colors-section-item">
                            <div class="thumbnail">
                                <div
                                    data-tooltip="${val.light}" 
                                    style="background-color: ${val.light}"
                                    @click=${(e) => {
        this.handleClickColorItem(e.target);
      }}
                                    >
                                    <input
                                        type="color"
                                        @input=${(e) => {
        this.handleInputColorItem(keyname, e);
      }}
                                        value="${val.light}">
                                </div>
                                <div
                                    data-tooltip="${val.dark}" 
                                    style="background-color: ${val.dark}"
                                    @click=${(e) => {
        this.handleClickColorItem(e.target);
      }}
                                >
                                    <input
                                    type="color"
                                    @input=${(e) => {
        this.handleInputColorItem(keyname, e);
      }}
                                    value="${val.dark}">
                                </div>
                            </div>
                            <span class="color-token-name">${keyname}</span>
                        </div>
                    
                    </mls-l3-color-item>`;
    })}
                            </div>
                        </mls-l3-color>
                    </div>
                </fieldset>
            </div>
        `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "showAddContainer", _showAddContainer_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "themeList", _themeList_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "newDataTokens", _newDataTokens_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "service_color_add", _service_color_add_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "service_color_delete", _service_color_delete_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "service_color_update", _service_color_update_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "service_color_revert", _service_color_revert_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "service_color_inp_themedesc", _service_color_inp_themedesc_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "service_color_inp_themename", _service_color_inp_themename_dec, _ServiceDsColors100554);
__decorateElement(_init, 5, "select_theme", _select_theme_dec, _ServiceDsColors100554);
_ServiceDsColors100554 = __decorateElement(_init, 0, "ServiceDsColors100554", _ServiceDsColors100554_decorators, _ServiceDsColors100554);
_ServiceDsColors100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceDsColors100554);
let ServiceDsColors100554 = _ServiceDsColors100554;
export {
  ServiceDsColors100554
};
