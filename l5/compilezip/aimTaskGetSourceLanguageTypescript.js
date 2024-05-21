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
var _AimTaskGetSourceLanguageTypescript_decorators, _init, _a;
import { customElement } from "lit/decorators.js";
import { AimTaskBase } from "./_100554_aimTaskBase";
_AimTaskGetSourceLanguageTypescript_decorators = [customElement("aim-task-get-source-language-typescript-100554")];
class AimTaskGetSourceLanguageTypescript extends (_a = AimTaskBase) {
  onInitializing() {
    this.getSource();
  }
  getSource() {
    if (!this.taskRoot.args) {
      this.notifyCompleteByStatus("error", "Invalid Args");
      return;
    }
    const data = JSON.parse(this.taskRoot.args);
    const shortName = data.fileName;
    this._getSource(shortName).then((ret) => {
      const result = ret;
      this.notifyCompleteByStatus("ok", JSON.stringify(result));
    }).catch((e) => {
      this.notifyCompleteByStatus("error", e);
    });
  }
  _getSource(shortName) {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      const mfile = mls.l2.editor.mfiles[shortName];
      if (!mfile) reject(`No mfile find for file: ${shortName}`);
      const value = mfile.model.getValue();
      const data = this.getDataInternalization(value);
      resolve(data);
    }));
  }
  getDataInternalization(sourceComplete) {
    var _a2;
    const regex = /\/\/\/ **collab_i18n_start*([\s\S]+?)\/\/\/ **collab_i18n_end**/;
    const match = sourceComplete.match(regex);
    let internalization = void 0;
    let source = "";
    if (match && match.index) {
      const internationalizationText = match[1].trim();
      const languages = Object.keys(((_a2 = internationalizationText.match(/message_[a-z]{2}/g)) == null ? void 0 : _a2.reduce((acc, curr) => {
        const language = curr.split("_")[1];
        acc[language] = true;
        return acc;
      }, {})) || {});
      const startIndex = sourceComplete.substring(0, match.index).split("\n").length;
      const blankLinesBefore = sourceComplete.substring(0, match.index).match(/\n\s*\n/g);
      const blankLinesBeforeCount = blankLinesBefore ? blankLinesBefore.length : 0;
      const endIndex = startIndex + internationalizationText.split("\n").length + blankLinesBeforeCount;
      const beforeMatch = sourceComplete.substring(0, match.index).trim();
      const afterMatch = sourceComplete.substring(match.index + match[0].length).trim();
      internalization = {
        endLine: endIndex,
        source: internationalizationText,
        startLine: startIndex,
        languages
      };
      source = beforeMatch + "\n" + afterMatch;
    }
    return { internalization, source, sourceComplete };
  }
}
_init = __decoratorStart(_a);
AimTaskGetSourceLanguageTypescript = __decorateElement(_init, 0, "AimTaskGetSourceLanguageTypescript", _AimTaskGetSourceLanguageTypescript_decorators, AimTaskGetSourceLanguageTypescript);
__runInitializers(_init, 1, AimTaskGetSourceLanguageTypescript);
export {
  AimTaskGetSourceLanguageTypescript
};
