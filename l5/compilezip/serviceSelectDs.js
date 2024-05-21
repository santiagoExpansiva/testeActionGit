var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
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
var _state_dec, _a, _ServiceSelectDs100554_decorators, _init;
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initServiceSelectDsAdd } from "./_100554_serviceSelectDsAdd";
import { collab_file, collab_undo, collab_location_dot, collab_unbalanced } from "./_100554_collabIcons";
const message_pt = {
  noDesignSystem: "Nenhum sistema de design neste projeto, por favor clique em adicionar para come\uFFFDar a criar um novo sistema de design.",
  addNew: "Adicionar novo sistema de design"
};
const message_en = {
  noDesignSystem: "No design system in this project, please click add to start a create a new design system.",
  addNew: "Add new design system "
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceSelectDs100554_decorators = [customElement("service-select-ds-100554")];
let _ServiceSelectDs100554 = class _ServiceSelectDs100554 extends (_a = ServiceBase, _state_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf15b",
      state: "foreground",
      tooltip: "Select Ds",
      visible: true,
      position: "left",
      widget: "_100554_serviceSelectDs",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opSelect") return this.showHelper();
      if (op === "opAdd") return this.showAdd();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Select Design System",
      actions: {
        opAdd: "Add"
      },
      icons: {},
      actionDefault: "opSelect",
      // call after close icon clicked
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.state = __runInitializers(_init, 8, this, { history: [], actualProject: void 0, ds: [], dsSelected: void 0 }), __runInitializers(_init, 11, this);
    initServiceSelectDsAdd();
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
    });
  }
  showHelper() {
    return true;
  }
  showAdd() {
    const sectionAdd = document.createElement("service-select-ds-add-100554");
    sectionAdd["service"] = this;
    if (this.menu.setMode) this.menu.setMode("page", sectionAdd);
    return true;
  }
  setEvents() {
    mls.events.addEventListener([3], ["DSChanged"], (ev) => {
      this.toogleBadge(true, "_100554_serviceSave");
    });
    mls.events.addEventListener([5], ["ProjectSelected"], (ev) => {
      if (!ev.desc) return;
      const data = JSON.parse(ev.desc);
      if (data.value) {
        this.state.actualProject = data.value;
        this.requestUpdate();
        setTimeout(() => {
          this.fireOpenDetails();
        }, 1e3);
      }
    });
  }
  init() {
    this.clearState();
    this.setProjectActual();
    if (!this.state.actualProject) return;
    this.getDs();
  }
  clearState() {
    this.state.history = [];
    this.state.ds = [];
    this.state.actualProject = void 0;
    this.state.dsSelected = void 0;
  }
  setProjectActual() {
    this.state.actualProject = mls.actual[5].project;
  }
  checkIsALocalStorageChanges() {
    let haschangesLocal = false;
    Object.entries(mls.stor.files).forEach((entry) => {
      const [key, item] = entry;
      if (item.level === 3 && item.inLocalStorage) haschangesLocal = true;
    });
    return haschangesLocal;
  }
  initDsSelected(dsindex) {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      if (!project) return;
      const dsInstance = mls.l3.getDSInstance(project, dsindex);
      yield dsInstance.init();
    });
  }
  getLastDsSelectedList() {
    const str = localStorage.getItem("collab-last-ds-selected");
    if (!str) return {};
    const obj = JSON.parse(str);
    return obj;
  }
  getLastDsSelectedByProject(project) {
    if (!project) return void 0;
    const list = this.getLastDsSelectedList();
    return list[project] || void 0;
  }
  setLastDsSelected(dsindex, project) {
    if (!dsindex || !project) return;
    const list = this.getLastDsSelectedList();
    list[project] = dsindex;
    localStorage.setItem("collab-last-ds-selected", JSON.stringify(list));
  }
  getDs() {
    const { project } = mls.actual[5];
    if (!project) throw new Error("Please, select a project");
    const dsList = mls.l5.ds.list(project);
    dsList.forEach((ds) => {
      const filesInDs = Object.entries(mls.stor.files).map((entry) => {
        const [key, value] = entry;
        if (key.startsWith(`${project}_3_ds_${ds.dsName}`)) return value;
      }).filter((value) => value !== void 0);
      const inLc = filesInDs.find((file) => file.inLocalStorage === true);
      const outdated = filesInDs.find((file) => file.isLocalVersionOutdated === true && file.status !== "new");
      const obj = {
        dsInfo: ds,
        inLocalStorage: !!inLc,
        outdated: !!outdated,
        files: filesInDs
      };
      this.state.ds.push(obj);
    });
    this.state = this.state;
  }
  _fireEventDsSelected(dsindex) {
    const params = {
      emitter: "left",
      value: dsindex
    };
    mls.actual[3].mode = dsindex;
    mls.events.fire(3, ["DSSelected"], JSON.stringify(params), 500);
  }
  openAdd() {
    if (this.menu.setMenuActive) this.menu.setMenuActive("opAdd");
  }
  onItemClick(item) {
    return __async(this, null, function* () {
      var _a2;
      this.loading = true;
      (_a2 = this.serviceContent) == null ? void 0 : _a2.setAttribute("error", "");
      try {
        yield this.initDsSelected(item.dsIndex);
        this._fireEventDsSelected(item.dsIndex);
        if (this.state.actualProject) this.setLastDsSelected(item.dsIndex, this.state.actualProject);
        this.state.dsSelected = item.dsIndex;
      } catch (err) {
        this.setError(err.message);
      } finally {
        this.loading = false;
      }
    });
  }
  restoreDs(item) {
    return __async(this, null, function* () {
      if (!this.state.actualProject) return;
      const ds = mls.l3.getDSInstance(this.state.actualProject, item.dsIndex);
      this.loading = true;
      this.setError("");
      try {
        yield ds.init();
        yield ds.dispose();
        this.init();
        this.onItemClick(item);
        this.toogleBadge(this.checkIsALocalStorageChanges(), "_100554_serviceSave");
      } catch (err) {
        this.setError(err.message);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 100);
      }
    });
  }
  fireOpenDetails() {
    if (!this.state.actualProject || !this.state.dsSelected) return;
    const dss = mls.l5.ds.list(this.state.actualProject);
    const dsInfo = dss[this.state.dsSelected];
    if (!dsInfo) return;
    this.onItemClick(dsInfo);
  }
  firstUpdated(changedProperties) {
    return __async(this, null, function* () {
      yield __superGet(_ServiceSelectDs100554.prototype, this, "firstUpdated").call(this, changedProperties);
      this.fireOpenDetails();
    });
  }
  restoreFile(storFile) {
    return __async(this, null, function* () {
      if (storFile.status === "changed") {
        storFile.status = "nochange";
        if (storFile.isLocalVersionOutdated && storFile.newVersionRefIfOutdated) {
          storFile.versionRef = storFile.newVersionRefIfOutdated;
          storFile.isLocalVersionOutdated = false;
          storFile.newVersionRefIfOutdated = void 0;
        }
      }
      yield mls.stor.localStor.setContent(storFile, { contentType: "string", content: null });
      this.requestUpdate();
    });
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    this.init();
    if (this.state.actualProject) {
      let lastDsIndex = this.getLastDsSelectedByProject(this.state.actualProject);
      if (!lastDsIndex) lastDsIndex = 0;
      this.state.dsSelected = lastDsIndex;
    }
    return html`
        <div class="l5-ds-list">
            <div class="filter-container">
                <input type="text" placeholder="Filter">
            </div>
            <div class="serviceListDs">
                <span style="display:${this.state.ds.length > 0 ? "none" : "block"}">${this.msg.noDesignSystem}</span>
                <ul class="serviceListList">
                    ${this.state.ds.map((ds) => {
      var _a2;
      return html`
                        <li>
                            <details>
                                <summary
                                class= "${ds.dsInfo.dsIndex === ((_a2 = this.state) == null ? void 0 : _a2.dsSelected) ? "selected" : ""}"
                                @click=${(e) => {
        this.onItemClick(ds.dsInfo);
      }}>
                                    <span>${ds.dsInfo.dsName + " (" + ds.dsInfo.dsIndex.toString() + ")"}</span>
                                    <span style="display:inline-flex;gap:.6rem; align-items:center;">
                                        <span
                                            title="in local storage" 
                                            style="display:${ds.inLocalStorage ? "block" : "none"}">
                                        ${collab_location_dot}
                                        </span>
                                        <span
                                            title="need conciliation"
                                            style="display:${ds.outdated ? "block" : "none"}">
                                        ${collab_unbalanced}
                                        </span>
                                        <span
                                            title="undo all"
                                            style="margin-left:.5rem;display:${ds.inLocalStorage ? "block" : "none"}"
                                            @click=${(e) => {
        e.preventDefault();
        this.restoreDs(ds.dsInfo);
      }}
                                        >${collab_undo}</span>
                                    </span>

                                </summary>
                                <div>
                                    <ul>
                                        ${ds.files.filter((f) => f.inLocalStorage).map((file) => html`
                                        <li>
                                            <span>${collab_file} ${file.folder.replace(`ds/${ds.dsInfo.dsName}`, "...") + "/" + file.shortName + file.extension}</span>
                                            <span>
                                                <span title="in local storage"> ${collab_location_dot}</span>
                                                <span title="need conciliation" style="display:${file.isLocalVersionOutdated && file.status !== "new" ? "inline-block" : "none"}">
                                                    ${collab_unbalanced}
                                                </span>
                                                <span
                                                    title="undo"
                                                    style="margin-left:.5rem; display:${(file.extension === ".less" || file.extension === ".txt") && file.status !== "new" ? "inline-block" : "none"}"
                                                    @click=${(e) => {
        e.preventDefault();
        this.restoreFile(file);
      }}
                                                > ${collab_undo}</span>
                                            </span>
                                                    
                                        
                                        </li>


                                        `)}
                                    

                                    </ul>
                                <div>
                                
                            </details>
                        
                        </li>
                    `;
    })}
                    
                </ul>
            </div>
            <div class="serviceListAddDs">
                <a href="#" @click=${(e) => {
      e.preventDefault();
      this.openAdd();
    }}> ${this.msg.addNew}</a>
            </div>
        </div>`;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "state", _state_dec, _ServiceSelectDs100554);
_ServiceSelectDs100554 = __decorateElement(_init, 0, "ServiceSelectDs100554", _ServiceSelectDs100554_decorators, _ServiceSelectDs100554);
_ServiceSelectDs100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceSelectDs100554);
let ServiceSelectDs100554 = _ServiceSelectDs100554;
export {
  ServiceSelectDs100554
};
