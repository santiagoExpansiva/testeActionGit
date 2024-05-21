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
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
var _isloading_dec, _actualServiceOpName_dec, _actionToOpen_dec, _useContainerAdd_dec, _activeTab_dec, _a, _ServiceAim100554_decorators, _init;
import { html, css, unsafeHTML, render, styleMap, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { convertFileNameToTag, convertTagToFileName } from "./_100554_utilsLit";
import { tasks, readTasksFromServer, getUserConfigs, saveUserConfigs } from "./_100554_aimHelper";
import { findActions } from "./_100554_aimActionBase";
const message_pt = {
  loading: "Carregando...",
  selectadd: "por favor selecione abaixo para adicionar",
  allTasksLast: "Todas as tarefas, \uFFFDltimas",
  user: "Usu\uFFFDrio",
  all: "Todos",
  ref: "Ref",
  add: "Adicionar",
  notFoundReference: "Refer\uFFFDncia n\uFFFDo encontrada",
  tasksByReference: "Tarefas por refer\uFFFDncia",
  noActionsToAdd: "Nenhuma a\uFFFD\uFFFDo para adicionar",
  selectColumnsYouWant: "Selecione as colunas que deseja visualizar",
  save: "Salvar",
  cancel: "Cancelar"
};
const message_en = {
  loading: "Loading...",
  selectadd: "please select below to add",
  allTasksLast: "All Tasks, last",
  user: "User",
  all: "All",
  ref: "Ref",
  add: "Add",
  notFoundReference: "Not found reference",
  tasksByReference: "Tasks by reference",
  noActionsToAdd: "No Actions to Add",
  selectColumnsYouWant: "Select the columns you want to view",
  save: "Save",
  cancel: "Cancel"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceAim100554_decorators = [customElement("service-aim-100554")];
let _ServiceAim100554 = class _ServiceAim100554 extends (_a = ServiceBase, _activeTab_dec = [property()], _useContainerAdd_dec = [property({ reflect: true })], _actionToOpen_dec = [property({ reflect: true })], _actualServiceOpName_dec = [property({ reflect: true })], _isloading_dec = [property()], _a) {
  constructor() {
    super();
    this.myMessage = messages["en"];
    this.activeTab = __runInitializers(_init, 8, this, "All"), __runInitializers(_init, 11, this);
    this.useContainerAdd = __runInitializers(_init, 12, this, true), __runInitializers(_init, 15, this);
    this.actionToOpen = __runInitializers(_init, 16, this, ""), __runInitializers(_init, 19, this);
    this.actualServiceOpName = __runInitializers(_init, 20, this, ""), __runInitializers(_init, 23, this);
    this.isloading = __runInitializers(_init, 24, this, true), __runInitializers(_init, 27, this);
    this.actualServiceOpLevel = 0;
    this.details = {
      icon: "&#xf03a",
      state: "foreground",
      position: "all",
      tooltip: "AI",
      visible: true,
      widget: "_100554_serviceAim",
      level: [2, 3]
    };
    //static message = `[[mls_DS_messages_local_language]]`; // todo: test
    this.onClickLink = (op) => {
      if (op === "opColumns") return this.showConfigColumns();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
      if (this.activeTab === op) return;
      this.activeTab = op;
    };
    this.menu = {
      title: "AI",
      actions: {
        opColumns: "Columns"
      },
      icons: {
        All: `${this.myMessage.all};f560`,
        User: `${this.myMessage.user};f007`,
        Ref: `${this.myMessage.ref};f15b`,
        Add: `${this.myMessage.add};2b`
      },
      actionDefault: "",
      // call after close icon clicked
      iconDefault: "All",
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      onClickIcon: this.onClickIcon,
      getLastMode: void 0,
      updateTitle: void 0
    };
    this.actions = [];
    this.setEvents();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.myMessage = messages[lang];
    if (this.menu.setIconActive) this.menu.setIconActive(this.activeTab);
    if (this.actionToOpen) this.activeTab = "Add";
    switch (this.activeTab) {
      case "All":
        return this.renderAll();
      case "User":
        return this.renderUser();
      case "Ref":
        return this.renderRef();
      case "Add":
        const renderAddResult = this.renderAdd();
        Promise.resolve().then(() => {
          this.checkIfHasActionToOpen();
        });
        return renderAddResult;
      default:
        return html``;
    }
  }
  get invertedPosition() {
    return this.position === "left" ? "right" : "left";
  }
  onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (!visible || !reinit) return;
      yield this.setActions();
      this.requestUpdate();
    });
  }
  setEvents() {
    mls.events.addEventListener([1, 2, 3, 4, 5, 6, 7], ["ToolBarSelected"], (ev) => this.onToolbarSelectChange(ev));
    this.addEventListener("refresh-request", this.handleRefreshRequest);
  }
  onToolbarSelectChange(ev) {
    if (mls.istrace) console.log("serviceAim, toolbarSelected", ev);
    if (this.activeTab !== "Add") return;
    if (!ev.desc) return;
    const data = JSON.parse(ev.desc);
    if (mls.istrace) console.log(`serviceAim, ${data.position}, ${this.position}`);
    if (data.position === this.position || data.level !== this.level) return;
    this.actualServiceOpLevel = data.level;
    this.actualServiceOpName = data.to;
    if (this.visible === "true") this.requestUpdate();
  }
  sortKey(arr) {
    function getKey(key) {
      if (!key) return -1;
      const parts = key.split("/");
      if (parts.length !== 3) return -1;
      const index = Number.parseInt(parts[2]);
      return Number.isNaN(index) ? -1 : index;
    }
    function sort(a, b) {
      if (a.mode === "in progress" && b.mode !== "in progress") {
        return -1;
      } else if (a.mode !== "in progress" && b.mode === "in progress") {
        return 1;
      } else {
        return getKey(b.key) - getKey(a.key);
      }
    }
    return arr.sort(sort);
  }
  renderAll() {
    const renderTask = (taskRoot, index) => {
      const actionName = convertFileNameToTag(taskRoot.widget);
      const sHtml = `<${actionName} mode="${taskRoot.mode}" taskIndex="${index}" />`;
      return html`${unsafeHTML(sHtml)}`;
    };
    const orderned = this.sortKey(tasks);
    if (mls.istrace) console.log(`serviceAim, renderAll`);
    if (this.isloading) return html`<span>${this.myMessage.loading}</span>`;
    return html`
        <h4 class='title'>${this.myMessage.allTasksLast} (${tasks.length})</h4>
            ${repeat(
      orderned,
      (task, index) => task.key,
      (task, index) => renderTask(task, index)
    )}
        `;
  }
  renderUser() {
    const userName = localStorage.getItem("loginUser");
    function renderTask(taskRoot, index) {
      if (taskRoot.userName !== userName) return;
      const actionName = convertFileNameToTag(taskRoot.widget);
      const sHtml = `<${actionName} mode="${taskRoot.mode}" taskIndex="${index}"/>`;
      return html`${unsafeHTML(sHtml)}`;
    }
    const orderned = this.sortKey(tasks);
    return html`
        <h4 class='title'>${this.myMessage.user}: ${userName} </h4>
            ${repeat(
      orderned,
      (task, index) => index,
      (task, index) => renderTask(task, index)
    )}            
        `;
  }
  renderRef() {
    let refOpr = "";
    if (this.nav3Service) {
      const pos = this.position === "left" ? "right" : "left";
      const op = this.nav3Service.getActiveInstance(pos);
      if (op && op.getActualRef) refOpr = op.getActualRef();
    }
    function renderTask(taskRoot, index) {
      let hasRef = taskRoot.children.filter((c) => c.ref === refOpr);
      if (!hasRef || hasRef.length <= 0) return;
      const actionName = convertFileNameToTag(taskRoot.widget);
      const sHtml = `<${actionName} mode="${taskRoot.mode}" taskIndex="${index}"/>`;
      return html`${unsafeHTML(sHtml)}`;
    }
    let orderned = this.sortKey(tasks);
    if (refOpr.length <= 0) refOpr = "***notFoundService---";
    const verifyOrderned = orderned.filter((i) => {
      let hasRef = i.children.filter((c) => c.ref === refOpr);
      if (!hasRef || hasRef.length <= 0) return false;
      return true;
    });
    return html`
            <h4 class='title'>${this.myMessage.tasksByReference} </h4>
                ${verifyOrderned.length > 0 ? repeat(
      orderned,
      (task, index) => index,
      (task, index) => renderTask(task, index)
    ) : html`<h4>${this.myMessage.notFoundReference}</h4>`}
        `;
  }
  updated(changedProperties) {
    super.update(changedProperties);
    if (!changedProperties.has("activeTab")) return;
    switch (this.activeTab) {
      case "All":
        return;
      case "User":
        return;
      case "Ref":
        return;
      case "Add":
        this.setActions().then(() => this.sendRefreshRequest());
        return;
      case "Loading":
        return;
      default:
        console.error("invalid activeTab:", this.activeTab);
    }
  }
  sendRefreshRequest() {
    const event = new CustomEvent("refresh-request", { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }
  handleRefreshRequest() {
    this.requestUpdate();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_ServiceAim100554.prototype, this, "connectedCallback").call(this);
      if (!this.nav3Service) {
        this.actualServiceOpName = "_100554_ServiceSource";
        this.actualServiceOpLevel = 2;
      }
      yield readTasksFromServer("all", "").then(() => __async(this, null, function* () {
        yield this.setActions();
        const widgetsDistincts = /* @__PURE__ */ new Set();
        tasks.forEach((task) => {
          widgetsDistincts.add(task.widget);
        });
        const arrayWidgets = Array.from(widgetsDistincts);
        try {
          for (var iter = __forAwait(arrayWidgets), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
            let widget = temp.value;
            yield this.loadComponentModule(widget);
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
        this.isloading = false;
        this.requestUpdate();
      }));
    });
  }
  attributeChangedCallback(prop, oldValue, newValue) {
    return __async(this, null, function* () {
      __superGet(_ServiceAim100554.prototype, this, "attributeChangedCallback").call(this, prop, oldValue, newValue);
      if (prop === "actualserviceopname" && oldValue !== newValue) {
        yield this.setActions();
        this.requestUpdate();
      }
    });
  }
  setActions() {
    return __async(this, null, function* () {
      this.actions = yield this.getActionsByContext();
    });
  }
  getActionsByContext() {
    return __async(this, null, function* () {
      var _a2;
      if (!this.actualServiceOpName || this.actualServiceOpLevel !== this.level) {
        const activeInstance = (_a2 = this.nav3Service) == null ? void 0 : _a2.getActiveInstance(this.invertedPosition);
        if (!activeInstance || !(activeInstance instanceof ServiceBase)) {
          return [];
        }
        const tag = activeInstance.tagName;
        const fileName = convertTagToFileName(tag.toLowerCase());
        this.actualServiceOpLevel = activeInstance.level;
        this.actualServiceOpName = fileName;
      }
      const act = yield findActions([this.level], [this.actualServiceOpName]);
      return act;
    });
  }
  renderAdd() {
    let filteredActions = [];
    if (!this.nav3Service) filteredActions = this.actions;
    else filteredActions = this.actions.filter((item) => item.tagsValid === true && item.levelsValid);
    const renderItems = () => {
      return filteredActions.map((action, index) => {
        const dataAction = `_${action.project}_${action.shortName}`;
        return html`
                <div data-action=${dataAction} class="ActionItem" @click=${() => this.onAddTask(action, index)}>
                    <div>${action.title}</div>
                    <div>${action.project} - ${action.shortName}</div>
                </div>
            `;
      });
    };
    const showListStyle = { display: !this.useContainerAdd ? "none" : "grid" };
    const showContainerStyle = { display: !this.useContainerAdd ? "block" : "none" };
    return html`
        <div class='addTab' >
          <h4 class='title'>${this.myMessage.selectadd} : ${this.actualServiceOpName}</h4>
          <div class='ActionItemContainer'  style=${styleMap(showListStyle)}>
            ${filteredActions.length === 0 ? html`<div class="no-actions" style="color: #fff;">${this.myMessage.noActionsToAdd}</div>` : renderItems()}
          </div>
          <div
            id='componentContainer'
            class='addContainer'
            style=${styleMap(showContainerStyle)} 
            @add-task=${this.finishedAddTaskRoot}
            @finished-add-task-root=${this.finishedAddTaskRoot}
          >
          </div> 
        </div>
        `;
  }
  onAddTask(action, index) {
    var _a2;
    const webComponentAddHandle = `_${action.project}_${action.shortName}`;
    const container = (_a2 = this.shadowRoot) == null ? void 0 : _a2.getElementById("componentContainer");
    this.loadAndRenderComponent(webComponentAddHandle, container);
  }
  finishedAddTaskRoot(e) {
    if (e.detail.cancel) {
      this.useContainerAdd = true;
      return;
    }
    this.activeTab = "All";
    this.useContainerAdd = true;
  }
  loadAndRenderComponent(widget, container) {
    return __async(this, null, function* () {
      if (!widget || !container) {
        console.error(`invalid call on loadAndRenderComponent: `, !!widget, !!container);
        return;
      }
      try {
        const componentModule = yield this.loadComponentModule(widget);
        if (!componentModule) {
          console.error("widget not exists or invalid:" + widget);
          return;
        }
        const tagName = convertFileNameToTag(widget);
        const newTabIndex = ' tabIndex="-1" ';
        const modeInit = "add";
        const newMode = ' mode="' + modeInit + '"';
        render(html`${unsafeHTML("<" + tagName + newTabIndex + newMode + "/> ")}`, container);
        this.useContainerAdd = false;
      } catch (error) {
        console.error("Erro ao carregar o componente:" + widget + ", error: ", error);
        this.useContainerAdd = true;
      }
    });
  }
  loadComponentModule(widget) {
    return __async(this, null, function* () {
      const componentModule = yield import("./" + widget);
      return componentModule;
    });
  }
  renderColums() {
    this.stateColumns = getUserConfigs();
    const keys = Object.keys(this.stateColumns);
    return html`
            ${this.myMessage.selectColumnsYouWant}
            <div style="padding:0 1rem;">
                ${keys.map(
      (key) => {
        const isChecked = this.stateColumns[key] === true;
        const isDisabled = key === "status";
        return html`
                        <div style="display:flex; align-items:center;">
                            <input
                                id="${key}" 
                                type="checkbox"
                                ?checked=${isChecked} 
                                ?disabled=${isDisabled} 
                                @change=${(event) => this.handleInputChange(event, key)}
                            ></input>
                            <label style="cursor:pointer;" for=${key}>${key}</label>
                        </div>
                    `;
      }
    )}
                <div style="margin-top:1rem;">
                    <button @click=${this.handleSaveColumnClick.bind(this)}>${this.myMessage.save}</button>
                    <button @click=${this.handleCancelColumnClick.bind(this)}>${this.myMessage.cancel}</button>
                </div>
            
            </div>
        `;
  }
  handleInputChange(event, key) {
    const target = event.target;
    const checked = target.checked;
    if (key === "status") return;
    this.stateColumns[key] = checked;
  }
  handleCancelColumnClick() {
    if (this.menu.closeMenu) this.menu.closeMenu();
  }
  handleSaveColumnClick() {
    if (this.stateColumns) {
      saveUserConfigs(this.stateColumns);
      this.activeTab = "Loading";
      setTimeout(() => {
        this.activeTab = "All";
        if (this.menu.closeMenu) this.menu.closeMenu();
      }, 50);
    }
  }
  showConfigColumns() {
    const div1 = document.createElement("div");
    div1.style.padding = "1rem";
    render(this.renderColums(), div1);
    if (this.menu.setMode) this.menu.setMode("page", div1);
    return true;
  }
  checkIfHasActionToOpen() {
    if (!this.actionToOpen) return;
    setTimeout(() => {
      var _a2;
      const action = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(`.ActionItem[data-action="${this.actionToOpen}"]`);
      if (action) action.click();
      this.actionToOpen = "";
    }, 100);
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "activeTab", _activeTab_dec, _ServiceAim100554);
__decorateElement(_init, 5, "useContainerAdd", _useContainerAdd_dec, _ServiceAim100554);
__decorateElement(_init, 5, "actionToOpen", _actionToOpen_dec, _ServiceAim100554);
__decorateElement(_init, 5, "actualServiceOpName", _actualServiceOpName_dec, _ServiceAim100554);
__decorateElement(_init, 5, "isloading", _isloading_dec, _ServiceAim100554);
_ServiceAim100554 = __decorateElement(_init, 0, "ServiceAim100554", _ServiceAim100554_decorators, _ServiceAim100554);
_ServiceAim100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceAim100554);
let ServiceAim100554 = _ServiceAim100554;
export {
  ServiceAim100554
};
