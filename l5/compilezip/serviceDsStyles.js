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
var _isHelperContainerOpen_dec, _helperDiv_dec, _containerHelpers_dec, _inputAddStyles_dec, _selectStyles_dec, _c2_dec, _actionsMode_dec, _stylesComponent_dec, _isComponent_dec, _msize_dec, _a, _ServiceDsStyles_decorators, _init;
import { html } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { convertFileNameToTag } from "./_100554_utilsLit";
const message_pt = {};
const message_en = {};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyles_decorators = [customElement("service-ds-styles-100554")];
let _ServiceDsStyles = class _ServiceDsStyles extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _isComponent_dec = [property()], _stylesComponent_dec = [property()], _actionsMode_dec = [property()], _c2_dec = [query("mls-editor-100529")], _selectStyles_dec = [query("#service_styles_select_comp_styles")], _inputAddStyles_dec = [query("#service_styles_input_comp_styles")], _containerHelpers_dec = [query(".container-open-helper")], _helperDiv_dec = [query(".helper")], _isHelperContainerOpen_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf5ad",
      state: "foreground",
      tooltip: "Styles",
      visible: true,
      position: "left",
      widget: "_100554_serviceDsStyles",
      tags: ["ds_styles"],
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opResultCss") return this.showResultCss();
      if (op === "opStyle") return this.showStyle();
      if (op === "opStyle2") return this.showStyle2();
      if (op === "opView") return this.openRepo();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Styles",
      actions: {
        opStyle: "Styles Geral",
        opResultCss: "Result CSS",
        opView: "View on repository"
      },
      actionDefault: "opStyle2",
      // call after close icon clicked
      icons: {},
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink
    };
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.isComponent = __runInitializers(_init, 12, this, false), __runInitializers(_init, 15, this);
    this.stylesComponent = __runInitializers(_init, 16, this, []), __runInitializers(_init, 19, this);
    this.modeComponent = "add";
    this.firstStyleIndex = 0;
    this.actionsMode = __runInitializers(_init, 20, this, "default"), __runInitializers(_init, 23, this);
    this.timeoutChangesEditorStyle = 0;
    this.timeoutCursorChangesEditorStyle = 0;
    this.componentName = "";
    this.isStyleRename = false;
    this.isSetStyle = false;
    this.oldStyleName = "";
    this.rightServiceOpened = "";
    this.lastEditorInfo = {
      line: 0,
      content: ""
    };
    this.models = {};
    this.defaultServices = {
      componentStyle: "",
      globalStyle: "_100554_service_styles_preview"
    };
    this.isEventAdd = false;
    this.isHelperContainerOpen = __runInitializers(_init, 44, this, false), __runInitializers(_init, 47, this);
    this.myStyle = `

        .container-open-helper{
            height: 100%;
            position: absolute;
            top: 0;
            background: #f6f6f6;
            right: 0;
            width: 0;
            z-index: 9999;
            transition: width 0.5s ease;
        }
        .container-open-helper.open{
            width: 40%;
        }
        .container-open-helper.open .helper{
            opacity: 1;
        }
        .container-open-helper .helper{
            opacity: 0.1;
            overflow:hidden;
        }
        .container-open-helper .toogle{
            position: absolute;
            width: 30px;
            height: 80px;
            background: #f6f6f6;
            top: 50%;
            left: -30px;
            z-index: 9999;
            transform: translate(0%, -50%);
            border-top-left-radius: 5px;
            cursor: pointer;
            border-bottom-left-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .styles-if-component {
            padding: 6px;
            display: flex;
            gap: 1rem;
            justify-content: center;

            select{
                width: 200px;
            }
            input{
                margin-right: 1rem;
                line-height: 0.5;
                padding: 0.1rem;
            }
            .actions{
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem;
                border: 1px solid #cecece;
                i{
                    cursor:pointer;
                }
            }
        }
    `;
    this.init();
  }
  setEditorSource(less) {
    return __async(this, null, function* () {
      yield this.setStyle(less);
    });
  }
  getEditorSource() {
    var _a2;
    const model = (_a2 = this._ed1) == null ? void 0 : _a2.getModel();
    const val = (model == null ? void 0 : model.getValue()) || "";
    return val;
  }
  getEditorComponentSource() {
    var _a2;
    const model = (_a2 = this._ed1) == null ? void 0 : _a2.getModel();
    let val = (model == null ? void 0 : model.getValue()) || "";
    val = this.removeTokensForSource(val);
    return val;
  }
  getActualRef() {
    if (!this.dsInstance) return "";
    if (this.isComponent && this.selectStyles) {
      const selectStyle = this.stylesComponent[+this.selectStyles.value];
      const folder = this.dsInstance.methods["getDsComponentStyleFilePath"](this.componentName);
      mls.actual[0].setFullName(this.componentName);
      const { project, path } = mls.actual[0];
      if (project === void 0 || !path) return "";
      const key2 = mls.stor.getKeyToFiles(project, 3, selectStyle.stylename, folder, ".less");
      return key2;
    }
    const folderGlobal = this.dsInstance.methods["getDsCssFilePath"]();
    const key = mls.stor.getKeyToFiles(this.dsInstance.project, 3, "definitions", folderGlobal, ".less");
    return key;
  }
  createRenderRoot() {
    return this;
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (reinit) {
        this.checkComponentOpenInL2();
        return;
      }
      if (visible && !reinit) {
        this.isComponent = false;
        yield this.start1();
        yield this.checkComponentOpenInL2();
        return;
      }
      const params2 = {
        service: [],
        isComponent: this.isComponent,
        component: this.componentName
      };
      mls.events.fire([this.level], ["DSStyleUnSelected"], JSON.stringify(params2), 0);
    });
  }
  start1() {
    return __async(this, null, function* () {
      yield this.createEditor();
      const serviceDef = this.isComponent ? this.defaultServices.componentStyle : this.defaultServices.globalStyle;
      const params = {
        service: [serviceDef],
        isComponent: this.isComponent,
        component: this.componentName
      };
      mls.events.fire([this.level], ["DSStyleSelected"], JSON.stringify(params), 100);
      this.openServiceHelper(serviceDef);
      this.rightServiceOpened = this.getServiceRightOpened();
      this.setMsizeEditor();
      if (this.serviceContent && typeof this.serviceContent.layout === "function") this.serviceContent.layout();
    });
  }
  reinit() {
    if (this._ed1) this._ed1.setModel(this.models["style"]);
    if (this.menu.setMode) this.menu.setMode("initial");
  }
  init() {
    this.getModelOrCreate("", "results");
    this.setEvents();
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSStyleChanged"], (ev) => {
      this.onDSStyleChanged(ev);
    });
  }
  checkComponentOpenInL2() {
    return __async(this, null, function* () {
      var _a2;
      const actualL2 = mls.actual[2].getFullName();
      if (!actualL2) {
        this.showStyle();
        return;
      }
      const { project, path } = mls.actual[2];
      if (!project || !path) {
        this.showStyle();
        return;
      }
      ;
      yield this.initDsInstance();
      if (!this.dsInstance) return;
      const folderFileLess = this.dsInstance.methods["getDsComponentStyleFilePath"](actualL2);
      const key = mls.stor.getKeyToFiles(project, 3, path, folderFileLess, ".less");
      const file = mls.stor.files[key];
      if (actualL2 === this.componentName && file && file.status === "changed") return;
      const newCompExist = (_a2 = this.dsInstance) == null ? void 0 : _a2.components.find(actualL2);
      if (!newCompExist) {
        this.showStyle();
        return;
      }
      ;
      const desc = {
        emitter: "right",
        helper: "_100554_servicePreview",
        isComponent: true,
        widget: actualL2,
        less: "",
        origemLevel: 3,
        value: [],
        selector: ""
      };
      const params = {
        level: 3,
        type: "DSStyleChanged",
        desc: JSON.stringify(desc)
      };
      this.isComponent = true;
      this.isSetStyle = true;
      this.isEventAdd = true;
      this.onDSStyleChanged(params);
    });
  }
  showStyle() {
    this.componentName = "";
    this.isComponent = false;
    this.reinit();
    return true;
  }
  openRepo() {
    if (!this.dsInstance) return false;
    let fname = "definitions";
    let ffolder = this.dsInstance.methods.getDsCssFilePath();
    let project = this.dsInstance.project;
    if (this.isComponent && this.selectStyles) {
      const style = this.stylesComponent[+this.selectStyles.value];
      if (!style) return false;
      fname = style.stylename;
      ffolder = this.dsInstance.methods.getDsComponentStyleFilePath(this.componentName);
      mls.actual[0].setFullName(this.componentName);
      if (!mls.actual[0].project) return false;
      project = mls.actual[0].project;
    }
    const keyToFile = mls.stor.getKeyToFiles(project, 3, fname, ffolder, ".less");
    const file = mls.stor.files[keyToFile];
    if (!file) {
      window.collabMessages.add("Invalid File", "information");
      throw new Error("invalid file");
    }
    const driver = mls.stor.others.getDefaultDriver(project);
    if (!driver) {
      window.collabMessages.add("Driver not found", "information");
      throw new Error("Driver not found");
    }
    let url = "";
    url = driver.getUrl(file);
    window.open(url, "_blank");
    if (this.menu.closeMenu) this.menu.closeMenu();
    return true;
  }
  showResultCss() {
    var _a2;
    if (!this._ed1) return false;
    const modelResults = this.models["results"];
    this._ed1.setModel(modelResults);
    if (this.menu.setMode) this.menu.setMode("editor");
    (_a2 = this.serviceContent) == null ? void 0 : _a2.layout();
    this._ed1.updateOptions({ readOnly: true });
    modelResults.setValue("Compiling...");
    if (!this.dsInstance) return false;
    this.dsInstance.components.getCSS(this.componentName).then((result) => {
      modelResults.setValue(result);
    }).catch((err) => {
      modelResults.setValue(err);
    });
    return true;
  }
  delay() {
    return __async(this, null, function* () {
      yield new Promise((resolve) => setTimeout(resolve, 100));
    });
  }
  createEditor() {
    return __async(this, null, function* () {
      if (this._ed1) return;
      if (!this.c2) {
        yield this.delay();
        this.createEditor();
        return;
      }
      this._ed1 = monaco.editor.create(this.c2, {
        language: "less",
        minimap: {
          enabled: false
          // Desativa o minimap
        }
      });
      this._ed1.onDidChangeCursorPosition((e) => {
        if (!this._ed1) return;
        const modelStyle = this.getActualModel();
        if (!modelStyle) return;
        const actualModel = this._ed1.getModel();
        if (!modelStyle || actualModel !== modelStyle) return;
        const { lineNumber } = e.position;
        const content = modelStyle.getLineContent(lineNumber);
        const isReadOnlyArea = this.isReadOnlyArea(lineNumber);
        this._ed1.updateOptions({ readOnly: isReadOnlyArea });
        if (isReadOnlyArea) {
          const serviceDef = this.isComponent ? this.defaultServices.componentStyle : this.defaultServices.globalStyle;
          const params = this.getParamsServices();
          mls.events.fire([this.level], ["DSStyleUnSelected"], JSON.stringify(params), 0);
          this.openServiceHelper(serviceDef);
          this.lastEditorInfo.content = content;
          this.lastEditorInfo.line = lineNumber;
          return;
        }
        if (this.timeoutCursorChangesEditorStyle) clearTimeout(this.timeoutCursorChangesEditorStyle);
        this.timeoutCursorChangesEditorStyle = setTimeout(() => {
          this.onCursorChange(lineNumber, content);
        }, 500);
      });
      this.c2["mlsEditor"] = this._ed1;
    });
  }
  getUri(shortFN) {
    _ServiceDsStyles.modelCount = _ServiceDsStyles.modelCount + 1 || 1;
    return monaco.Uri.parse(`file://server/${shortFN}_${_ServiceDsStyles.modelCount}.ts`);
  }
  setModelAPI(model) {
    if (!model) return;
    const modelStyle = model;
    modelStyle.add = (text, lineNumber, refLine) => {
      let lineToChange = lineNumber;
      const blockInfo = modelStyle.getBlockInfo();
      if (!lineToChange) {
        const newLineNumber = refLine === blockInfo.endLine ? refLine : refLine + 1;
        const columnStartRefLine = modelStyle.getLineIndentColumn(refLine);
        const newLine = {
          range: new monaco.Range(newLineNumber, 1, newLineNumber, 1),
          text: " ".repeat(columnStartRefLine - 1) + "\n",
          forceMoveMarkers: true
        };
        if (this._ed1) {
          this.isEventAdd = true;
          this._ed1.executeEdits("style", [newLine]);
        }
        lineToChange = newLineNumber;
      }
      const columnStart = modelStyle["getLineIndentColumn"](lineToChange);
      const columnEnd = modelStyle.getLineLength(lineToChange) + 1;
      const range = new monaco.Range(lineToChange, columnStart, lineToChange, columnEnd);
      if (this._ed1) {
        this.isEventAdd = true;
        this._ed1.executeEdits("style", [{ range, text }]);
      }
      const endLineLength = modelStyle.getLineLength(blockInfo.endLine) + 1;
      const rangeBlock = new monaco.Range(blockInfo.startLine, 1, blockInfo.endLine, endLineLength);
      modelStyle.removeBlankLines(rangeBlock);
    };
    modelStyle.changeBlock = (key, value, comment) => {
      if (!this._ed1) return;
      const blockLess = modelStyle.getLessBlock();
      const { lineNumber } = this._ed1.getPosition();
      const text = `${key}: ${value};//${comment}`;
      const objChanged = {
        lineChange: void 0,
        prop: key,
        newValue: value,
        oldValue: ""
      };
      if (!blockLess) return;
      blockLess.lines.forEach((item) => {
        if (item.key === key) {
          objChanged.lineChange = item.line;
          objChanged.oldValue = item.value;
        }
      });
      if (!objChanged.newValue) {
        const linewithSameKey = blockLess.lines.find((line) => line.key === objChanged.prop);
        if (!linewithSameKey) return;
        modelStyle.removeLine(linewithSameKey.line);
        return;
      }
      if (!objChanged.lineChange) {
        modelStyle.add(text, objChanged.lineChange, lineNumber);
        return;
      }
      modelStyle.add(text, objChanged.lineChange);
    };
    modelStyle.removeLine = (lineNumber) => {
      const columnEnd = modelStyle.getLineLength(lineNumber) + 1;
      const columnStart = modelStyle.getLineIndentColumn(lineNumber);
      const range = new monaco.Range(lineNumber, columnStart, lineNumber, columnEnd);
      if (this._ed1) {
        this.isEventAdd = true;
        this._ed1.executeEdits("", [{ range, text: null }]);
      }
    };
    modelStyle.removeBlankLines = (range) => {
      var _a2;
      if (!this._ed1) return;
      const text = (_a2 = this._ed1.getModel()) == null ? void 0 : _a2.getValueInRange(range);
      if (!text) return;
      const newText = text.replace(/^\s*[\r\n]/gm, "");
      const edit = { range, text: newText };
      this.isEventAdd = true;
      this._ed1.executeEdits("style", [edit]);
    };
    modelStyle.getLessBlock = () => {
      const { isValidBlock, endLine, startLine, selector } = modelStyle.getBlockInfo();
      if (!isValidBlock) return void 0;
      const rc = {
        lines: [],
        selector
      };
      const lines = modelStyle.getLinesContent();
      let bracketsOpenCount = 0;
      let bracketsCloseCount = 0;
      for (let i = startLine - 1; i <= endLine - 1; i++) {
        let line = lines[i];
        line = line.replace(/\/\/.*/, "");
        const isInBlockComment = modelStyle.isInCommentBlock(lines, i + 1);
        if (isInBlockComment) continue;
        if (line.indexOf("{") >= 0) bracketsOpenCount += 1;
        if (line.indexOf("}") >= 0) bracketsCloseCount += 1;
        if (bracketsOpenCount - bracketsCloseCount > 1) continue;
        const rules = line.split(";");
        rules.forEach((rule) => {
          if (!rule) return;
          const item = modelStyle.convertRuleToKeyValue(rule);
          if (!item) return;
          item.line = i + 1;
          rc.lines.push(item);
        });
      }
      return rc;
    };
    modelStyle.getHelperNameByLine = (lineNumber) => {
      const lineContent = modelStyle.getLineContent(lineNumber);
      const [, helperName] = lineContent.split("//");
      return helperName;
    };
    modelStyle.isCursorInBlockValid = () => {
      const blockInfo = modelStyle.getBlockInfo();
      return blockInfo.isValidBlock;
    };
    modelStyle.getBlockInfoByLine = (lineNumber) => {
      const lines = modelStyle.getLinesContent();
      const startBlockInfo = modelStyle.haveStartBlock(lines, lineNumber);
      const endBlockInfo = modelStyle.haveEndBlock(lines, lineNumber);
      const rc = {
        selector: "",
        endLine: endBlockInfo.line,
        hasEndBlock: endBlockInfo.haveEndBlock,
        hasStartBlock: startBlockInfo.haveStartBlock,
        startLine: startBlockInfo.line,
        isValidBlock: startBlockInfo.haveStartBlock && endBlockInfo.haveEndBlock
      };
      if (startBlockInfo.line > 0 && rc.isValidBlock) {
        const lineStartContent = modelStyle.getLineContent(startBlockInfo.line);
        rc.selector = lineStartContent.replace(/\/\/.*/, "").replace(/\{.*$/, "").trim();
      }
      return rc;
    };
    modelStyle.getBlockInfo = () => {
      var _a2;
      const { lineNumber } = (_a2 = this._ed1) == null ? void 0 : _a2.getPosition();
      const rc = modelStyle.getBlockInfoByLine(lineNumber);
      return rc;
    };
    modelStyle.isInCommentBlock = (lines, lineNumber) => {
      let countStartBlockComment = 0;
      let countEndBlockComment = 0;
      for (let i = 0; i <= lineNumber - 1; i++) {
        const line = lines[i];
        if (line.indexOf("/*") >= 0) countStartBlockComment += 1;
        if (line.indexOf("*/") >= 0 && i !== lineNumber - 1) countEndBlockComment += 1;
      }
      const isInBlockComment = countStartBlockComment > countEndBlockComment;
      return isInBlockComment;
    };
    modelStyle.haveStartBlock = (lines, lineNumber) => {
      const rc = {
        haveStartBlock: false,
        line: -1
      };
      let bracketsCount = 1;
      let actualLine = lines[lineNumber - 1];
      if (actualLine.trim().startsWith("//")) return rc;
      actualLine = actualLine.replace(/\/\/.*/, "").replace(/\/\*.*/, "");
      if (actualLine.indexOf("{") >= 0) {
        rc.haveStartBlock = true;
        rc.line = lineNumber;
        return rc;
      }
      if (actualLine.indexOf("}") >= 0) bracketsCount -= 1;
      const isInBlockComment = modelStyle.isInCommentBlock(lines, lineNumber);
      if (isInBlockComment) return rc;
      for (let i = lineNumber - 1; i >= 0; i--) {
        let line = lines[i];
        line = line.replace(/\/\/.*/, "");
        const lineInCommentBlock = modelStyle.isInCommentBlock(lines, i + 1);
        if (line.indexOf("}") >= 0 && !lineInCommentBlock) bracketsCount += 1;
        if (line.indexOf("{") >= 0 && !lineInCommentBlock) bracketsCount -= 1;
        if (bracketsCount === 0) {
          rc.haveStartBlock = true;
          rc.line = i + 1;
          break;
        }
      }
      return rc;
    };
    modelStyle.haveEndBlock = (lines, lineNumber) => {
      const rc = {
        haveEndBlock: false,
        line: -1
      };
      let bracketsCount = 1;
      let actualLine = lines[lineNumber - 1];
      if (actualLine.trim().startsWith("//")) return rc;
      actualLine = actualLine.replace(/\/\/.*/, "").replace(/\/\*.*/, "");
      if (actualLine.indexOf("}") >= 0) {
        rc.haveEndBlock = true;
        rc.line = lineNumber;
        return rc;
      }
      if (actualLine.indexOf("{") >= 0) bracketsCount -= 1;
      const isInBlockComment = modelStyle.isInCommentBlock(lines, lineNumber);
      if (isInBlockComment) return rc;
      for (let i = lineNumber - 1; i <= lines.length - 1; i++) {
        let line = lines[i];
        line = line.replace(/\/\/.*/, "");
        const lineInCommentBlock = modelStyle.isInCommentBlock(lines, i + 1);
        if (line.indexOf("{") >= 0 && !lineInCommentBlock) bracketsCount += 1;
        if (line.indexOf("}") >= 0 && !lineInCommentBlock) bracketsCount -= 1;
        if (bracketsCount === 0) {
          rc.haveEndBlock = true;
          rc.line = i + 1;
          break;
        }
      }
      return rc;
    };
    modelStyle.convertRuleToKeyValue = (content) => {
      const blockLine = {};
      const [key, value] = content.split(":");
      if (!key || !value) return void 0;
      blockLine.key = key.trim();
      blockLine.value = value.trim();
      return blockLine;
    };
  }
  getModelOrCreate(modelName, value) {
    let mod = this.models[modelName];
    if (!modelName) return void 0;
    if (!mod) {
      const uri = this.getUri("l3_styles");
      this.models[modelName] = monaco.editor.createModel(value, "less", uri);
      const model = this.models[modelName];
      this.setModelAPI(model);
      model.onDidChangeContent((event) => {
        if (this.timeoutChangesEditorStyle) clearTimeout(this.timeoutChangesEditorStyle);
        this.timeoutChangesEditorStyle = setTimeout(() => {
          this.onEditorChange(false);
        }, 1e3);
      });
    } else {
      mod.setValue(value);
    }
    return this.models[modelName];
  }
  getModelComponentKey() {
    if (!this.selectStyles) return;
    const s = this.stylesComponent[+this.selectStyles.value];
    const modelKey = this.componentName + "_" + s.stylename;
    return modelKey;
  }
  getActualModel() {
    if (this.isComponent) {
      const modelKey = this.getModelComponentKey();
      if (!modelKey) return;
      return this.models[modelKey];
    }
    return this.models["style"];
  }
  setStyle(styleLess) {
    return __async(this, null, function* () {
      if (!this._ed1) return;
      const lessTokens = yield this.getTokens();
      let textByRange = styleLess;
      const content = `${textByRange.trim()}

//Start Less Tokens
${lessTokens}
//End Less Tokens
`;
      let model;
      if (this.isComponent) {
        const modelKey = this.getModelComponentKey();
        if (!modelKey) return;
        model = this.getModelOrCreate(modelKey, content);
      } else model = this.getModelOrCreate("style", content);
      if (!model) return;
      this._ed1.setModel(model);
      const range = new monaco.Range(0, 0, model.getLineCount() + 1, 0);
      this._ed1.updateOptions({ readOnly: false });
      this._ed1.setScrollPosition({ scrollTop: 0 });
      const position = new monaco.Position(0, 0);
      this._ed1.setPosition(position);
      this.onEditorChange(false);
    });
  }
  getIntervalLinesReadOnly() {
    if (!this._ed1) return;
    const model = this._ed1.getModel();
    if (!model) return;
    const [startLine] = model.findMatches(`//Start Less Tokens`, true, false, false, null, true);
    const [endLine] = model.findMatches(`//End Less Tokens`, true, false, false, null, true);
    return {
      end: endLine ? endLine.range.startLineNumber : void 0,
      start: startLine ? startLine.range.startLineNumber : void 0
    };
  }
  changeEditor(lines, helper) {
    const modelStyle = this.getActualModel();
    if (!modelStyle) return;
    lines.forEach((line) => {
      modelStyle.changeBlock(line.key, line.value, helper);
    });
  }
  getParamsServices() {
    const serviceDef = this.isComponent ? this.defaultServices.componentStyle : this.defaultServices.globalStyle;
    const params = {
      service: [serviceDef],
      isComponent: this.isComponent,
      component: this.componentName
    };
    return params;
  }
  showStyle2() {
    var _a2;
    if (!this._ed1) return false;
    (_a2 = this.serviceContent) == null ? void 0 : _a2.layout();
    this._ed1.updateOptions({ readOnly: false });
    this.getStyle().then((styleGlobal) => {
      if (this.isComponent) return;
      this.setStyle(styleGlobal);
    });
    return true;
  }
  onEditorChange(isGet) {
    return __async(this, null, function* () {
      if (this.isSetStyle) {
        this.isSetStyle = false;
        return;
      }
      this.clearErrors();
      const model = this.getActualModel();
      if (!model) return;
      const value = model.getLessBlock();
      const less = model.getValue().trim();
      const rc = {
        emitter: "left",
        helper: this.rightServiceOpened || this.getServiceRightOpened(),
        value: (value == null ? void 0 : value.lines) || [],
        less,
        selector: (value == null ? void 0 : value.selector) || "",
        isComponent: this.isComponent,
        origemLevel: 3
      };
      if (!isGet) rc.less = this.removeTokensForSource(rc.less);
      if (!this.isComponent && !isGet) {
        if (!this.dsInstance) return;
        const cssItem = this.dsInstance.css.list["definitions"];
        if (!cssItem) return;
        try {
          yield cssItem.setContent(rc.less);
        } catch (err) {
          const errorInfo = this.extractErrorDetails(err.message);
          if (errorInfo) this.setErrorOnEditor(errorInfo);
        }
      }
      if (this.isComponent) {
        rc.less = yield this.onChangeEditorIfComponent(rc);
      }
      if (!this.isEventAdd) {
        mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc), 300);
      } else this.isEventAdd = false;
    });
  }
  removeTokensForSource(src) {
    const regex = /\/\/Start Less Tokens[\s\S]*?\/\/End Less Tokens/g;
    return src.replace(regex, "");
  }
  onAfterAdd() {
    return __async(this, null, function* () {
      if (!this.selectStyles) return;
      const style = this.stylesComponent[+this.selectStyles.value];
      const less = yield style.getStyleLessIO();
      this.onChangeWidgetStyle(less);
    });
  }
  onChangeEditorIfComponent(params) {
    return __async(this, null, function* () {
      if (!this.selectStyles) return "";
      const style = this.stylesComponent[+this.selectStyles.value];
      if (!style) return params.less;
      const isFirstLineCorrect = this.checkIfFirtsLineCorrect(params.less, style.stylename);
      if (!isFirstLineCorrect) {
        this.setError("Invalid first line, must be start with component tag name my-tag.mystyle");
        throw new Error("Invalid first line");
      }
      if (this.isStyleRename) {
        params.less = yield this.renameStyleComponent(params.less, style);
        return params.less;
      }
      yield this.saveStyleLess(params.less, style);
      const mfile = mls.l2.editor["mfiles"][this.componentName];
      if (mfile && mfile.compilerResults) {
        mfile.compilerResults.modelNeedCompile = true;
        yield mls.l2.editor.getCompilerResultTS(mfile, true);
        const enhancement = yield mls.l2.enhancement.getEnhancementInstance(mfile);
        if (enhancement) yield enhancement.onAfterChange(mfile);
        const searchString = "css";
        const replacementString = "";
        const regex = new RegExp(searchString, "g");
        const modifiedString = mfile.compilerResults["cacheVersion"].replace(regex, replacementString);
        mfile.compilerResults["cacheVersion"] = modifiedString + "css" + Math.floor(Math.random() * (1e3 - 9999999 + 1)) + 9999999;
        if (mfile.compilerResults.prodJS) yield mls.stor.cache.AddMfileIfNeed(mfile);
      }
      return params.less;
    });
  }
  saveStyleLess(less, style) {
    return __async(this, null, function* () {
      const validComponentStyle = this.checkIfValidComponentStyle(less);
      if (!validComponentStyle) return;
      try {
        yield style.setStyleLessIO(less);
      } catch (err) {
        const errorInfo = this.extractErrorDetails(err.message);
        if (errorInfo) this.setErrorOnEditor(errorInfo);
      }
    });
  }
  renameStyleComponent(less, style) {
    return __async(this, null, function* () {
      this.isStyleRename = false;
      const allLines = less.split("\n");
      allLines[0] = allLines[0].replace(this.oldStyleName, style.stylename);
      const newless = allLines.join("\n");
      try {
        yield style.setStyleLessIO(newless);
        yield this.setStyle(newless);
        return newless;
      } catch (err) {
        const errorInfo = this.extractErrorDetails(err.message);
        if (errorInfo) this.setErrorOnEditor(errorInfo);
        return less;
      }
    });
  }
  checkIfValidComponentStyle(less) {
    let bracketsOpenCount = 0;
    let bracketsCloseCount = 0;
    let isvalid = true;
    let lineStartInvalid = 0;
    const lines = less.split("\n");
    const modelStyle = this.getActualModel();
    if (!modelStyle) return false;
    for (let i = 0; i <= lines.length - 1; i++) {
      let line = lines[i];
      line = line.replace(/\/\/.*/, "");
      const isInBlockComment = modelStyle.isInCommentBlock(lines, i + 1);
      if (isInBlockComment) continue;
      if (line.indexOf("{") >= 0) bracketsOpenCount += 1;
      if (line.indexOf("}") >= 0) bracketsCloseCount += 1;
      if (bracketsOpenCount > 0 && bracketsOpenCount === bracketsCloseCount) {
        lineStartInvalid = i + 2;
        break;
      }
    }
    if (lineStartInvalid) {
      for (let i = lineStartInvalid - 1; i <= lines.length - 1; i++) {
        let line = lines[i];
        line = line.replace(/\/\/.*/, "");
        if (line.indexOf("{") >= 0) {
          isvalid = false;
          const errorInfo = {
            column: 0,
            errorMessage: "This block is invalid, in style component use once this first block",
            line: i + 1
          };
          this.setErrorOnEditor(errorInfo);
          break;
        }
      }
    }
    return isvalid;
  }
  checkIfFirtsLineCorrect(less, stylename) {
    const [firstLine] = less.split("\n");
    const tagName = this.getWidgetTagName(this.componentName);
    if (stylename === this.componentName.substr(8, this.componentName.length)) {
      if (!this.isStyleRename && !firstLine.startsWith(tagName)) return false;
      return true;
    }
    if (!this.isStyleRename && !firstLine.startsWith(tagName + "." + stylename)) return false;
    return true;
  }
  extractErrorDetails(errorString) {
    const pattern = /Error [A-Za-z]+: [A-Za-z]+: (.+) on line (\d+), column (\d+)/;
    const match = pattern.exec(errorString);
    if (match) {
      const errorMessage = match[1];
      const line = parseInt(match[2], 10);
      const column = parseInt(match[3], 10);
      return {
        errorMessage,
        line,
        column
      };
    }
    return null;
  }
  clearErrors() {
    if (!this._ed1) return;
    const model = this._ed1.getModel();
    if (!model) return;
    monaco.editor.setModelMarkers(model, "markerSource", []);
  }
  setErrorOnEditor(info) {
    const markerOptions = {
      severity: monaco.MarkerSeverity.Error,
      message: info.errorMessage,
      startLineNumber: info.line,
      startColumn: info.column,
      endLineNumber: info.line,
      endColumn: info.column
    };
    if (!this._ed1) return;
    const model = this._ed1.getModel();
    if (!model) return;
    monaco.editor.setModelMarkers(model, "markerSource", [markerOptions]);
  }
  getServiceRightOpened() {
    var _a2, _b, _c, _d;
    let toolbar = (_a2 = this.serviceContent) == null ? void 0 : _a2.closest("mls-toolbar-100529");
    let nextToolbarRef = "";
    if (toolbar) {
      const nextToolbar = (_b = toolbar.nextElementSibling) == null ? void 0 : _b.nextElementSibling;
      const nextToolbarItemSelected = nextToolbar == null ? void 0 : nextToolbar.querySelector("mls-toolbar-item-100529 .toolbar-item.selected");
      nextToolbarRef = nextToolbarItemSelected ? (_c = nextToolbarItemSelected.parentElement) == null ? void 0 : _c.getAttribute("ref") : "";
    } else {
      const page = (_d = this.serviceContent) == null ? void 0 : _d.closest("collab-page");
      const nav2 = page == null ? void 0 : page.querySelector('collab-nav-2[toolbarposition="right"].selected');
      if (nav2) nextToolbarRef = nav2.getAttribute("data-service");
    }
    return nextToolbarRef;
  }
  onCursorChange(lineNumber, content) {
    const modelStyle = this.getActualModel();
    if (!modelStyle) return;
    if (lineNumber === this.lastEditorInfo.line && content === this.lastEditorInfo.content) return;
    this.lastEditorInfo.content = content;
    this.lastEditorInfo.line = lineNumber;
    const serviceDef = this.isComponent ? this.defaultServices.componentStyle : this.defaultServices.globalStyle;
    let helperName = serviceDef;
    const validPosition = modelStyle.isCursorInBlockValid();
    const params = {
      service: [serviceDef],
      isComponent: this.isComponent,
      component: this.componentName
    };
    if (!validPosition) mls.events.fire([this.level], ["DSStyleUnSelected"], JSON.stringify(params), 0);
    else {
      params.service = [];
      mls.events.fire([this.level], ["DSStyleSelected"], JSON.stringify(params), 0);
      helperName = modelStyle.getHelperNameByLine(lineNumber);
    }
    this.openServiceHelper(helperName);
  }
  isReadOnlyArea(lineNumber) {
    const obj = this.getIntervalLinesReadOnly();
    if (!obj) return false;
    if (!obj.end || !obj.start) return false;
    if (lineNumber >= obj.start && lineNumber <= obj.end) return true;
    return false;
  }
  isReadOnlyAreaIfIsComponent(lineNumber) {
    return false;
  }
  initDsInstance() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0) throw new Error("No project selected!");
      this.dsInstance = mls.l3.getDSInstance(project, mode);
      yield this.dsInstance.init();
    });
  }
  getStyle() {
    return __async(this, null, function* () {
      yield this.initDsInstance();
      if (!this.dsInstance) return "";
      const cssItem = this.dsInstance.css.list["definitions"];
      if (!cssItem) return "";
      const content = yield cssItem.getContent();
      return content;
    });
  }
  getTokens() {
    return __async(this, null, function* () {
      if (!this.dsInstance) return;
      const { list } = this.dsInstance.tokens;
      const tokens = [];
      Object.keys(list).forEach((tok) => {
        tokens.push(list[tok]);
      });
      const tokensColors = tokens.filter((tok) => tok.category === "color" && !tok.key.startsWith("_dark-"));
      const tokensTypo = tokens.filter((tok) => tok.category === "typography");
      const tokensCustom = tokens.filter((tok) => tok.category === "custom");
      const strColors = tokensColors.map((item) => `@${item.key}: ${item.value};`).join("\n");
      const strTypo = tokensTypo.map((item) => `@${item.key}: ${item.value};`).join("\n");
      const strCustom = tokensCustom.map((item) => `@${item.key}: ${item.value};`).join("\n");
      const resumeTokens = ["// Tokens Colors", strColors, "// Tokens Typography", strTypo, "//Tokens Custom", strCustom].join("\n");
      return resumeTokens;
    });
  }
  openServiceHelper(helperName) {
    this.rightServiceOpened = helperName;
    const rc = {
      emitter: "left",
      helper: helperName
    };
    mls.events.fire([this.level], ["DSStyleCursorChanged"], JSON.stringify(rc));
  }
  onDSStyleChanged(obj) {
    return __async(this, null, function* () {
      if (!obj.desc) return;
      const desc = JSON.parse(obj.desc);
      if (desc.emitter === "left") return;
      if (desc.emitter === "right-get") {
        this.onEditorChange(true);
        return;
      }
      if (desc.isComponent) {
        mls.actual[3].mode = desc.dsindex || 0;
        this.isComponent = true;
        this.defaultServices.componentStyle = desc.helper;
        const { widget } = desc;
        if (!widget) return;
        this.componentName = widget;
        yield this.loadStylesComponent(this.componentName);
        const params = this.getParamsServices();
        mls.events.fire([this.level], ["DSStyleSelected"], JSON.stringify(params), 0);
        this.openService(this.defaultServices.componentStyle, "right", 3);
        return;
      }
      this.changeEditor(desc.value, desc.helper);
    });
  }
  onChangeWidgetStyle(less) {
    return __async(this, null, function* () {
      yield this.setStyle(less);
    });
  }
  onAddWidgetStyle(value) {
    return __async(this, null, function* () {
      this.setError("");
      const tagName = this.getWidgetTagName(this.componentName);
      const styleName = value;
      const less = `${tagName}.${styleName} { // don't change this line 
 	// here your style 
}`;
      try {
        if (!this.dsInstance) return;
        yield this.dsInstance.components.styles.add(this.componentName, styleName, less);
      } catch (err) {
        this.setError(err.message);
      }
    });
  }
  onDeleteWidgetStyle(style) {
    return __async(this, null, function* () {
      this.setError("");
      try {
        yield style.setStyleLessIO(null);
        const rc = {
          emitter: "left",
          helper: this.rightServiceOpened || this.getServiceRightOpened(),
          value: [],
          less: "",
          selector: "",
          isComponent: this.isComponent,
          origemLevel: 3
        };
        mls.events.fire([this.level], ["DSStyleChanged"], JSON.stringify(rc));
      } catch (err) {
        this.setError(err.message);
      }
    });
  }
  onRenameWidgetStyle(style, value) {
    return __async(this, null, function* () {
      this.setError("");
      try {
        this.isStyleRename = true;
        this.oldStyleName = style.stylename;
        if (!this.dsInstance) return;
        yield this.dsInstance.components.styles.rename(this.componentName, style.stylename, value);
        this.onEditorChange(false);
      } catch (err) {
        this.setError(err.message);
      }
    });
  }
  loadStylesComponent(componentName, index) {
    return __async(this, null, function* () {
      const dsindex = mls.actual[3].mode || 0;
      const { project } = mls.actual[5];
      if (project === void 0) return;
      this.firstStyleIndex = index || 0;
      const dsInstance = mls.l3.getDSInstance(project, dsindex);
      yield dsInstance.init();
      const comp = yield dsInstance.components.find(componentName);
      if (!comp) return;
      this.stylesComponent = comp.styles;
      if (this.stylesComponent.length === 0) {
        const tag = this.getWidgetTagName(comp.name);
        const stName = comp.name;
        yield dsInstance.components.styles.add(comp.name, stName.substr(8, stName.length), `${tag} { //don't change this line 
 	 
}`);
        this.stylesComponent = comp.styles;
      }
      setTimeout(() => {
        this.handleChangeSelectStyles();
      }, 200);
    });
  }
  handleChangeSelectStyles() {
    return __async(this, null, function* () {
      if (!this.selectStyles) return;
      if (this.selectStyles.value === "0") this.showDefaultMode();
      else this.showActionsMode();
      const style = this.stylesComponent[+this.selectStyles.value];
      const less = yield style.getStyleLessIO();
      this.isSetStyle = true;
      this.isEventAdd = true;
      this.onChangeWidgetStyle(less);
    });
  }
  showConfirmMode() {
    this.actionsMode = "confirm";
  }
  showActionsMode() {
    this.actionsMode = "actions";
    if (this.inputAddStyles) this.inputAddStyles.value = "";
  }
  showDefaultMode() {
    this.actionsMode = "default";
  }
  handleAddStylesClick() {
    this.modeComponent = "add";
    this.showConfirmMode();
  }
  handleRenameStylesClick() {
    this.modeComponent = "rename";
    this.showConfirmMode();
  }
  handleDeleteStylesClick() {
    return __async(this, null, function* () {
      if (!this.selectStyles) return;
      yield this.onDeleteWidgetStyle(this.stylesComponent[+this.selectStyles.value]);
      yield this.loadStylesComponent(this.componentName);
    });
  }
  handleCancelStylesClick() {
    if (!this.selectStyles) return;
    const st = this.stylesComponent[+this.selectStyles.value];
    if (st.stylename === this.componentName.substr(8, this.componentName.length)) this.showDefaultMode();
    else this.showActionsMode();
  }
  handleConfirmStylesClick() {
    return __async(this, null, function* () {
      if (!this.selectStyles || !this.inputAddStyles) return;
      if (this.modeComponent === "rename") {
        yield this.onRenameWidgetStyle(this.stylesComponent[+this.selectStyles.value], this.inputAddStyles.value);
        yield this.loadStylesComponent(this.componentName);
        this.showActionsMode();
      } else if (this.modeComponent === "add") {
        yield this.onAddWidgetStyle(this.inputAddStyles.value);
        yield this.loadStylesComponent(this.componentName, this.stylesComponent.length);
        yield this.onAfterAdd();
        this.showActionsMode();
      }
    });
  }
  getWidgetTagName(widgetName) {
    const parts = widgetName.split("_");
    parts.shift();
    const project = parts.shift() || "";
    let formattedString = `${parts.join("-")}-${project}`;
    formattedString = formattedString.replace(/([^A-Z-]|^)([A-Z])/g, (_, prefix, letter) => `${prefix}-${letter.toLowerCase()}`).toLowerCase();
    return formattedString;
  }
  updated(changedProperties) {
    if (changedProperties.has("msize")) {
      this.setMsizeEditor();
    }
  }
  setMsizeEditor() {
    var _a2, _b;
    if (!this.visible) return;
    if (this.isComponent) {
      const [w, h, t, l] = this.msize.split(",");
      const newH = +h - 50;
      const newT = +t + 50;
      const newMsize = [w, newH, newT, l].join(",");
      (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", newMsize);
      return;
    }
    (_b = this.c2) == null ? void 0 : _b.setAttribute("msize", this.msize);
  }
  handleOpenHelperClick() {
    return __async(this, null, function* () {
      if (!this.containerHelpers) return;
      if (this.isHelperContainerOpen) {
        this.containerHelpers.classList.remove("open");
        this.isHelperContainerOpen = false;
      } else {
        this.containerHelpers.classList.add("open");
        if (this.helperDiv && this.helperDiv.children.length === 0) {
          yield import("./_100554_serviceDsStyleBorder");
          const tagName = convertFileNameToTag("_100554_serviceDsStyleBorder");
          const el = document.createElement(tagName);
          this.helperDiv.appendChild(el);
        }
        this.isHelperContainerOpen = true;
      }
    });
  }
  render() {
    this.style.position = "relative";
    this.style.display = "block";
    return html`
            <style>${this.myStyle}</style>
            <div class="container-open-helper">
                <div class="toogle" @click=${this.handleOpenHelperClick}> 
                    <i class="${this.isHelperContainerOpen ? "fa fa-chevron-right" : "fa fa-chevron-left"}"></i>
                </div>
                <div class="helper"></div>
            </div>
            <div class="styles-if-component" style=${this.isComponent ? "display:'';" : "display:none"}>
                <select 
                    id="service_styles_select_comp_styles"
                    .selectedIndex=${this.firstStyleIndex}
                    @change=${() => {
      this.handleChangeSelectStyles();
    }}
                >
                    ${this.stylesComponent.map((st, index) => {
      return html`
                            <option value="${index}">
                                ${st.stylename !== this.componentName.substr(8, this.componentName.length) ? st.stylename : "Default"}
                            </option>
                        `;
    })}
                    
                </select>
                <div class="actions">
                    <input id="service_styles_input_comp_styles" style=${this.actionsMode === "confirm" ? "display:block" : "display:none"}></input>
                    <i class="fa fa-plus" @click=${() => {
      this.handleAddStylesClick();
    }} style=${this.actionsMode === "confirm" ? "display:none" : "display:block"}></i>
                    <i class="fa fa-trash" @click=${() => {
      this.handleDeleteStylesClick();
    }} style=${this.actionsMode === "actions" ? "display:block" : "display:none"}></i>
                    <i class="fa fa-pencil" @click=${() => {
      this.handleRenameStylesClick();
    }} style=${this.actionsMode === "actions" ? "display:block" : "display:none"}></i>
                    <i class="fa fa-check" @click=${() => {
      this.handleConfirmStylesClick();
    }} style=${this.actionsMode === "confirm" ? "display:block" : "display:none"}></i>
                    <i class="fa fa-times" @click=${() => {
      this.handleCancelStylesClick();
    }} style=${this.actionsMode === "confirm" ? "display:block" : "display:none"}></i>
                </div>
            </div>
            
            <mls-editor-100529 ismls2="true"></mls-editor-100529>
        
        `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "isComponent", _isComponent_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "stylesComponent", _stylesComponent_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "actionsMode", _actionsMode_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "c2", _c2_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "selectStyles", _selectStyles_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "inputAddStyles", _inputAddStyles_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "containerHelpers", _containerHelpers_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "helperDiv", _helperDiv_dec, _ServiceDsStyles);
__decorateElement(_init, 5, "isHelperContainerOpen", _isHelperContainerOpen_dec, _ServiceDsStyles);
_ServiceDsStyles = __decorateElement(_init, 0, "ServiceDsStyles", _ServiceDsStyles_decorators, _ServiceDsStyles);
_ServiceDsStyles.modelCount = 0;
__runInitializers(_init, 1, _ServiceDsStyles);
let ServiceDsStyles = _ServiceDsStyles;
export {
  ServiceDsStyles
};
