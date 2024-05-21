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
var _ServiceDsAssetsOverview100554_decorators, _init, _a;
import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
import { initCollabInputTag } from "./_100554_collabInputTag";
const message_pt = {
  folder: "Pastas",
  inLocalStorage: "Em local",
  description: "Descri\uFFFD\uFFFDo",
  tags: "Tags",
  deleteFile: "Deletar Arquivo"
};
const message_en = {
  folder: "Folder",
  inLocalStorage: "In local storage",
  description: "Description",
  tags: "Tags",
  deleteFile: "Delete file"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsAssetsOverview100554_decorators = [customElement("service-ds-assets-overview-100554")];
class ServiceDsAssetsOverview100554 extends (_a = ServiceBase) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.details = {
      icon: "&#xf229",
      state: "foreground",
      tooltip: "Assets Overview",
      visible: false,
      position: "right",
      tags: ["ds_assets"],
      widget: "_100554_serviceDsAssetsOverview",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opHelper") return this.showInitial();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Assets Overview",
      actions: {
        opHelper: "Assets Overview"
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
    this.state = {
      multiple: false,
      text: "",
      folder: "",
      inLocalStorage: "",
      readOnly: true,
      description: "",
      tags: "",
      actualFileInfo: void 0,
      actualAssetsItem: null
    };
    this.setEvents();
    initCollabInputTag();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible) {
        this.setData();
        if (el && typeof el.layout === "function") el.layout();
      }
    });
  }
  setEvents() {
    mls.events.addEventListener([this.level], ["DSAssetsUnSelected"], (ev) => {
      this.onDsAssetsUnSelected(ev);
    });
    mls.events.addEventListener([this.level], ["DSAssetsChanged"], (ev) => {
      this.onDsAssetsChanged(ev);
    });
  }
  onDsAssetsUnSelected(ev) {
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.service.includes("_100554_serviceDsAssetsOverview")) return;
    this.showNav2Item(false);
  }
  onDsAssetsChanged(ev) {
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.position === "right") return;
    if (params.info.helper.includes("_100554_serviceDsAssetsOverview")) {
      this.data = params;
      this.showNav2Item(true);
      this.openMe();
      this.setData();
    } else this.showNav2Item(false);
  }
  showInitial() {
    this.menu.title = "Assets Image";
    this.setData();
    return true;
  }
  setData() {
    return __async(this, null, function* () {
      if (!this.data) return;
      if (!this.data.info.filesSelectedArr) return void 0;
      if (this.data.info.filesSelectedArr.length === 0) {
        this.state.text = `No file selected.`;
        this.state.multiple = true;
        this.state.folder = "";
        this.state.inLocalStorage = "";
      } else if (this.data.info.filesSelectedArr.length > 1) {
        this.state.multiple = true;
        this.state.inLocalStorage = "";
        this.state.text = `${this.data.info.filesSelectedArr.length} files selected.`;
      } else {
        const [file] = this.data.info.filesSelectedArr;
        this.state.actualFileInfo = file;
        this.state.multiple = this.data.info.readOnly;
        this.state.text = file.shortName + file.extension;
        this.state.folder = file.folder;
        this.state.inLocalStorage = file.inLocalStorage.toString();
        yield this.prepareStateFile(file);
      }
      this.state.readOnly = this.data.info.readOnly;
      this.requestUpdate();
    });
  }
  initDs() {
    return __async(this, null, function* () {
      const { project } = mls.actual[5];
      const { mode } = mls.actual[3];
      if (project === void 0 || mode === void 0) return;
      this.ds = mls.l3.getDSInstance(project, mode);
      yield this.ds.init();
    });
  }
  prepareStateFile(file) {
    return __async(this, null, function* () {
      this.state.actualAssetsItem = null;
      this.state.tags = "";
      this.state.description = "";
      yield this.initDs();
      if (!this.ds) return;
      const fullname = file.shortName + file.extension;
      const assetsItem = this.ds.assets.find(file.folder, fullname);
      if (!assetsItem) return;
      this.state.actualAssetsItem = assetsItem;
      this.state.tags = assetsItem.tags ? assetsItem.tags.join(",") : "";
      this.state.description = assetsItem.description;
    });
  }
  handleKeyUp(e) {
    if (!this.ds) return;
    const value = e.target.value;
    if (this.state.actualAssetsItem) {
      this.ds.assets.update(this.state.folder, this.state.actualAssetsItem.shortname, this.state.actualAssetsItem.tags, value, this.state.actualAssetsItem.type);
    }
  }
  handleValueChanged(value) {
    if (!this.ds) return;
    if (this.state.actualAssetsItem) {
      this.ds.assets.update(this.state.folder, this.state.actualAssetsItem.shortname, value.split(","), this.state.actualAssetsItem.description, this.state.actualAssetsItem.type);
    }
  }
  handleDelete() {
    return __async(this, null, function* () {
      var _a2;
      if (!this.ds) return;
      if (this.state.actualAssetsItem && this.state.actualFileInfo) {
        const deletedFile = this.state.actualFileInfo;
        const params = {
          action: "delete",
          info: (_a2 = this.data) == null ? void 0 : _a2.info,
          position: "right"
        };
        yield this.ds.assets.remove(this.state.folder, this.state.actualAssetsItem.shortname);
        mls.events.fire(3, "DSAssetsChanged", JSON.stringify(params), 0);
      }
    });
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        <div class="service_assets_overview" >
            <details open="open" >
                <summary>${this.state.text}</summary>
                <ul >
                    <li >
                        <i class="fa-solid fa-folder" ></i>
                        <span >${this.msg.folder}:</span>
                        <span>${this.state.folder}</span>
                    </li>
                    <li ">
                        <i class="fa-solid fa-database" "></i>
                        <span ">${this.msg.inLocalStorage}:</span>
                        <span>${this.state.inLocalStorage}</span>
                    </li>
                </ul>
                <div class="ds_assets_ds_container" style="display:${this.state.multiple ? "none;" : ""}" >
                    <label>${this.msg.description}:</label>
                    <textarea rows="5" @input=${(e) => {
      this.handleKeyUp(e);
    }} .value="${this.state.description}"></textarea>
                    <label>${this.msg.tags}:</label>
                    <collab-input-tag-100554 .value=${this.state.tags} .onValueChanged=${(value) => {
      this.handleValueChanged(value);
    }} ></collab-input-tag-100554>
                    <div class="actions">
                        <button @click=${() => {
      this.handleDelete();
    }}>${this.msg.deleteFile}</button>
                    </div>
                </div>
            </details>
        </div>`;
  }
}
_init = __decoratorStart(_a);
ServiceDsAssetsOverview100554 = __decorateElement(_init, 0, "ServiceDsAssetsOverview100554", _ServiceDsAssetsOverview100554_decorators, ServiceDsAssetsOverview100554);
ServiceDsAssetsOverview100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsAssetsOverview100554);
export {
  ServiceDsAssetsOverview100554
};
