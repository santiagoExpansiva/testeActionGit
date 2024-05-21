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
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
var _inputShortName_dec, _loading_dec, _templates_dec, _father_dec, _position_dec, _error_dec, _level_dec, _a, _ServiceListFilesAdd100554_decorators, _init;
import { html, css, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { convertFileNameToTag } from "./_100554_utilsLit";
import { getAttributeDefinitionsLit, getFormComponentsDescription } from "./_100554_icaBaseDescription";
const initServiceListFilesAdd = () => {
};
const message_pt = {
  labelProject: "Projeto",
  labelShortName: "Nome curto",
  labelType: "Por favor, selecione um modelo abaixo ou clique",
  btnAdd: "Adicionar",
  btnCancel: "Cancelar",
  please: "Por facor selecione um projeto primeiro!"
};
const message_en = {
  labelProject: "Project",
  labelShortName: "Shortname",
  labelType: "Please select a template below or click",
  btnAdd: "Add",
  btnCancel: "cancel",
  please: "Please select a project first!"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceListFilesAdd100554_decorators = [customElement("service-list-files-add-100554")];
let _ServiceListFilesAdd100554 = class _ServiceListFilesAdd100554 extends (_a = LitElement, _level_dec = [property()], _error_dec = [property()], _position_dec = [property()], _father_dec = [property()], _templates_dec = [property()], _loading_dec = [property({ type: Boolean })], _inputShortName_dec = [query("#iptShortName")], _a) {
  constructor() {
    super(...arguments);
    this.msg = messages["en"];
    this.level = __runInitializers(_init, 8, this, -1), __runInitializers(_init, 11, this);
    this.error = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.position = __runInitializers(_init, 16, this, ""), __runInitializers(_init, 19, this);
    this.templates = __runInitializers(_init, 24, this, []), __runInitializers(_init, 27, this);
    this.loading = __runInitializers(_init, 28, this, true), __runInitializers(_init, 31, this);
    this.enhancementModules = {};
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(_ServiceListFilesAdd100554.prototype, this, "connectedCallback").call(this);
      yield this.getTemplates();
      this.loading = false;
    });
  }
  render() {
    var _a2;
    const lang = (_a2 = this.father) == null ? void 0 : _a2.getMessageKey(messages);
    this.msg = lang ? messages[lang] : message_en;
    const { project } = mls.actual[5];
    return html`
            ${project ? this.renderAdd(project) : html`${this.msg.please}`}
        `;
  }
  renderAdd(project) {
    return html`
            <div class="section-add">
                <div class="row-form">
                    <div>
                        <label>${this.msg.labelProject}:</label>
                        <input type="text" disabled value="${project.toString()}"/>
                    </div>
                    <div>
                        <label>${this.msg.labelShortName}:</label>
                        <input type="text" id="iptShortName"/>
                        <span>${this.error}</span>
                    </div>
                </div>
                <hr>
                <div class="row-form">
                    <div>
                        <label>${this.msg.labelType}</label> <button class="btn-cancel" @click="${this.clickCancel}">${this.msg.btnCancel}</button>
                         ${this.renderTemplates()}
                    </div>
                </div>
            </div>

        `;
  }
  renderTemplates() {
    return html`
            <div class="template-container">
             ${this.loading ? html`<p>Loading...</p>` : this.templates.map((template) => {
      return html`
                        <div  class="template-item" @click=${() => {
        this.add(template);
      }}>
                            <div class="template-item-content">
                                <div class="template-item-title">${template.title}</div>
                                <div class="template-item-body">
                                    ${template.description.split("\n").map((paragraph) => html`
                                        <p>${paragraph}</p>
                                    `)}
                                </div>
                                <div class="template-item-tags">
                                        Tags: ${template.tags.join(", ")}
                                </div>
                            </div>
                        </div>
                    `;
    })}
            </div>
        `;
  }
  //--------------- IMPLEMENTS----------------
  getTemplates() {
    return __async(this, null, function* () {
      const temp = yield this.getAllEnhacementsTemplates();
      this.templates = [...temp];
    });
  }
  clickCancel() {
    if (!this.father) return;
    this.father.mode = "list";
  }
  showLoader(loader) {
    if (!this.father) return;
    this.father.loading = loader;
  }
  add(template) {
    return __async(this, null, function* () {
      var _a2, _b, _c;
      try {
        if (!this.shadowRoot) return;
        if (!this.inputShortName) return;
        const { project } = mls.actual[5];
        if (!project) throw new Error("No project selected");
        if (!this.enhancementModules) throw new Error("No modules enhancement loaded");
        const name = this.inputShortName.value;
        const newName = this.getNewNameAndValid(project, name);
        const params = {};
        if (!template.enhancementKey) throw new Error("No enhancementKey in template");
        const fEnh = this.enhancementModules[template.enhancementKey];
        if (!fEnh) {
          this.showLoader(false);
          throw new Error("No enhancement founded");
        }
        ;
        this.showLoader(true);
        const ts = this.createContentNewFile(fEnh, template.example, name, project);
        params.action = "new";
        params.level = +this.level;
        params.project = mls.actual[5].project;
        params.newProject = mls.actual[5].project;
        params.shortName = newName;
        params.newshortName = newName;
        params.folder = "";
        params.newfolder = "";
        params.newEnhancement = fEnh ? `_${fEnh.storFile.project}_${fEnh.storFile.shortName}` : "_blank";
        params.extension = ".ts";
        params.newTSSource = ts;
        mls.actual[this.level].setFullName("_" + params.project + "_" + params.shortName);
        mls.actual[this.level][this.position] = {
          project: params.project,
          shortName: params.shortName
        };
        yield this.fireComunication(params);
        const posInv = this.position === "left" ? "right" : "left";
        if (template.aimActionSuggest) {
          (_a2 = this.father) == null ? void 0 : _a2.openService("_100554_serviceAim", posInv, 2);
          const opInstance = (_c = (_b = this.father) == null ? void 0 : _b.nav3Service) == null ? void 0 : _c.getActiveInstance(posInv);
          if (opInstance) {
            opInstance.setAttribute("actiontoopen", template.aimActionSuggest);
          }
        }
        this.showLoader(false);
        this.saveLocalHistory(params.project, params.shortName, params.extension, params.folder);
      } catch (e) {
        setTimeout(() => {
          this.showLoader(false);
          this.error = e.message;
        }, 200);
      }
    });
  }
  createContentNewFile(enhecementModule, template, name, project) {
    let ret = "";
    const grp = "other";
    let newExample = "";
    newExample = this.checkIfAsIcaAndCreateIfNeeded(name, project);
    if (!newExample) {
      newExample = template;
      newExample = this.changeTagName(newExample, convertFileNameToTag(`_${project}_${name}`));
      newExample = this.changeClassName(newExample, project, name);
      newExample = this.changeWidget(newExample, project, name);
    }
    ret = `/// <mls shortName="${name}" project="${project}" enhancement="_${enhecementModule.storFile.project}_${enhecementModule.storFile.shortName}" groupName="${grp}" />
${newExample}
`;
    return ret;
  }
  checkIfAsIcaAndCreateIfNeeded(name, project) {
    if (project !== 100554) return "";
    if (!name.startsWith("ica")) return "";
    if (!name.endsWith("Base")) return "";
    let parts = this.splitStringByUppercase(name.substring(0, name.length - 4));
    if (parts.length < 4) return "";
    parts = parts.map((part) => this.capitalizeFirstLetter(part));
    let ica, root, subgroup, finalgroup = "";
    ica = parts.shift();
    root = parts.shift();
    subgroup = parts.shift();
    finalgroup = parts.join(" ");
    const desc = getFormComponentsDescription(root, subgroup, finalgroup);
    if (!desc) return "";
    return this.createTemplateIca(root, subgroup, finalgroup);
  }
  splitStringByUppercase(str) {
    return str.split(/(?=[A-Z])/);
  }
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  createTemplateIca(root, subgroup, finalgroup) {
    const props = getAttributeDefinitionsLit(root, subgroup, finalgroup);
    const res = props.map((line) => {
      let cleanedLine = line.replace(/@property\(\{.*\}\)\s*/, "");
      cleanedLine = cleanedLine.replace(/=.+?;/, ";");
      cleanedLine = "abstract " + cleanedLine;
      return cleanedLine;
    });
    const fg = finalgroup.replace(/\s/g, "");
    const className = `Ica${root}${subgroup}${fg}Base`;
    const extend = "IcaLitElement";
    const extendFile = "./_100554_icaLitElement";
    const interfaces = /* @__PURE__ */ new Map();
    res.forEach((str, index) => {
      const matches = str.match(/abstract (\w+): ('.*?'(?: \| '.*?')*)/);
      if (matches && matches.length >= 3) {
        const propName = matches[1];
        const types = matches[2].match(/'[^']+'/g);
        if (types && types.length > 1) {
          const interfaceName = `I${propName.charAt(0).toUpperCase() + propName.slice(1)}`;
          interfaces.set(interfaceName, types);
          res[index] = `abstract ${propName}: ${interfaceName} | undefined; // ${matches.input}`;
        }
      }
    });
    let interfaceString = "";
    interfaces.forEach((types, interfaceName) => {
      interfaceString += `export type ${interfaceName} = ${types.join(" | ")};
`;
    });
    const temp = `
import { ${extend} } from '${extendFile}';

export abstract class ${className} extends ${extend} {
    
    ${res.join("\n	")}

}

${[interfaceString].join("\n")}
`;
    return temp;
  }
  saveLocalHistory(project, shortName, extension, folder) {
    const info = localStorage.getItem("mlsInfoHistoryL" + this.level);
    const res = info ? JSON.parse(info) : [];
    let idx = -1;
    res.forEach((i, index) => {
      if (i.project !== project || i.shortName !== shortName) return;
      idx = index;
    });
    if (idx >= 0) res.splice(idx, 1);
    res.unshift({ project, shortName, extension, folder });
    if (res.length > 10) res.length = 10;
    localStorage.setItem("mlsInfoHistoryL" + this.level, JSON.stringify(res));
  }
  getNewNameAndValid(prj, name) {
    if (name === "" || !name || name === null) throw new Error("Invalid name ");
    const isValidName = this.isValidNewName({
      shortName: name,
      project: prj,
      level: +this.level,
      folder: "",
      extension: ".ts"
    });
    if (!isValidName) throw new Error("Invalid name ");
    return name;
  }
  isValidNewName(obj) {
    if (obj.shortName === "") return false;
    if (obj.shortName.length === 0 || obj.shortName.length > 255) return false;
    const invalidCharacters = /[_\/{}\[\]\*$@#=\-+!|?,<>=.;^~º°""''``áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;
    if (invalidCharacters.test(obj.shortName)) return false;
    const key = mls.stor.getKeyToFiles(obj.project, obj.level, obj.shortName, obj.folder, obj.extension);
    let find = false;
    const keys = Object.keys(mls.stor.files);
    for (const k of keys) {
      if (key.toLocaleLowerCase() === k.toLocaleLowerCase()) find = true;
    }
    return !mls.stor.files[key] && !find;
  }
  changeClassName(source, project, shortname) {
    const newClassName = shortname.charAt(0).toUpperCase() + shortname.substring(1, shortname.length) + project.toString();
    const outputString = source.replace(/\[className\]/g, newClassName);
    return outputString;
  }
  changeWidget(source, project, shortname) {
    const newWidget = `_${project.toString()}_${shortname}`;
    const outputString = source.replace(/\[widgetName\]/g, newWidget);
    return outputString;
  }
  changeTagName(source, tagName) {
    const outputString = source.replace(/\[tagName\]/g, tagName);
    return outputString;
  }
  getEnhacementsDetails() {
    const array = [];
    const keys = Object.keys(mls.stor.files);
    keys.forEach((i) => {
      const f = mls.stor.files[i];
      if (f.level !== +this.level || !f.shortName.startsWith("enhancement") || f.extension !== ".ts") return;
      const opt = {
        key: `${f.project}_${f.shortName}`,
        value: i
      };
      array.push(opt);
    });
    mls.l2.enhancement.getEnhancementDetails;
    return [...array];
  }
  getAllEnhacementsTemplates() {
    return __async(this, null, function* () {
      let templates = [];
      const enhancementDetails = this.getEnhacementsDetails();
      this.enhancementModules = yield this.getEnhacementsInstancies(enhancementDetails);
      if (!this.enhancementModules) return templates;
      Object.entries(this.enhancementModules).map((entry) => {
        const [entryKey, entryValue] = entry;
        if (!entryValue.instance.getAddNewFileDetails) return;
        const temp = entryValue.instance.getAddNewFileDetails();
        temp.forEach((t) => t.enhancementKey = entryKey);
        templates = [...templates, ...temp];
      });
      return templates;
    });
  }
  getEnhacementsInstancies(enhancementDetails) {
    return __async(this, null, function* () {
      const enhancementModules = {};
      try {
        for (var iter = __forAwait(enhancementDetails), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          let details = temp.value;
          const { value, key } = details;
          const storFile = mls.stor.files[value];
          if (!storFile) return;
          const { project, shortName } = storFile;
          const mfile = mls.l2.editor.get({ project, shortName });
          if (!mfile) {
            yield this.loadMyMFiles(value, project);
          }
          if (!mfile) throw new Error("Error on load mfile");
          let enhancementModule = yield mls.l2.enhancement.getEnhancementModule(mfile);
          if (!enhancementModule) {
            yield this.loadMyMFiles(value, project);
            enhancementModule = yield mls.l2.enhancement.getEnhancementModule(mfile);
          }
          ;
          if (!enhancementModule) throw new Error("Error on load enhancementModule");
          enhancementModules[key] = {
            instance: enhancementModule,
            storFile
          };
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      return enhancementModules;
    });
  }
  fireComunication(obj) {
    return __async(this, null, function* () {
      obj.position = this.position;
      yield mls.events.fire([+this.level], ["FileAction"], JSON.stringify(obj), 0);
    });
  }
  loadMyMFiles(key, project) {
    return __async(this, null, function* () {
      const params = {};
      const fEnh = mls.stor.files[key];
      if (!fEnh) return;
      params.action = "preLoadProject";
      params.level = +this.level;
      params.project = project;
      params.newProject = project;
      yield this.fireComunication(params);
    });
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "level", _level_dec, _ServiceListFilesAdd100554);
__decorateElement(_init, 5, "error", _error_dec, _ServiceListFilesAdd100554);
__decorateElement(_init, 5, "position", _position_dec, _ServiceListFilesAdd100554);
__decorateElement(_init, 5, "father", _father_dec, _ServiceListFilesAdd100554);
__decorateElement(_init, 5, "templates", _templates_dec, _ServiceListFilesAdd100554);
__decorateElement(_init, 5, "loading", _loading_dec, _ServiceListFilesAdd100554);
__decorateElement(_init, 5, "inputShortName", _inputShortName_dec, _ServiceListFilesAdd100554);
_ServiceListFilesAdd100554 = __decorateElement(_init, 0, "ServiceListFilesAdd100554", _ServiceListFilesAdd100554_decorators, _ServiceListFilesAdd100554);
_ServiceListFilesAdd100554.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, _ServiceListFilesAdd100554);
let ServiceListFilesAdd100554 = _ServiceListFilesAdd100554;
export {
  ServiceListFilesAdd100554,
  initServiceListFilesAdd
};
