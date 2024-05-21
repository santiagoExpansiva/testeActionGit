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
var _info_dec, _helper_dec, _css_dec, _error_dec, _a, _ServiceDsStyleBackground_decorators, _init;
import { html, css, repeat } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ServiceBase } from "./_100554_serviceBase";
const message_pt = {
  gallery: "Galeria",
  background: "Background",
  angle: "Anglo",
  color: "Cor",
  transparency: "Transparencia",
  stop: "Parar",
  add: "Add",
  del: "Del"
};
const message_en = {
  gallery: "Gallery",
  background: "Background",
  angle: "Angle",
  color: "Color",
  transparency: "Transparency",
  stop: "Stop",
  add: "Add",
  del: "Del"
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
_ServiceDsStyleBackground_decorators = [customElement("service-ds-style-background-100554")];
class ServiceDsStyleBackground extends (_a = ServiceBase, _error_dec = [property()], _css_dec = [property()], _helper_dec = [property()], _info_dec = [property()], _a) {
  constructor() {
    super();
    this.msg = messages["en"];
    this.myUpp = false;
    this.error = __runInitializers(_init, 8, this, ""), __runInitializers(_init, 11, this);
    this.css = __runInitializers(_init, 12, this, ""), __runInitializers(_init, 15, this);
    this.helper = __runInitializers(_init, 16, this, "_100554_serviceDsStyleBackground"), __runInitializers(_init, 19, this);
    this.info = __runInitializers(_init, 20, this, { tp: "background", aux: "", itens: [] }), __runInitializers(_init, 23, this);
    this.details = {
      icon: "&#xf043",
      state: "foreground",
      position: "right",
      tooltip: "Background",
      visible: false,
      tags: ["ds_styles"],
      widget: "_100554_serviceDsStyleBackground",
      level: [3]
    };
    this.onClickLink = (op) => {
      if (this.menu.setMode) this.menu.setMode("initial");
      return false;
    };
    this.onClickIcon = (op) => {
    };
    this.menu = {
      title: "Background",
      actions: {},
      icons: {},
      actionDefault: "",
      // call after close icon clicked
      iconDefault: "",
      setMode: void 0,
      // child will set this
      onClickLink: this.onClickLink,
      onClickIcon: this.onClickIcon
    };
    this.timeonChangeProp = -1;
    this.timeLoader = -1;
    this.myMsg = {
      columnsCount: "Columns Count"
    };
    this.arrayGallery = [
      "background: radial-gradient(circle, rgb(2, 0, 36) 36%, rgb(60, 70, 193) 66%);",
      "background: linear-gradient(342deg, rgba(34, 193, 195, 0.76) 50%, rgba(45, 253, 121, 0.24) 100%);",
      "background: radial-gradient(circle, rgb(63, 94, 251) 0%, rgb(252, 70, 107) 100%);",
      "background: linear-gradient(342deg, rgb(131, 58, 180) 0%, rgb(253, 29, 29) 50%, rgb(252, 176, 69) 100%);",
      "background: radial-gradient(circle, rgb(238, 174, 202) 0%, rgb(148, 187, 233) 100%);",
      "background: linear-gradient(135deg, rgba(30, 87, 153,1) 0%, rgba(41, 137, 216,1) 50%, rgba(32, 124, 202,1) 51%, rgba(125, 185, 232,1) 100%)",
      "background: linear-gradient(135deg, rgba(76, 76, 76,1) 0%, rgba(89, 89, 89,1) 12%, rgba(102, 102, 102,1) 25%, rgba(71, 71, 71,1) 39%, rgba(44, 44, 44,1) 50%, rgba(0, 0, 0,1) 51%, rgba(17, 17, 17,1) 60%, rgba(43, 43, 43) 76%, rgba(28, 28, 28,1) 91%, rgba(19, 19, 19,1) 100%)",
      "background: linear-gradient(135deg, rgba(243, 197, 189,1) 0%, rgba(232, 108, 87,1) 50%, rgba(234, 40, 3,1) 51%, rgba(255, 102, 0,1) 75%, rgba(199, 34, 0,1) 100%)",
      "background: linear-gradient(90deg, rgba(2, 0, 36,1) 0%, rgba(9, 9, 121,1) 35%, rgba(0, 212, 255,1) 100%)",
      "background: linear-gradient(0deg, rgba(34, 193, 195,1) 0%, rgba(253, 187, 45,1) 100%)",
      "background: linear-gradient(90deg, rgba(131, 58, 180,1) 0%, rgba(253, 29, 29,1) 50%, rgba(252, 176, 69,1) 100%)",
      "background: linear-gradient(310deg, rgba(5, 25, 55, 1) 0%, rgba(0, 77, 122,1) 20%, rgba(0, 135, 147, 1) 40%, rgba(0, 191 ,114, 1) 60%, rgba(168, 235 ,18, 1) 80%)",
      "background: linear-gradient(270deg, rgba(112, 225, 245, 1), rgba(255, 209, 148, 1))",
      "background: linear-gradient(90deg, rgba(85, 98, 112, 1), rgba(255, 107, 107, 1))",
      "background: linear-gradient(90deg, rgba(120, 2, 6,1), rgba(6, 17, 97,1))",
      "background: linear-gradient(120deg, rgba(45, 195, 195,1), rgba(158, 17, 17,1))",
      "background: linear-gradient(90deg, rgba(255, 78, 80,1), rgba(249, 212, 35,1))",
      "background: linear-gradient(90deg, rgba(255,239,0,1) 0%, rgba(127,164,8,1) 35%, rgba(0,212,255,1) 100%)",
      "background: rgba(240, 236, 227,1)",
      "background: rgba(223, 211, 195, 1)",
      "background: rgba(199, 177, 152,1)",
      "background: rgba(221, 221, 221,1)",
      "background: rgba(243, 225, 225, 1)",
      "background: rgba(249, 249, 249, 1)",
      "background: rgba(252, 247, 187, 1)",
      "background: rgba(255, 236, 199, 1)",
      "background: rgba(181, 144, 202, 1)",
      "background: rgba(166, 177, 225, 1)",
      "background: rgba(229, 138, 138, 1)",
      "background: rgba(212, 235, 208, 1)",
      "background: rgba(186, 223, 219, 1)",
      "background: rgba(255, 241, 172, 1)",
      "background: rgba(249, 188, 221, 1)",
      "background: rgba(56, 81, 112, 1)",
      "background: rgba(238, 238, 238, 1)"
    ];
    this.setEvents();
  }
  onServiceClick(visible, reinit) {
    if (visible || reinit) {
      this.fireEventAboutMe();
    }
  }
  //-------------EVENTS--------------
  setEvents() {
    mls.events.addEventListener([3], ["DSStyleChanged"], (ev) => {
      this.onstylechanged(ev.desc);
    });
    mls.events.addEventListener([3], ["DSStyleSelected"], (ev) => {
      this.onDSStyleSelected(ev);
    });
    mls.events.addEventListener([3], ["DSStyleUnSelected"], (ev) => {
      this.onDSStyleUnSelected(ev);
    });
    mls.events.addEventListener([3], ["DSStyleCursorChanged"], (ev) => {
      this.onDSStyleCursorChanged(ev);
    });
  }
  onstylechanged(desc) {
    const obj = JSON.parse(desc);
    if (obj.emitter === "left" && this.visible === "true" && obj.value.length > 0) {
      obj.value.forEach((i) => {
        if (!this.shadowRoot || !i.key) return;
        const value = i.value;
        const prop = i.key;
        if (!["background", "background-color"].includes(prop)) return;
        this.configString("background:" + value);
      });
    }
  }
  onDSStyleSelected(ev) {
    const params = ev.desc ? JSON.parse(ev.desc) : [];
    if (params.service.length > 0 && !params.service.includes(this.helper) || !this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", "A");
    this.showNav2Item(true);
  }
  onDSStyleUnSelected(ev) {
    const params = ev.desc ? JSON.parse(ev.desc) : [];
    if (params.service.includes(this.helper) || !this.serviceItemNav) return;
    this.serviceItemNav.setAttribute("mode", "H");
    this.showNav2Item(false);
  }
  onDSStyleCursorChanged(ev) {
    const rc = JSON.parse(ev.desc);
    if (rc.helper === this.helper) {
      if (this.visible === "true" || !this.serviceItemNav) return;
      this.serviceItemNav.click();
    }
  }
  //-------------COMPONENT-----------
  connectedCallback() {
    super.connectedCallback();
    this.updateMyMessages();
  }
  render() {
    const lang = this.getMessageKey(messages);
    this.msg = messages[lang];
    return html`<div class="container">${this.renderBody()}</div>`;
  }
  renderBody() {
    return html`
            <div class="showtransparent"></div>
            <div class="showres" style="${this.css}"></div>
            <div class="showConfigContainer" >
                
                <div class="showConfig" >
                    ${this.renderConfig()}
                    ${this.renderItens()}
                </div>
                <div class="showConfig" style="border-left: 1px solid #dfe1e6;" >
                    <h4 style="text-align:center;margin-bottom:1rem">${this.msg.gallery}</h4>
                    ${this.renderGallery()}
                </div>
            </div>

        `;
  }
  renderConfig() {
    if (this.info.tp === "background") {
      return html`
                <div class="showConfigItem">
                    <div class="active" style="border: 1px solid #d0cccc; font-size: 80%; padding: 0.2rem; border-radius: 5px; width:130px; text-align:center; cursor:pointer">${this.msg.background}</div>
                </div>
            `;
    } else if (this.info.tp !== "") {
      return html`
                <div class="showConfigItem" style="flex-direction:row; margin-bottom:10px">
                    <div class="${this.info.tp === "linear-gradient" ? "active" : ""}" style="border: 1px solid #d0cccc; font-size: 80%; padding: 0.2rem; border-top-left-radius: 5px; border-bottom-left-radius: 5px; border-right:0px; width:130px; text-align:center; cursor:pointer" @click="${() => this.changeType("linear-gradient")}">Linear-gradient</div>
                    <div class="${this.info.tp === "radial-gradient" ? "active" : ""}" style="border: 1px solid #d0cccc; font-size: 80%; padding: 0.2rem; border-top-right-radius: 5px; border-bottom-right-radius: 5px; width:130px; text-align:center; cursor:pointer" @click="${() => this.changeType("radial-gradient")}">Radial-gradient</div>
                </div>
                ${this.renderAux()}
            `;
    } else {
      return html``;
    }
  }
  renderAux() {
    if (this.info.tp !== "linear-gradient") return html``;
    return html`
            <div class="showConfigItem" style="flex-direction:row;  margin-bottom:10px">
                <span style="width:50px;text-align:center;font-size:80%; color:#6d6d6d;">${this.msg.angle}:</span>
                <input type="number" style="width:50px;text-align:center;font-size:80%; color:#6d6d6d; " .value=${this.onlyNumber(this.info.aux)} prop="aux" @input="${(e) => this.onChangeAux("aux")}"/>
            </div>
        `;
  }
  renderItens() {
    return html`
            <div class="showConfigItem">
                <div style="display:flex; gap:.5rem; font-size:80%; color:#6d6d6d;margin-bottom:.5rem">
                    <div style="width:50px;text-align:center; ">${this.msg.color}</div> 
                    <div style="width:132px;text-align:center;">${this.msg.transparency}</div> 
                    <div style="width:60px;text-align:center;" >${this.msg.stop}</div>
                    <div style="width:50px;text-align:center; cursor:pointer" @click="${this.add}">${this.msg.add}</div>
                </div>  
                ${repeat(
      this.info.itens,
      (key) => key.value,
      (i, index) => {
        return html`
                        <div style="display:flex; gap:.5rem;margin-bottom:.5rem" index="${index}" class="groupEdit">
                            <input type="color" .value="${i.value}" style="width:50px" prop="color" index="${index}" @change="${(e) => this.onChangeProp(index)}"/> 
                            <input type="range" min="0" max="100" .value="${i.transp}" style="width:132px" prop="transp" index="${index}" @input="${(e) => this.onChangeProp(index)}"/> 
                            <input type="number" style="width:50px" min="0" max="100" .value="${i.stop}" prop="stop" index="${index}" @input="${(e) => this.onChangeProp(index)}"></input>
                            <div style="width:50px;text-align:center;font-size:80%; color:#6d6d6d;cursor:pointer" @click="${(e) => this.del(index)}">${this.msg.del}</div>
                        </div>    
                    `;
      }
    )}
            </div>
        `;
  }
  renderGallery() {
    return html`
            <div style="display:flex; gap:.5rem; flex-wrap:wrap">
            ${repeat(
      this.arrayGallery,
      (key) => key,
      (css2, index) => {
        return html`<div style="width:40px; border-radius:5px; height:30px; cursor:pointer;${css2}" @click="${this.clickGallery}" .gallery=${css2}></div>`;
      }
    )}
            </div>
        `;
  }
  //-------------IMPLEMENTS--------------
  clickGallery(e) {
    const el = e.target;
    if (!el) return;
    const css2 = el["gallery"];
    this.configString(css2);
    this.mountMyValue();
  }
  onlyNumber(str) {
    const regexNum = /(\d+(?:\.\d+)?)/;
    const res = str.match(regexNum);
    return res && res[0] ? res[0] : "";
  }
  changeType(tp) {
    if (this.info.tp === tp) return;
    if (tp === "linear-gradient") {
      this.info.tp = "linear-gradient";
      this.info.aux = "90deg";
    } else if (tp === "radial-gradient") {
      this.info.tp = "radial-gradient";
      this.info.aux = "circle";
    }
    this.mountMyValue();
  }
  add() {
    this.info.itens.push({ value: "#000000", transp: "100", stop: "100" });
    if (this.info.itens.length >= 2 && this.info.tp === "background") {
      this.info.tp = "linear-gradient";
      this.info.aux = "84deg";
    }
    this.mountMyValue();
  }
  del(index) {
    this.info.itens.splice(index, 1);
    if (this.info.itens.length <= 1 && this.info.tp !== "background") {
      this.info.tp = "background";
      this.info.aux = "";
    }
    this.mountMyValue();
  }
  configString(str) {
    this.css = str;
    this.info = { tp: "", aux: "", itens: [] };
    if (str.indexOf("linear-gradient") >= 0) {
      this.info.tp = "linear-gradient";
    } else if (str.indexOf("radial-gradient") >= 0) {
      this.info.tp = "radial-gradient";
    } else {
      this.info.tp = "background";
    }
    if (this.info.tp === "background") {
      let cl = str.split(":")[1];
      if (cl.indexOf("rgb") >= 0) cl = this.rgbaToHex(cl).vl;
      this.info.itens = [{ value: cl, transp: "100", stop: "" }];
    } else {
      let ar = [];
      str = str.substr(str.indexOf("("));
      str = this.changeStr(str);
      ar = str.split(",");
      const auxCount = 100 / (ar.length - 1);
      ar.forEach((i, idx) => {
        if (idx === 0) {
          this.info.aux = i;
          return;
        }
        if (i.indexOf("#") >= 0 || i.indexOf("abgr") >= 0 || i.indexOf("bgr") >= 0) {
          let vl = "";
          let start = auxCount * idx + "";
          const a2 = i.trim().split(" ");
          if (a2.length > 0) vl = a2[0].replace("abgr", "rgba").replace("bgr", "rgb").replace(/;/g, ",");
          if (a2.length > 1) start = a2[1].replace("%", "");
          if (vl === "") return;
          let vlI = { vl, transp: "100" };
          if (vl.indexOf("rgb") >= 0) {
            vlI = this.rgbaToHex(vl);
          }
          if (!this.info.itens) this.info.itens = [{ value: vlI.vl, transp: vlI.transp, stop: start }];
          else this.info.itens.push({ value: vlI.vl, transp: vlI.transp, stop: start });
        }
      });
    }
  }
  rgbaToHex(rgbaString) {
    const match = rgbaString.match(/(\d+(?:\.\d+)?)/g);
    if (!match) {
      return { vl: "", transp: "" };
    }
    const r = parseInt(match[0], 10);
    const g = parseInt(match[1], 10);
    const b = parseInt(match[2], 10);
    const a = match[3] ? (+match[3] * 100).toString() : "100";
    const toHex = (component) => {
      const hex = component.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    const hexR = toHex(r);
    const hexG = toHex(g);
    const hexB = toHex(b);
    const hexColor = `#${hexR}${hexG}${hexB}`;
    return { vl: hexColor, transp: a };
  }
  hexToRgba(hex, alpha = 1) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  changeStr(s) {
    if (s.indexOf("rgba") >= 0 || s.indexOf("rgb") >= 0) {
      let tp = s.indexOf("rgba") >= 0 ? "rgba" : "rgb";
      let tpR = s.indexOf("rgba") >= 0 ? "abgr" : "bgr";
      let newst = "";
      let oldstr = "";
      let st = s.indexOf(tp);
      let ste = -1;
      st = s.substr(st).indexOf("(") + st;
      ste = s.substr(st).indexOf(")") + st;
      newst = s.slice(st, ste);
      oldstr = newst;
      newst = newst.replace(/ ,/g, ",").replace(/, /g, ",").replace(/,/g, ";");
      s = s.replace(oldstr, newst).replace(tp, tpR);
      return this.changeStr(s);
    } else {
      if (s.indexOf("(") === 0) s = s.substr(1);
      if (s.lastIndexOf(")") === s.length - 1) s = s.substring(0, s.length - 1);
      if (s.lastIndexOf(");") === s.length - 2) s = s.substring(0, s.lastIndexOf(");"));
      return s;
    }
  }
  onChangeProp(index) {
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      if (!this.shadowRoot) return;
      const el = this.shadowRoot.querySelector('.groupEdit[index="' + index + '"]');
      if (!el) return;
      this.changeValues(el, index);
    }, 500);
  }
  onChangeAux(prop) {
    clearTimeout(this.timeonChangeProp);
    this.timeonChangeProp = setTimeout(() => {
      if (!this.shadowRoot) return;
      const el = this.shadowRoot.querySelector('*[prop="' + prop + '"]');
      this.info.aux = el.value + "deg";
      this.mountMyValue();
    }, 500);
  }
  changeValues(el, idx) {
    const elC = el.querySelector('input[prop="color"]');
    const elT = el.querySelector('input[prop="transp"]');
    const elS = el.querySelector('input[prop="stop"]');
    if (!elC || !elT || !elS || !this.info.itens[idx]) return;
    this.info.itens[idx].value = elC.value;
    this.info.itens[idx].transp = elT.value;
    this.info.itens[idx].stop = elS.value;
    this.info.itens.sort((a, b) => a.stop - b.stop);
    this.mountMyValue();
  }
  mountMyValue() {
    const aux = "background:";
    let text = "";
    if (this.info.tp === "background" && this.info.itens.length > 0) {
      text = this.hexToRgba(this.info.itens[0].value, +this.info.itens[0].transp / 100);
    } else if (this.info.itens.length > 0) {
      text = `${this.info.tp}( ${this.info.aux},`;
      this.info.itens.forEach((i, idx) => {
        const aux2 = idx === this.info.itens.length - 1 ? "" : ",";
        text = text + ` ${this.hexToRgba(i.value, +i.transp / 100)} ${i.stop}%${aux2}`;
      });
      text = text + ")";
    }
    this.css = aux + text;
    this.info = Object.assign({}, this.info);
    this.emitEvent({ key: "background", value: text });
  }
  fireEventAboutMe() {
    const rc = {
      emitter: "right-get"
    };
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc), 500);
  }
  emitEvent(obj) {
    if (this.myUpp) return;
    const rc = {
      emitter: this.position,
      value: [obj, { key: "background-color", value: "" }],
      helper: this.helper
    };
    if (typeof mls !== "object") return;
    mls.events.fire([3], ["DSStyleChanged"], JSON.stringify(rc));
  }
  showLoader(loader) {
    clearTimeout(this.timeLoader);
    this.timeLoader = setTimeout(() => {
      this.loading = loader;
    }, 200);
  }
  updateMyMessages() {
    if (!window["message"]) return;
    const m = window["message"];
    if (m.columnsCount) this.myMsg.columnsCount = m.columnsCount;
  }
}
_init = __decoratorStart(_a);
__decorateElement(_init, 5, "error", _error_dec, ServiceDsStyleBackground);
__decorateElement(_init, 5, "css", _css_dec, ServiceDsStyleBackground);
__decorateElement(_init, 5, "helper", _helper_dec, ServiceDsStyleBackground);
__decorateElement(_init, 5, "info", _info_dec, ServiceDsStyleBackground);
ServiceDsStyleBackground = __decorateElement(_init, 0, "ServiceDsStyleBackground", _ServiceDsStyleBackground_decorators, ServiceDsStyleBackground);
ServiceDsStyleBackground.styles = css`[[mls_getDefaultDesignSystem]]`;
__runInitializers(_init, 1, ServiceDsStyleBackground);
export {
  ServiceDsStyleBackground
};
