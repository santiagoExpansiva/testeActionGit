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
var _actualFiles_dec, _isAddMode_dec, _tree_dec, _selectType_dec, _inputFile_dec, _txtDesc_dec, _inputTags_dec, _checkBoxAll_dec, _treeEl_dec, _tbody_dec, _a, _ServiceDsAssets100554_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabInputTag } from "./_100554_collabInputTag";
const message_pt = {
  loading: "Carregando...",
  cancel: "Cancelar",
  confirm: "Confirmar",
  description: "Descri\uFFFD\uFFFDo",
  name: "Nome",
  versionRef: "Vers\uFFFDo",
  addNewFile: "Aidcionar um novo arquivo"
};
const message_en = {
  loading: "Loading...",
  cancel: "Cancelar",
  confirm: "Confirm",
  description: "Description",
  name: "Name",
  versionRef: "Version Ref",
  addNewFile: "Add new file"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsAssets100554_decorators = [customElement("service-ds-assets-100554")];
let _ServiceDsAssets100554 = class _ServiceDsAssets100554 extends (_a = ServiceBase, _tbody_dec = [query("tbody")], _treeEl_dec = [query(".assets-tree")], _checkBoxAll_dec = [query("#checkAll")], _inputTags_dec = [query("collab-input-tag-100554")], _txtDesc_dec = [query(".txtDesc")], _inputFile_dec = [query(".inputFile")], _selectType_dec = [query(".selectType")], _tree_dec = [property()], _isAddMode_dec = [property()], _actualFiles_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf802",
      state: "foreground",
      tooltip: "Assets",
      visible: true,
      position: "left",
      tags: ["ds_assets"],
      widget: "_100554_serviceDsAssets",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opHelper") return this.showInitial();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Assets",
      actions: {},
      icons: {},
      actionDefault: "opHelper",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.tree = __runInitializers(_init, 36, this, {}), __runInitializers(_init, 39, this);
    this.isAddMode = __runInitializers(_init, 40, this, false), __runInitializers(_init, 43, this);
    this.actualFiles = __runInitializers(_init, 44, this, []), __runInitializers(_init, 47, this);
    this.actualPath = "";
    this.treeController = {
      isNodeReadOnly: true
    };
    this.filesController = {
      totalFiles: 0,
      totalFilesSelected: 0,
      filesSelected: /* @__PURE__ */ new Set([]),
      filesSelectedArr: [],
      helper: [],
      readOnly: false
    };
    this.files = {
      readOnlyFiles: [],
      readOnlyFolders: [],
      project: void 0,
      list: {}
    };
    this.serviceByExtensions = {
      _100554_serviceDsAssetsImage: [".png", ".jpg", ".jpeg", ".webp", ".jfif"],
      _100554_serviceDsAssetsVideo: [".mp4", ".webm"],
      _100554_serviceDsAssetsIcon: [".svg", ".ico"],
      _100554_serviceDsAssetsEditor: [".json", ".ts", ".js", ".css", ".txt", ".css", ".scss", ".less", ".xml", ".html"]
    };
    this.objIcons = {
      png: "fa-solid fa-image",
      jpeg: "fa-solid fa-image",
      jpg: "fa-solid fa-image",
      webp: "fa-solid fa-image",
      jfif: "fa-solid fa-image",
      js: "fa-brands fa-js",
      ts: "fa-regular fa-file-code",
      html: "fa-regular fa-file-code",
      json: "fa-regular fa-file-code",
      xml: "fa-regular fa-file-code",
      pdf: "fa-solid fa-file-pdf",
      ico: "fa fa-info",
      txt: "fa-solid fa-file-lines",
      doc: "fa-solid fa-file-lines",
      mp3: "fa-sharp fa-regular fa-file-audio",
      zip: "fa-solid fa-file-zipper",
      gz: "fa-solid fa-file-zipper",
      none: "fa-solid fa-file"
    };
    this.setEvents();
    initCollabInputTag();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible && reinit) {
        const params = {
          service: ["_100554_serviceDsAssetsOverview"]
        };
        const { project } = mls.actual[5];
        const { mode } = mls.actual[3];
        mls.events.fire([3], ["DSAssetsSelected"], JSON.stringify(params), 100);
        if (this.lastProject !== project || this.lastDsIndex !== mode) {
          this.loading = true;
          this.init();
        }
      }
      if (!visible) {
        const params = {
          service: []
        };
        mls.events.fire([3], ["DSAssetsUnSelected"], JSON.stringify(params), 0);
      }
    });
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSAssetsChanged"], (ev) => {
      this.onDsAssetsChanged(ev);
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_ServiceDsAssets100554.prototype, this, "connectedCallback").call(this);
      this.init();
    });
  }
  init() {
    return __async(this, null, function* () {
      this.tree = {};
      this.actualFiles = [];
      yield this.prepareFiles();
      this.loading = false;
      this.requestUpdate();
    });
  }
  showInitial() {
    this.menu.title = "Assets";
    return true;
  }
  initDsInstance(project, dsIndex) {
    return __async(this, null, function* () {
      this.dsInstance = mls.l3.getDSInstance(project, dsIndex);
      yield this.dsInstance.init();
    });
  }
  prepareFiles() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) return;
      this.lastProject = project;
      this.lastDsIndex = mode;
      yield this.initDsInstance(project, mode);
      yield mls.stor.server.loadProjectInfoIfNeeded(project);
      const listDs = mls.l5.ds.list(project);
      if (!this.dsInstance) return;
      const nameDs = listDs[this.dsInstance.dsindex].dsName;
      const rc = {};
      const listFiles = mls.stor.files;
      const onlyProjects = Object.keys(listFiles).filter((file) => listFiles[file].project === project);
      onlyProjects.forEach((item) => {
        const { level, folder, status } = listFiles[item];
        if (status === "deleted") return;
        if (level === 3 && (folder.startsWith(`ds/${nameDs}/`) || folder === `ds/${nameDs}`)) rc[item] = listFiles[item];
      });
      this.files.list = rc;
      this.files.project = project;
      this.files.readOnlyFiles = [];
      this.files.readOnlyFolders = ["ds", `ds/${nameDs}`, `ds/${nameDs}/docs`, `ds/${nameDs}/css`, `ds/${nameDs}/css`, `ds/${nameDs}/components*`];
      Object.entries(this.files.list).forEach((entry) => {
        const [key, value] = entry;
        const parts = value.folder.split("/");
        let currentFolder = this.tree;
        parts.forEach((folder) => {
          currentFolder[folder] = currentFolder[folder] || {};
          currentFolder = currentFolder[folder];
        });
        currentFolder[key] = {
          shortName: value.shortName,
          folder: value.folder,
          info: __spreadValues({}, value)
        };
      });
    });
  }
  onDsAssetsChanged(ev) {
    return __async(this, null, function* () {
      if (!ev.desc) return;
      const params = JSON.parse(ev.desc);
      if (params.position === "left") return;
      if (params.action === "delete") {
        this.onDelete();
      }
    });
  }
  onDelete() {
    return __async(this, null, function* () {
      this.actualFiles = [];
      this.updateActualFiles(this.actualPath);
      const params = {
        service: []
      };
      mls.events.fire([3], ["DSAssetsUnSelected"], JSON.stringify(params), 500);
    });
  }
  handleFolderClick(e, folder) {
    e.stopPropagation();
    this.actualPath = folder;
    this.updateActualFiles(folder);
    if (!this.treeEl) return;
    const target = e.target;
    const treeItem = target.closest(".tree-item");
    if (!treeItem) return;
    const details = treeItem.closest("details");
    if (!treeItem.classList.contains("selected") && details && details.open) e.preventDefault();
    this.treeEl.querySelectorAll(".tree-item").forEach((it) => it.classList.remove("selected"));
    treeItem.classList.add("selected");
  }
  updateActualFiles(folder) {
    const files = this.getFilesInFolder(folder);
    this.filesController.totalFiles = files.length;
    this.filesController.totalFilesSelected = 0;
    this.filesController.filesSelected = /* @__PURE__ */ new Set([]);
    this.actualFiles = files;
    this.treeController.isNodeReadOnly = this.checkIsReadOnlyNode(folder);
  }
  checkIsReadOnlyNode(pathFolders) {
    let isreadonly = false;
    this.files.readOnlyFolders.forEach((item) => {
      const deep = item.endsWith("*");
      const path = deep ? item.substr(0, item.length - 1) : item;
      if (deep && pathFolders.startsWith(path)) isreadonly = true;
      else if (pathFolders === path) isreadonly = true;
    });
    return isreadonly;
  }
  getFilesInFolder(folder) {
    const filesInFolder = Object.keys(this.files.list).map((key) => {
      if (this.files.list[key].folder === folder && this.files.list[key].status !== "deleted") return this.files.list[key];
    }).filter((value) => value !== void 0);
    return filesInFolder;
  }
  onCheckAllChange(ev) {
    const val = ev.target.checked;
    if (!this.tbody) return;
    this.tbody.querySelectorAll('input[type="checkbox"').forEach((item) => {
      var _a2;
      const input = item;
      input.checked = val;
      (_a2 = input.closest("tr")) == null ? void 0 : _a2.classList.toggle("selected", val);
    });
    if (val) this.filesController.totalFilesSelected = 0;
    this.actualFiles.forEach((item) => {
      if (val) this.addSelectedItem(item);
      else this.removeSelectedItem(item);
    });
  }
  addSelectedItem(item) {
    this.filesController.totalFilesSelected += 1;
    this.filesController.filesSelected.add(item);
    this.fireEventSelectedsItens();
  }
  removeSelectedItem(item) {
    this.filesController.totalFilesSelected -= 1;
    this.filesController.filesSelected.delete(item);
    this.fireEventSelectedsItens();
  }
  fireEventSelectedsItens() {
    if (this.filesController.totalFilesSelected === 1) {
      const [file] = this.filesController.filesSelected;
      const extensiosServicesKey = Object.keys(this.serviceByExtensions);
      extensiosServicesKey.forEach((key) => {
        if (this.serviceByExtensions[key].includes(file.extension)) this.filesController.helper = [key, "_100554_serviceDsAssetsOverview"];
      });
      this.filesController.readOnly = this.treeController.isNodeReadOnly;
    } else {
      this.filesController.helper = ["_100554_serviceDsAssetsOverview"];
      this.filesController.readOnly = true;
    }
    this.filesController.filesSelectedArr = Array.from(this.filesController.filesSelected);
    const params = {
      action: "show",
      info: this.filesController,
      position: "left"
    };
    mls.events.fire([3], ["DSAssetsChanged"], JSON.stringify(params));
  }
  onFileClick(e, item) {
    e.stopPropagation();
    const target = e.target;
    const tr = target.closest("tr");
    if (!tr) return;
    const check = tr.querySelector('input[type="checkbox"]');
    tr.classList.toggle("selected");
    if (target.tagName !== "INPUT") check.checked = !check.checked;
    if (check.checked) this.addSelectedItem(item);
    else this.removeSelectedItem(item);
    if (this.filesController.totalFiles === this.filesController.totalFilesSelected) this.toogleCheckBoxAll(true);
    else this.toogleCheckBoxAll(false);
  }
  toogleCheckBoxAll(checked) {
    if (!this.checkBoxAll) return;
    this.checkBoxAll.checked = checked;
  }
  onActionAddConfirm() {
    return __async(this, null, function* () {
      var _a2, _b, _c;
      if (!this.inputFile || !this.dsInstance) return;
      const tags = ((_a2 = this.inputTags) == null ? void 0 : _a2.value.trim().split(",")) || [];
      const description = ((_b = this.txtDesc) == null ? void 0 : _b.value) || "";
      const assetType = (_c = this.selectType) == null ? void 0 : _c.value;
      const file = this.inputFile.files ? this.inputFile.files[0] : void 0;
      if (!file) return;
      const content = file;
      const path = this.actualPath;
      yield this.dsInstance.assets.add(path, file.name, tags, description, assetType, content, void 0);
      this.updateActualFiles(this.actualPath);
      this.isAddMode = false;
    });
  }
  onActionAddCancel() {
    this.isAddMode = false;
  }
  onAddNewFileClick() {
    this.isAddMode = true;
  }
  renderNode(key, node, folder) {
    const isFile = (str) => {
      return str.split("_").length > 1;
      ;
    };
    const hasFolderInNode = (checkNode) => {
      const keysNode = Object.keys(checkNode);
      const check = keysNode.filter((nd) => isFile(nd));
      return keysNode.length > check.length;
    };
    if (!isFile(key)) {
      const newFolder = folder ? `${folder}/${key}` : key;
      const hasFolder = hasFolderInNode(node);
      if (hasFolder) {
        return html`
                    <details style="margin-left: 1rem;" folder=${newFolder} @click=${(e) => this.handleFolderClick(e, newFolder)}>
                        <summary class="tree-item">${key}</summary>
                        ${Object.keys(node).map((keyC) => this.renderNode(keyC, node[keyC], newFolder))}
                    </details>
                `;
      }
      return html`
                    <div class="tree-item" style="margin-left: 1rem;" folder=${newFolder} @click=${(e) => this.handleFolderClick(e, newFolder)}>
                        ${key}
                    </div>
                `;
    }
  }
  renderTable() {
    const typesAssets = ["image", "video", "icon", "lib", "other"];
    return html`

            <table class=${this.isAddMode ? "hidden" : ""}>
                <thead>
                    <tr>
                        <th>
                            <input id="checkAll" type="checkbox" @change=${(ev) => {
      this.onCheckAllChange(ev);
    }}></input>
                        </th>
                        <th>#</th>
                        <th>${this.msg.name}</th>
                        <th>${this.msg.versionRef}</th>
                    </tr>
                    
                </thead>
                <tbody>

                ${repeat(
      this.actualFiles,
      (key) => key,
      (k, index) => {
        const extWithoutDot = k.extension.substring(1, k.extension.length);
        const extension = this.objIcons[extWithoutDot];
        const typeFileIcon = extension || this.objIcons["none"];
        return html`
                            <tr @click=${(e) => {
          this.onFileClick(e, k);
        }}>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>
                                    <i class="${typeFileIcon}"></i>
                                </td>
                                <td>${k.shortName}</td>
                                <td>${k.versionRef}</td>
                            </tr>
                        `;
      }
    )}
                </tbody>
            </table>
            <div class="actions" style="display:${this.treeController.isNodeReadOnly ? "none" : ""}">
                <button
                    style="display:${this.isAddMode ? "none" : "block"}"
                    @click=${() => {
      this.onAddNewFileClick();
    }}>
                ${this.msg.addNewFile}
                </button>
            </div>

            <div class="add-file-container ${this.isAddMode ? "visible" : ""}">
                <input class="inputFile" type="file"></input>
                <select class="selectType">
                    ${typesAssets.map((t) => {
      return html`
                            <option value=${t}>${t}</option>
                        `;
    })}
                </select>
                <textarea class="txtDesc" placeholder="${this.msg.description}"></textarea>
                <collab-input-tag-100554></collab-input-tag-100554>
                <div class="add-container-actions ${this.isAddMode ? "visible" : ""}">
                    <button @click=${() => {
      this.onActionAddConfirm();
    }}>${this.msg.confirm}</button>
                    <button @click=${() => {
      this.onActionAddCancel();
    }}>${this.msg.cancel}</button>
                </div>
            </div>
        `;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
            <div>
                ${this.loading ? html`<p>${this.msg.loading}</p>` : html`
                    <div class="assets-container">
                        <div class="assets-tree">
                            ${Object.keys(this.tree).map((item) => {
      return this.renderNode(item, this.tree[item], "");
    })}
                        </div>
                        <div class="assets-details">
                            ${this.renderTable()}
                        </div> 
                    </div> 
                    `}`;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "tbody", _tbody_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "treeEl", _treeEl_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "checkBoxAll", _checkBoxAll_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "inputTags", _inputTags_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "txtDesc", _txtDesc_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "inputFile", _inputFile_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "selectType", _selectType_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "tree", _tree_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "isAddMode", _isAddMode_dec, _ServiceDsAssets100554);
__decorateElement(_init, 5, "actualFiles", _actualFiles_dec, _ServiceDsAssets100554);
_ServiceDsAssets100554 = __decorateElement(_init, 0, "ServiceDsAssets100554", _ServiceDsAssets100554_decorators, _ServiceDsAssets100554);
_ServiceDsAssets100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceDsAssets100554);
let ServiceDsAssets100554 = _ServiceDsAssets100554;
export {
  ServiceDsAssets100554
};
