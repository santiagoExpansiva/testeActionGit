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
var _videoEl_dec, _a, _ServiceDsAssetsVideo100554_decorators, _init;
import { html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
_ServiceDsAssetsVideo100554_decorators = [customElement("service-ds-assets-video-100554")];
class ServiceDsAssetsVideo100554 extends (_a = ServiceBase, _videoEl_dec = [query("#serviceassetsvideo_video")], _a) {
  constructor() {
    super();
    this.details = {
      icon: "&#xf03d",
      state: "foreground",
      tooltip: "Assets Video",
      visible: false,
      position: "right",
      tags: ["ds_assets"],
      widget: "_100554_serviceDsAssetsVideo",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (op === "opHelper") return this.showInitial();
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.menu = {
      title: "Assets Video",
      actions: {
        opHelper: "Assets Video"
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
    this.setEvents();
  }
  onServiceClick(visible, reinit, el) {
    this._onServiceClick(visible, reinit, el);
  }
  _onServiceClick(visible, reinit, el) {
    return __async(this, null, function* () {
      if (visible) {
        this.setVideo();
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
  showInitial() {
    this.menu.title = "Assets Video";
    return true;
  }
  onDsAssetsUnSelected(ev) {
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.service.includes("_100554_serviceDsAssetsVideo")) return;
    this.showNav2Item(false);
  }
  onDsAssetsChanged(ev) {
    if (!ev.desc) return;
    const params = JSON.parse(ev.desc);
    if (params.position === "right") return;
    if (params.info.helper.includes("_100554_serviceDsAssetsVideo")) {
      this.data = params;
      this.showNav2Item(true);
      this.openMe();
    } else this.showNav2Item(false);
  }
  setVideo() {
    return __async(this, null, function* () {
      var _a2;
      if (!this.data) return;
      if (!this.data.info.filesSelectedArr) return void 0;
      const [fileSelected] = this.data.info.filesSelectedArr;
      if (!fileSelected) return void 0;
      const { folder, extension, level, project, shortName } = fileSelected;
      const keyFile = mls.stor.getKeyToFiles(project, level, shortName, folder, extension);
      const value = yield (_a2 = mls.stor.files[keyFile]) == null ? void 0 : _a2.getContent();
      const file = value;
      const reader = new FileReader();
      if (!file) return;
      reader.addEventListener("load", () => {
        const base64String = btoa(reader.result);
        const base64Full = `data:${file.type};base64,${base64String}`;
        if (this.videoEl) this.videoEl.src = base64Full;
      });
      reader.readAsBinaryString(file);
    });
  }
  render() {
    return html`
            <div class="service_assets_video">
                <video id="serviceassetsvideo_video" controls=""></video>
            </div>
        `;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "videoEl", _videoEl_dec, ServiceDsAssetsVideo100554);
ServiceDsAssetsVideo100554 = __decorateElement(_init, 0, "ServiceDsAssetsVideo100554", _ServiceDsAssetsVideo100554_decorators, ServiceDsAssetsVideo100554);
ServiceDsAssetsVideo100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsAssetsVideo100554);
export {
  ServiceDsAssetsVideo100554
};