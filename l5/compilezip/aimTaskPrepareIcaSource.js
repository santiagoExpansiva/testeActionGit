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
var _AimTaskPrepareIcaSource_decorators, _init, _a;
import { customElement } from "lit/decorators.js";
import { getInfoMyService } from "./_100554_aimHelper";
import { AimTaskBase } from "./_100554_aimTaskBase";
import { convertFileNameToTag } from "./_100554_utilsLit";
import { getAttributeDefinitionsLit } from "./_100554_icaBaseDescription";
_AimTaskPrepareIcaSource_decorators = [customElement("aim-task-prepare-ica-source-100554")];
class AimTaskPrepareIcaSource extends (_a = AimTaskBase) {
  onInitializing() {
    this.getSource();
  }
  getSource() {
    const promp = this.taskChild.prompt;
    if (!promp) {
      this.notifyCompleteByStatus("error", "Invalid data in prompt");
      return;
    }
    const obj = JSON.parse(promp);
    this._getSource(obj).then((ret) => {
      const result = ret;
      this.notifyCompleteByStatus("ok", result);
    }).catch((e) => {
      this.notifyCompleteByStatus("error", e);
    });
  }
  _getSource(data) {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      var _a2;
      try {
        const info = getInfoMyService(this);
        if (!info) {
          reject("Not found info");
          return;
        }
        const { path, project } = mls.actual[2];
        if (!path || !project) {
          reject("Not found path or project");
          return;
        }
        const fullName = mls.actual[2].getFullName();
        const mfile = mls.l2.editor.mfiles[fullName];
        if (!mfile) {
          reject("Not found mfile");
          return;
        }
        const tps = (_a2 = mfile.compilerResults) == null ? void 0 : _a2.tripleSlashMLS;
        if (!mfile) {
          reject("Not found tripleSlashMLS in mfile compilerResults");
          return;
        }
        const activeServiceOp = info.actServiceOp;
        if (activeServiceOp.tagName !== "SERVICE-SOURCE-100554") {
          reject("100554_ServiceSource is not active in level 2");
          return;
        }
        const regexRemoveSpaces = /\s+/g;
        const group = data.group.join("").replace(regexRemoveSpaces, "");
        const tagName = convertFileNameToTag(fullName);
        const className = path.charAt(0).toUpperCase() + path.substring(1, path.length);
        const importFile = `_100554_ica${group}`;
        const extend = `Ica${group}`;
        const [root, subgroup, finalgroup] = data.group;
        const props = getAttributeDefinitionsLit(root, subgroup, finalgroup);
        const template = `
/// <mls shortName="${tps.variables.shortName}" project="${tps.variables.project}" enhancement="${tps.variables.enhancement}" groupName="${group}" />

import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_icaLitElement';
import { ${extend} } from './${importFile}';

@customElement('${tagName}')
export class ${className} extends ${extend} {
    
    static styles = css\`\`;
    
    ${props.join("\n")}   
                        
}
`;
        this.taskChild.ref = activeServiceOp.getActualRef() || "";
        resolve(template);
      } catch (e) {
        reject(e);
      }
    }));
  }
}
_init = __decoratorStart(_a);
AimTaskPrepareIcaSource = __decorateElement(_init, 0, "AimTaskPrepareIcaSource", _AimTaskPrepareIcaSource_decorators, AimTaskPrepareIcaSource);
__runInitializers(_init, 1, AimTaskPrepareIcaSource);
export {
  AimTaskPrepareIcaSource
};
