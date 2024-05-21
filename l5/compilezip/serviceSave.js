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
var _error_dec, _itens_dec, _a, _ServiceSave_decorators, _init;
import { html, css, unsafeHTML, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  updateChanges: "Atualizar altera\uFFFD\uFFFDes",
  comments: "Coment\uFFFDrios",
  update: "Atualizar",
  fileChanges: "Altera\uFFFD\uFFFDes de arquivos",
  noItemsToSave: "Nenhum item para salvar"
};
const message_en = {
  updateChanges: "Update Changes",
  comments: "Comments",
  update: "Update",
  fileChanges: "File Changes",
  noItemsToSave: "No items to save"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceSave_decorators = [customElement("service-save-100554")];
class ServiceSave extends (_a = ServiceBase, _itens_dec = [property()], _error_dec = [property()], _a) {
  constructor() {
    super();
    this.myMessage = messages["en"];
    this.itens = __runInitializers(_init, 8, this), __runInitializers(_init, 11, this);
    this.error = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.details = {
      icon: "&#xf0c7",
      state: "background",
      position: "left",
      tooltip: "Save",
      visible: true,
      widget: "_100554_serviceSave",
      level: [5]
    };
    this.onClickLink = (op) => {
      if (op === "opSave") return this.showInitial();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Save",
      actions: {},
      icons: {},
      actionDefault: "opSave",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink
    };
    this.onMLSEvents = (ev) => __async(this, null, function* () {
      if (ev.type !== "FileAction") return;
      const fileAction = JSON.parse(ev.desc);
      if (!["changed", "delete", "new", "rename"].includes(fileAction.action)) return;
      if (this.isServiceVisible()) {
        this.init();
      }
      this.toogleBadge(true, "_100554_serviceSave");
    });
    this.oIcon = {
      nochange: { icon: "fa-file-pen", title: "Edited" },
      changed: { icon: "fa-file-pen", title: "Edited" },
      renamed: { icon: "fa-clone", title: "Renamed" },
      deleted: { icon: "fa-xmark", title: "Deleted" },
      //deleted: { icon: '&#xf1f8', title: 'Deleted' },f068
      //new: { icon: '&#xf006', title: 'New' }2b
      new: { icon: "fa-plus", title: "New" }
    };
    this.setEvents();
  }
  showInitial() {
    return true;
  }
  onServiceClick(visible, reinit) {
    if (visible && reinit) {
      this.updateList();
    } else if (visible && !reinit) {
      this.updateList();
    }
  }
  // -------------- EVENTS -------------------
  setEvents() {
    mls.events.addListener(2, "FileAction", this.onMLSEvents.bind(this));
    mls.events.addListener(3, "FileAction", this.onMLSEvents.bind(this));
    mls.events.addListener(5, "ProjectSelected", (ev) => {
      this.init();
    });
    this.verifyExitFileChanged();
  }
  isServiceVisible() {
    return this.visible === "true";
  }
  verifyExitFileChanged() {
    if (!mls.stor.files) return;
    const array = Object.keys(mls.stor.files);
    let exist = false;
    array.forEach((i) => {
      const f = mls.stor.files[i];
      if (!f) return;
      if (f.project === mls.actual[5].project && f.status !== "nochange")
        exist = true;
    });
    if (!exist) return;
    this.toogleBadge(true, "_100554_serviceSave");
  }
  // -------------  WEBCOMPONENT -------------
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.myMessage = messages[lang];
    if (this.error !== "") {
      setTimeout(() => this.error = "", 3e3);
      return html`${this.error}`;
    }
    return html` ${this.itens ? html`<sectionsaveheader> ${this.renderHeader()} </sectionsaveheader>${this.renderItens()}` : this.renderNoItens()}
            
        `;
  }
  renderHeader() {
    return html`
            <i class="fa fa-floppy-disk"></i>
            <span>${this.myMessage.updateChanges}</span>    
        
        `;
  }
  renderNoItens() {
    return html`
            <sectionnosave>
                <span>${this.myMessage.noItemsToSave}</span> 
            </sectionnosave>  
        
        `;
  }
  renderItens() {
    const keys = Object.keys(this.itens);
    return html`
            <sectionsave>
                <div id="Save_menu_action" style="display:flex;">
                    <div style="width:100%;" >
                        <h4 class="mt-3">${this.myMessage.comments}:</h4>
                        <textarea id="commitMessage" class="form-control" style="width:95%;" rows="2" maxlength="50"></textarea>
                    </div>
                    <div id="div_btn_save" class="text-right" style="width:79px; display: flex; align-items: self-end;">
                        <button id="btn_save" class="btnSave btn-sm btnSave-primary" @click="${this.onSave}">${this.myMessage.update}</button>
                    </div>
                </div>
                <h4 class="mt-3" data-mlsline="23">${this.myMessage.fileChanges}</h4>
                <ul>
                    ${repeat(
      keys,
      (key) => key,
      (k, index) => {
        return this.renderProject(k, index);
      }
    )}
                </ul>
            </sectionsave>  
        
        `;
  }
  renderProject(project, index) {
    const keys = Object.keys(this.itens[project]);
    return html`
        <li>
            <div>
                <span class="fatv fa-caret-righttv" @click="${this.openMeList}"></span>
                <input type="checkbox" id="l0-${index}" @click="${this.clickSetValueAllChilds}">
                <label for="l0-${index}">${project}</label>
            </div>
            <ul>
                ${repeat(
      keys,
      (key) => key,
      (k, indexl) => {
        return this.renderLevels(k, project, index, indexl);
      }
    )}
            </ul>
        </li>
        `;
  }
  renderLevels(level, project, indexP, index) {
    if (level === "3") {
      return this.renderLevel3(level, project, indexP, index);
    } else {
      return this.renderLevelsDefault(level, project, indexP, index);
    }
  }
  renderLevel3(level, project, indexP, index) {
    const objP = this.itens[project];
    const keys = Object.keys(objP[level]);
    return html`
        <li>
            <div>
                <span class="fatv fa-caret-righttv" @click="${this.openMeList}"></span>
                <input type="checkbox" id="l0-${project}-${index}" @click="${this.clickSetValueAllChilds}">
                <label for="l0-${project}-${index}">l${level}</label>
            </div>
            <ul>
                ${repeat(
      keys,
      (key) => key,
      (k, index3) => {
        const objL = objP[level];
        const objDS = objL[k];
        const itens = objDS ? objDS : [];
        return html`
                                <li>
                                    <div>
                                        <span class="fatv fa-caret-righttv" @click="${this.openMeList}"></span>
                                        <input type="checkbox" id="l0-${project}-${index}-${index3}" @click="${this.clickSetValueAllChilds}">
                                        <label for="l0-${project}-${index}-${index3}">${k}</label>
                                    </div>
                                    <ul>                        
                                        ${repeat(
          itens,
          (item) => item,
          (i, indexI) => {
            return this.renderItem(i, indexP, index, indexI);
          }
        )}
                                    </ul>
                                </li>
                            `;
      }
    )}
            </ul>
        </li>
        `;
  }
  renderLevelsDefault(level, project, indexP, index) {
    const objP = this.itens[project];
    const itens = objP[+level];
    return html`
        <li>
            <div>
                <span class="fatv fa-caret-righttv" @click="${this.openMeList}"></span>
                <input type="checkbox" id="l0-${project}-${index}" @click="${this.clickSetValueAllChilds}">
                <label for="l0-${project}-${index}">l${level}</label>
            </div>
            <ul>
                ${repeat(
      itens,
      (item) => item,
      (i, indexI) => {
        return this.renderItem(i, indexP, index, indexI);
      }
    )}
            </ul>
        </li>
        `;
  }
  renderItem(item, indexP, indexL, index) {
    return html`
        <li style="padding-left: 1.1rem;" > 
            <div>
                ${item.disabled || item.onlyFather ? html`<input type="checkbox" id="l0-${indexP}-${indexL}-${index}" disabled onlyStatusFather="${item.onlyFather}" @click="${this.clickVerifyStatusFather}" .instance=${item.file}>` : html`<input type="checkbox" id="l0-${indexP}-${indexL}-${index}" onlyStatusFather="${item.onlyFather}" @click="${this.clickVerifyStatusFather}" .instance=${item.file}>`}
                
                <label for="l0-${indexP}-${indexL}-${index}">
                
                    ${item.text}
                    ${unsafeHTML(item.span)}
                
                </label>
            </div>
        </li>
        `;
  }
  init() {
    return __async(this, null, function* () {
      this.showLoader(true);
      yield this.setInfos();
      this.showLoader(false);
    });
  }
  showLoader(loader) {
    this.loading = loader;
  }
  setInfos() {
    return __async(this, null, function* () {
      try {
        const objProjects = {};
        const filesKeys = Object.keys(mls.stor.files);
        for (const fKey of filesKeys) {
          const file = mls.stor.files[fKey];
          if (
            /*(!file.inLocalStorage && file.status === 'nochange') ||
            file.status === 'nochange' ||*/
            !file.inLocalStorage && file.status !== "deleted" || file.project === 0 || file.project !== mls.actual[5].project
          ) continue;
          const pj = file.project;
          const level = file.level;
          if (!objProjects[pj]) objProjects[pj] = {};
          const obj = objProjects[pj];
          if (!obj[level] && level === 3) {
            const nNivel = file.folder.split("/");
            if (nNivel.length >= 2) {
              obj[level] = { [nNivel[1]]: [yield this.configItem(file)] };
            }
          } else if (!obj[level]) {
            obj[level] = [yield this.configItem(file)];
          } else if (obj[level] && level === 3) {
            const nNivel = file.folder.split("/");
            const obj3 = obj[level];
            if (nNivel.length >= 2 && obj3[nNivel[1]]) {
              obj3[nNivel[1]].push(yield this.configItem(file));
            }
          } else {
            obj[level].push(yield this.configItem(file));
          }
        }
        if (Object.keys(objProjects).length > 0) {
          this.itens = objProjects;
        } else {
          this.itens = void 0;
          this.toogleBadge(false, "_100554_serviceSave");
        }
      } catch (e) {
        this.itens = void 0;
      }
    });
  }
  configItem(item) {
    return __async(this, null, function* () {
      let mountText = item.shortName + item.extension;
      let disabled = false;
      let span = `<span style="font-size: 12px; color: #7678a6; margin-left: 5px;" class="fa ${this.oIcon[item.status].icon}" title="${this.oIcon[item.status].title}"></span>`;
      if (item.hasError && item.status !== "deleted") {
        span = '<span style="font-size: 12px; color: #ff0000; margin-left: 5px; height: 16px;" class="fa fa-bug" title="Error"></span>';
        disabled = true;
      }
      if (item.isLocalVersionOutdated) {
        span = '<span style="font-size: 12px; color: #ff0000; margin-left: 5px;" class="fa fa-unbalanced" title="Version block"></span>';
        disabled = true;
      }
      if (item.status === "renamed" && item.getValueInfo) {
        const itemNew = yield item.getValueInfo();
        mountText = `${itemNew.originalShortName + item.extension} to ${mountText} `;
      }
      return {
        file: item,
        text: mountText,
        span,
        onlyFather: item.level === 3,
        disabled
      };
    });
  }
  openMeList(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const li = el.closest("li");
    if (!li) return;
    li.classList.toggle("open");
  }
  clickSetValueAllChilds(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    this.setValueAllChilds(el);
  }
  setValueAllChilds(el) {
    const father = el.closest("li");
    if (!father) return;
    const subList = father.querySelector("ul");
    if (!subList) return;
    const all = subList.querySelectorAll("input");
    all.forEach((i) => {
      const onlyStatusFather = i.getAttribute("onlyStatusFather") === "true";
      if (i.disabled && !onlyStatusFather) return;
      i.checked = el.checked;
    });
    if (all.length === 1 && all[0].disabled) el.checked = false;
  }
  clickVerifyStatusFather(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    this.verifyStatusFather(el);
  }
  verifyStatusFather(el) {
    const father = el.closest("ul");
    if (!father) return;
    const grandfather = father.closest("li");
    if (!grandfather) return;
    const inpMain = grandfather.querySelector("input");
    if (!inpMain) return;
    if (el.checked) {
      inpMain.checked = true;
      return;
    }
    let needDisable = true;
    const all = father.querySelectorAll("input");
    all.forEach((i) => {
      if (i.checked) needDisable = false;
    });
    if (needDisable) inpMain.checked = false;
  }
  updateList() {
    return __async(this, null, function* () {
      try {
        this.showLoader(true);
        yield this.setInfos();
        this.showLoader(false);
      } catch (e) {
        this.error = e.message;
        this.showLoader(false);
      }
    });
  }
  /*private async sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }*/
  createArrayInfoVersion(array) {
    const ret = [];
    array.forEach((i) => {
      ret.push({
        name: `l${i.level}/${i.folder ? i.folder + "/" : ""}${i.shortName}${i.extension}`,
        version: i.versionRef,
        file: i
      });
    });
    return ret;
  }
  uppVersionAfterSave(array) {
    return __async(this, null, function* () {
      const driver = mls.stor.others.getDefaultDriver(mls.actual[5].project);
      const retArray = yield driver.loadFilesInfo(mls.actual[5].project);
      const arrayVersion = this.createArrayInfoVersion(array);
      retArray.forEach((i) => __async(this, null, function* () {
        const file = arrayVersion.filter((f) => f.name === i.ShortPath);
        if (!file || file.length <= 0 || file && file.length >= 1 && file[0].version === i.versionRef) return;
        if (file[0].version !== i.versionRef) {
          file[0].file.versionRef = i.versionRef;
          file[0].file.isLocalVersionOutdated = false;
          file[0].file.newVersionRefIfOutdated = void 0;
          yield mls.stor.localStor.setContent(file[0].file, { contentType: "string", content: null });
        }
      }));
      mls.stor.localDB.savePrjInfo(mls.actual[5].project, retArray);
    });
  }
  verifyVersionBlock(array) {
    return __async(this, null, function* () {
      try {
        if (array.length <= 0) return;
        const ret = yield mls.stor.server.loadProjectInfoIfNeeded(mls.actual[5].project, true);
      } catch (e) {
        console.info("Error save verifyVersionBlock:" + e.message);
      }
    });
  }
  onSave(e) {
    return __async(this, null, function* () {
      try {
        e.stopPropagation();
        const el = e.target;
        if (!el) return;
        const father = el.closest("sectionsave");
        if (!father) return;
        this.showLoader(true);
        const txt = father.querySelector("textarea");
        const array = this.getAllFileToSave(father);
        const msg = txt ? txt.value : "";
        setTimeout(() => __async(this, null, function* () {
          try {
            yield this.verifyVersionBlock(array);
            yield this.onSavenew(array, msg);
            yield this.setInfos();
            this.fireEvents();
            this.showLoader(false);
          } catch (e2) {
            this.error = e2.message;
            this.showLoader(false);
          }
        }), 500);
      } catch (e2) {
        console.info("Error onSave");
      }
    });
  }
  getAllFileToSave(father) {
    const ar = [];
    const els = father.querySelectorAll('input[type="checkbox"][onlyStatusFather]:checked');
    els.forEach((el) => {
      if (el.instance) {
        ar.push(el.instance);
        const info = el.instance;
        if (info.extension === ".ts" && info.status === "deleted") {
          const key = mls.stor.getKeyToFiles(info.project, info.level, info.shortName, info.folder, ".html");
          const fl = mls.stor.files[key];
          if (!fl || fl.status === "new") return;
          fl.status = "deleted";
          ar.push(fl);
        }
      }
    });
    return ar;
  }
  onSavenew(ar, msg) {
    return __async(this, null, function* () {
      if (ar.length <= 0) return;
      try {
        let versionBLock = 0;
        const arrSet = [];
        ar.forEach((i) => {
          if (i.isLocalVersionOutdated && !["new", "deleted"].includes(i.status)) {
            versionBLock++;
            return;
          }
          i.inLocalStorage = false;
          if (!i.onAction) i.onAction = (action) => this.afterUpdate(i);
          arrSet.push(i);
        });
        if (arrSet.length > 0) {
          yield mls.stor.setContents(arrSet, msg);
          yield this.uppVersionAfterSave(arrSet);
          this.fireEvents(800);
        }
        if (versionBLock > 0) {
          window.collabMessages.add(`File ${versionBLock} was changed in server, file was not save`, "information");
        }
        return;
      } catch (e) {
        this.error = e.message;
      }
    });
  }
  afterUpdate(storFile) {
    return __async(this, null, function* () {
      const mmodel = mls.l2.editor.get(storFile);
      if (storFile.status === "deleted") {
        this.deleteFile(storFile);
        return;
      }
      if (storFile.status === "renamed" && mmodel) {
        mmodel.originalProject = void 0;
        mmodel.originalShortName = void 0;
        mmodel.originalCRC = mls.common.crc.crc32(mmodel.model.getValue()).toString(16);
      }
      yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
      storFile.status = "nochange";
    });
  }
  deleteFile(storFile) {
    return __async(this, null, function* () {
      yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
      mls.l2.editor.remove(storFile);
      const keyFiles = mls.stor.getKeyToFiles(storFile.project, storFile.level, storFile.shortName, storFile.folder, storFile.extension);
      delete mls.stor.files[keyFiles];
    });
  }
  fireEvents(time = 0) {
    const params = {};
    params.action = "projectListChanged";
    params.level = 5;
    params.project = mls.actual[5].project;
    params.position = this.position;
    mls.events.fire([5], ["FileAction"], JSON.stringify(params), time);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "itens", _itens_dec, ServiceSave);
__decorateElement(_init, 5, "error", _error_dec, ServiceSave);
ServiceSave = __decorateElement(_init, 0, "ServiceSave", _ServiceSave_decorators, ServiceSave);
ServiceSave.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceSave);
export {
  ServiceSave
};
