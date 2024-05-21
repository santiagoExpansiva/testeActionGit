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
var _codeSnippet_dec, _codeDiff_dec, _a, _AimTaskResultTokens_decorators, _init;
import { html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { AimTaskBase } from "./_100554_aimTaskBase";
import { getInfoMyService } from "./_100554_aimHelper";
import { initCollabShowCodeSnippet100554 } from "./_100554_collabShowCodeSnippet";
import { initCollabShowCodeDiff100554 } from "./_100554_collabShowCodeDiff";
_AimTaskResultTokens_decorators = [customElement("aim-task-result-tokens-100554")];
class AimTaskResultTokens extends (_a = AimTaskBase, _codeDiff_dec = [query("collab-show-code-diff-100554")], _codeSnippet_dec = [query("collab-show-code-snippet-100554")], _a) {
  constructor() {
    super();
    this.result = "";
    initCollabShowCodeSnippet100554();
    initCollabShowCodeDiff100554();
  }
  onInitializing() {
    this.notifyCompleteByStatus("ok", "");
  }
  firstUpdated(a) {
    super.firstUpdated(a);
    if (this.codeSnippet) this.codeSnippet.textIn = this.result;
  }
  renderBody(taskRoot, child) {
    const title = child.title;
    const body = child._tempResult || "";
    const { contentLess, contentsAfterLess, contentsBeforeLess } = this.extractBlocks(body);
    this.result = contentLess;
    return html`
        <details open>
            <summary>${title}</summary>
            <div style='margin: 10px'>
                <div>${contentsBeforeLess}</div>
                <collab-show-code-snippet-100554 language="less" withAccept="true" .onAccept=${this.onAccept.bind(this)}></collab-show-code-snippet-100554>
                <div>${contentsAfterLess}</div>
            </div>
        </details>
            
        `;
  }
  onToogleDetails(event) {
    let detailsElement = event.target;
    detailsElement = detailsElement.closest("details");
    if (!detailsElement) return;
    if (!detailsElement.open) {
      this.setTokensDiff();
    }
  }
  setTokensDiff() {
    return __async(this, null, function* () {
      if (!this.codeDiff) return;
      const activeOpService = this.getActiveOpServiceIfIsValid();
      if (!activeOpService) {
        return;
      }
      ;
      const value = activeOpService.getEditorSource();
    });
  }
  getActiveOpServiceIfIsValid() {
    const info = getInfoMyService(this);
    if (!info) return void 0;
    const activeServiceOp = info.actServiceOp;
    if (activeServiceOp.tagName !== "SERVICE-DS-TOKENS-100554") return void 0;
    return activeServiceOp;
  }
  onAccept() {
    const activeOpService = this.getActiveOpServiceIfIsValid();
    if (!activeOpService) {
      window.collabMessages.add("The service in the opposite position does not refer to this action", "error");
      return;
    }
    ;
    const taskWithRef = this.taskRoot.children.find((task) => task.widget === "_100554_aimTaskDsTokens");
    if (!taskWithRef || !taskWithRef.ref) {
      window.collabMessages.add("This action dont have any file ref", "error");
      return;
    }
    ;
    const actualRef = activeOpService.getActualRef();
    if (taskWithRef.ref !== actualRef) {
      window.collabMessages.add(
        `The current reference: ${actualRef},  does not match the action reference:${taskWithRef.ref}`,
        "error"
      );
      return;
    }
    ;
    const tokensType = taskWithRef.ref.split("_").pop() || "";
    activeOpService.setEditorSource(this.result, tokensType);
  }
  extractBlocks(src) {
    const regex = new RegExp("^(.*?)```less(.*)```(.*)", "s");
    const matches = src.match(regex);
    let contentLess = "";
    let contentsBeforeLess = "";
    let contentsAfterLess = "";
    if (matches) {
      contentsBeforeLess = matches[1] || "";
      contentLess = matches[2] || "";
      contentsAfterLess = matches[3] || "";
    }
    return { contentLess, contentsAfterLess, contentsBeforeLess };
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "codeDiff", _codeDiff_dec, AimTaskResultTokens);
__decorateElement(_init, 5, "codeSnippet", _codeSnippet_dec, AimTaskResultTokens);
AimTaskResultTokens = __decorateElement(_init, 0, "AimTaskResultTokens", _AimTaskResultTokens_decorators, AimTaskResultTokens);
__runInitializers(_init, 1, AimTaskResultTokens);
export {
  AimTaskResultTokens
};
