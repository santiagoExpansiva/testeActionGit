var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
var _childIndex_dec, _a, _AimTaskBase_decorators, _init;
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tasks } from "./_100554_aimHelper";
import { AimBase } from "./_100554_aimBase";
_AimTaskBase_decorators = [customElement("aim-task-base-100554")];
class AimTaskBase extends (_a = AimBase, _childIndex_dec = [property({ type: Number })], _a) {
  constructor() {
    super(...arguments);
    this.childIndex = __runInitializers(_init, 8, this, -1), __runInitializers(_init, 11, this);
    this.taskRoot = {
      mode: "error",
      title: "invalid task index: " + this.taskIndex,
      widget: "",
      children: [],
      trace: ["invalid task index on AimTaskBase"]
    };
    this.taskChild = {
      mode: "error",
      title: "invalid child index: " + this.childIndex,
      widget: "",
      trace: ["invalid child index on AimTaskBase"]
    };
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return this.renderTaskStatus();
  }
  renderTaskStatus() {
    var _a2;
    this.initTaskRootAndTaskChild();
    if (this.mode === "initializing" && this.taskChild.mode === "initializing") {
      this.onInitializing();
    }
    return html`
      <details>
        <summary> ${this.renderToolbar()} ${(_a2 = this.taskChild) == null ? void 0 : _a2.title}</summary>
          ${this.renderBody(this.taskRoot, this.taskChild)}
      </details>
    `;
  }
  initTaskRootAndTaskChild() {
    if (this.taskIndex < 0 || this.taskIndex >= tasks.length) {
      this.taskRoot = {
        mode: "error",
        title: "invalid task index: " + this.taskIndex,
        widget: "",
        children: [],
        trace: ["invalid task index on AimTaskBase"]
      };
    } else {
      this.taskRoot = tasks[this.taskIndex];
      if (this.childIndex < 0 || this.childIndex >= this.taskRoot.children.length) {
        this.taskRoot.mode = "error";
        this.taskChild = {
          mode: "error",
          title: "invalid child index: " + this.childIndex,
          widget: "",
          trace: ["invalid child index on AimTaskBase, taskRoot.length=" + this.taskRoot.children.length]
        };
      } else {
        this.taskChild = this.taskRoot.children[this.childIndex];
      }
    }
  }
  renderBody(taskRoot, child) {
    var _a2;
    const promptTitle = `prompt len=${(_a2 = child.prompt) == null ? void 0 : _a2.length}, tokens=${child.promptTokens}`;
    let resultTitle = "no result yeat";
    if (child.result) resultTitle = `result len=${child.result.length}, tokens=${child.resultTokens}`;
    return html`
            ${child.prompt ? this.renderDetails(promptTitle, child.prompt) : ""}
            ${child.result ? this.renderDetails(resultTitle, child.result) : ""}
            ${child ? this.renderTraceList("trace", child) : ""}
        `;
  }
  renderDetails(title, body) {
    return html`
      <details>
        <summary>${title}</summary>
        <pre style="white-space: break-spaces;">${body}</pre> 
      </details>
    `;
  }
  renderTraceList(title, child) {
    const traceString = JSON.stringify(child, null, 2);
    const root = __spreadValues({}, this.taskRoot);
    root.children = [];
    const traceRootString = JSON.stringify(root, null, 2);
    return html`
      <details>
        <summary>${title}</summary>
        <ul>
          ${child.trace.map((item) => html`<li>${this.locateDateTimeInTrace(item)}</li>`)}
        </ul>
        <p>Trace Object:</p>
        <pre>${traceString}</pre>
        <p>Trace root Object:</p>
        <pre>${traceRootString}</pre>
      </details>
    `;
  }
  locateDateTimeInTrace(line) {
    const [isoDatePart, ...descriptionParts] = line.split("Z:");
    const description = descriptionParts.join("Z:");
    try {
      const date = /* @__PURE__ */ new Date(`${isoDatePart}Z`);
      if (isNaN(date.getTime())) return description;
      const localDate = date.toLocaleString();
      return `${localDate}: ${description}`;
    } catch (error) {
      console.error(isoDatePart, error);
      return line;
    }
  }
  sendFinishedNotification(detail) {
    this.dispatchEvent(new CustomEvent("task-finished", {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  notifyCompleteByStatus(status, result, prompt) {
    this.sendFinishedNotification({
      status,
      result,
      newPrompt: prompt,
      taskIndex: this.taskIndex,
      childIndex: this.childIndex,
      taskRoot: this.taskRoot,
      taskChild: this.taskChild
    });
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "childIndex", _childIndex_dec, AimTaskBase);
AimTaskBase = __decorateElement(_init, 0, "AimTaskBase", _AimTaskBase_decorators, AimTaskBase);
__runInitializers(_init, 1, AimTaskBase);
export {
  AimTaskBase
};
