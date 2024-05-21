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
var _actualMode_dec, _actualBreadCrumb_dec, _actualGroups_dec, _a, _IcaSelectGroup_decorators, _init;
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  getDescriptionsRootGroup,
  getDescriptionsFinalGroup,
  getDescriptionsSubGroup,
  getFormComponentsDescription
} from "./_100554_icaBaseDescription";
function initIcaSelectGroup() {
  return true;
}
_IcaSelectGroup_decorators = [customElement("ica-select-group-100554")];
class IcaSelectGroup extends (_a = LitElement, _actualGroups_dec = [property({ type: Array })], _actualBreadCrumb_dec = [property({ type: Array })], _actualMode_dec = [property({ type: String })], _a) {
  constructor() {
    super(...arguments);
    this.rootBread = "";
    this.actualGroups = __runInitializers(_init, 8, this, []), __runInitializers(_init, 11, this);
    this.actualBreadCrumb = __runInitializers(_init, 12, this, []), __runInitializers(_init, 15, this);
    this.actualMode = __runInitializers(_init, 16, this, "root"), __runInitializers(_init, 19, this);
    this.messages = {
      "selectICA": "Select ICA"
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.rootBread = this.messages.selectICA;
    this.actualBreadCrumb = [this.rootBread];
  }
  _handleInternalAction() {
    const customEvent = new CustomEvent("selection-changed", {
      bubbles: true,
      composed: true,
      detail: {
        selection: this.actualBreadCrumb.slice(1, this.actualBreadCrumb.length)
      }
    });
    this.dispatchEvent(customEvent);
  }
  clear() {
    this.actualGroups = [];
    this.actualBreadCrumb = [this.rootBread = this.messages.selectICA];
    this.actualMode = "root";
  }
  render() {
    return html` 
            ${this.renderBreadCrumb()}
            ${this.renderGroups()}        
        `;
  }
  renderGroups() {
    switch (this.actualMode) {
      case "root":
        return this.renderGroupsRoot();
      case "subgroup":
        return this.renderSubGroups();
      case "finalgroup":
        return this.renderFinalGruops();
      default:
        return html``;
    }
  }
  renderBreadCrumb() {
    return html`
            <div class="breadcrumb">
                ${this.actualBreadCrumb.map((breadItem, index) => {
      const isLast = index === this.actualBreadCrumb.length - 1;
      return html`
            ${isLast ? html`
                    <span @click=${(e) => this.onBreadClick(breadItem, e)}>
                        ${breadItem}${!isLast ? " > " : ""}
                    </span>` : html`
                    <a href="#" @click=${(e) => this.onBreadClick(breadItem, e)}>
                        ${breadItem}${!isLast ? " > " : ""}
                    </a>`}
            `;
    })}
            </div>
        `;
  }
  renderGroupsRoot() {
    const groups = getDescriptionsRootGroup();
    return html`
        <div class="group-container">
            ${groups.map((group) => {
      const desc = getFormComponentsDescription(group, null, null);
      return html`
            <div class="group-item" @click=${() => {
        this.onClickRootGroup(group);
      }}>
                <span class="group-title">${group}</span>
                <span class="group-desc">${desc}</span>
            </div>
        `;
    })}
        </div>
        `;
  }
  renderSubGroups() {
    const [, rootSelected] = this.actualBreadCrumb;
    const groups = getDescriptionsSubGroup(rootSelected);
    return html`
        <div class="group-container">
            ${groups.map((subGroup) => {
      const desc = getFormComponentsDescription(rootSelected, subGroup, null);
      return html`
            <div class="group-item" @click=${() => {
        this.onClickSubGroup(rootSelected, subGroup);
      }}>
                <span class="group-title">${subGroup}</span>
                <span class="group-desc">${desc}</span>
            </div>
        `;
    })}
        </div>
        `;
  }
  renderFinalGruops() {
    const [, rootSelected, subGroupSelected] = this.actualBreadCrumb;
    const groups = getDescriptionsFinalGroup(rootSelected, subGroupSelected);
    return html`
        <div class="group-container">
            ${groups.map((finalGroup) => {
      const desc = getFormComponentsDescription(rootSelected, subGroupSelected, finalGroup);
      return html`
                <div class="group-item" @click=${() => {
        this.onClickFinalGroup(rootSelected, subGroupSelected, finalGroup);
      }}>
                    <span class="group-title">${finalGroup}</span>
                    <span class="group-desc">${desc}</span>
                </div>
            `;
    })}
        </div>
        `;
  }
  onClickRootGroup(rootGroup) {
    this.actualBreadCrumb = [this.rootBread, rootGroup];
    this.actualMode = "subgroup";
    this.requestUpdate();
    this._handleInternalAction();
  }
  onClickSubGroup(rootGroup, subGroup) {
    this.actualBreadCrumb = [this.rootBread, rootGroup, subGroup];
    this.actualMode = "finalgroup";
    this.requestUpdate();
    this._handleInternalAction();
  }
  onClickFinalGroup(rootGroup, subGroup, finalGroup) {
    this.actualBreadCrumb = [this.rootBread, rootGroup, subGroup, finalGroup];
    this.actualMode = "empty";
    this.requestUpdate();
    this._handleInternalAction();
  }
  onBreadClick(breadItem, e) {
    e.preventDefault();
    const index = this.actualBreadCrumb.findIndex((item) => item === breadItem);
    if (index < 0) throw new Error("Invalid breadcrumb item");
    this.actualBreadCrumb = this.actualBreadCrumb.slice(0, index + 1);
    if (index === 0) this.actualMode = "root";
    if (index === 1) this.actualMode = "subgroup";
    if (index === 2) this.actualMode = "finalgroup";
    this.requestUpdate();
    this._handleInternalAction();
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "actualGroups", _actualGroups_dec, IcaSelectGroup);
__decorateElement(_init, 5, "actualBreadCrumb", _actualBreadCrumb_dec, IcaSelectGroup);
__decorateElement(_init, 5, "actualMode", _actualMode_dec, IcaSelectGroup);
IcaSelectGroup = __decorateElement(_init, 0, "IcaSelectGroup", _IcaSelectGroup_decorators, IcaSelectGroup);
IcaSelectGroup.styles = css`
        :host{
            font-size: 16px;
        }
        .group-container{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
            grid-template-rows: max-content;
            gap: 1em;
            padding: 1em;
        }
        .group-item {
            cursor: pointer;
            width: 20em;
            background-color: rgb(243, 229, 245);
            box-shadow: rgba(55, 27, 61, 0.18) 7px 7px 2px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 4px;
            padding: 1rem;
        }
        .group-title{
            font-weight:bold;
            text-transform: uppercase;
        }
        .group-desc{
            margin-top: .3rem;
        }
        .breadcrumb {
            padding: 1em;
        }
        .breadcrumb a{
            text-decoration:none;
        }
        .breadcrumb a:visited {
            color: #1890FF;
            text-decoration: inherit;
        }
    `;
__runInitializers(_init, 1, IcaSelectGroup);
export {
  IcaSelectGroup,
  initIcaSelectGroup
};
