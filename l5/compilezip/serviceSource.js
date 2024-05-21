var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
var _c2_dec, _msize_dec, _a, _ServiceSource100554_decorators, _init;
import { html } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { convertFileNameToTag } from "./_100554_utilsLit";
import { ServiceBase } from "./_100554_serviceBase";
_ServiceSource100554_decorators = [customElement("service-source-100554")];
let _ServiceSource100554 = class _ServiceSource100554 extends (_a = ServiceBase, _msize_dec = [property({ type: String })], _c2_dec = [query("mls-editor-100529")], _a) {
  constructor() {
    super();
    this.msize = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.onClickLink = (op) => {
      if (op === "opTS2") return true;
      if (op === "opTheme") return this.showPageTheme();
      if (op === "opMonacoConfig") return this.showConfEditor();
      if (op === "opMonacoReset") return this.showMonacoReset();
      if (op === "opHistory") return this.showHistory();
      if (op === "opView") return this.openRepo();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
      if (op === "icTs") this.showActiveModel();
      if (op === "icHTML") this.createOrShowModelHTML(true);
    };
    this.onClickTitle = () => {
      this.openService("_100554_serviceListFiles", this.position, 2);
    };
    this.details = {
      icon: "&#xf121",
      state: "background",
      tooltip: "Source 2",
      visible: true,
      position: "all",
      widget: "_100554_serviceSource",
      level: [2]
    };
    this.menu = {
      title: {
        icon: "&#xf053",
        text: "L2 - widget1"
      },
      actions: {
        opTheme: "Editor - Themes",
        opMonacoConfig: "Editor - config",
        opMonacoReset: "Editor - reset",
        opHistory: "History",
        opView: "View on repository"
      },
      icons: {
        icTs: "Typescript;f121",
        icHTML: "HTML;f1c9"
      },
      actionDefault: "",
      // call after close icon clicked
      iconDefault: "icTs",
      setMode: void 0,
      // child will set this
      updateTitle: void 0,
      // child will set this
      getLastMode: void 0,
      // child will set this
      lastIcon: void 0,
      // child will set this
      setIconActive: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      onClickIcon: this.onClickIcon,
      onClickTitle: this.onClickTitle
    };
    this.last = void 0;
    this._onChangedContent = void 0;
    this.onModelChange = (e, activeModel, storFile) => {
      clearTimeout(this._onChangedContent);
      this._onChangedContent = window.setTimeout(() => __async(this, null, function* () {
        var _a2;
        yield this.updateModelStatus(activeModel, true);
        const ignoreChanges = e.changes.length === 1 && e.changes[0].range.startLineNumber === 1 && e.changes[0].range.endLineNumber === 1 && e.changes[0].range.endColumn <= 2;
        if (ignoreChanges) return;
        let position;
        if (((_a2 = mls.l2.editor.editors[this.confE2("left")]) == null ? void 0 : _a2.model.id) === activeModel.model.id) {
          position = "left";
        } else {
          position = "right";
        }
        mls.events.fireFileAction("changed", storFile, position);
      }), 400);
    };
    this.getValueInfo = (activeModel) => __async(this, null, function* () {
      const rc = {
        content: activeModel.model.getValue(),
        contentType: "string",
        originalShortName: activeModel.originalShortName,
        originalProject: activeModel.originalProject,
        originalCRC: activeModel.originalCRC
      };
      return rc;
    });
    this.onProjectLoadedEvents = (ev) => __async(this, null, function* () {
      if (ev.level !== this.level) return;
      if (!ev.desc) return;
      try {
        const projectLoadedInfo = JSON.parse(ev.desc);
        yield this.readAllProjectTypescriptAndCompile(projectLoadedInfo.project, "", projectLoadedInfo.needCompile);
      } catch (e) {
        console.error("Error on serviceSource_onProjectLoadedEvents: ", e);
      }
    });
    this.isNewFile = false;
    this.onMLSEvents = (ev) => __async(this, null, function* () {
      if (ev.level !== this.level || ev.type !== "FileAction") return;
      if (!ev.desc) return;
      const fileAction = JSON.parse(ev.desc);
      if (fileAction.position !== this.position) return;
      let keyFiles;
      let keyFilesHTML;
      const getStorFile = () => {
        keyFiles = mls.stor.getKeyToFiles(fileAction.project, fileAction.level, fileAction.shortName, fileAction.folder, fileAction.extension);
        const storFile = mls.stor.files[keyFiles];
        if (!storFile) throw new Error("Error on open, mls.stor.files dont exists, key:" + keyFiles);
        return storFile;
      };
      const getStorFileHTML = () => {
        keyFilesHTML = mls.stor.getKeyToFiles(fileAction.project, fileAction.level, fileAction.shortName, fileAction.folder, ".html");
        return mls.stor.files[keyFilesHTML];
      };
      const onNew = () => __async(this, null, function* () {
        yield this.newFiles(
          fileAction.newshortName,
          fileAction.newProject,
          fileAction.newEnhancement,
          fileAction.newTSSource
        );
      });
      const onOpen = () => __async(this, null, function* () {
        const storFile = getStorFile();
        const storFileHTML = getStorFileHTML();
        yield this.openFiles(storFileHTML, storFile, fileAction.position);
      });
      const onDelete = () => __async(this, null, function* () {
        const storFile = getStorFile();
        const storFileHTML = getStorFileHTML();
        yield this.deleteFiles(storFileHTML, storFile);
      });
      const onUndo = () => __async(this, null, function* () {
        const storFile = getStorFile();
        const storFileHTML = getStorFileHTML();
        yield this.undoFiles(storFileHTML, storFile, keyFilesHTML, keyFiles);
      });
      const onRename = () => __async(this, null, function* () {
        const storFile = getStorFile();
        const storFileHTML = getStorFileHTML();
        yield this.renameFiles(storFileHTML, storFile, fileAction.newProject, fileAction.newshortName, fileAction);
      });
      const onClone = () => __async(this, null, function* () {
        const storFile = getStorFile();
        yield this.cloneFiles(storFile, fileAction.newProject, fileAction.newshortName, fileAction);
      });
      const onUpdatedOnServer = () => __async(this, null, function* () {
        yield this.updatedOnServer();
      });
      if (mls.istrace) console.time("onAction_" + fileAction.action + "_" + fileAction.position);
      yield this.initMonaco();
      switch (fileAction.action) {
        case "new":
          yield onNew();
          break;
        case "open":
          yield onOpen();
          break;
        case "delete":
          yield onDelete();
          break;
        case "undo":
          yield onUndo();
          break;
        case "rename":
          yield onRename();
          break;
        case "clone":
          yield onClone();
          break;
        case "updatedOnServer":
          yield onUpdatedOnServer();
          break;
        default: {
        }
      }
      if (mls.istrace) console.timeEnd("onAction_" + fileAction.action + "_" + fileAction.position);
    });
    this.monacoGlobalInitialized = false;
    this.onFirtModel = true;
    this.timeout_compileConfEditor = 0;
    this._onChangedContentHTML = void 0;
    this.onModelHTMLChange = (e, storFileHTML, model) => {
      clearTimeout(this._onChangedContentHTML);
      this._onChangedContentHTML = window.setTimeout(() => __async(this, null, function* () {
        const sameContent = storFileHTML["originalCRC"] === mls.common.crc.crc32(model.getValue()).toString(16);
        if (sameContent) {
          if (storFileHTML.status !== "new" && storFileHTML.status !== "renamed") storFileHTML.status = "nochange";
          if (storFileHTML.status !== "renamed") yield mls.stor.localStor.setContent(storFileHTML, { content: null });
        } else {
          if (storFileHTML.status !== "renamed" && storFileHTML.status !== "new") storFileHTML.status = "changed";
          yield mls.stor.localStor.setContent(storFileHTML, { contentType: "string", content: model.getValue() });
        }
        mls.events.fireFileAction("statusOrErrorChanged", storFileHTML, model["position"]);
      }), 400);
    };
    this.getValueInfoHTML = (activeModel, originalShortName, originalProject, originalCRC) => __async(this, null, function* () {
      const rc = {
        content: activeModel.getValue(),
        contentType: "string",
        originalShortName,
        originalProject,
        originalCRC
      };
      return rc;
    });
    mls.events.addListener(2, "FileAction", this.onMLSEvents.bind(this));
    mls.events.addListener(2, "MonacoAction", (ev) => this.onMonacoEvents(ev));
    mls.events.addListener(2, "ProjectLoaded", (ev) => this.onProjectLoadedEvents(ev));
    this.initMonaco_GlobalEditor();
  }
  createRenderRoot() {
    return this;
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      var _a2;
      if (!visible) {
        this.saveViewState();
        return;
      }
      yield this.initMonaco();
      if (this.menu.setIconActive) this.menu.setIconActive("icTs");
      (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
    });
  }
  getEditorValue() {
    if (!this._ed1) return "";
    const model = this._ed1.getModel();
    if (!model) return "";
    return model.getValue();
  }
  setEditorValue(val) {
    if (!this._ed1) return false;
    const { shortName, project } = mls.l2.editor.editors[this.confE];
    const uri = this.getUri(`_${project}_${shortName}`, ".ts");
    let model = monaco.editor.getModel(uri);
    if (!model) return false;
    this.setValueInModeKeepingUndo(model, val, true);
  }
  setEditorHTMLValue(val) {
    if (!this._ed1) return false;
    const { shortName, project } = mls.l2.editor.editors[this.confE];
    const uri = this.getUri(`_${project}_${shortName}`, ".html");
    let model = monaco.editor.getModel(uri);
    if (!model) return false;
    this.setValueInModeKeepingUndo(model, val, false);
  }
  get confE() {
    return `l${this.level}_${this.position}`;
  }
  confE2(positionToolbar) {
    return `l${this.level}_${positionToolbar}`;
  }
  get confETS() {
    return this.confE + "_TS";
  }
  get confEJS() {
    return this.confE + "_JS";
  }
  saveViewState() {
    if (!this._ed1) return;
    const activeModel = mls.l2.editor.editors[this.confE];
    if (!activeModel) return;
    activeModel[`${this.position}_viewState`] = this._ed1.saveViewState();
  }
  restaureViewState() {
    if (!this._ed1) return;
    const activeModel = mls.l2.editor.editors[this.confE];
    if (!activeModel) return;
    const viewState = activeModel[`${this.position}_viewState`];
    if (viewState) this._ed1.restoreViewState(viewState);
  }
  setValueInModeKeepingUndo(model, val, checkFirstLine) {
    var _a2;
    let fullRange = model.getFullModelRange();
    let newText = val;
    if (checkFirstLine && !val.trim().startsWith("/// <mls shortName")) {
      const firstLine = model.getLineContent(1);
      newText = firstLine + "\n" + newText;
    }
    const lines = newText.split("\n");
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
    (_a2 = this._ed1) == null ? void 0 : _a2.setPosition({ lineNumber: 1, column: 1 });
  }
  openRepo() {
    const { shortName, project } = mls.l2.editor.editors[this.confE];
    const ext = this.menu.lastIcon === "icTs" ? ".ts" : ".html";
    const keyToFile = mls.stor.getKeyToFiles(project, 2, shortName, "", ext);
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
  showHistory() {
    this.showHistorie2();
    return true;
  }
  showHistorie2() {
    return __async(this, null, function* () {
      const { shortName, project } = mls.l2.editor.editors[this.confE];
      const div = document.createElement("div");
      const scr = document.createElement("script");
      const i2 = `/_${"100554"}_${"mlsHistoryList"}`;
      scr.type = "module";
      scr.id = i2.replace("/", "");
      scr.src = i2;
      div.appendChild(scr);
      const ds = mls.l3.getDSInstance(100554, 0);
      if (ds) {
        yield ds.init();
        ds.components.getCSS("_100554_mlsHistoryList").then((css) => {
          const style = document.createElement("style");
          style.textContent = css;
          div.appendChild(style);
        });
      }
      const obj = {
        icTs: ".ts",
        icHTML: ".html"
      };
      const wc = document.createElement("mls-history-list-100554");
      wc.setAttribute("project", project.toString());
      wc.setAttribute("shortName", shortName);
      wc.setAttribute("level", "2");
      if (this.menu.lastIcon) wc.setAttribute("extension", obj[this.menu.lastIcon]);
      wc.setAttribute("position", this.position);
      div.appendChild(wc);
      if (this.menu.setMode) this.menu.setMode("page", div);
    });
  }
  showPageTheme() {
    if (this.menu.setMode) this.menu.setMode("page", this.getGlobalPageSetTHeme());
    return true;
  }
  showMonacoReset() {
    mls.editor.conf[this.confE] = void 0;
    this.loadMonacoConfigurations();
    if (this.menu.setMode) this.menu.setMode("initial");
    this.updateMonacoConfigutarions();
    this.saveConfEditorToLocalStorage();
    return true;
  }
  showConfEditor() {
    if (this.menu.setMode) this.menu.setMode("editor");
    this.setModelConfEditor();
    return true;
  }
  readAllProjectTypescriptAndCompile(project, shortName, needCompile = true) {
    return __async(this, null, function* () {
      if (_ServiceSource100554.projectsLoaded.includes(project)) return;
      if (mls.istrace) console.log("loading files from project " + project);
      _ServiceSource100554.projectsLoaded.push(project);
      const promises = [];
      const keys = Object.keys(mls.stor.files);
      if (window.traceLivecicle) console.info("creating: files model ", project);
      for (const key of keys) {
        const storFile = mls.stor.files[key];
        if (storFile.project === project && storFile.level === 2 && storFile.extension === ".ts" && storFile.shortName !== shortName) {
          promises.push(this.createModelTS2(storFile, false, false));
        }
      }
      if (mls.istrace) console.time("creating models");
      yield Promise.all(promises);
      if (mls.istrace) console.timeEnd("creating models");
      if (window.traceLivecicle) console.info("firing: mls.l2.editor.compileAllProjectIfNeed ", project);
      if (needCompile) yield mls.l2.editor.compileAllProjectIfNeed(project, true);
    });
  }
  deleteFile(storFile) {
    return __async(this, null, function* () {
      yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
      const activeModel = mls.l2.editor.editors[this.confE];
      if (activeModel.project === storFile.project && activeModel.shortName === storFile.shortName) yield this.createModelTS_testFile();
      mls.l2.editor.remove(storFile);
      this.removeEventsModelTS(storFile);
      const keyFiles = mls.stor.getKeyToFiles(storFile.project, storFile.level, storFile.shortName, storFile.folder, storFile.extension);
      delete mls.stor.files[keyFiles];
    });
  }
  afterUpdate(storFile) {
    return __async(this, null, function* () {
      const mmodel = mls.l2.editor.get(storFile);
      if (!mmodel) return;
      if (storFile.status === "deleted") {
        this.deleteFile(storFile);
        return;
      }
      if (storFile.status === "renamed") {
        mmodel.originalProject = void 0;
        mmodel.originalShortName = void 0;
        mmodel.originalCRC = mls.common.crc.crc32(mmodel.model.getValue()).toString(16);
      }
      yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
      storFile.status = "nochange";
    });
  }
  addEventsModelTS(storFile, model1) {
    storFile.onAction = (action) => this.afterUpdate(storFile);
    storFile.getValueInfo = () => this.getValueInfo(model1);
    model1.model.onDidChangeContent((e) => this.onModelChange(e, model1, storFile));
  }
  removeEventsModelTS(storFile) {
    storFile.onAction = void 0;
    storFile.getValueInfo = void 0;
  }
  onMonacoEvents(ev) {
    if (!ev.desc) return;
    const args = JSON.parse(ev.desc);
    if (!args) return;
    const { action, filePosition, position, project, shortName } = args;
    if (position !== this.position) return;
    if (action === "gotoPosition") {
      this.goToPosition(filePosition, position);
    }
    if (mls.istrace) console.info("received monaco actions", args);
  }
  goToPosition(position, editorPosition) {
    if (!this._ed1) return;
    const confInvert = `l${this.level}_${editorPosition === "left" ? "right" : "left"}`;
    const offset = position - 1;
    const { lineNumber, column } = mls.l2.editor.editors[confInvert].model.getPositionAt(offset);
    this._ed1.revealPositionInCenter({ lineNumber, column }, monaco.editor.ScrollType.Immediate);
    const lineLength = mls.l2.editor.editors[confInvert].model.getLineContent(lineNumber).length + 1;
    const range = new monaco.Range(lineNumber, column, lineNumber, lineLength);
    this._ed1.setSelection(new monaco.Selection(range.startLineNumber, 0, range.startLineNumber, lineLength));
  }
  deleteFiles(storFileHTML, storFileTS) {
    return __async(this, null, function* () {
      try {
        for (var iter = __forAwait([storFileHTML, storFileTS]), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          let storFile = temp.value;
          if (!storFile) continue;
          if (storFile.status === "new") this.deleteFile(storFile);
          else storFile.status = "deleted";
          mls.events.fireFileAction("statusOrErrorChanged", storFile, this.position);
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }
  cloneFiles(storFileTS, newProject, newShortName, oldFileAction) {
    return __async(this, null, function* () {
      yield this.createModelTS_loading();
      this.activeThisService();
      yield this.createModelTS_clone(storFileTS, newProject, newShortName);
      yield this.createModelHTML_clone(storFileTS, newProject, newShortName);
      mls.actual[this.level][this.position] = {
        project: newProject,
        shortName: newShortName
      };
      const fileAction = __spreadProps(__spreadValues({}, oldFileAction), {
        project: newProject,
        shortName: newShortName,
        action: "open",
        newProject: void 0,
        newshortName: void 0
      });
      const ev = {
        level: this.level,
        type: "FileAction",
        desc: JSON.stringify(fileAction)
      };
      this.onMLSEvents(ev);
    });
  }
  newFiles(newShortName, newProject, newEnhancement, tsSource) {
    return __async(this, null, function* () {
      this.isNewFile = true;
      this.activeThisService();
      this.closeMenu();
      const newTSSource = tsSource || `/// <mls shortName="${newShortName}" project="${newProject}" enhancement="${newEnhancement}" />
				
// typescript new file
`;
      yield this.createModelTS1(
        newShortName,
        newProject,
        newTSSource,
        true
      );
      yield this.createOrShowModelHTML(false);
      this.showActiveModel();
      this.isNewFile = false;
    });
  }
  openFiles(storFileHTML, storFileTS, position) {
    return __async(this, null, function* () {
      yield this.createModelTS_loading();
      this.activeThisService();
      this.closeMenu();
      const fileModel = mls.l2.editor.get(storFileTS);
      if (!fileModel) {
        yield this.createModelTS2(storFileTS, true, true);
        this.showActiveModel();
        yield this.readAllProjectTypescriptAndCompile(storFileTS.project, storFileTS.shortName, true).then(() => __async(this, null, function* () {
          yield this.createOrShowModelHTML(false);
        }));
      } else {
        mls.l2.editor.editors[this.confE] = fileModel;
        mls.l2.editor.forceModelUpdate(fileModel.model);
        yield this.createOrShowModelHTML(false);
        this.showActiveModel();
      }
      if (storFileTS && !storFileTS.inLocalStorage && storFileTS.isLocalVersionOutdated)
        storFileTS.isLocalVersionOutdated = false;
      if (storFileHTML && !storFileHTML.inLocalStorage && storFileHTML.isLocalVersionOutdated)
        storFileHTML.isLocalVersionOutdated = false;
      this.saveLocalStorageLastOpen(storFileTS, position);
      if (!this._ed1) return;
      this.restaureViewState();
    });
  }
  renameFiles(storFileHTML, storFileTS, newProject, newShortName, oldFileAction) {
    return __async(this, null, function* () {
      yield this.createModelTS_loading();
      this.activeThisService();
      let model1 = mls.l2.editor.get(storFileTS);
      if (!model1) model1 = yield this.createModelTS2(storFileTS, false, true);
      this.renameTSFile(model1, storFileTS, newProject, newShortName);
      mls.l2.editor.editors[this.confE] = model1;
      this.renameHTMLFile(storFileHTML, newProject, newShortName);
      mls.actual[this.level][this.position] = {
        project: newProject,
        shortName: newShortName
      };
      const fileAction = __spreadProps(__spreadValues({}, oldFileAction), {
        project: newProject,
        shortName: newShortName,
        action: "open",
        newProject: void 0,
        newshortName: void 0
      });
      const ev = {
        level: this.level,
        type: "FileAction",
        desc: JSON.stringify(fileAction)
      };
      this.onMLSEvents(ev);
    });
  }
  updatedOnServer() {
    return __async(this, null, function* () {
      try {
        const keys = Object.keys(mls.stor.files);
        const arr = [];
        let needMsg = false;
        keys.forEach((key) => {
          const f = mls.stor.files[key];
          if (!f) return;
          if (f.inLocalStorage || !f.isLocalVersionOutdated) return;
          arr.push(f);
        });
        yield mls.l2.editor.compileAllProjectIfNeed(mls.actual[5].project, true, false);
        try {
          for (var iter = __forAwait(arr), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
            const storFile = temp.value;
            mls.l2.editor.remove(storFile);
            this.removeEventsModelTS(storFile);
            yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
            yield this.createModelTS2(storFile, false, true);
            if (storFile.project === 100554) needMsg = true;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && (yield temp.call(iter));
          } finally {
            if (error)
              throw error[0];
          }
        }
        if (needMsg) {
          window.collabMessages.add("Files changed in server , please use F5 to reload", "information", { autoClose: false, clearOnClose: false });
        }
      } catch (e) {
        console.info("Erro service source: onUpdatedOnServer");
      }
    });
  }
  undoFiles(storFileHTML, storFileTS, keyFileHTML, keyFileTS) {
    return __async(this, null, function* () {
      try {
        for (var iter = __forAwait([{ storFile: storFileHTML, keyFiles: keyFileHTML }, { storFile: storFileTS, keyFiles: keyFileTS }]), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          let data = temp.value;
          if (!data.storFile) continue;
          if (data.storFile.status === "deleted") {
            data.storFile.status = "changed";
            mls.events.fireFileAction("statusOrErrorChanged", data.storFile, this.position);
            continue;
          }
          if (data.storFile.status === "renamed") {
            throw new Error("not implemented");
          }
          if (data.storFile.extension === ".ts") {
            const imFile = mls.l2.editor.editors[this.confE];
            if (imFile.project === data.storFile.project && imFile.shortName === data.storFile.shortName) yield this.createModelTS_testFile();
            mls.l2.editor.remove(data.storFile);
            this.removeEventsModelTS(data.storFile);
          }
          yield mls.stor.localStor.setContent(data.storFile, { contentType: "string", content: null });
          if (data.storFile.status === "new") {
            delete mls.stor.files[data.keyFiles];
            mls.events.fireFileAction("statusOrErrorChanged", data.storFile, this.position);
            continue;
          }
          if (data.storFile.status === "changed") {
            data.storFile.status = "nochange";
            if (data.storFile.isLocalVersionOutdated && data.storFile.newVersionRefIfOutdated) {
              data.storFile.versionRef = data.storFile.newVersionRefIfOutdated;
              data.storFile.isLocalVersionOutdated = false;
              data.storFile.newVersionRefIfOutdated = void 0;
            }
          } else {
            data.storFile.status = "changed";
          }
          if (data.storFile.extension === ".ts") yield this.createModelTS2(data.storFile, false, true);
          else {
            const uri = this.getUri(`_${data.storFile.project}_${data.storFile.shortName}`, ".html");
            const model = monaco.editor.getModel(uri);
            if (model) model.dispose();
            yield this.createOrShowModelHTML(false);
          }
          mls.events.fireFileAction("statusOrErrorChanged", data.storFile, this.position);
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      ;
    });
  }
  activeThisService() {
    this.openMe();
    mls.editor.setActiveInstance(this.level, this.position);
  }
  closeMenu() {
    if (this.menu.closeMenu) this.menu.closeMenu();
  }
  updateModelStatus(model1, changed) {
    return __async(this, null, function* () {
      var _a2;
      if (model1.project === 0) changed = true;
      model1.changed = changed;
      const cr = yield mls.l2.editor.getCompilerResultTS({ project: model1.project, shortName: model1.shortName }, true);
      let hasError = cr.errors.length > 0;
      model1.error = hasError;
      const key = mls.stor.getKeyToFiles(model1.project, this.level, model1.shortName, "", model1.extension);
      const storFile = mls.stor.files[key];
      const d = { project: model1.project, shortName: model1.shortName, level: this.level, position: this.position };
      if (!hasError) {
        const enhancementInstance = yield mls.l2.enhancement.getEnhancementInstance(model1).catch((e) => void 0);
        if (enhancementInstance) yield enhancementInstance.onAfterChange(model1);
        hasError = storFile.hasError;
      }
      yield this.changeStatusFile(model1, storFile, (_a2 = cr.tripleSlashMLS) == null ? void 0 : _a2.variables, hasError);
    });
  }
  changeStatusFile(model1, storFile, variables, hasError) {
    return __async(this, null, function* () {
      if (!storFile) return;
      const oldStatus = storFile.status;
      storFile.hasError = hasError;
      const sameContent = model1.originalCRC === mls.common.crc.crc32(model1.model.getValue()).toString(16);
      if (sameContent) {
        if (storFile.status !== "new") storFile.status = "nochange";
        yield mls.stor.localStor.setContent(storFile, { content: null });
      } else {
        if (storFile.status !== "renamed" && storFile.status !== "new") storFile.status = "changed";
        yield mls.stor.localStor.setContent(storFile, yield this.getValueInfo(model1));
      }
      if (oldStatus !== storFile.status) {
        mls.events.fireFileAction("statusOrErrorChanged", storFile, this.position);
      }
    });
  }
  renameTSFile(model1, storFile, newProject, newShortName) {
    if (storFile.hasError) throw new Error("Error on rename, clear errors before rename");
    if (!this.isNewNameValid(newShortName)) throw new Error("Error on rename, new shortName is a invalid name");
    const newSts = { shortName: newShortName, project: newProject };
    if (!mls.l2.editor.rename(model1, newSts)) throw new Error("Error on rename mls.l2.editor.mfiles");
    if (!mls.stor.renameFile(storFile, newSts)) throw new Error("Error on rename mls.stor.files");
    mls.common.tripleslash.changeVariable(model1, "shortName", newShortName);
    mls.common.tripleslash.changeVariable(model1, "project", newProject.toString());
    if (storFile.status === "new") return;
    storFile.status = "renamed";
  }
  isNewNameValid(newShortName) {
    if (newShortName.length === 0 || newShortName.length > 255) return false;
    const invalidCharacters = /[_\/{}\t\[\]\*$@#=\-+!|?,<>=.;^~º°""''``áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;
    return !invalidCharacters.test(newShortName);
  }
  showActiveModel() {
    var _a2;
    let activeModel = mls.l2.editor.editors[this.confE];
    if (activeModel && activeModel.project === 0 && activeModel.shortName === "testFile" && !this.isNewFile) {
      const ret = this.openLastFile(this.level, this.position);
      if (ret) activeModel = mls.l2.editor.editors[this.confE];
    }
    if (!this._ed1 || !activeModel || !this.menu.getLastMode) return false;
    const changedFile = this.menu.title !== activeModel.shortName;
    this.menu.title.text = `_${activeModel.project}_${activeModel.shortName}`;
    const lastMode = this.menu.getLastMode();
    if (changedFile && lastMode !== "initial") {
      this._ed1.setModel(activeModel.model);
      if (this.menu.setMode) this.menu.setMode("initial");
    } else if (lastMode === "initial") {
      this._ed1.setModel(activeModel.model);
      if (this.menu.updateTitle) this.menu.updateTitle();
    } else if (lastMode === "editor") {
    } else if (lastMode === "page") {
      this._ed1.setModel(activeModel.model);
    }
    (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
    return true;
  }
  initMonaco() {
    return __async(this, null, function* () {
      if (!this._ed1) {
        yield this.initMonaco_Editor();
        if (this.serviceContent && typeof this.serviceContent.layout === "function") this.serviceContent.layout();
      }
    });
  }
  initMonaco_GlobalEditor() {
    return __async(this, null, function* () {
      this.loadMonacoConfigurations();
      if (this.monacoGlobalInitialized) return;
      this.monacoGlobalInitialized = true;
      this.loadMonacoThemeFromLocalStorage();
      this.updateMonacoGlobalTheme();
      mls.editor.InitMonaco();
    });
  }
  initMonaco_Editor() {
    return __async(this, null, function* () {
      const addEventsEditor = () => {
        if (!this._ed1) return;
        this._ed1.onDidFocusEditorWidget(() => {
          if (this.menu.lastIcon === "icHTML") return;
          mls.editor.setActiveInstance(this.level, this.position);
        });
      };
      if (!this.c2) return;
      this._ed1 = monaco.editor.create(this.c2, mls.editor.conf[this.confE]);
      this.c2["mlsEditor"] = this._ed1;
      mls.editor.instances[this.confE] = this._ed1;
      mls.editor.InitEditor(this._ed1);
      addEventsEditor();
      this.createModelTS_loading();
      this.createModelConf("// loading ...");
      yield this.createModelTS_testFile();
    });
  }
  loadMonacoConfigurations() {
    if (!mls.editor.conf || Object.keys(mls.editor.conf).length === 0) {
      this.loadConfEditorFromLocalStorage();
    }
    if (mls.editor.conf[this.confE]) return;
    mls.editor.conf[this.confE] = {
      contextmenu: true,
      autoIndent: "full",
      wordWrap: "on",
      wrappingIndent: "indent",
      tabCompletion: "on",
      renderControlCharacters: false,
      showUnused: true,
      glyphMargin: true,
      // acceptSuggestionOnEnter: "off",  // "on", "smart" -> ex: "dd" , invalid work will be get for next suggestion, bad
      minimap: { enabled: false },
      useTabStops: true,
      scrollBeyondLastColumn: 2,
      scrollBeyondLastLine: false,
      formatOnType: true,
      fixedOverflowWidgets: true,
      codeLens: true,
      showFoldingControls: "mouseover",
      suggestSelection: "first",
      stickyScroll: { enabled: false, maxLineCount: 3 },
      stickyTabStops: true,
      fontSize: 20,
      automaticLayout: true
    };
  }
  getUri(shortFN, ftype) {
    return monaco.Uri.parse(`file://server/${shortFN}${ftype}`);
  }
  createModelTS_testFile() {
    return __async(this, null, function* () {
      const shortName = "testFile";
      const project = 0;
      const defaultTS = `/// <mls shortName="${shortName}" project="${project}" enhancement="config_ts_web-component" />
// typescript example`;
      yield this.createModelTS1(shortName, project, defaultTS, true);
    });
  }
  createModelTS_loading() {
    return __async(this, null, function* () {
      const shortName = "loading...";
      const project = 0;
      const defaultTS = "wait...";
      const mfile = yield this.createModelTS1(shortName, project, defaultTS, true);
      if (this.onFirtModel && this._ed1) {
        this.onFirtModel = false;
        this._ed1.setModel(mfile.model);
      }
    });
  }
  createModelTS_clone(storFile, newProject, newShortName) {
    return __async(this, null, function* () {
      let model1 = mls.l2.editor.get(storFile);
      if (!model1) model1 = yield this.createModelTS2(storFile, false, true);
      let defaultTS = model1.model.getValue();
      const baseTag = convertFileNameToTag(`_${storFile.project}_${storFile.shortName}`);
      const newTag = convertFileNameToTag(`_${newProject}_${newShortName}`);
      const regex = new RegExp(baseTag, "g");
      defaultTS = defaultTS.replace(regex, newTag);
      defaultTS = this.changeClassName(defaultTS, newProject, newShortName);
      model1 = yield this.createModelTS1(newShortName, newProject, defaultTS, true);
      mls.common.tripleslash.changeVariable(model1, "shortName", newShortName);
      mls.common.tripleslash.changeVariable(model1, "project", newProject.toString());
    });
  }
  changeClassName(source, project, shortname) {
    const regex = /export\s+class\s+(\w+)\s+extends/g;
    const match = regex.exec(source);
    const newClassName = shortname.charAt(0).toUpperCase() + shortname.substring(1, shortname.length) + project.toString();
    if (match) {
      const originalTag = match[1];
      const replacedSource = source.replace(originalTag, newClassName);
      return replacedSource;
    }
    return source;
  }
  createModelHTML_clone(storFile, newProject, newShortName) {
    return __async(this, null, function* () {
      const { shortName, project } = storFile;
      const uri = this.getUri(`_${project}_${shortName}`, ".html");
      let model = monaco.editor.getModel(uri);
      let cont = "<h1>Edit this</h1>";
      let key = "";
      if (model) cont = model.getValue();
      else {
        key = mls.stor.getKeyToFiles(project, storFile.level, shortName, "", ".html");
        if (mls.stor.files[key]) cont = yield mls.stor.files[key].getContent();
      }
      const baseTag = convertFileNameToTag(`_${storFile.project}_${storFile.shortName}`);
      const newTag = convertFileNameToTag(`_${newProject}_${newShortName}`);
      const regex = new RegExp(baseTag, "g");
      cont = cont.replace(regex, newTag);
      key = mls.stor.getKeyToFiles(newProject, storFile.level, newShortName, "", ".html");
      let file = mls.stor.files[key];
      if (!file) {
        file = yield mls.stor.addOrUpdateFile({ project, level: storFile.level, shortName: newShortName, extension: ".html", versionRef: (/* @__PURE__ */ new Date()).toISOString(), folder: "" });
        file.status = "new";
      }
      const fileInfo = {
        content: cont,
        contentType: "string"
      };
      yield mls.stor.localStor.setContent(file, fileInfo);
      yield this.getOrCreateModelHTML(newShortName, newProject, file, fileInfo);
    });
  }
  createModelTS1(shortName, project, defaultTS, activateModel) {
    return __async(this, null, function* () {
      const level = 2;
      const extension = ".ts";
      if (project > 1) yield mls.stor.server.loadProjectInfoIfNeeded(project);
      const key = mls.stor.getKeyToFiles(project, level, shortName, "", extension);
      let storFile = mls.stor.files[key];
      if (!storFile) {
        storFile = yield mls.stor.addOrUpdateFile({ project, level, shortName, extension, versionRef: (/* @__PURE__ */ new Date()).toISOString(), folder: "" });
        storFile.status = "new";
      }
      let model1 = mls.l2.editor.get({ project, shortName });
      if (!model1) {
        const src2 = storFile ? (yield storFile.getContent(defaultTS)) || defaultTS : defaultTS;
        const ftype = src2.split("\n")[0].indexOf(' type="definition"') > 0 ? ".d.ts" : ".ts";
        const uri = this.getUri(`_${project}_${shortName}`, ftype);
        model1 = mls.l2.editor.get({ project, shortName });
        if (model1) return model1;
        const model = monaco.editor.createModel(src2, "typescript", uri);
        model1 = {
          changed: true,
          error: false,
          project,
          shortName,
          extension,
          model,
          storFile,
          codeLens: []
        };
        mls.l2.editor.add(model1);
        this.addEventsModelTS(storFile, model1);
      }
      yield this.updateModelStatus(model1, false);
      if (activateModel) mls.l2.editor.editors[this.confE] = model1;
      return model1;
    });
  }
  createModelTS2(storFile, activedModel, compile) {
    return __async(this, null, function* () {
      const { project, shortName, extension } = storFile;
      let model1 = mls.l2.editor.get({ project, shortName });
      if (model1) return model1;
      const info = storFile.getValueInfo ? yield storFile.getValueInfo() : null;
      const haveInfo = info && !!info.content;
      const src2 = haveInfo ? info == null ? void 0 : info.content : yield storFile.getContent();
      if (src2 instanceof Blob) throw new Error("ts file must be string");
      if (!src2) throw new Error("ts file is undefined");
      ;
      const originalCRC = haveInfo ? info == null ? void 0 : info.originalCRC : mls.common.crc.crc32(src2).toString(16);
      const originalProject = haveInfo ? info == null ? void 0 : info.originalProject : void 0;
      const originalShortName = haveInfo ? info == null ? void 0 : info.originalShortName : void 0;
      const ftype = src2.split("\n")[0].indexOf(' type="definition"') > 0 ? ".d.ts" : ".ts";
      const uri = this.getUri(`_${project}_${shortName}`, ftype);
      const model = monaco.editor.createModel(src2, "typescript", uri);
      model1 = {
        changed: false,
        // not changed in this section, but storFile.changed is about all sections
        error: false,
        project,
        shortName,
        extension,
        model,
        storFile,
        originalCRC,
        originalProject,
        originalShortName,
        codeLens: []
      };
      mls.l2.editor.add(model1);
      this.addEventsModelTS(storFile, model1);
      if (compile) {
        yield this.updateModelStatus(model1, false);
      }
      if (activedModel) {
        mls.l2.editor.editors[this.confE] = model1;
      }
      return model1;
    });
  }
  setModelConfEditor() {
    if (!this._ed1 || !this.mConfEditor) return;
    const src2 = this.getConfEditorToTypescript();
    this.mConfEditor["mlsConf"] = "confEditor";
    this.mConfEditor.setValue(src2);
    this._ed1.setModel(this.mConfEditor);
  }
  createModelConf(src2) {
    return __async(this, null, function* () {
      if (mls.istrace) console.log(`ServiceSource, createModelConf_${this.position}, ${!!this.mConfEditor}`);
      if (this.mConfEditor) return;
      const shortName = this.confE + "_service_source.confEditor";
      const level = 2;
      const project = 0;
      const extension = ".ts";
      const storFile = yield mls.stor.addOrUpdateFile({ project, level, shortName, extension, versionRef: (/* @__PURE__ */ new Date()).toISOString(), folder: "" });
      const uri = this.getUri(shortName, extension);
      const model = monaco.editor.getModel(uri);
      if (model) {
        this.mConfEditor = model;
      } else this.mConfEditor = monaco.editor.createModel(src2, "typescript", uri);
      mls.l2.editor.add({
        changed: false,
        error: false,
        model: this.mConfEditor,
        storFile,
        project: 0,
        shortName,
        extension,
        codeLens: []
      });
      this.mConfEditor.onDidChangeContent((e) => {
        const mode = this.mConfEditor["mlsConf"];
        if (!mode || !this.mConfEditor) return;
        src2 = this.mConfEditor.getValue();
        this.compileSrcEditor(mode, src2);
      });
    });
  }
  compileSrcEditor(mode, src2) {
    clearTimeout(this.timeout_compileConfEditor);
    this.timeout_compileConfEditor = window.setTimeout(() => __async(this, null, function* () {
      if (!this.mConfEditor) return;
      const mmodel = mls.l2.editor.find(this.mConfEditor.id);
      if (!mmodel) return;
      const rcc = yield mls.l2.editor.getCompilerResultTS(mmodel, true);
      if (rcc.errors.length !== 0 || !rcc.prodJS) return;
      if (mode === "confEditor") this.setConfEditorFromJavascript(rcc.prodJS, src2);
    }), 500);
  }
  loadConfEditorFromLocalStorage() {
    const json = localStorage.getItem("mlsConfEditor");
    if (json) {
      mls.editor.loadConfFromJSON(json);
    }
  }
  saveConfEditorToLocalStorage() {
    localStorage.setItem("mlsConfEditor", JSON.stringify(mls.editor.conf));
  }
  loadMonacoThemeFromLocalStorage() {
    if (!mls.editor.themeName) mls.editor.setThemeName(localStorage.getItem("mlsConfTheme"));
  }
  saveMonacoGlobalThemeToLS() {
    localStorage.setItem("mlsConfTheme", mls.editor.themeName);
  }
  getConfEditorToTypescript() {
    return `/// <mls shortName="config_monaco_editor" project="0" enhancement="config_config" />
		
mls.editor.conf['${this.confE}'] = ` + JSON.stringify(mls.editor.conf[this.confE], null, 2) + ";\n";
  }
  setConfEditorFromJavascript(javastr, src) {
    if (this.level < 1) return;
    const that = this;
    (function scope() {
      eval(javastr);
      if (mls.editor.conf[that.confE] && typeof mls.editor.conf[that.confE] === "object") {
        that.updateMonacoConfigutarions();
        that.saveConfEditorToLocalStorage();
      }
    }).call(this);
  }
  updateMonacoConfigutarions() {
    return __async(this, null, function* () {
      if (this._ed1) this._ed1.updateOptions(mls.editor.conf[this.confE]);
    });
  }
  updateMonacoGlobalTheme() {
    let rc = true;
    if (mls.istrace) console.log(`service source, updating monaco theme: ${this.position}`);
    const internalThemes = ["VS", "VS Dark", "High Contrast (Dark)"];
    const internalThemes2 = ["vs", "vs-dark", "hc-black", "hc-light"];
    let name2 = "";
    try {
      const internalIndex = internalThemes.indexOf(mls.editor.themeName);
      if (internalIndex < 0) {
        name2 = "mytheme";
        const path = mls["baseMonaco"] + "../themes/" + mls.editor.themeName + ".json";
        mls.api.get(path, {}, (data) => {
          const json = JSON.parse(data);
          monaco.editor.defineTheme(name2, json);
          monaco.editor.setTheme(name2);
        });
      } else {
        name2 = internalThemes2[internalIndex];
        monaco.editor.setTheme(name2);
      }
    } catch (ex) {
      console.error("error on set theme " + name2, ex);
      rc = false;
    }
    return rc;
  }
  getGlobalPageSetTHeme() {
    const div1 = document.createElement("div");
    div1.innerHTML = `<div><p id='theme-actual'>Theme actual: ${mls.editor.themeName} </p><br><p>Set Theme (only 1 theme in all editors)</p><select class="hidden" id="theme-select" style="display: initial;"><option>select ...</option><option value="vs">VS</option><option value="vs-dark">VS Dark</option><option value="hc-black">High Contrast (Dark)</option><option value="active4d">Active4D</option><option value="all-hallows-eve">All Hallows Eve</option><option value="amy">Amy</option><option value="birds-of-paradise">Birds of Paradise</option><option value="blackboard">Blackboard</option><option value="brilliance-black">Brilliance Black</option><option value="brilliance-dull">Brilliance Dull</option><option value="chrome-devtools">Chrome DevTools</option><option value="clouds-midnight">Clouds Midnight</option><option value="clouds">Clouds</option><option value="cobalt">Cobalt</option><option value="cobalt2">Cobalt2</option><option value="dawn">Dawn</option><option value="dracula">Dracula</option><option value="dreamweaver">Dreamweaver</option><option value="eiffel">Eiffel</option><option value="espresso-libre">Espresso Libre</option><option value="github">GitHub</option><option value="idle">IDLE</option><option value="katzenmilch">Katzenmilch</option><option value="kuroir-theme">Kuroir Theme</option><option value="lazy">LAZY</option><option value="magicwb--amiga-">MagicWB (Amiga)</option><option value="merbivore-soft">Merbivore Soft</option><option value="merbivore">Merbivore</option><option value="monokai-bright">Monokai Bright</option><option value="monokai">Monokai</option><option value="night-owl">Night Owl</option><option value="oceanic-next">Oceanic Next</option><option value="pastels-on-dark">Pastels on Dark</option><option value="slush-and-poppies">Slush and Poppies</option><option value="solarized-dark">Solarized-dark</option><option value="solarized-light">Solarized-light</option><option value="spacecadet">SpaceCadet</option><option value="sunburst">Sunburst</option><option value="textmate--mac-classic-">Textmate (Mac Classic)</option><option value="tomorrow-night-blue">Tomorrow-Night-Blue</option><option value="tomorrow-night-bright">Tomorrow-Night-Bright</option><option value="tomorrow-night-eighties">Tomorrow-Night-Eighties</option><option value="tomorrow-night">Tomorrow-Night</option><option value="tomorrow">Tomorrow</option><option value="twilight">Twilight</option><option value="upstream-sunburst">Upstream Sunburst</option><option value="vibrant-ink">Vibrant Ink</option><option value="xcode-default">Xcode_default</option><option value="zenburnesque">Zenburnesque</option><option value="iplastic">iPlastic</option><option value="idlefingers">idleFingers</option><option value="krtheme">krTheme</option><option value="monoindustrial">monoindustrial</option></select>`;
    const sel = div1.querySelector("#theme-select");
    if (!sel) return div1;
    sel.oninput = (ev) => {
      var _a2, _b;
      if (((_a2 = ev == null ? void 0 : ev.srcElement) == null ? void 0 : _a2.localName) === "select") {
        const el = ev.srcElement;
        const actual = div1.querySelector("#theme-actual");
        if (el.selectedIndex < 1) return;
        mls.editor.setThemeName(((_b = el.options) == null ? void 0 : _b[el.selectedIndex].text) || "default");
        this.saveMonacoGlobalThemeToLS();
        this.updateMonacoGlobalTheme();
        if (actual) actual.innerHTML = `Theme changed to: ${mls.editor.themeName}`;
      }
    };
    return div1;
  }
  createOrShowModelHTML(open, fileInfo) {
    return __async(this, null, function* () {
      const { shortName, project } = mls.l2.editor.editors[this.confE];
      const uri = this.getUri(`_${project}_${shortName}`, ".html");
      let model = monaco.editor.getModel(uri);
      const key = mls.stor.getKeyToFiles(project, this.level, shortName, "", ".html");
      let storFileHTML = mls.stor.files[key];
      if (!storFileHTML) {
        yield this.createHTMLFile(project, shortName, `<h1>_${project}_${shortName}</h1>`);
        storFileHTML = mls.stor.files[key];
      }
      if (!model) model = yield this.getOrCreateModelHTML(shortName, project, storFileHTML, fileInfo);
      let src2;
      const info = storFileHTML.getValueInfo ? yield storFileHTML.getValueInfo() : null;
      const haveInfo = info && !!info.content;
      src2 = haveInfo ? info == null ? void 0 : info.content : "";
      if (!src2) {
        src2 = yield storFileHTML.getContent();
        if (!src2) console.log("error on getContent, src is null");
      }
      if (src2 instanceof Blob) throw new Error("html file must be string");
      if (!src2) src2 = "";
      const originalCRC = haveInfo ? info == null ? void 0 : info.originalCRC : mls.common.crc.crc32(src2).toString(16);
      model["originalCRC"] = originalCRC;
      if (src2) model.setValue(src2);
      if (open && this._ed1) this._ed1.setModel(model);
      return storFileHTML;
    });
  }
  createHTMLFile(project, shortName, content) {
    return __async(this, null, function* () {
      const params = {
        project,
        level: 2,
        shortName,
        extension: ".html",
        versionRef: "0",
        folder: ""
      };
      const file = yield mls.stor.addOrUpdateFile(params);
      file.status = "new";
      const fileInfo = {
        content,
        contentType: "string"
      };
      yield mls.stor.localStor.setContent(file, fileInfo);
    });
  }
  getOrCreateModelHTML(shortName, project, storFileHTML, fileInfo) {
    return __async(this, null, function* () {
      const uri = this.getUri(`_${project}_${shortName}`, ".html");
      let model = monaco.editor.getModel(uri);
      if (model) return model;
      const content = fileInfo ? fileInfo.content : yield storFileHTML.getContent();
      model = monaco.editor.createModel(content, "html", uri);
      model["position"] = this.position;
      storFileHTML["originalCRC"] = storFileHTML.inLocalStorage ? "undefined" : mls.common.crc.crc32(model.getValue()).toString(16);
      if (storFileHTML.status === "renamed" && fileInfo) {
        this.setEventsModelHTML(model, storFileHTML, fileInfo.originalShortName, fileInfo.originalProject);
        model.setValue(fileInfo.content);
      } else {
        this.setEventsModelHTML(model, storFileHTML, storFileHTML.shortName, storFileHTML.project);
      }
      return model;
    });
  }
  setEventsModelHTML(model, storFileHTML, shortName, project) {
    storFileHTML.onAction = (action) => this.afterUpdateHTML(storFileHTML, model);
    storFileHTML.getValueInfo = () => this.getValueInfoHTML(
      model,
      shortName,
      project,
      storFileHTML["originalCRC"]
    );
    if (model) model.onDidChangeContent((e) => this.onModelHTMLChange(e, storFileHTML, model));
  }
  renameHTMLFile(storFileHTML, newProject, newShortName) {
    return __async(this, null, function* () {
      if (!storFileHTML) return;
      const newSts = { shortName: newShortName, project: newProject };
      yield this.getOrCreateModelHTML(storFileHTML.shortName, storFileHTML.project, storFileHTML);
      if (!storFileHTML.getValueInfo) return;
      const valueInfo = yield storFileHTML.getValueInfo();
      const { status } = storFileHTML;
      if (!mls.stor.renameFile(storFileHTML, newSts)) throw new Error("Error on rename mls.stor.files");
      const key = mls.stor.getKeyToFiles(newProject, this.level, newShortName, "", ".html");
      const newStorFileHTML = mls.stor.files[key];
      newStorFileHTML.status = "renamed";
      yield mls.stor.localStor.setContent(newStorFileHTML, valueInfo);
      setTimeout(() => __async(this, null, function* () {
        const file = yield this.createOrShowModelHTML(false, valueInfo);
        if (status === "new") file.status = status;
      }), 500);
    });
  }
  afterUpdateHTML(storFile, model) {
    return __async(this, null, function* () {
      if (storFile.status === "deleted") {
        yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
        const keyFiles = mls.stor.getKeyToFiles(storFile.project, storFile.level, storFile.shortName, storFile.folder, storFile.extension);
        delete mls.stor.files[keyFiles];
        return;
      }
      if (storFile.status === "renamed") {
        storFile["originalCRC"] = mls.common.crc.crc32(model.getValue()).toString(16);
      }
      yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
      storFile.status = "nochange";
    });
  }
  updated(changedProperties) {
    var _a2;
    if (changedProperties.has("msize")) {
      if (!this.visible) return;
      (_a2 = this.c2) == null ? void 0 : _a2.setAttribute("msize", this.msize);
    }
  }
  render() {
    return html`
            <mls-editor-100529 ismls2="true"></mls-editor-100529>
        `;
  }
  saveLocalStorageLastOpen(storFile, position) {
    try {
      let last = localStorage.getItem("_100554_serviceSource");
      last = last ? last : "{}";
      const info = JSON.parse(last);
      const keyLocal = "last_" + this.level + "_" + position;
      if (info[keyLocal]) {
        info[keyLocal].project = storFile.project;
        info[keyLocal].shortName = storFile.shortName;
        info[keyLocal].extension = storFile.extension;
        info[keyLocal].level = storFile.level;
        info[keyLocal].folder = storFile.folder;
      } else {
        info[keyLocal] = {
          project: storFile.project,
          shortName: storFile.shortName,
          extension: storFile.extension,
          level: storFile.level,
          folder: storFile.folder
        };
      }
      localStorage.setItem("_100554_serviceSource", JSON.stringify(info));
    } catch (e) {
      localStorage.setItem("_100554_serviceSource", JSON.stringify({}));
    }
  }
  openLastFile(level, position) {
    try {
      let last = localStorage.getItem("_100554_serviceSource");
      last = last ? last : "{}";
      const info = JSON.parse(last);
      const keyLocal = "last_" + level + "_" + position;
      if (!info[keyLocal]) return false;
      const key = mls.l2.editor.getKey(
        {
          project: +info[keyLocal].project,
          shortName: info[keyLocal].shortName
        }
      );
      const model = mls.l2.editor.mfiles[key];
      if (!model) return false;
      mls.l2.editor.editors[this.confE] = model;
      mls.actual[this.level].setFullName(`_${info[keyLocal].project}_${info[keyLocal].shortName}`);
      mls.actual[this.level][position] = {
        project: model.storFile.project,
        shortName: model.storFile.shortName,
        extension: model.storFile.extension,
        folder: model.storFile.folder
      };
      return true;
    } catch (e) {
      return false;
    }
  }
  getActualRef() {
    try {
      let ret = "";
      if (!mls.actual[2] || !mls.actual[2][this.position]) return ret;
      const actual = mls.actual[2][this.position];
      const ext = this.menu.lastIcon === "icTs" ? ".ts" : ".html";
      if (!actual) return ret;
      ret = mls.stor.getKeyToFiles(actual.project, 2, actual.shortName, actual.folder, ext);
      return ret;
    } catch (e) {
      return "";
    }
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "msize", _msize_dec, _ServiceSource100554);
__decorateElement(_init, 5, "c2", _c2_dec, _ServiceSource100554);
_ServiceSource100554 = __decorateElement(_init, 0, "ServiceSource100554", _ServiceSource100554_decorators, _ServiceSource100554);
_ServiceSource100554.projectsLoaded = [];
__runInitializers(_init, 1, _ServiceSource100554);
let ServiceSource100554 = _ServiceSource100554;
export {
  ServiceSource100554
};
