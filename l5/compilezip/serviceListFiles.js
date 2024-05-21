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
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
var _history_dec, _files_dec, _errorAux_dec, _projectLabel_dec, _project_dec, _mode_dec, _a, _ServiceListFiles_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initServiceListFilesAdd } from "./_100554_serviceListFilesAdd";
const message_pt = {
  updateListVerify: "atualizar lista/verificar",
  update: "atualizar",
  addNewFile: "adicionar novo arquivo",
  filter: "Filtrar",
  localProject: "Projeto local",
  totalFiles: "arquivos totais",
  filesWithErrors: "arquivos com erros",
  filesInLocalStorage: "arquivos no armazenamento local",
  filesChangedOnTheServer: "arquivos alterados no servidor",
  history: "Hist\uFFFDrico",
  undo: "desfazer",
  clone: "clonar",
  rename: "renomear",
  delete: "excluir"
};
const message_en = {
  updateListVerify: "update list/ verify",
  update: "update",
  addNewFile: "add new file",
  filter: "Filter",
  localProject: "Local project",
  totalFiles: "total files",
  filesWithErrors: "files with errors",
  filesInLocalStorage: "file in local storage",
  filesChangedOnTheServer: "files changed on the server",
  history: "History",
  undo: "undo",
  clone: "clone",
  rename: "rename",
  delete: "delete"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceListFiles_decorators = [customElement("service-list-files-100554")];
class ServiceListFiles extends (_a = ServiceBase, _mode_dec = [property()], _project_dec = [property()], _projectLabel_dec = [property()], _errorAux_dec = [property()], _files_dec = [property({ type: Array })], _history_dec = [property({ type: Array })], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.mode = __runInitializers(_init, 8, this, "list"), __runInitializers(_init, 11, this);
    this.project = __runInitializers(_init, 12, this, 1), __runInitializers(_init, 15, this);
    this.projectLabel = __runInitializers(_init, 16, this, "1"), __runInitializers(_init, 19, this);
    this.errorAux = __runInitializers(_init, 20, this, ""), __runInitializers(_init, 23, this);
    this.files = __runInitializers(_init, 24, this, []), __runInitializers(_init, 27, this);
    this.history = __runInitializers(_init, 28, this, []), __runInitializers(_init, 31, this);
    this.info = {
      tot: 0,
      version: 0,
      storage: 0,
      error: 0
    };
    this.details = {
      icon: "&#xf15b",
      state: "background",
      position: "all",
      tooltip: "Select",
      visible: true,
      widget: "_100554_serviceListFiles",
      level: [2, 4],
      customConfiguration: {
        2: {
          tooltip: "Select Widget"
        },
        4: {
          tooltip: "Select Page"
        }
      }
    };
    this.onClickLink = (op) => {
      return false;
    };
    this.menu = {
      title: "List Files",
      actions: {},
      icons: {},
      actionDefault: "opPlugins",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink
    };
    this.onMLSEvents = (ev) => __async(this, null, function* () {
      if (this.visible === void 0 || this.visible === null || this.visible && this.visible === "false") return;
      if (ev.level !== +this.level || ev.type !== "FileAction") return;
      const fileAction = JSON.parse(ev.desc);
      if (fileAction.position !== this.position || !["statusOrErrorChanged", "projectListChanged"].includes(fileAction.action) || fileAction.project === 0) return;
      this.init();
    });
    this.changeListTimeout = 0;
    //------------ IMPLEMENTS -----------------
    this.extensionLevel = {
      2: ".ts",
      4: ".html"
    };
    this.setLoader = -1;
    this.inFilter = false;
    this.timeFilterChange = 0;
    initServiceListFilesAdd();
    this.setEvents();
  }
  onServiceClick(visible, reinit) {
    this.mode = "list";
    if (visible && reinit) {
      this.init();
      this.firstTimeVerifyProject();
    }
  }
  firstTimeVerifyProject() {
    if (window.updateFile && window.updateFile.includes(mls.actual[5].project)) {
      return;
    }
    setTimeout(() => {
      if (!window.updateFile) {
        window.updateFile = [mls.actual[5].project];
      } else {
        window.updateFile.push(mls.actual[5].project);
      }
      const keys = Object.keys(mls.stor.files);
      let info;
      for (const key of keys) {
        info = mls.stor.files[key];
        if (info.project !== mls.actual[5].project) continue;
        break;
      }
      mls.events.fireFileAction("updatedOnServer", info, "left", void 0, void 0, void 0, void 0, 600);
    }, 5e3);
  }
  showAdd() {
    this.inFilter = false;
    this.mode = "add";
    this.menu.setMode;
    return true;
  }
  // -------------- EVENTS -------------------
  setEvents() {
    mls.events.addEventListener([2, 5], ["ProjectSelected"], (ev) => {
      if (this.project === mls.actual[5].project) return;
      this.init();
    });
    mls.events.addListener(5, "FileAction", (ev) => {
      if (ev.type !== "FileAction") return;
      if (this.visible === void 0 || this.visible === null || this.visible && this.visible === "false") return;
      const fileAction = JSON.parse(ev.desc);
      if (!["projectListChanged"].includes(fileAction.action)) return;
      this.init();
    });
    mls.events.addListener(2, "FileAction", this.onMLSEvents.bind(this));
  }
  // -------------  WEBCOMPONENT -------------
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    if (this.mode === "list") {
      return html`
            <div class="contentServiceList scroll-custom">
                ${this.renderHeader()}
                <ul>
                    ${this.renderHistory()}
                    ${this.renderList()}
                </ul>
                ${this.renderAuxEdit()}
            </div>
        `;
    } else {
      return html`${this.renderAdd()}`;
    }
  }
  renderHeader() {
    let auxV = "";
    let auxE = "";
    let auxS = "";
    if (this.info.version > 0) {
      auxV = `<b>[${this.info.version}]</b> <span class="fa fa-unbalanced"></span> <b>${this.msg.filesChangedOnTheServer}, </b>`;
    }
    if (this.info.error > 0) {
      auxE = `<b>[${this.info.error}]</b> <span class="fa fa-bug"></span><b>${this.msg.filesWithErrors},</b>`;
    }
    if (this.info.storage > 0) {
      auxS = `<b>[${this.info.storage}]</b> <span class="fa fa-location-dot"></span> <b>${this.msg.filesInLocalStorage}.</b>`;
    }
    return html`
        <div class="groupHeader">
            <div class="groupAction"> 
                <a @click="${this.verifyChangeInList}" id="listUpdateFiles">${this.msg.updateListVerify}</a>
                <a @click="${this.showAdd}">${this.msg.addNewFile}</a>
            </div>
            <div class="groupFilter">
                <div class="groupFilterRadio">
                    <input id="radioProjectActual" name="projectFind" type="radio" checked="checked" value="${this.projectLabel}" @click="${this.clickRadioProjectActual}">
                    <label for="radioProjectActual">${this.projectLabel}</label>
                    <input id="radioProjectZero" name="projectFind" type="radio" value="0" @click="${this.clickRadioProject0}">
                    <label for="radioProjectZero">${this.msg.localProject}</label>
                </div>
                <input type="text" placeholder="Filter" @input="${this.filterLiChange}">
            </div>
            <div class="groupInfo">
                <span style="margin-right:10px">
                    [${this.info.tot}]
				    <span class="fa fa-file"></span> 
                    ${this.msg.totalFiles}
                </span>
                ${auxV ? html`<span .innerHTML="${auxV}" style="margin-right:10px"></span>` : ""}
                ${auxE ? html`<span .innerHTML="${auxE}" style="margin-right:10px"></span>` : ""}
                ${auxS ? html`<span .innerHTML="${auxS}" style="margin-right:10px"></span>` : ""}
            </div>
        </div>
        `;
  }
  renderHistory() {
    return html`
            ${this.history.length <= 0 ? "" : html`
                    <li class="headerTitle">
                        ${+this.project === 0 ? `${this.msg.history} (All Projects)` : `${this.msg.history}`}
                    </li>
                    ${repeat(
      this.history,
      (item) => item.shortName,
      (file, index) => this.renderLiItem(file, index, true)
    )}
                `}
        `;
  }
  renderList() {
    let letterInit = "";
    return html`
            ${this.files.length <= 0 ? "" : html`
                    ${repeat(
      this.files,
      (item) => item.shortName,
      (file, index) => {
        if (letterInit !== file.shortName.charAt(0).toUpperCase()) {
          letterInit = file.shortName.charAt(0).toUpperCase();
          return html`
                                    <li class="headerTitle">${letterInit} </li>
                                    ${this.renderLiItem(file, index, false)}
                                `;
        }
        return this.renderLiItem(file, index, false);
      }
    )}
                `}
        `;
  }
  renderAuxEdit() {
    return html`
            <div class="elContentAux" style="display:none" @click="${this.clickOptStop}">
                <div class="elContentAux2">
                    <span class="spanPrj">
                        <input style="width: 80px;" .value="${this.project}" @click="${this.clickOptStop}">
                    </span>
                    <span class="spanName">
                        <input @click="${this.clickOptStop}">
                    </span>
                    <button class="btnActCloneRename fa fa-file-pen" style="margin: 4px 0px;"></button>
                    <button class="fa fa-ban" title="cancel" @click="${this.clickHiddenAux}" style="margin: 4px 0px;"></button>
                </div>
                <div class="showError"style="color: red; font-size: 10px;">${this.errorAux}</div>
            </div>
        `;
  }
  renderLiItem(file, index, inHistory) {
    const name = this.project === 0 && inHistory ? "_" + file.project + "_" + file.shortName : file.shortName;
    const nameFilter = inHistory ? "*******" : name.toLocaleLowerCase();
    let auxVersion = "";
    let auxStorage = "";
    let auxBug = "";
    let auxHtml = "";
    const keyHtml = mls.stor.getKeyToFiles(file.project, file.level, file.shortName, file.folder, ".html");
    const htmlLocal = mls.stor.files[keyHtml] && mls.stor.files[keyHtml].inLocalStorage;
    if (file.inLocalStorage) {
      auxStorage = `<span title=".ts${htmlLocal ? ", .html" : ""} in localstorage" class="fa fa-location-dot" style="color:lightskyblue; height: 14px; display: flex; justify-content: center; align-items: center;"></span>`;
    } else if (htmlLocal) {
      auxStorage = `<span title=".html in localstorage" class="fa fa-location-dot" style="color:lightskyblue; height: 14px; display: flex; justify-content: center; align-items: center;"></span>`;
    }
    if (file.hasError) {
      auxBug = `<span title="bug" class="fa fa-bug" style="color:rgb(169, 3, 3); height: 14px; display: flex; justify-content: center; align-items: center;"></span>`;
    }
    if (file.isLocalVersionOutdated) {
      auxVersion = `<span title="need conciliation" class="fa fa-unbalanced" style="color:orange; height: 14px; display: flex; justify-content: center; align-items: center;"></span>`;
    }
    const style = this.inFilter && inHistory ? "display:none" : "";
    return html`
            <li @click="${this.clickOptOpen}" style="${style}" .myFile=${file} .nameFilter="${nameFilter}">
                <div class="elContent">
                    <div class="groupHiddenList" @click="${this.clickGroupHidden}">
                        <span class="mls-gpbtnslider-item fa fa-undo" title="${this.msg.undo}" @click="${this.clickOptUndo}"></span>
                        <span class="mls-gpbtnslider-item fa fa-clone" title="${this.msg.clone}" @click="${this.clickOptClone}"></span>
                        <span class="mls-gpbtnslider-item fa fa-file-pen" title="${this.msg.rename}" @click="${this.clickOptRename}"></span>
                        <span class="mls-gpbtnslider-item fa fa-trash" title="${this.msg.delete}" @click="${this.clickOptDel}"></span>
                    </div>
                    <span class="${file.status === "deleted" ? "fileDeleted" : ""}">${name}</span>
                    <div style="display:flex; gap:.5rem" .innerHTML="${auxStorage + auxBug + auxVersion + auxHtml}"></div>
                </div>
            </li>
        `;
  }
  renderAdd() {
    return html`<service-list-files-add-100554 level="${this.level}" position="${this.position}" .father="${this}"></service-list-files-add-100554>`;
  }
  //------------ EVENTOS -----------------
  clickOptUndo(e) {
    e.stopPropagation();
    const mfile = this.getMyFileInElement(e.target);
    if (!mfile) return;
    this.fireEvents("undo", mfile, {});
  }
  clickOptDel(e) {
    e.stopPropagation();
    const mfile = this.getMyFileInElement(e.target);
    if (!mfile) return;
    this.fireEvents("delete", mfile, {});
  }
  clickOptOpen(e) {
    e.stopPropagation();
    const mfile = this.getMyFileInElement(e.target);
    if (!mfile) return;
    this.setHistory(mfile);
    this.fireEvents("open", mfile, {});
  }
  clickOptRename(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    this.clickOptRenameClone(el, "rename");
  }
  clickOptClone(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    this.clickOptRenameClone(el, "clone");
  }
  clickOptRenameClone(el, mode) {
    if (!el) return;
    const myfile = this.getMyFileInElement(el);
    if (!myfile) return;
    const father = el.closest(".contentServiceList");
    const li = el.closest("li");
    if (!father || !li) return;
    const elContentAux = father.querySelector(".elContentAux");
    const btnActCloneRename = father.querySelector(".btnActCloneRename");
    const iptProj = elContentAux.querySelector(".spanPrj input");
    const iptName = elContentAux.querySelector(".spanName input");
    if (!father || !li) return;
    li.appendChild(elContentAux);
    elContentAux.style.display = "";
    iptProj.value = mls.actual[5].project;
    iptName.value = "";
    btnActCloneRename.onclick = (e2) => __async(this, null, function* () {
      var _a2;
      try {
        e2.stopPropagation();
        this.validInputsAux(myfile, { mode, project: iptProj.value, name: iptName.value });
        this.fireEvents(mode, myfile, { project: +iptProj.value, shortName: iptName.value });
        elContentAux.style.display = "none";
        const all = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelectorAll(".activegpbtnslider");
        Array.from(all).forEach((i) => i.classList.remove("activegpbtnslider"));
      } catch (er) {
        this.showLoader(false);
        this.errorAux = er.message;
        setTimeout(() => {
          this.errorAux = "";
        }, 2e3);
      }
    });
  }
  fireEvents(action, file, info, timeout = 0) {
    const params = {};
    params.action = action;
    params.level = file.level;
    params.project = file.project;
    params.shortName = file.shortName;
    params.extension = file.extension;
    params.folder = file.folder;
    params.position = this.position;
    if (info && info.shortName) {
      params.newshortName = info.shortName;
      params.newProject = info.project;
      params.newfolder = file.folder;
    }
    if (["open"].includes(action)) {
      mls.actual[this.level].setFullName(`_${file.project}_${file.shortName}`);
      mls.actual[this.level][this.position] = {
        project: file.project,
        shortName: file.shortName,
        extension: file.extension,
        folder: file.folder
      };
    }
    mls.events.fire([+this.level], ["FileAction"], JSON.stringify(params), timeout);
    if (["open"].includes(action)) return;
    this.changeList(100);
  }
  changeList(time = 500) {
    clearTimeout(this.changeListTimeout);
    this.changeListTimeout = setTimeout(() => __async(this, null, function* () {
      yield this.init();
    }), time);
  }
  init() {
    return __async(this, null, function* () {
      this.info.tot = 0;
      this.info.version = 0;
      this.info.storage = 0;
      this.info.error = 0;
      this.project = mls.actual[5].project;
      this.projectLabel = this.project.toString();
      this.showLoader(true);
      yield this.getFiles();
      this.showLoader(false);
    });
  }
  showLoader(loader) {
    clearTimeout(this.setLoader);
    this.setLoader = setTimeout(() => {
      this.loading = loader;
    }, 200);
  }
  getMyFileInElement(el) {
    el = el.closest("li");
    if (!el || !el["myFile"]) return;
    const mfile = el["myFile"];
    return mfile;
  }
  clickGroupHidden(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    if (el.classList.contains("activegpbtnslider")) {
      const li = el.closest("li");
      const elContentAux = li.querySelector(".elContentAux");
      if (elContentAux) elContentAux.style.display = "none";
    }
    el.classList.toggle("activegpbtnslider");
  }
  clickHiddenAux(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const elContentAux = el.closest(".elContentAux");
    if (!elContentAux) return;
    const iptProj = elContentAux.querySelector(".spanPrj input");
    const iptName = elContentAux.querySelector(".spanName input");
    if (iptName) iptName.value = "";
    if (iptProj) iptProj.value = this.project.toString();
    elContentAux.style.display = "none";
  }
  clickOptStop(e) {
    e.stopPropagation();
  }
  clickRadioProject0(e) {
    return __async(this, null, function* () {
      this.info.tot = 0;
      this.info.version = 0;
      this.info.storage = 0;
      this.info.error = 0;
      this.project = 0;
      yield this.getFiles();
    });
  }
  clickRadioProjectActual(e) {
    this.info.tot = 0;
    this.info.version = 0;
    this.info.storage = 0;
    this.info.error = 0;
    this.project = mls.actual[5].project;
    this.getFiles();
  }
  filterLiChange(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    clearTimeout(this.timeFilterChange);
    this.timeFilterChange = setTimeout(() => {
      this.inFilter = el.value.length > 0;
      const contentServiceList = el.closest(".contentServiceList");
      if (!contentServiceList) return;
      const all = contentServiceList.querySelectorAll("li");
      all.forEach((li) => {
        const name = li.nameFilter ? li.nameFilter : "******";
        const inp = el.value.toLocaleLowerCase();
        if (name.indexOf(inp) >= 0) {
          li.style.display = "";
        } else {
          li.style.display = "none";
        }
      });
    }, 500);
  }
  verifyChangeInList(e) {
    return __async(this, null, function* () {
      try {
        yield this.verifyChangeInList2(e);
      } catch (e2) {
      }
    });
  }
  verifyChangeInList2(e) {
    return __async(this, null, function* () {
      var _a2;
      try {
        e.stopPropagation();
        const el = e.target;
        if (!el) return;
        const isClick = el.innerText === "updated";
        if (isClick) return;
        el.innerText = "updated";
        yield mls.stor.server.loadProjectInfoIfNeeded(mls.actual[5].project, true);
        const key = (_a2 = Object.keys(mls.stor.files)) == null ? void 0 : _a2.filter((item) => item.indexOf(mls.actual[5].project.toString()) >= 0);
        if (key.length > 0) {
          this.fireEvents("projectListChanged", mls.stor.files[key[0]], {}, 500);
          mls.events.fireFileAction("updatedOnServer", mls.stor.files[key[0]], "left", void 0, void 0, void 0, void 0, 600);
        }
        this.changeList(500);
        setTimeout(() => {
          if (!this) return;
          el.innerText = "update list/ verify";
        }, 5e4);
      } catch (e2) {
      }
    });
  }
  verifyChangeInList3() {
    return __async(this, null, function* () {
    });
  }
  getFiles() {
    return __async(this, null, function* () {
      try {
        const arraySf = this.getFilesProject();
        const arraySfHistory = yield this.getFileHistory();
        this.files = [...arraySf];
        this.history = [...arraySfHistory];
      } catch (e) {
        console.info(e);
      }
    });
  }
  getFilesProject() {
    if (!window["mls"]) return [];
    const arraySf = [];
    const ext = this.extensionLevel[this.level];
    for (const i of Object.keys(mls.stor.files).sort()) {
      const sf = mls.stor.files[i];
      if (sf.project !== this.project || sf.level !== +this.level || sf.extension !== ext) continue;
      this.info.tot++;
      if (sf.isLocalVersionOutdated) this.info.version++;
      if (sf.inLocalStorage) this.info.storage++;
      if (sf.hasError) this.info.error++;
      arraySf.push(sf);
    }
    return arraySf;
  }
  getFileHistory() {
    return __async(this, null, function* () {
      if (!window["mls"]) return [];
      const arraySfHistory = [];
      const lh = this.getHistory();
      if (lh.length <= 0 || !window["mls"]) return [];
      try {
        for (var iter = __forAwait(lh), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const i = temp.value;
          let key = mls.stor.getKeyToFiles(i.project, this.level, i.shortName, i.folder, i.extension);
          if (!mls.stor.files[key] && +this.project === 0) {
            yield mls.stor.server.loadProjectInfoIfNeeded(i.project);
            key = mls.stor.getKeyToFiles(i.project, this.level, i.shortName, i.folder, i.extension);
          }
          if (!mls.stor.files[key] || i.project !== +this.project && +this.project !== 0) continue;
          arraySfHistory.push(mls.stor.files[key]);
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
      return arraySfHistory;
    });
  }
  getHistory() {
    const info = localStorage.getItem("mlsInfoHistoryL" + this.level);
    return info ? JSON.parse(info) : [];
  }
  setHistory(file) {
    const info = localStorage.getItem("mlsInfoHistoryL" + this.level);
    const res = info ? JSON.parse(info) : [];
    let idx = -1;
    res.forEach((i, index) => {
      if (i.project !== file.project || i.shortName !== file.shortName) return;
      idx = index;
    });
    if (idx >= 0) {
      res.splice(idx, 1);
    }
    res.unshift({ project: file.project, shortName: file.shortName, extension: file.extension, folder: file.folder });
    if (res.length > 10) {
      for (let i = res.length - 1; i >= 0; i--) {
        if (res.length <= 10) break;
        const key = mls.stor.getKeyToFiles(res[i].project, this.level, res[i].shortName, res[i].folder, res[i].extension);
        if (!mls.stor.files[key]) {
          res.splice(i, 1);
        } else if (mls.stor.files[key] && mls.stor.files[key].status === "nochange" && mls.stor.files[key].shortName !== file.shortName) {
          res.splice(i, 1);
        }
      }
    }
    localStorage.setItem("mlsInfoHistoryL" + this.level, JSON.stringify(res));
  }
  validInputsAux(file, action) {
    if (file.hasError && ["clone", "rename"].includes(action.mode)) throw new Error("It is not possible to perform this action on files with an error.");
    if (!this.isValidNewName(file, action)) throw new Error("Invalid name");
  }
  isValidNewName(file, action) {
    if (action.project === "" || action.name === "") return false;
    if (action.name.length === 0 || action.name.length > 255) return false;
    const invalidCharacters = /[_\/{}\[\]\*$@#=\-+!|?,<>=.;^~∫∞""''``·‡‚„ÈËÍÌÔÛÙıˆ˙ÁÒ¡¿¬√…»Õœ”‘’÷⁄«—]/;
    if (invalidCharacters.test(action.name)) return false;
    const key = mls.stor.getKeyToFiles(+action.project, this.level, action.name, file.folder, file.extension);
    return !mls.stor.files[key];
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "mode", _mode_dec, ServiceListFiles);
__decorateElement(_init, 5, "project", _project_dec, ServiceListFiles);
__decorateElement(_init, 5, "projectLabel", _projectLabel_dec, ServiceListFiles);
__decorateElement(_init, 5, "errorAux", _errorAux_dec, ServiceListFiles);
__decorateElement(_init, 5, "files", _files_dec, ServiceListFiles);
__decorateElement(_init, 5, "history", _history_dec, ServiceListFiles);
ServiceListFiles = __decorateElement(_init, 0, "ServiceListFiles", _ServiceListFiles_decorators, ServiceListFiles);
ServiceListFiles.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceListFiles);
export {
  ServiceListFiles
};
