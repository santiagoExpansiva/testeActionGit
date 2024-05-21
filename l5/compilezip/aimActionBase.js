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
var _AimActionBase_decorators, _init, _a;
import { html, unsafeHTML } from "lit";
import { customElement } from "lit/decorators.js";
import { convertFileNameToTag } from "./_100554_utilsLit";
import { AimBase } from "./_100554_aimBase";
import { tasks, getUserConfigs } from "./_100554_aimHelper";
_AimActionBase_decorators = [customElement("aim-action-base-100554")];
class AimActionBase extends (_a = AimBase) {
  constructor() {
    super();
    this.childThis = void 0;
    this.addTaskAndWaitForCompletion = (taskRoot, child) => {
      if (taskRoot.mode === "error" || child.mode === "error") return;
      this.prepareNextStep(child);
      taskRoot.children.push(child);
      tasks[this.taskIndex] = taskRoot;
    };
    this.prepareNextStep = (child) => {
      if (!child.nextStep) throw new Error("please define nextStep");
      const nextStep = this[child.nextStep];
      if (typeof nextStep !== "function") throw new Error("nextStep must be a function");
      verifyCyclicLoop(child.nextStep);
      this.childThis = this;
    };
    this.addEventListener("task-finished", this.onTaskFinishedEvent);
  }
  // call back next function
  render() {
    if (this.mode === "add") return this.renderAdd();
    return this.renderTaskRoot();
  }
  onTaskFinishedEvent(e) {
    var _a2, _b;
    if (!e.detail || e.detail.childIndex < 0 || !e.detail.status) throw new Error('invalid task-finished event, childIndex="' + ((_a2 = e.detail) == null ? void 0 : _a2.childIndex) + '", status="' + ((_b = e.detail) == null ? void 0 : _b.status) + '"');
    const st = e.detail.status;
    if (st !== "ok" && st !== "error" && st !== "rejected" && st !== "userEvent") throw new Error("invalid task-finished event, status=" + st);
    const status = st;
    const childIndex = e.detail.childIndex;
    const newPrompt = e.detail.newPrompt;
    if (typeof childIndex !== "number") throw new Error("invalid task-finished event, childIndex=" + childIndex);
    const result = e.detail.result;
    if (typeof result !== "string") throw new Error("invalid task-finished event, result=" + result);
    if (this.taskIndex < 0 || this.taskIndex >= tasks.length) throw new Error("invalid task-finished event, taskIndex=" + this.taskIndex + ", tasks length=" + tasks.length);
    const taskRoot = tasks[this.taskIndex];
    if (childIndex < 0 || childIndex >= taskRoot.children.length) throw new Error("invalid task-finished event, childIndex=" + childIndex + ", children length=" + taskRoot.children.length);
    const taskChild = taskRoot.children[childIndex];
    const taskFinishResult = { status, taskIndex: this.taskIndex, childIndex, result, taskRoot, taskChild, newPrompt };
    if (taskChild.mode === "initializing") taskChild.mode = "in progress";
    if (!this.childThis) throw new Error("invalid finished event, actionBase is not waiting for this event");
    const oriChildThis = this.childThis;
    this.childThis = null;
    if (!taskChild.nextStep) throw new Error("please define nextStep");
    const nextStep = oriChildThis[taskChild.nextStep];
    if (typeof nextStep !== "function") throw new Error("nextStep must be a function");
    nextStep.call(oriChildThis, taskFinishResult);
    oriChildThis.requestUpdate();
  }
  getPromptUser(task) {
    let ret = "";
    if (task.children.length <= 0) return ret;
    const child = task.children.find((i) => i.widget === "_100554_aimTaskExecLLM");
    if (!child || !child.prompt) return ret;
    const regex = new RegExp("User:(.*?)(?=\\n\\n\\n|$)", "s");
    const match = child.prompt.match(regex);
    if (match && match.length > 0) {
      ret = match[1].trim();
    }
    return ret;
  }
  getRef(taskRoot) {
    let ref = "";
    for (let task of taskRoot.children) {
      if (task.ref) {
        ref = task.ref;
        break;
      }
    }
    return ref;
  }
  getLastUpdateDate(taskRoot) {
    let lastDate;
    taskRoot.children.forEach((task) => {
      task.trace.forEach((trace) => {
        const dt = this.getLocateDateTimeInTrace(trace);
        if (dt && !lastDate) lastDate = dt;
        else if (dt && lastDate && dt > lastDate) lastDate = dt;
      });
    });
    return lastDate ? lastDate.toLocaleString() : "";
  }
  getLocateDateTimeInTrace(line) {
    const [isoDatePart, ...descriptionParts] = line.split("Z:");
    try {
      const date = /* @__PURE__ */ new Date(`${isoDatePart}Z`);
      if (isNaN(date.getTime())) return void 0;
      return date;
    } catch (error) {
      console.error(isoDatePart, error);
    }
  }
  renderTaskRoot() {
    var _a2;
    const renderChild = (child, index2) => {
      this.loadDynamicWidget(taskRoot, child, child.widget);
      if (child.mode !== "processed" && child.mode !== "error" && child.nextStep) this.prepareNextStep(child);
      const taskName = convertFileNameToTag(child.widget);
      const sHtml = `<${taskName} mode="${child.mode}" taskindex="${this.taskIndex}" childindex="${index2}" />`;
      return html`${unsafeHTML(sHtml)}`;
    };
    if (this.taskIndex < 0 || this.taskIndex >= tasks.length) return html`invalid task index`;
    const taskRoot = tasks[this.taskIndex];
    const index = Number((_a2 = taskRoot.key) == null ? void 0 : _a2.split("/").pop()) || 0;
    const cost = taskRoot.cost || 0;
    const promptUser = this.getPromptUser(taskRoot);
    const ref = this.getRef(taskRoot);
    const lastUpdateDate = this.getLastUpdateDate(taskRoot);
    const configs = getUserConfigs();
    return html`
            <details>
                <summary>
                    <div class="action-title">
                        ${this.renderToolbar()} 
                        ${configs.cost ? html`<span title="Cost" class="ac ac-cost"> ${this.iconMoney} ${cost.toFixed(4)}</span>` : ""}
                        ${configs.sequencial ? html`<span title="Sequential" class="ac ac-id">${index.toString().padStart(5, "0")}</span>` : ""}
                        ${configs.countChild ? html`    <span title="Count Child" class="ac ac-count">${this.iconHash} ${taskRoot.children.length}</span>` : ""}
                        ${configs.title ? html`    <span title="Title" class="ac ac-title">${this.title}</span>` : ""}
                        ${configs.prompt ? html`    <span title="Prompt" class="ac ac-prompt"> ${this.iconPrompt} ${promptUser || "..."}</span>` : ""}
                        ${configs.user ? html`<span title="User" class="ac ac-user"> ${this.iconUser} ${taskRoot.userName} </span>` : ""}
                        ${configs.reference ? html`<span title="Reference" class="ac ac-ref"> ${this.iconRef} ${ref} </span>     ` : ""}
                        ${configs.lastUpdateDate ? html`<span title="Last update date " class="ac ac-date"> ${this.iconDate}  ${lastUpdateDate} </span>` : ""}                                         
                    </div>

                    
                </summary>
                ${taskRoot.children.map((child, index2) => renderChild(child, index2))}
            </details>
        `;
  }
  loadDynamicWidget(taskRoot, child, widget) {
    return __async(this, null, function* () {
      const tryLoad = () => __async(this, null, function* () {
        if (!widget) return false;
        try {
          const componentModule = yield import("./" + widget);
          if (!componentModule) return false;
        } catch (error) {
          return false;
        }
        return true;
      });
      if ((yield tryLoad()) === false) {
        child.trace.push(`Error on load widget ${widget}`);
        taskRoot.mode = child.mode = "error";
      }
    });
  }
}
_init = __decoratorStart(_a);
AimActionBase = __decorateElement(_init, 0, "AimActionBase", _AimActionBase_decorators, AimActionBase);
__runInitializers(_init, 1, AimActionBase);
function verifyCyclicLoop(functionName) {
  try {
    throw new Error("Simulated error for stack trace");
  } catch (error) {
    if (error instanceof Error && error.stack) {
      const stackLines = error.stack.split("\n").map((line) => line.trim());
      const functionInStack = stackLines.some((line) => line.includes(functionName));
      if (functionInStack) {
        throw new Error(`Detected potential cyclic loop involving function: ${functionName}`);
      }
    }
  }
}
const findActions = (levelsToVerify, tagsToVerify) => __async(void 0, null, function* () {
  const rc = [];
  const keys = Object.keys(mls.stor.files).filter((key) => key.endsWith(".ts") && key.indexOf("aimAction") > 0 && key.indexOf("aimActionBase") < 0);
  for (const fnKey of keys) {
    const storFile = mls.stor.files[fnKey];
    if (storFile.level !== 2 || storFile.hasError) continue;
    const jsName = `./_${storFile.project}_${storFile.shortName}`;
    const className = storFile.shortName.charAt(0).toUpperCase() + storFile.shortName.slice(1);
    try {
      const module = yield import(jsName);
      if (!module || !module[className]) {
        console.error(`error, aim action invalid, js not found or class ${storFile.shortName} not found in module: ${fnKey}`);
        continue;
      }
      if (!(module[className].prototype instanceof AimActionBase)) {
        console.error(`error, aim action invalid, must be extends from AimActionBase: ${fnKey}`);
        continue;
      }
      const i1 = new module[className]();
      const rules = i1.getRules();
      const regexps = rules.tags.map((tag) => new RegExp(tag.replace(/\*/g, ".*")));
      rc.push({
        shortName: storFile.shortName,
        project: storFile.project,
        title: i1.title || "?",
        levelsValid: levelsToVerify.some((level) => rules.levels.includes(level)),
        tagsValid: tagsToVerify.some((tagToVerify) => regexps.some((regexp) => regexp.test(tagToVerify)))
      });
    } catch (err) {
      console.error(`error, aim action invalid, abend: ${fnKey}: ${err == null ? void 0 : err.message}`);
    }
  }
  return rc;
});
export {
  AimActionBase,
  findActions
};
