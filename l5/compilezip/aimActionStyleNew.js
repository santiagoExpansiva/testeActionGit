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
var _textarea_dec, _a, _AimActionStyleNew_decorators, _init;
import { html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { tasks, updateTaskOnServer } from "./_100554_aimHelper";
import { AimActionBase } from "./_100554_aimActionBase";
import { getInfoMyService } from "./_100554_aimHelper";
const myName = "_100554_aimActionStyleNew";
const message_pt = {
  prompt_title: "Objetivo:Criar um novo CSS em LESS.",
  prompt_system_1: "Use LESS para criar um novo estilo baseado na fonte fornecida abaixo, incorporando sugest\uFFFDes do usu\uFFFDrio.",
  prompt_system_2: "Desenvolva um arquivo LESS isolado, empregando tokens conforme descrito no modelo abaixo.",
  prompt_system_3: "Formato de Sa\uFFFDda Esperado: Retorne o CSS rec\uFFFDm-criado na linguagem LESS, em um \uFFFDnico bloco sem a listagem de tokens. Coment\uFFFDrios de c\uFFFDdigo devem estar em ingl\uFFFDs, mas mantenha coment\uFFFDrios existentes que sirvam como auxiliares de UI.",
  template_title: "Ir\uFFFD verificar os tokens e criar um novo conjunto de tokens",
  template_suggest: "Sugest\uFFFDo:",
  textarea_placelholder: "Digite aqui seu prompt",
  btn_cancel: "Cancelar",
  btn_confirm: "Confirmar"
};
const message_en = {
  prompt_title: "Objective:Create a new css in LESS.",
  prompt_system_1: "Use LESS to craft a new style based on the source provided below, incorporating user suggestions.",
  prompt_system_2: "Develop an isolated LESS file, employing tokens as outlined in the model below.",
  prompt_system_3: "Expected Output Format: Return the newly created CSS in the LESS language, in a single block without the token listing. Code comments should be in English, but keep existing comments that serve as UI aids.",
  template_title: "Will check the tokens and create a new set of tokens",
  template_suggest: "Suggestion:",
  textarea_placelholder: "Type your prompt here",
  btn_cancel: "Cancel",
  btn_confirm: "Confirm"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_AimActionStyleNew_decorators = [customElement("aim-action-style-new-100554")];
class AimActionStyleNew extends (_a = AimActionBase, _textarea_dec = [query("textarea")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en-us"];
    this.assistant = "gpt3_less";
    this.title = "New Style";
    this.language = "english";
    this.prompts = [
      "Adicionar uma anima\uFFFD\uFFFDo de entrada",
      "Adicionar uma personaliza\uFFFD\uFFFDo no scrollbar, deixando mais minimalista"
    ];
  }
  getRules() {
    return {
      levels: [3],
      tags: ["*serviceDsStyle*"]
    };
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
    this.taskRoot = {
      mode: "initializing",
      title: "verify css and create",
      widget: myName,
      children: [],
      args: ((_a2 = this.textarea) == null ? void 0 : _a2.value) || "",
      trace: [(/* @__PURE__ */ new Date()).toISOString() + ": trask created at "]
    };
    tasks.unshift(this.taskRoot);
    this.prepareTask1(this.taskRoot);
    this.dispatchEvent(new CustomEvent("finished-add-task-root", {
      detail: this.taskRoot,
      bubbles: true,
      composed: true
    }));
  }
  setResultInEditor(value, root) {
    const activeOpService = getActiveOpServiceIfIsValid(this);
    if (!activeOpService) {
      window.collabMessages.add("The service in the opposite position does not refer to this action", "error");
      return false;
    }
    ;
    const isValid = isValidRef(root, activeOpService);
    if (!isValid) {
      window.collabMessages.add(`Invalid Ref`, "error");
      return false;
    }
    ;
    activeOpService.setEditorSource(value);
    return true;
  }
  onSuggestClick(e) {
    if (!this.textarea) return;
    let text = "";
    const target = e.target;
    const txtEl = target.querySelector("span");
    if (!txtEl) text = target.innerText;
    else text = txtEl.innerText;
    this.textarea.value = text;
  }
  renderAdd() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        <p> ${this.msg.template_title} </p>
        <div>
            <label>${this.msg.template_suggest}</label>
            <div class="prompt-suggestion">
                ${this.prompts.map((prompt) => html`
                    <span @click=${this.onSuggestClick}>
                        <span >${prompt}</span>
                    </span>
                `)}
            </div>
        <div>

        <div>
            <label>Prompt:</label>
            <textarea rows="5" placeholder="${this.msg.textarea_placelholder} style="width:100%"></textarea>
        </div>

        <div class="buttonGroup">
          <button @click="${this.handleCancel}">${this.msg.btn_cancel}</button>
          <button @click="${this.handleAdd}">${this.msg.btn_confirm}</button>
        </div>
    `;
  }
  getPrompt(source, user) {
    const prompt = `
${this.msg.prompt_title}

System:
1. ${this.msg.prompt_system_1}
2  ${this.msg.prompt_system_2}

User:
1. ${user}

${this.msg.prompt_system_3}
        
${source}`;
    return prompt;
  }
  prepareTask1(taskRoot) {
    this.mode = taskRoot.mode = "in progress";
    this.addTaskAndWaitForCompletion(taskRoot, {
      mode: "initializing",
      title: "get less source",
      widget: "_100554_aimTaskDsStyles",
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
      ref: child.ref,
      agent: this.assistant,
      prompt: this.getPrompt(source, taskFinishResult.taskRoot.args || ""),
      trace: [],
      nextStep: this.prepareTask3.name
      // danger, loop
    });
    this.requestUpdate();
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
      widget: "_100554_aimTaskResultLess",
      ref: child.ref,
      trace: [],
      _tempResult: result,
      nextStep: this.prepareTask4.name
      // danger, loop
    });
    this.requestUpdate();
  }
  prepareTask4(taskFinishResult) {
    const child = taskFinishResult.taskChild;
    if (taskFinishResult.status === "ok" || taskFinishResult.status === "error" || taskFinishResult.status === "rejected") {
      return this.endTasks(taskFinishResult);
    }
    if (taskFinishResult.status !== "userEvent") throw new Error("Event not prepared");
    if (taskFinishResult.taskRoot.children.length > 20) throw new Error("Maximum task exceted");
    if (!taskFinishResult.newPrompt) throw new Error("Prompt invalid");
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
      ref: child.ref,
      agent: this.assistant,
      prompt: this.getPrompt(source, taskFinishResult.newPrompt),
      trace: [],
      nextStep: this.prepareTask3.name
      // looping exec prompt
    });
  }
  endTasks(taskFinishResult) {
    const { taskChild, taskRoot, status, result } = taskFinishResult;
    if (status === "error") taskChild.mode = "error";
    else if (status === "rejected") taskChild.mode = "processed";
    else if (status === "ok") {
      taskChild.mode = "processed";
      this.setResultInEditor(result || "", taskRoot);
    }
    this.mode = taskFinishResult.taskRoot.mode = taskChild.mode;
    this.requestUpdate();
    updateTaskOnServer(taskFinishResult.taskIndex);
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "textarea", _textarea_dec, AimActionStyleNew);
AimActionStyleNew = __decorateElement(_init, 0, "AimActionStyleNew", _AimActionStyleNew_decorators, AimActionStyleNew);
__runInitializers(_init, 1, AimActionStyleNew);
function isValidRef(taskRoot, activeOpService) {
  const actualRef = activeOpService.getActualRef();
  const taskWithRef = taskRoot.children.find((task) => task.widget === "_100554_aimTaskDsStyles");
  if (!taskWithRef) return false;
  return taskWithRef.ref === actualRef;
}
function getActiveOpServiceIfIsValid(el) {
  const info = getInfoMyService(el);
  if (!info) return void 0;
  const activeServiceOp = info.actServiceOp;
  if (activeServiceOp.tagName !== "SERVICE-DS-STYLES-100554") return void 0;
  if (!activeServiceOp.isComponent) return void 0;
  return activeServiceOp;
}
export {
  AimActionStyleNew,
  getActiveOpServiceIfIsValid,
  isValidRef
};
