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
var _loading_dec, _extension_dec, _level_dec, _folder_dec, _position_dec, _shortName_dec, _project_dec, _a, _SimpleGreeting_decorators, _init;
import { html, LitElement, unsafeHTML } from "lit";
import { customElement, property } from "lit/decorators.js";
_SimpleGreeting_decorators = [customElement("mls-history-list-100554")];
let _SimpleGreeting = class _SimpleGreeting extends (_a = LitElement, _project_dec = [property({ type: Number })], _shortName_dec = [property({ type: String })], _position_dec = [property({ type: String })], _folder_dec = [property({ type: String })], _level_dec = [property({ type: Number })], _extension_dec = [property({ type: String })], _loading_dec = [property({ type: Boolean })], _a) {
  constructor() {
    super(...arguments);
    this.project = __runInitializers(_init, 8, this, 100554), __runInitializers(_init, 11, this);
    this.shortName = __runInitializers(_init, 12, this, "mlsStartL2"), __runInitializers(_init, 15, this);
    this.position = __runInitializers(_init, 16, this, "left"), __runInitializers(_init, 19, this);
    this.folder = __runInitializers(_init, 20, this, ""), __runInitializers(_init, 23, this);
    this.level = __runInitializers(_init, 24, this, 2), __runInitializers(_init, 27, this);
    this.extension = __runInitializers(_init, 28, this, ".ts"), __runInitializers(_init, 31, this);
    this.loading = __runInitializers(_init, 32, this, true), __runInitializers(_init, 35, this);
    this.error = "";
    this.data = [];
    this.filters = [
      {
        title: "Today",
        maxOffsetDays: 1
      },
      {
        title: "Yesterday",
        maxOffsetDays: 2
      },
      {
        title: "This week",
        maxOffsetWeek: 1
      },
      {
        title: "Last week",
        maxOffsetWeek: 2
      },
      {
        title: "This month",
        maxOffsetMonth: 1
      },
      {
        title: "In {month}",
        maxOffsetMonth: 11
      },
      {
        title: "In {year}"
      }
    ];
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_SimpleGreeting.prototype, this, "connectedCallback").call(this);
      yield this.getListHistory();
      this.loading = false;
    });
  }
  getListHistory() {
    return __async(this, null, function* () {
      try {
        const key = mls.stor.getKeyToFiles(this.project, this.level, this.shortName, this.folder, this.extension);
        const storFile = mls.stor.files[key];
        const historie = yield storFile.getHistory();
        const data = this.createJson(historie);
        this.data = data;
      } catch (e) {
        this.error = `
            <div style="width:80%; padding:20px; border:1px solid #eee; border-left-width:5px; border-radius: 3px; margin:10px auto; border-left-color: #d9534f; background-color: rgba(217, 83, 79, 0.1); ">
                <strong style="color:#d9534f;">Error</strong>- 
                ${e}
            </div>`;
      }
    });
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === "msize") {
      const [width, height] = newVal.split(",");
      this.style.height = height + "px";
    }
  }
  createJson(gitObj) {
    if (!gitObj) return [];
    const today = /* @__PURE__ */ new Date();
    gitObj.forEach((item, index) => {
      const itemDate = new Date(item.data);
      const yesterday = new Date((/* @__PURE__ */ new Date()).setDate(today.getDate() - 1));
      if (today.toDateString() === itemDate.toDateString()) item.offsetDay = 0;
      if (yesterday.toDateString() === itemDate.toDateString()) item.offsetDay = 1;
      if (index === 0) item.firstItem = true;
      item.offsetWeek = this.getWeekOffet(itemDate, today);
      item.offsetMonth = today.getMonth() - itemDate.getMonth();
      item.offsetYear = today.getFullYear() - itemDate.getFullYear();
      item.index = this.findFirstInFilters(item);
      const filterTitle = this.filters[item.index].title;
      item.title = filterTitle.replace("{year}", itemDate.getFullYear().toString()).replace("{month}", `${itemDate.getFullYear()}-${("00" + (itemDate.getMonth() + 1)).slice(-2)}`);
    });
    return this.createJson2(gitObj);
  }
  createJson2(gitObj) {
    const ret = [];
    const ret2 = {};
    const objLocal = {};
    objLocal.title = "Local Changes";
    const localAuthor = localStorage.getItem("loginUser") || "unknow";
    const localItem = {
      author: localAuthor,
      authorUrl: "",
      dateAm: "",
      hash: "local",
      time: "",
      type: "item",
      linesDeleted: void 0,
      linesInserted: void 0
    };
    objLocal.type = "title";
    objLocal.itens = [];
    objLocal.itens.push(localItem);
    ret.push(objLocal);
    gitObj.forEach((item) => {
      if (ret2[item.title]) ret2[item.title].push(item);
      else ret2[item.title] = [item];
    });
    Object.keys(ret2).forEach((keys) => {
      const obj = {};
      ret.push(obj);
      ret2[keys].forEach((item, index) => {
        if (index === 0) {
          obj.title = item.title;
          obj.itens = [];
          obj.type = "title";
        }
        const dataItem = new Date(item.data);
        const dataFormat = this.formatDate(dataItem);
        const objItem = {
          author: item.authorName,
          time: dataFormat,
          dateAm: "",
          hash: item.ref,
          authorUrl: item.authorUrl,
          type: "item",
          linesDeleted: item.deletions,
          linesInserted: item.additions
        };
        obj.itens.push(objItem);
        obj.open = false;
      });
    });
    return ret;
  }
  findFirstInFilters(item) {
    for (let i = 0; i < this.filters.length; i++) {
      const it = this.filters[i];
      if (it.maxOffsetDays && item.offsetDay < it.maxOffsetDays || it.maxOffsetWeek && item.offsetWeek < it.maxOffsetWeek || it.maxOffsetMonth && item.offsetMonth < it.maxOffsetMonth && item.offsetYear === 0) {
        return i;
      }
    }
    return this.filters.length - 1;
  }
  getWeekOffet(dateStr, dateEnd) {
    const date1a = dateStr;
    const date2a = dateEnd;
    const dt = new Date(date1a.getFullYear(), 0, 1);
    const w1 = Math.ceil(((date1a - dt) / 864e5 + dt.getDay() + 1) / 7);
    const w2 = Math.ceil(((date2a - dt) / 864e5 + dt.getDay() + 1) / 7);
    return w2 - w1;
  }
  formatDate(dateValue) {
    const dataFormat = dateValue.getFullYear() + "-" + ("00" + (dateValue.getMonth() + 1)).slice(-2) + "-" + ("00" + dateValue.getDate()).slice(-2) + "  " + ("00" + dateValue.getHours()).slice(-2) + ":" + ("00" + dateValue.getMinutes()).slice(-2) + ":" + ("00" + dateValue.getSeconds()).slice(-2);
    return dataFormat;
  }
  createRenderRoot() {
    return this;
  }
  handleClick(a) {
    const target = a.target;
    const li = target.closest("li");
    if (!li) return;
    this.querySelectorAll("li").forEach((l) => l.classList.remove("active"));
    li.classList.add("active");
    const hashModified = li.getAttribute("hash") || "";
    let nextLi = li.nextElementSibling;
    if (!nextLi) {
      const actualUl = li.closest("ul");
      const nextParentUl = actualUl == null ? void 0 : actualUl.closest("li");
      const nextUlLi = nextParentUl == null ? void 0 : nextParentUl.nextElementSibling;
      const nextUl = nextUlLi == null ? void 0 : nextUlLi.querySelector("ul");
      if (nextUl) nextLi = nextUl.children[0];
    }
    let hashOriginal = "";
    if (nextLi) hashOriginal = nextLi.getAttribute("hash") || "";
    const obj = {
      project: this.project,
      shortName: this.shortName,
      extension: this.extension,
      position: this.position,
      level: this.level,
      folder: this.folder,
      hashOriginal,
      hashModified
    };
    mls.events.fire([2], "HistoriesSelected", JSON.stringify(obj), 0);
  }
  render() {
    if (this.error !== "") {
      const obj = unsafeHTML(this.error);
      this.error = "";
      return obj;
    }
    return html`
      <div>
        ${this.loading ? html`<p>Loading...</p>` : html`
        <div>
          <ul>
                ${this.data.map((itemT) => html`
                    <li class="historie-title">
                        <details>
                            <summary>${itemT.title}</summary>
                            <div>
                                <ul>
                                    ${itemT.itens.map((itemH) => html`
                                        <li class="historie-item" hash="${itemH.hash}" @click="${this.handleClick}">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
                                            <span>${itemH.time}</span>
                                            <div class="historie-lines" style="${itemH.linesInserted === void 0 ? "display:none" : "display:inline-flex"}">
                                                <span class='historie-additions'>+${itemH.linesInserted}</span>
                                                <span class='historie-deletions'>-${itemH.linesDeleted}</span>
                                            </div>
                                            ${itemH.authorUrl ? html`<img src="${itemH.authorUrl}" alt="${itemH.author}"></img>` : html`<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>`} 
                                            <span>${itemH.author}</span>
                                        </li>
                                    `)}
                                </ul>
                            </div>
                        </details>
                    </li>
                `)}
          </ul>
          
        </div>
        `}
      </div>
    `;
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "project", _project_dec, _SimpleGreeting);
__decorateElement(_init, 5, "shortName", _shortName_dec, _SimpleGreeting);
__decorateElement(_init, 5, "position", _position_dec, _SimpleGreeting);
__decorateElement(_init, 5, "folder", _folder_dec, _SimpleGreeting);
__decorateElement(_init, 5, "level", _level_dec, _SimpleGreeting);
__decorateElement(_init, 5, "extension", _extension_dec, _SimpleGreeting);
__decorateElement(_init, 5, "loading", _loading_dec, _SimpleGreeting);
_SimpleGreeting = __decorateElement(_init, 0, "SimpleGreeting", _SimpleGreeting_decorators, _SimpleGreeting);
__runInitializers(_init, 1, _SimpleGreeting);
let SimpleGreeting = _SimpleGreeting;
export {
  SimpleGreeting
};
