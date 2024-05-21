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
var _actualAttributes_dec, _validPrompt_dec, _actualSuggest_dec, _showPrompt_dec, _selectGroup_dec, _textarea_dec, _a, _AimActionAddIca_decorators, _init;
import { html } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { tasks, updateTaskOnServer } from "./_100554_aimHelper";
import { AimActionBase } from "./_100554_aimActionBase";
import { getInfoMyService } from "./_100554_aimHelper";
import { getFormComponentsPrompt, getAttributeDefinitions } from "./_100554_icaBaseDescription";
import { initIcaSelectGroup } from "./_100554_icaSelectGroup";
const myName = "_100554_aimActionAddIca";
const message_pt = {
  prompt_ts_title_1: "Usando Typescript e Lit 3.O. Criar o render de um webcomponent, usando o source fornecido abaixo.",
  prompt_ts_output_1: "Um component Lit com sua implementa\uFFFD\uFFFDo de renderiza\uFFFD\uFFFDo completa, seguindo todas as especifica\uFFFD\uFFFDes do usuario e utilizando as propriedades fornecidas.",
  prompt_ts_output_2: "N\uFFFDo remover a primeira linha /// <mls",
  prompt_ts_output_3: "Nao alterar defini\uFFFD\uFFFDo da classe",
  prompt_ts_output_4: "Nao alterar extends da classe",
  prompt_ts_output_5: "N\uFFFDo alterar imports",
  prompt_ts_output_6: "Nao altere as propriedades iniciais",
  prompt_ts_output_7: "N\uFFFDo implementar nenhum styles css.",
  prompt_ts_output_8: "As fun\uFFFD\uFFFDes n\uFFFDo implementadas devem ser declaradas com um corpo vazio, e dentro da fun\uFFFD\uFFFDo deve adicionar um coment\uFFFDrios // **implement_here**' e coment\uFFFDrios sobre o que o m\uFFFDtodo deve fazer. Segue exemplo:",
  prompt_ts_output_9: "Retornar o c\uFFFDdigo em um \uFFFDnico bloco  ```typescript.",
  prompt_html_title: "Usando Typescript e Lit 3.O analisar o source do web component abaixo e gerar um html de use cases. N\uFFFDo \uFFFD necessario declarar as tags html, body, head. Somente uma se\uFFFD\uFFFDo com o use cases.",
  prompt_html_output: "Remover os coment\uFFFDrios nas fun\uFFFD\uFFFDes quando implementadas.",
  prompt_fc_title_1: "Usando Typescript e Lit 3.O. Criar a fun\uFFFD\uFFFDo especificada pelo usuario, utilizando o source abaixo",
  prompt_fc_output_1: "O component Lit com a implementa\uFFFD\uFFFDo da fun\uFFFD\uFFFDo completa e altera\uFFFD\uFFFDes solicitadas, seguindo todas as especifica\uFFFD\uFFFDes do usuario.",
  prompt_fc_output_2: "Remover os coment\uFFFDrios nas fun\uFFFD\uFFFDes quando implementadas.",
  template_title: "Ir\uFFFD verificar o grupo selecionado e criar um novo componente Lit",
  textarea_placelholder: "Entre com o prompt aqui",
  btn_cancel: "Cancelar",
  btn_confirm: "Confirmar",
  error_prompt: "Por favor, ajuste o prompt para suas necessidades"
};
const message_en = {
  prompt_ts_title_1: "Using Typescript and Lit 3.0. Create the rendering of a web component, using the provided source below.",
  prompt_ts_output_1: "A Lit component with its complete rendering implementation, following all user specifications and using the provided properties.",
  prompt_ts_output_2: "Do not remove the first line /// <mls",
  prompt_ts_output_3: "Do not change the class definition",
  prompt_ts_output_4: "Do not change the class extends",
  prompt_ts_output_5: "Do not change imports",
  prompt_ts_output_6: "Do not change initial properties",
  prompt_ts_output_7: "Do not implement any CSS styles.",
  prompt_ts_output_8: "Unimplemented functions should be declared with an empty body, and within the function add a comment // implement_here' and comments about what the method should do. Example follows:",
  prompt_ts_output_9: "Return the code in a single block ```typescript.",
  prompt_html_title: "Using Typescript and Lit 3.0, analyze the source of the web component below and generate an HTML of use cases. It is not necessary to declare the html, body, head tags. Only one section with the use cases.",
  prompt_html_output: "Remove comments in functions when implemented.",
  prompt_fc_title_1: "Using Typescript and Lit 3.0. Create the function specified by the user, using the source below",
  prompt_fc_output_1: "The Lit component with the complete function implementation and requested changes, following all user specifications.",
  prompt_fc_output_2: "Remove comments in functions when implemented.",
  template_title: "Will check the selected group and create a new Lit component",
  textarea_placelholder: "Enter your prompt here",
  btn_cancel: "Cancel",
  btn_confirm: "Confirm",
  error_prompt: "Please adjust the prompt to your needs"
};
const messages = {
  "en-us": message_en,
  "pt-br": message_pt
};
_AimActionAddIca_decorators = [customElement("aim-action-add-ica-100554")];
class AimActionAddIca extends (_a = AimActionBase, _textarea_dec = [query("textarea")], _selectGroup_dec = [query("ica-select-group-100554")], _showPrompt_dec = [property({ type: Boolean })], _actualSuggest_dec = [property({ type: String })], _validPrompt_dec = [property({ type: String })], _actualAttributes_dec = [property({ type: Array })], _a) {
  constructor() {
    super();
    this.msg = messages["en-us"];
    this.assistant = "gpt3_typescript";
    this.title = "New Component";
    this.showPrompt = __runInitializers(_init, 16, this, false), __runInitializers(_init, 19, this);
    this.actualSuggest = __runInitializers(_init, 20, this, ""), __runInitializers(_init, 23, this);
    this.validPrompt = __runInitializers(_init, 24, this, true), __runInitializers(_init, 27, this);
    this.actualAttributes = __runInitializers(_init, 28, this, []), __runInitializers(_init, 31, this);
    this.actualGroups = [];
    this.language = "english";
    initIcaSelectGroup();
  }
  getRules() {
    return {
      levels: [2],
      tags: ["*serviceSource*"]
    };
  }
  handleCancel() {
    var _a2;
    this.clear();
    (_a2 = this.selectGroup) == null ? void 0 : _a2.clear();
    this.dispatchEvent(new CustomEvent("add-task", {
      detail: { cancel: "true" },
      bubbles: true,
      composed: true
    }));
  }
  handleAdd() {
    this.validPrompt = true;
    let txtAreaValue = "";
    if (!this.textarea) return;
    txtAreaValue = this.textarea.value;
    if (txtAreaValue.trim() === this.actualSuggest.trim()) {
      this.validPrompt = false;
      this.requestUpdate();
      return;
    }
    const args = {
      prompt: this.textarea.value,
      group: this.actualGroups,
      attr: this.actualAttributes
    };
    this.taskRoot = {
      mode: "initializing",
      title: "verify group and create new component",
      widget: myName,
      children: [],
      args: JSON.stringify(args),
      trace: [(/* @__PURE__ */ new Date()).toISOString() + ": trask created at "]
    };
    tasks.unshift(this.taskRoot);
    this.prepareCheckTask1(this.taskRoot);
    this.dispatchEvent(new CustomEvent("finished-add-task-root", {
      detail: this.taskRoot,
      bubbles: true,
      composed: true
    }));
  }
  onGroupChanged(e) {
    const groups = e.detail.selection;
    if (groups.length === 3) {
      const [root, subgroup, finalgroup] = groups;
      this.showPrompt = true;
      this.actualSuggest = getFormComponentsPrompt(root, subgroup, finalgroup);
      this.actualAttributes = getAttributeDefinitions(root, subgroup, finalgroup);
      this.actualGroups = groups;
    } else {
      this.clear();
    }
  }
  clear() {
    this.showPrompt = false;
    this.actualSuggest = "";
    this.actualAttributes = [];
    this.actualGroups = [];
  }
  renderAdd() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`
        <p> ${this.msg.template_title}</p>
        <ica-select-group-100554 @selection-changed=${this.onGroupChanged} ></ica-select-group-100554>

        ${this.showPrompt ? html` 
            <div>
                <label><b>Prompt:</b></label>
                <textarea .value=${this.actualSuggest} rows="5" placeholder=${this.msg.textarea_placelholder} style="width:100%"></textarea>
            </div>

