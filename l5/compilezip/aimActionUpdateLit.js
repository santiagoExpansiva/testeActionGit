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
var _textarea_dec, _a, _AimActionUpdateLit_decorators, _init;
import { html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { tasks, updateTaskOnServer } from "./_100554_aimHelper";
import { AimActionBase } from "./_100554_aimActionBase";
const myName = "_100554_aimActionUpdateLit";
const message_pt = {
  title: "Permitir atualizar o lit do file selecionado",
  prompt: "Prompt",
  cancel: "Cancelar",
  confirm: "Confirmar"
};
const message_en = {
  title: "Allow updating the lit of the selected file",
  prompt: "Prompt",
  cancel: "Cancel",
  confirm: "Confirm"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_AimActionUpdateLit_decorators = [customElement("aim-action-update-lit-100554")];
class AimActionUpdateLit extends (_a = AimActionBase, _textarea_dec = [query("textarea")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en-us"];
    this.assistant = "gpt3_typescript";
    this.title = "Update Lit";
    this.language = "english";
  }
  getRules() {
    return {
      levels: [2],
      tags: ["*serviceSource*"]
    };
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return super.render();
  }
  handleCancel() {
    this.dispatchEvent(new CustomEvent("add-task", {
      detail: { cancel: "true" },
      bubbles: true,
      composed: true
    }));
  }
  handleAdd() {
    var _a2;
    const taskRoot = {
      mode: "initializing",
      title: "update Lit",
      widget: myName,
      children: [],
      args: ((_a2 = this.textarea) == null ? void 0 : _a2.value) || "",
      trace: [(/* @__PURE__ */ new Date()).toISOString() + ": trask created at "]
    };
    tasks.unshift(taskRoot);
    this.prepareTask1(taskRoot);
    this.dispatchEvent(new CustomEvent("finished-add-task-root", {
      detail: taskRoot,
      bubbles: true,
      composed: true
    }));
  }
  renderAdd() {
    return html`
        <p style="margin-bottom:0rem">${this.msg.title}</p>
        <br>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <label>${this.msg.prompt}</label>
          <textarea></textarea>
        </div>
        <br>
        <div class="buttonGroup">
          <button @click="${this.handleCancel}">${this.msg.cancel}</button>
          <button @click="${this.handleAdd}">${this.msg.confirm}</button>
        </div>
    `;
  }
  getPrompt(source, user) {
    const prompt = ` 
        Objective: Usando typescript, lit 3, alterar o c\uFFFDdigo abaixo seguindo as instru\uFFFD\uFFFDes.


        System:

        1. Manter a linha 1 (tripe slash) que \uFFFD de controle

        2. Fazer e manter coment\uFFFDrios no c\uFFFDdigo em ingles


        User:

        1. ${user}


        Expected Output Format:

            Retornar o novo source inteiro em um unico bloco



        Source:
 ${source} 
`;
    return prompt;
  }
  prepareTask1(taskRoot) {
    this.mode = taskRoot.mode = "in progress";
    this.addTaskAndWaitForCompletion(taskRoot, {
      mode: "initializing",
      title: "get typescript source",
      widget: "_100554_aimTaskTSSource",
      trace: [],
      nextStep: this.prepareTask2.name
      // danger, loop
    });
  }
  prepareTask2(taskFinishResult) {
    const child = taskFinishResult.taskChild;
    if (taskFinishResult.status === "error") {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      return;
    }
    const source = taskFinishResult.result;
    if (!source) {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      child.trace.push("invalid finish , must be notify finish with result field");
      this.requestUpdate();
      return;
    }
    child.mode = "processed";
    this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
      mode: "initializing",
      title: "exec prompt",
      widget: "_100554_aimTaskExecLLM",
      agent: this.assistant,
      prompt: this.getPrompt(source, taskFinishResult.taskRoot.args || ""),
      trace: [],
      nextStep: this.prepareTask3.name
      // danger, loop
    });
  }
  prepareTask3(taskFinishResult) {
    const child = taskFinishResult.taskChild;
    const result = child.result || "";
    if (taskFinishResult.status === "error" || !result) {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      return;
    }
    child.mode = "processed";
    this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
      mode: "initializing",
      title: "result",
      widget: "_100554_aimTaskResultCode",
      trace: [],
      _tempResult: result,
      nextStep: this.endTasks.name
      // danger, loop
    });
    this.requestUpdate();
  }
  endTasks(taskFinishResult) {
    const child = taskFinishResult.taskChild;
    if (taskFinishResult.status === "error") child.mode = "error";
    else child.mode = "processed";
    this.mode = taskFinishResult.taskRoot.mode = child.mode;
    this.requestUpdate();
    updateTaskOnServer(taskFinishResult.taskIndex);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "textarea", _textarea_dec, AimActionUpdateLit);
AimActionUpdateLit = __decorateElement(_init, 0, "AimActionUpdateLit", _AimActionUpdateLit_decorators, AimActionUpdateLit);
__runInitializers(_init, 1, AimActionUpdateLit);
export {
  AimActionUpdateLit
};
