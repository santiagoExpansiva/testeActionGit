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
var _c2_dec, _msize_dec, _a, _ServiceDsTokens100554_decorators, _init;
import { html, css } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {};
const message_en = {};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsTokens100554_decorators = [customElement("service-ds-tokens-100554")];
let _ServiceDsTokens100554 = class _ServiceDsTokens100554 extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _c2_dec = [query("mls-editor-100529")], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.details = {
      icon: "&#xf0ae",
      state: "foreground",
      tooltip: "Tokens",
      visible: true,
      position: "left",
      tags: ["ds_tokens"],
      widget: "_100554_serviceDsTokens",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opTypography") return this.showTypography();
      if (op === "opCustom") return this.showCustom();
      if (op === "opColors") return this.showColors();
      if (op === "opColors2") return this.showColors2();
      if (op === "opEditor") return this.showResume();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Tokens",
      actions: {
        opColors: "Colors",
        opTypography: "Typography",
        opCustom: "Custom"
      },
      icons: {},
      actionDefault: "opColors2",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.timeoutChangesEditorColor = 0;
    this.timeoutChangesEditorTypography = 0;
    this.timeoutChangesEditorCustom = 0;
    this.models = {
      resume: {},
      color: {},
      custom: {},
      typography: {}
    };
    this.lastLine = {
      resume: void 0,
      color: void 0,
      custom: void 0,
      typography: void 0
    };
    this.tokensColors = [];
    this.tokensTypo = [];
    this.tokensCustom = [];
    this.actualTypeTokens = "color";
    this.lastLineColor = void 0;
    this.isRightChange = false;
    this.setEvents();
  }
  createRenderRoot() {
    return this;
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible) {
        const params = { isComponent: false, service: ["_100529_service_styles_preview"] };
        mls.events.fire([3], ["DSTokenSelected"], JSON.stringify(params), 1e3);
        if (el && typeof el.layout === "function") el.layout();
      } else {
        const params = { isComponent: false, service: [] };
        mls.events.fire([3], ["DSTokenUnSelected"], JSON.stringify(params), 0);
      }
    });
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.createEditor();
  }
  getActualRef() {
    return `_100554_serviceDsTokens_${this.actualTypeTokens}`;
  }
  setEditorSource(tokens, tokensType) {
    return __async(this, null, function* () {
      if (!this.models[tokensType]) return;
      const model = this.models[tokensType];
      const fullRange = model.getFullModelRange();
      const lines = tokens.trim().split("\n");
      const operations = [{
        range: fullRange,
        text: "",
        forceMoveMarkers: true
      }, {
        range: { startLineNumber: 1, startColumn: 1 },
        text: lines.join("\n"),
        forceMoveMarkers: true
      }];
      model.pushEditOperations([], operations, () => []);
      return;
    });
  }
  getEditorSource() {
    var _a2;
    const model = (_a2 = this._ed1) == null ? void 0 : _a2.getModel();
    const val = (model == null ? void 0 : model.getValue()) || "";
    return val;
  }
  setTokens() {
    return __async(this, null, function* () {
      const { resumeTokens, tokensColors, tokensCustom, tokensTypo } = yield this.getTokens();
      this.setInitialModels(resumeTokens, "resume");
      this.setInitialModels(tokensColors, "color");
      this.setInitialModels(tokensCustom, "custom");
      this.setInitialModels(tokensTypo, "typography");
    });
  }
  getTokens() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) throw new Error("No project or design system selected");
      const dss = mls.l5.ds.list(project);
      const dsInfo = dss[mode];
      if (!dsInfo) return { tokensColors: "", tokensTypo: "", tokensCustom: "", resumeTokens: "" };
      this.dsInstance = mls.l3.getDSInstance(project, mode);
      yield this.dsInstance.init();
      const { list } = this.dsInstance.tokens;
      const tokens = [];
      Object.keys(list).forEach((tok) => {
        tokens.push(list[tok]);
      });
      this.tokensColors = tokens.filter((tok) => tok.category === "color");
      this.tokensTypo = tokens.filter((tok) => tok.category === "typography");
      this.tokensCustom = tokens.filter((tok) => tok.category === "custom");
      const strColors = this.tokensColors.map((item) => `@${item.key}: ${item.value};`).join("\n");
      const strTypo = this.tokensTypo.map((item) => `@${item.key}: ${item.value};`).join("\n");
      const strCustom = this.tokensCustom.map((item) => `@${item.key}: ${item.value};`).join("\n");
      const resumeTokens = ["// Tokens Colors", strColors, "// Tokens Typography", strTypo, "//Tokens Custom", strCustom].join("\n");
      return {
        tokensColors: strColors,
        tokensTypo: strTypo,
        tokensCustom: strCustom,
        resumeTokens
      };
    });
  }
  createEditor() {
    if (this.c2) this._ed1 = monaco.editor.create(this.c2, mls.editor.conf["tokens"]);
    this.c2["mlsEditor"] = this._ed1;
    if (this.serviceContent) {
      this.serviceContent.layout();
      this.setMsizeEditor();
    }
  }
  getUri(shortFN) {
    _ServiceDsTokens100554.modelCount = _ServiceDsTokens100554.modelCount + 1 || 1;
    return monaco.Uri.parse(`file://server/${shortFN}_${_ServiceDsTokens100554.modelCount}.ts`);
  }
  setInitialModels(src, model) {
    const uri = this.getUri("l3_tokens");
    this.models[model] = monaco.editor.getModel(uri);
    if (this.models[model]) this.models[model].setValue(src);
    else this.models[model] = monaco.editor.createModel(src, "less", uri);
  }
  showResume() {
    this.menu.title = "Tokens - Resume";
    if (this.menu.updateTitle) this.menu.updateTitle();
    this.showResume2();
    return true;
  }
  showResume2() {
    return __async(this, null, function* () {
      this.actualTypeTokens = "resume";
      const { resumeTokens } = yield this.getTokens();
      this.setInitialModels(resumeTokens, "resume");
      if (!this._ed1) return true;
      this._ed1.setModel(this.models["resume"]);
      this._ed1.updateOptions({ readOnly: true });
      return true;
    });
  }
  showCustom() {
    var _a2;
    this.actualTypeTokens = "custom";
    if (this.menu.setMode) this.menu.setMode("editor");
    if (!this._ed1) return true;
    this._ed1.setModel(this.models["custom"]);
    this._ed1.updateOptions({ readOnly: false });
    mls.events.fire([this.level], ["DSCustomClicked"], "Custom Clicked");
    (_a2 = this._ed1.getModel()) == null ? void 0 : _a2.onDidChangeContent((event) => {
      this.timeoutChangesEditorCustom = setTimeout(() => {
        if (this.timeoutChangesEditorCustom) clearTimeout(this.timeoutChangesEditorCustom);
        this.onEditorCustomChange(event.changes);
      }, 1e3);
    });
    return true;
  }
  showTypography() {
    var _a2;
    this.actualTypeTokens = "typography";
    if (this.menu.setMode) this.menu.setMode("editor");
    if (!this._ed1) return true;
    this._ed1.setModel(this.models["typography"]);
    this._ed1.updateOptions({ readOnly: false });
    (_a2 = this._ed1.getModel()) == null ? void 0 : _a2.onDidChangeContent((event) => {
      this.timeoutChangesEditorTypography = setTimeout(() => {
        if (this.timeoutChangesEditorTypography) clearTimeout(this.timeoutChangesEditorTypography);
        this.onEditorTypoChange(event.changes);
      }, 1e3);
    });
    return true;
  }
  showColors() {
    if (this.menu.setMode) this.menu.setMode("initial");
    return this.showColors2();
  }
  showColors2() {
    this.actualTypeTokens = "color";
    this.setTokens().then(() => {
      var _a2;
      if (!this._ed1) return true;
      this._ed1.setModel(this.models["color"]);
      this._ed1.updateOptions({ readOnly: false });
      const rc = this.getEditorJsonKeyValue("color");
      const params = {
        emitter: "left",
        value: `${JSON.stringify(rc)};${""};${this.isRightChange ? "refresh" : "editor"}`
      };
      mls.events.fire([this.level], ["DSColorChanged"], JSON.stringify(params), 1e3);
      (_a2 = this._ed1.getModel()) == null ? void 0 : _a2.onDidChangeContent((event) => {
        this.timeoutChangesEditorColor = setTimeout(() => {
          if (this.timeoutChangesEditorColor) clearTimeout(this.timeoutChangesEditorColor);
          this.onEditorColorChange(event.changes);
        }, 500);
      });
      this._ed1.onDidChangeCursorPosition((event) => {
        this.onEditorColorLineChange(event.position.lineNumber);
      });
    });
    return true;
  }
  onEditorColorLineChange(line) {
    if (this.isRightChange) {
      this.isRightChange = false;
      return;
    }
    if (this.lastLine && this.lastLineColor !== line) {
      this.lastLineColor = line;
      if (!this._ed1) return;
      const model = this._ed1.getModel();
      if (!model) return;
      const lineKeyValue = this.convertTokenLineEditorToKeyValue(model.getLineContent(line));
      const params = {
        emitter: "left",
        value: `${lineKeyValue.key};${""};line`
      };
      mls.events.fire([this.level], ["DSColorChanged"], JSON.stringify(params), 0);
    }
  }
  onEditorColorChange(changes) {
    var _a2;
    const [change] = changes;
    if (!change) return;
    const lineChange = change.range.startLineNumber;
    if (!this._ed1) return;
    const model = this._ed1.getModel();
    if (!model) return;
    const lineKeyValue = this.convertTokenLineEditorToKeyValue(model.getLineContent(lineChange));
    const tokens = this.getEditorsTokens();
    const colorsTokens = tokens.filter((item) => item.category === "color");
    ((_a2 = this.dsInstance) == null ? void 0 : _a2.tokens)["setTokenList"](tokens);
    let params;
    if (this.isRightChange) {
      this.isRightChange = false;
      params = {
        emitter: "left",
        value: `${JSON.stringify(colorsTokens)};${""};refresh`
      };
    } else {
      params = {
        emitter: "left",
        value: `${lineKeyValue.key || JSON.stringify(colorsTokens)};${""};editor`
      };
    }
    mls.events.fire([this.level], ["DSColorChanged"], JSON.stringify(params));
  }
  onEditorTypoChange(changes) {
    var _a2;
    const [change] = changes;
    if (!change) return;
    const tokens = this.getEditorsTokens();
    const typoTokens = tokens.filter((item) => item.category === "typography");
    ((_a2 = this.dsInstance) == null ? void 0 : _a2.tokens)["setTokenList"](tokens);
    const rc = this.getEditorJsonKeyValue("typography");
    const params = {
      emitter: "left",
      value: `${JSON.stringify(rc)};${""};${"editor"}`
    };
    mls.events.fire([this.level], ["DSTYPOChanged"], JSON.stringify(params), 1e3);
  }
  onEditorCustomChange(changes) {
    var _a2;
    const [change] = changes;
    if (!change) return;
    const tokens = this.getEditorsTokens();
    const customTokens = tokens.filter((item) => item.category === "custom");
    ((_a2 = this.dsInstance) == null ? void 0 : _a2.tokens)["setTokenList"](tokens);
    const rc = this.getEditorJsonKeyValue("custom");
    const params = {
      emitter: "left",
      value: `${JSON.stringify(rc)};${""};${"editor"}`
    };
    mls.events.fire([this.level], ["DSCustomChanged"], JSON.stringify(params), 1e3);
  }
  getEditorsTokens() {
    const rcT = this.getEditorJsonKeyValue("typography");
    const rcC = this.getEditorJsonKeyValue("color");
    const rcCustom = this.getEditorJsonKeyValue("custom");
    return [...rcC, ...rcT, ...rcCustom];
  }
  editEditorByDSColorChanged(desc) {
    return __async(this, null, function* () {
      var _a2, _b, _c;
      const params = JSON.parse(desc);
      if (params.emitter !== "right") return;
      if (!this._ed1 || !this.dsInstance) return;
      const [key, value, mode] = params.value.split(";");
      if (mode !== "helper" && mode !== "line") return;
      this.isRightChange = true;
      const colorModel = this.models["color"];
      if (key.startsWith("[")) {
        const allTokensColors = JSON.parse(key);
        this.tokensColors = allTokensColors;
        const allTokens = [...this.tokensColors, ...this.tokensTypo, ...this.tokensCustom];
        yield ((_a2 = this.dsInstance) == null ? void 0 : _a2.tokens)["setTokenList"](allTokens);
        const { tokensColors } = yield this.getTokens();
        colorModel.setValue(tokensColors);
        return;
      }
      if (mode === "helper" && ((_b = this._ed1.getModel()) == null ? void 0 : _b.id) !== colorModel.id) {
        yield this.dsInstance.tokens.update(key, value);
        return;
      }
      const line = (_c = this._ed1.getModel()) == null ? void 0 : _c.findMatches(`@${key}:`, true, false, false, null, true);
      if (!line || line.length === 0) return;
      const { startLineNumber, startColumn, endLineNumber } = line[0].range;
      const lineLength = colorModel.getLineContent(startLineNumber).length + 1;
      const range = new monaco.Range(startLineNumber, startColumn, endLineNumber, lineLength);
      const text = value ? `@${key}: ${value};` : null;
      if (mode === "helper" && !text) {
        this._ed1.executeEdits("", [{ range: new monaco.Range(range.startLineNumber, 1, range.startLineNumber + 1, 1), text }]);
        return;
      }
      if (mode === "helper") this._ed1.executeEdits("color", [{ range, text }]);
      if (this.lastLine["color"] === startLineNumber) return;
      this.lastLine["color"] = startLineNumber;
      this._ed1.setSelection(new monaco.Selection(range.startLineNumber, 0, range.startLineNumber, lineLength));
      this._ed1.revealLineInCenter(startLineNumber);
    });
  }
  getEditorJsonKeyValue(model) {
    const editorValue = this.models[model].getValue().trim().split("\n");
    let rc = editorValue.map((line) => {
      const obj = {};
      const { key, value } = this.convertTokenLineEditorToKeyValue(line);
      obj.key = key;
      obj.value = value;
      obj.category = model;
      return obj;
    }).filter((item) => item.key !== void 0);
    const filteredRc = rc.reduce((acc, current) => {
      const x = acc.find((item) => item.key === current.key);
      return !x || !x.key || !x.value ? acc.concat([current]) : acc;
    }, []);
    return filteredRc;
  }
  convertTokenLineEditorToKeyValue(content) {
    const rc = {};
    if (!content.startsWith("@") || !content.endsWith(";")) return rc;
    const [key, value] = content.substring(1, content.length - 1).split(":");
    rc.key = key.trim();
    rc.value = value.trim();
    return rc;
  }
  setMsizeEditor() {
    var _a2;
    if (!this.visible) return;
    (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSColorChanged"], (ev) => {
      if (ev.desc) this.editEditorByDSColorChanged(ev.desc);
    });
    mls.events.addEventListener([this.level], ["DSTYPOClicked"], (ev) => {
      if (ev.desc !== "right") return;
      this.onClickLink("opTypography");
    });
    mls.events.addEventListener([this.level], ["DSColorClicked"], (ev) => {
      if (ev.desc !== "right") return;
      this.onClickLink("opColors");
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("msize")) {
      if (!this.visible) return;
      this.setMsizeEditor();
    }
  }
  render() {
    return html`<mls-editor-100529 ismls2="true"></mls-editor-100529>`;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _ServiceDsTokens100554);
__decorateElement(_init, 5, "c2", _c2_dec, _ServiceDsTokens100554);
_ServiceDsTokens100554 = __decorateElement(_init, 0, "ServiceDsTokens100554", _ServiceDsTokens100554_decorators, _ServiceDsTokens100554);
_ServiceDsTokens100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceDsTokens100554);
let ServiceDsTokens100554 = _ServiceDsTokens100554;
export {
  ServiceDsTokens100554
};