        ` : ""}
        <div class="buttonGroup">
            <button @click="${this.handleCancel}">${this.msg.btn_cancel}</button>
            ${this.showPrompt ? html`<button @click="${this.handleAdd}">${this.msg.btn_confirm}</button>` : ""}
        </div>
        ${!this.validPrompt ? html`<div style="color:red;"> ${this.msg.error_prompt}</div>` : ""}

            `;
  }
  prepareCheckTask1(taskRoot) {
    this.mode = taskRoot.mode = "in progress";
    if (!taskRoot.args) {
      this.mode = taskRoot.mode = "error";
      taskRoot.trace.push("invalid taskroot args");
      return;
    }
    const args = JSON.parse(taskRoot.args);
    this.addTaskAndWaitForCompletion(taskRoot, {
      mode: "initializing",
      title: "verify prompt",
      widget: "_100554_aimTaskExecLLM",
      agent: this.assistant,
      ref: "testeRef",
      prompt: this.getPromptCheckPrompt(args.prompt),
      trace: [],
      nextStep: this.prepareCheckTask2.name
      // danger, loop
    });
    this.requestUpdate();
  }
  prepareCheckTask2(taskFinishResult) {
    const child = taskFinishResult.taskChild;
    const result = child.result || "";
    if (taskFinishResult.status === "error" || !result) {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      return;
    }
    child.mode = "processed";
    this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
      mode: "initializing",
      title: "improve prompt",
      widget: "_100554_aimTaskResultAddIcaPrompt",
      result: child.result,
      trace: [],
      nextStep: this.prepareTask1.name
      // danger, loop
    });
    this.requestUpdate();
  }
  prepareTask1(taskFinishResult) {
    const child = taskFinishResult.taskChild;
    if (taskFinishResult.status === "error") {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      return;
    }
    if (!taskFinishResult.taskRoot.args) {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      child.trace.push("invalid taskroot args");
      return;
    }
    const args = JSON.parse(taskFinishResult.taskRoot.args);
    if (taskFinishResult.status === "userEvent" && taskFinishResult.newPrompt) {
      args.prompt = taskFinishResult.newPrompt;
    }
    child.mode = "processed";
    this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
      mode: "initializing",
      title: "prepare source",
      widget: "_100554_aimTaskPrepareIcaSource",
      prompt: JSON.stringify(args),
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
    if (!taskFinishResult.taskRoot.args) {
      this.mode = taskFinishResult.taskRoot.mode = child.mode = "error";
      child.trace.push("invalid taskroot args");
      return;
    }
    const args = JSON.parse(taskFinishResult.taskRoot.args);
    child.mode = "processed";
    this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
      mode: "initializing",
      title: "exec prompt",
      widget: "_100554_aimTaskExecLLM",
      ref: child.ref,
      agent: this.assistant,
      prompt: this.getPrompt(source, args.prompt),
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
      widget: "_100554_aimTaskResultAddIca",
      ref: child.ref,
      trace: [],
      result,
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
    if (taskFinishResult.newPrompt === "[html]") {
      child.mode = "processed";
      this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
        mode: "initializing",
        title: "exec prompt",
        widget: "_100554_aimTaskExecLLM",
        ref: child.ref,
        agent: this.assistant,
        prompt: this.getPromptHTML(source),
        trace: [],
        result: source,
        nextStep: this.endTasks.name
        // looping exec prompt
      });
      return;
    }
    child.mode = "processed";
    this.addTaskAndWaitForCompletion(taskFinishResult.taskRoot, {
      mode: "initializing",
      title: "exec prompt",
      widget: "_100554_aimTaskExecLLM",
      ref: child.ref,
      agent: this.assistant,
      prompt: this.getPrompt2(source, taskFinishResult.newPrompt),
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
      if (taskChild.widget === "_100554_aimTaskExecLLM") {
        const res = taskRoot.children.filter((ch) => ch.widget === "_100554_aimTaskResultAddIca");
        const lastRes = res.pop();
        const result2 = lastRes ? lastRes.result : "";
        if (!result2) return;
        this.setResultInEditor(this.extractTS(result2), this.extractHTML(taskChild.result || ""));
      } else this.setResultInEditor(result);
    }
    this.mode = taskFinishResult.taskRoot.mode = taskChild.mode;
    this.requestUpdate();
    updateTaskOnServer(taskFinishResult.taskIndex);
  }
  setResultInEditor(value, valueHTML) {
    const activeOpService = getActiveOpServiceIfIsValid(this);
    if (!activeOpService) {
      window.collabMessages.add("The service in the opposite position does not refer to this action", "error");
      return false;
    }
    ;
    if (value) activeOpService.setEditorValue(value.trim());
    if (valueHTML) activeOpService.setEditorHTMLValue(valueHTML.trim());
    return true;
  }
  extractHTML(src) {
    const regex = /```html([\s\S]+?)```/g;
    const matches = src.match(regex);
    const contents = [];
    let ret = src;
    if (matches) {
      for (const m of matches) {
        const conteudo = m.replace(/```html|```/g, "").trim();
        contents.push(conteudo);
      }
      ret = contents[0];
    }
    return ret;
  }
  extractTS(src) {
    const regex = /```typescript([\s\S]+?)```/g;
    const matches = src.match(regex);
    const contents = [];
    let ret = src;
    if (matches) {
      for (const m of matches) {
        const conteudo = m.replace(/```typescript|```/g, "").trim();
        contents.push(conteudo);
      }
      ret = contents[0];
    }
    return ret;
  }
  getPrompt(source, user) {
    const promptInitial = `
### system ###: 

${this.msg.prompt_ts_title_1}
-Saida esperada: 
1. ${this.msg.prompt_ts_output_1}
2. ${this.msg.prompt_ts_output_2}
3. ${this.msg.prompt_ts_output_3}
4. ${this.msg.prompt_ts_output_4}
5. ${this.msg.prompt_ts_output_5}
6. ${this.msg.prompt_ts_output_6}
7. ${this.msg.prompt_ts_output_7}
8. ${this.msg.prompt_ts_output_8}
minhaFun\uFFFDao(){
    // **implement_here**
}

9. ${this.msg.prompt_ts_output_9}

### user ###:

${user}

-Source: ${source}
`;
    return promptInitial;
  }
  getPrompt2(source, user) {
    const promptInitial = `
### system ###: 
${this.msg.prompt_fc_title_1}

-Saida esperada: 
1. ${this.msg.prompt_fc_output_1}
2. ${this.msg.prompt_ts_output_2}
3. ${this.msg.prompt_ts_output_3}
4. ${this.msg.prompt_ts_output_4}
5. ${this.msg.prompt_ts_output_5}
6. ${this.msg.prompt_ts_output_6}
7. ${this.msg.prompt_ts_output_7}
9. ${this.msg.prompt_ts_output_9}
10. ${this.msg.prompt_fc_output_2}

### user ###:
${user}

-Source: ${source}
`;
    return promptInitial;
  }
  getPromptHTML(source) {
    const prompt = `
### system ###: 
${this.msg.prompt_html_title}

-Saida esperada: 
${this.msg.prompt_html_output}

-Source: ${source}
 .`;
    return prompt;
  }
  getPromptCheckPrompt(promptUser) {
    const prompt = `
        ### system ### 
Analise o prompt do usu\uFFFDrio e retorne:

- 'sim' se o prompt estiver dentro do contexto, e for suficiente para a pr\uFFFDxima etapa.
- 'n\uFFFDo' se o prompt for para qualquer outra coisa que n\uFFFDo for a gera\uFFFD\uFFFDo de um web component.
- 'forne\uFFFDa mais informa\uFFFD\uFFFDes' se o prompt estiver dentro do contexto e precisar de mais informa\uFFFD\uFFFDes importantes neste primeiro passo.

contexto: Todos os web components devem ser desenvolvidos utilizando TypeScript e Lit 3. Os componentes ser\uFFFDo usados em navegadores modernos, e nesta etapa focaremos apenas no corpo principal do TypeScript, sem CSS.

condi\uFFFD\uFFFDo especial: Ap\uFFFDs retornar 'forne\uFFFDa mais informa\uFFFD\uFFFDes', gere uma lista de 1 a 3 itens das informa\uFFFD\uFFFDes necess\uFFFDrias para o contexto.

Ao adotar esta descri\uFFFD\uFFFDo de contexto, qualquer usu\uFFFDrio que interaja com o sistema j\uFFFD estar\uFFFD ciente de que o desenvolvimento deve ser feito usando TypeScript e Lit 3, e poder\uFFFD se concentrar em especificar outros aspectos do web component que est\uFFFD sendo proposto. Isso simplifica a intera\uFFFD\uFFFDo do usu\uFFFDrio com o sistema e permite um foco maior nos detalhes funcionais e t\uFFFDcnicos espec\uFFFDficos de cada componente.
N\uFFFDo retorne explica\uFFFD\uFFFDes ou coment\uFFFDrios , somente 'sim' ou 'n\uFFFDo' ou 'forne\uFFFDa mais informa\uFFFD\uFFFDes' (com uma lista complementar) 

### user ###
${promptUser}
 `;
    return prompt;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "textarea", _textarea_dec, AimActionAddIca);
