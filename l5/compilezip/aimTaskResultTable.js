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
var _AimTaskResultTable_decorators, _init, _a;
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { AimTaskBase } from "./_100554_aimTaskBase";
_AimTaskResultTable_decorators = [customElement("aim-task-result-table-100554")];
class AimTaskResultTable extends (_a = AimTaskBase) {
  onInitializing() {
    this.notifyCompleteByStatus("ok", "");
  }
  renderBody(taskRoot, child) {
    const title = child.title;
    const body = child._tempResult || "";
    return html`
        <details open>
            <summary>${title}</summary>
            <div style='margin: 10px'>${this.renderTable2(this.parseTable2(body))}</div> 
        </details>
        `;
  }
  parseTable(body) {
    const i1 = body.indexOf("|");
    if (i1 < 0) return [];
    let lines = body.substring(i1).split("\n");
    let tab1 = [];
    for (const line of lines) {
      if (!line.startsWith("|")) continue;
      const cols = line.trim().split("|");
      tab1.push(cols);
    }
    return tab1;
  }
  parseTable2(body) {
    const regex = /\|/g;
    const lines = body.split("\n");
    const linesWithValues = lines.filter((line) => line.trim() !== "");
    const table = linesWithValues.map((line) => line.split(regex));
    const tableWithNoEspaces = table.map((line) => line.map((cel) => cel.trim()));
    return tableWithNoEspaces;
  }
  renderTable2(tab1) {
    if (tab1.length < 2) return html`invalid table`;
    return html`
        <table class="tb">
            <thead>
            <tr>${tab1[0].map((header) => html`<th class="th">${header}</th>`)}</tr>
            </thead>
            <tbody>
            ${tab1.slice(1).map((row) => html`
                <tr>${row.map((cell) => html`<td class="td">${cell}</td>`)}</tr>
            `)}
            </tbody>
        </table>
        `;
  }
}
_init = __decoratorStart(_a);
AimTaskResultTable = __decorateElement(_init, 0, "AimTaskResultTable", _AimTaskResultTable_decorators, AimTaskResultTable);
__runInitializers(_init, 1, AimTaskResultTable);
export {
  AimTaskResultTable
};