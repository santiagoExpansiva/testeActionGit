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
var _CollabFCATree_decorators, _init, _a;
import { html, repeat } from "lit";
import { customElement } from "lit/decorators.js";
import { convertTagToFileName } from "./_100554_utilsLit";
import { CollabLitElement } from "./_100554_collabLitElement";
const initCollabFCATree = "";
const message_pt = {
  noItens: "Nenhum item ICA foi encontrado!"
};
const message_en = {
  noItens: "No ICA items were found!"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_CollabFCATree_decorators = [customElement("collab-fca-tree-100554")];
class CollabFCATree extends (_a = CollabLitElement) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.idLastClick = "";
    this.myCss = `
        collab-fca-tree-100554{
            padding: 1rem;
            display:block;
        }
        collab-fca-tree-100554 ul {
            list-style: none;
            padding: 0px 0rem 0rem .5rem;
            border-left: 1px solid #d4d4d4;
        }

        collab-fca-tree-100554 ul li {
            position: relative;
            user-select:none;

        }

        collab-fca-tree-100554 ul li .header {
            padding: .4rem;
            cursor: pointer;
        }

        collab-fca-tree-100554 ul li .header:hover {
            border: 1px solid #d4d4d4;

        }

        collab-fca-tree-100554 ul li .header .dragDropcontainer {
            display:none;
            gap:0.5rem;
        }

        collab-fca-tree-100554 ul li .header.overdragdrop {
            display: flex!important;
            justify-content: space-between;
        }

        collab-fca-tree-100554 ul li .header.overdragdrop .dragDropcontainer {
            display:flex;
            gap:0.5rem;
        }

        collab-fca-tree-100554 ul li .header .dragDropcontainer span {
            display: none;
            justify-content: center;
            align-items: center;
            width:20px;
            heigth:20px;
        }

        collab-fca-tree-100554 ul li .header .dragDropcontainer.b .dbefore {
            display: flex!important;
        }

        collab-fca-tree-100554 ul li .header .dragDropcontainer.i .din {
            display: flex!important;
        }

        collab-fca-tree-100554 ul li .header .dragDropcontainer.a .dAfter {
            display: flex!important;
        }

        collab-fca-tree-100554 ul li div.activeBranch{
            border: 1px solid #d4d4d4;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            background: #f8f8f8;
        }

        collab-fca-tree-100554 ul li:before {
            content: ' ';
            position: absolute;
            width: 7px;
            height: 1px;
            background: #d4d4d4;
            top: 1.2rem;
            left: -8px;
        }

        collab-fca-tree-100554 .groupHiddenList {
            border-radius: 4px;
            padding: .3rem;
            transition: all 0.5s;
            cursor: pointer;
            display: none; //flex!important;
            z-index: 9;
            height: .7rem;
            
        }

        collab-fca-tree-100554 ul li div.activeBranch .groupHiddenList{
            display: flex;
            align-items: center;
            position: relative;
        }

        collab-fca-tree-100554 .groupHiddenList::after {
            content: ' ';
            width: 23px;
            height: 19px;
            position: absolute;
            right: -15px;
            background-image:  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z' fill='rgb(66,65,65,1)'/></svg>");
            background-repeat:no-repeat;
            background-position-y: center;
        }

        collab-fca-tree-100554 .groupHiddenList .mls-gpbtnslider-item {
            display: none;
            transition: 0.5s;
            margin-left: 1rem;
            z-index: 10;
            font-size: 16px;
            line-height: normal;
        }

        collab-fca-tree-100554 .groupHiddenList .mls-gpbtnslider-item:hover {
            color: #1a83ff;
        }
        

        collab-fca-tree-100554 .groupHiddenList.activegpbtnslider {
            padding-right: 24px;
            padding-left: 8px;
        }

        collab-fca-tree-100554 .groupHiddenList.activegpbtnslider .mls-gpbtnslider-item {
            display: inherit;
            text-align: center;
            float: left;
        }
        
    `;
  }
  //--------------COMPONENT---------------
  createRenderRoot() {
    return this;
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    const ar = this.getFCAComponents();
    if (ar && ar.length > 0) return this.createNavigation(ar);
    return html`<h3 style="padding:1rem">${this.msg.noItens}<h3>`;
  }
  createNavigation(array) {
    const obj = html`
            <ul>
                ${repeat(
      array,
      (key, idx) => key.el.tagName + idx,
      (item, index) => {
        return this.renderItemTree(item, index);
      }
    )}
            </ul><style>${this.myCss}</style>
        `;
    return obj;
  }
  renderItemTree(item, idx) {
    const name = convertTagToFileName(item.el.tagName.toLocaleLowerCase());
    const cls = item.el.renderType === "editactive" ? "activeBranch" : "";
    if (this.idLastClick === name + idx) {
      setTimeout(() => {
        const active = this.querySelector(".activeBranch");
        if (active) active.classList.remove("activeBranch");
        this.idLastClick = "";
        item.el.click();
      }, 200);
    }
    let mySymbol = "fa-cubes";
    if (item.el.mySymbol) mySymbol = item.el.mySymbol;
    return html`
            <li>
                <div id="${name + idx}" .info=${item} @mouseover="${this.mouseOver}" @mouseleave="${this.mouseLeave}" class="header ${cls}" @click="${(e) => this.selectItem(e, item)}">
                    <info-item><span class="fa ${mySymbol}" style="margin-right:.5rem"></span>${name}</info-item>
                    <div class="dragDropcontainer">
                        <span class="dbefore fa fa-arrow-up"></span>
                        <span class="din fa fa-arrow-turn-down"></span>
                        <span class="dAfter fa fa-arrow-down"></span>
                    </div>
                    <div class="groupHiddenList" .info=${item} @click="${this.clickGroupHidden}">
                        <span class="mls-gpbtnslider-item fa fa-up-down-left-right" title="move" @click="${this.activeMove}"></span>
                        <span class="mls-gpbtnslider-item fa classLock" @click="${this.setLock}"></span>
                        <span class="mls-gpbtnslider-item fa fa-trash" @click="${this.delEl}" title="remove"></span>
                    </div>
                </div>
                <ul>
                    ${repeat(
      item.children,
      (c, idx2) => c.el.tagName + idx2,
      (i, idxI) => {
        return this.renderItemTree(i, idx + "_" + idxI);
      }
    )}
                </ul>
            </li>
        `;
  }
  //-------- IMPLEMENTATION --------------
  forceUpdate() {
    this.requestUpdate();
  }
  setServicePreview() {
    if (this.servicePreview || !this.myParent) return;
    const nav3 = this.myParent.nav3Service;
    if (!nav3) return;
    const wc = nav3.getActiveInstance("right");
    if (!wc) return;
    if (wc.tagName.toLowerCase() === "service-preview-100554") {
      this.servicePreview = wc;
    }
  }
  getFCAComponents() {
    var _a2;
    this.setServicePreview();
    let ret = [];
    if (!this.servicePreview || !this.servicePreview.parentElement) return ret;
    const view = this.servicePreview.parentElement.querySelector("service-preview-view-100554");
    if (!view || !view.shadowRoot) return ret;
    const iframe = view.shadowRoot.querySelector("iframe");
    if (!iframe) return ret;
    const scope = (_a2 = iframe.contentDocument) == null ? void 0 : _a2.body;
    if (!scope) return ret;
    const reentrance = (array, el) => {
      const tag = el.tagName.toLowerCase();
      let info;
      if (tag.startsWith("fca-")) {
        info = { el, children: [] };
        array.push(info);
      }
      const isGroup = el.getAttribute("isFCAGroup");
      if (!isGroup || isGroup === "false") {
        Array.from(el.children).forEach((i) => {
          reentrance(info ? info.children : array, i);
        });
      }
    };
    Array.from(scope.children).forEach((i) => {
      reentrance(ret, i);
    });
    return ret;
  }
  selectItem(e, item) {
    e.stopPropagation();
    let target = e.target;
    if (target && target.className.indexOf("header") < 0) {
      target = target.closest(".header");
    }
    if (!target) return;
    const active = this.querySelector(".activeBranch");
    if (active && active === target) return;
    if (active) active.classList.remove("activeBranch");
    target.classList.add("activeBranch");
    item.el.style.border = "";
    const father = item.el.closest('*[rendertype="editactive"]');
    if (father) {
      this.idLastClick = target.id;
      item.el.click();
    } else item.el.click();
  }
  clickGroupHidden(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    el.classList.toggle("activegpbtnslider");
    if (!el.info) return;
    let lock = "fa-lock-open";
    const isGroup = el.info.el.getAttribute("isFCAGroup");
    if (isGroup || isGroup === "true") {
      lock = "fa-lock";
    }
    const group = el.querySelector(".classLock");
    if (group) {
      group.classList.remove("fa-lock");
      group.classList.remove("fa-lock-open");
      group.title = lock === "fa-lock" ? "lock" : "lock open";
      group.classList.add(lock);
    }
  }
  setLock(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const info = el.parentElement.info;
    if (!info) return;
    const isGroup = el.className.indexOf("fa-lock-open") < 0;
    info.el.setAttribute("isFCAGroup", (!isGroup).toString());
    let lock = "fa-lock-open";
    if (!isGroup) {
      lock = "fa-lock";
    }
    el.classList.remove("fa-lock");
    el.classList.remove("fa-lock-open");
    el.title = lock === "fa-lock" ? "lock" : "lock open";
    el.classList.add(lock);
    this.requestUpdate();
  }
  delEl(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const info = el.parentElement.info;
    if (!info) return;
    info.el.remove();
    this.requestUpdate();
  }
  activeMove(e) {
    e.stopPropagation();
    const el = e.target;
    if (!el) return;
    const info = el.parentElement.info;
    if (!info) return;
    const wc = info.el.querySelector("wcd-toolbox-100554");
    if (!wc || !wc.shadowRoot) return;
    const move = wc.shadowRoot.querySelector("wcd-toolbox-item-action-move-100554");
    if (move) move.click();
    setTimeout(() => {
      this.setDragDrop(info.el);
    }, 500);
  }
  setDragDrop(active) {
    const dragStart = (e, el) => {
      e.stopPropagation();
      if (!el.info) return;
      el.style.opacity = "0.4";
    };
    const dragEnter = (e, el) => {
      e.stopPropagation();
      const elLast = this.querySelector(".overdragdrop");
      if (elLast) elLast.classList.remove("overdragdrop");
      el.classList.add("overdragdrop");
    };
    const dragLeave = (e, el) => {
      e.stopPropagation();
    };
    const dragOver = (e, el) => {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      return false;
    };
    const dragDrop = (e, el, mode) => {
      e.stopPropagation();
      if (!el.info) return;
      mode.click();
      return false;
    };
    const dragEnd = (e, el) => {
      e.stopPropagation();
      try {
        Array.from(listItens).forEach((el2) => {
          el2.removeAttribute("draggable");
          el2.classList.remove("overdragdrop");
          el2.style.opacity = "";
          el2.ondragstart = () => {
          };
          el2.ondragenter = () => {
          };
          el2.ondragover = () => {
          };
          el2.ondragleave = () => {
          };
          const elbefore = el2.querySelector(".dbefore");
          const elafter = el2.querySelector(".dAfter");
          const elinn = el2.querySelector(".din");
          if (elbefore) {
            elbefore.removeAttribute("draggable");
            elbefore.ondrop = (e2) => {
            };
          }
          if (elafter) {
            elafter.removeAttribute("draggable");
            elafter.ondrop = (e2) => {
            };
          }
          if (elinn) {
            elinn.removeAttribute("draggable");
            elinn.ondrop = (e2) => {
            };
          }
          const cont = el2.querySelector(".dragDropcontainer");
          if (cont) {
            cont.classList.remove("b");
            cont.classList.remove("a");
            cont.classList.remove("i");
          }
          if (el2.info) {
            const elBase = el2.info.el;
            if (!elBase) return;
            if (elBase.getAttribute("renderType") === "editactive") return;
            elBase.style.position = "";
            const content = elBase.querySelector(":scope > wcd-dragdrop-aux");
            if (!content) return;
            content.remove();
          }
        });
      } catch (e2) {
        this.requestUpdate();
      }
    };
    const addEventsDragAndDrop = (el) => {
      if (!el.info) return;
      const rtp = el.info.el.getAttribute("rendertype");
      const wcd = el.info.el.querySelector(":scope > wcd-dragdrop-aux");
      if (!wcd && rtp === "edit") return;
      const before = wcd ? wcd.querySelector("wcd-dragdrop-aux-before") : void 0;
      const after = wcd ? wcd.querySelector("wcd-dragdrop-aux-after") : void 0;
      const inn = wcd ? wcd.querySelector("wcd-dragdrop-aux-in") : void 0;
      const elbefore = el.querySelector(".dbefore");
      const elafter = el.querySelector(".dAfter");
      const elinn = el.querySelector(".din");
      const cont = el.querySelector(".dragDropcontainer");
      if (cont && before) cont.classList.add("b");
      if (cont && after) cont.classList.add("a");
      if (cont && inn) cont.classList.add("i");
      if (active === el.info.el) {
        el.ondragstart = (e) => dragStart(e, el);
      }
      if (active !== el.info.el) {
        el.ondragenter = (e) => dragEnter(e, el);
        el.ondragover = (e) => dragOver(e, el);
        el.ondragleave = (e) => dragLeave(e, el);
        if (before && elbefore) {
          elbefore.setAttribute("draggable", "true");
          elbefore.ondrop = (e) => dragDrop(e, el, before);
        }
        if (after && elafter) {
          elafter.setAttribute("draggable", "true");
          elafter.ondrop = (e) => dragDrop(e, el, after);
        }
        if (inn && elinn) {
          elinn.setAttribute("draggable", "true");
          elinn.ondrop = (e) => dragDrop(e, el, inn);
        }
      }
      el.ondragend = (e) => dragEnd(e, el);
    };
    const listItens = this.querySelectorAll(".header");
    Array.from(listItens).forEach((el) => {
      el.setAttribute("draggable", "true");
      addEventsDragAndDrop(el);
    });
  }
  mouseOver(e) {
    e.preventDefault();
    e.stopPropagation();
    let el = e.target;
    if (el && el.className.indexOf("header") < 0) {
      el = el.closest(".header");
    }
    let inOver = el.getAttribute("inOver");
    if (!inOver) inOver = "false";
    if (!el || !el.info || inOver === "true" || el.className.indexOf("activeBranch") >= 0) return;
    el.info.el.style.border = "1px solid blue";
  }
  mouseLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    let el = e.target;
    if (el && el.className.indexOf("header") < 0) {
      el = el.closest(".header");
    }
    el.removeAttribute("inOver");
    el.info.el.style.border = "";
  }
}
_init = __decoratorStart(_a);
CollabFCATree = __decorateElement(_init, 0, "CollabFCATree", _CollabFCATree_decorators, CollabFCATree);
__runInitializers(_init, 1, CollabFCATree);
export {
  CollabFCATree,
  initCollabFCATree
};