__decorateElement(_init, 5, "selectGroup", _selectGroup_dec, AimActionAddIca);
__decorateElement(_init, 5, "showPrompt", _showPrompt_dec, AimActionAddIca);
__decorateElement(_init, 5, "actualSuggest", _actualSuggest_dec, AimActionAddIca);
__decorateElement(_init, 5, "validPrompt", _validPrompt_dec, AimActionAddIca);
__decorateElement(_init, 5, "actualAttributes", _actualAttributes_dec, AimActionAddIca);
AimActionAddIca = __decorateElement(_init, 0, "AimActionAddIca", _AimActionAddIca_decorators, AimActionAddIca);
__runInitializers(_init, 1, AimActionAddIca);
function isValidRef(taskRoot, activeOpService) {
  const actualRef = activeOpService.getActualRef();
  const taskWithRef = taskRoot.children.find((task) => task.widget === "aimTaskPrepareIcaSource");
  if (!taskWithRef) return false;
  return taskWithRef.ref === actualRef;
}
function getActiveOpServiceIfIsValid(el) {
  const info = getInfoMyService(el);
  if (!info) return void 0;
  const activeServiceOp = info.actServiceOp;
  if (activeServiceOp.tagName !== "SERVICE-SOURCE-100554") return void 0;
  return activeServiceOp;
}
export {
  AimActionAddIca,
  getActiveOpServiceIfIsValid,
  isValidRef
};
