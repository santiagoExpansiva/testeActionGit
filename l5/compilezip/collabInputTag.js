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
var _input_dec, _tags_dec, _a, _CollabInputTag_decorators, _init;
import { html, css, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
function initCollabInputTag() {
  return true;
}
_CollabInputTag_decorators = [customElement("collab-input-tag-100554")];
class CollabInputTag extends (_a = LitElement, _tags_dec = [property()], _input_dec = [query("#tag-input")], _a) {
  constructor() {
    super(...arguments);
    this.tags = __runInitializers(_init, 8, this, []), __runInitializers(_init, 11, this);
    this.allowDelete = false;
  }
  get value() {
    return this.tags.join(",");
  }
  set value(val) {
    if (!val) {
      this.empty();
      return;
    }
    const arrTags = val.split(",");
    this.tags = arrTags;
  }
  addTag(tag) {
    return this._addTag(tag);
  }
  deleteTag(index) {
    return this._deleteTag(index);
  }
  empty() {
    return this._empty();
  }
  _addTag(tag) {
    var _a2;
    if (!tag) return;
    tag = tag.toLowerCase();
    if (this.tags.indexOf(tag) === -1) {
      this.tags.push(tag);
      if (this.input) this.input.value = "";
      this.requestUpdate();
    } else {
      const element = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector('[data-index="' + this.tags.indexOf(tag) + '"]');
      element.classList.add("duplicate");
      setTimeout(() => {
        element.classList.remove("duplicate");
      }, 500);
    }
  }
  _deleteTag(index) {
    const newTags = [];
    this.tags.forEach((tag, idx) => {
      if (idx !== index) {
        newTags.push(tag);
      }
    });
    this.tags = newTags;
    this.requestUpdate();
  }
  _empty() {
    this.tags = [];
    this.requestUpdate();
  }
  onInputKeyDown(event) {
    if (!this.input) return;
    const { value } = this.input;
    if (event.keyCode === 13) {
      this._addTag(value);
      if (this.onValueChanged) this.onValueChanged(this.value);
    } else if (event.keyCode === 188) {
      event.preventDefault();
      this._addTag(value);
      if (this.onValueChanged) this.onValueChanged(this.value);
    } else if (event.keyCode === 8 && value.length === 0) {
      if (this.allowDelete) {
        this._deleteTag(this.tags.length - 1);
        if (this.onValueChanged) this.onValueChanged(this.value);
        this.allowDelete = false;
      } else {
        this.allowDelete = true;
      }
    }
  }
  render() {
    return html`<div class="collab-tag-input">
                <input id="tag-input" @keydown=${(ev) => {
      this.onInputKeyDown(ev);
    }}></input>
                ${this.tags.map((tag, index) => {
      return html`
                        <div data-index=${index} class="tag">
                            <div class="remove">x</div>
                            ${tag}
                        </div>
                    `;
    })}
        </div>`;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "tags", _tags_dec, CollabInputTag);
__decorateElement(_init, 5, "input", _input_dec, CollabInputTag);
CollabInputTag = __decorateElement(_init, 0, "CollabInputTag", _CollabInputTag_decorators, CollabInputTag);
CollabInputTag.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, CollabInputTag);
export {
  CollabInputTag,
  initCollabInputTag
};
