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
import { convertFileNameToTag } from "./_100554_utilsLit";
import { getPropierties } from "./_100554_propiertiesLit";
import { getComponentDependencies } from "./_100554_dependenciesLit";
import { validateTagName, validateRender } from "./_100554_validateLit";
import { setCodeLens } from "./_100554_codeLensLit";
import { injectStyle, getCssWithoutTag } from "./_100554_processCssLit";
const getAddNewFileDetails = () => {
  return [
    {
      title: "Criar um arquivo em branco",
      description: "Criar um arquivo em branco em lit 3.",
      tags: ["lit", "html", "component"],
      example: ``,
      aimActionSuggest: ""
    },
    {
      title: "Criar um web component em lit",
      description: "Criar um web component em lit 3 ,que ser\uFFFD utilizado em p\uFFFDginas.\n O Lit \uFFFD um framework para criar web componentes r\uFFFDpidos e com atualiza\uFFFD\uFFFDes din\uFFFDmicas sem ter que repintar toda a tela.\n Ap\uFFFDs criar o arquivo use a intelig\uFFFDncia artificial para preparar o web component.",
      tags: ["lit", "html", "component"],
      example: `
import { html, css, LitElement } from 'lit'; 
import { customElement, property } from 'lit/decorators.js';

@customElement('[tagName]')
export class [className] extends LitElement {
    
    static styles = css\`[[mls_getDefaultDesignSystem]]\`;

    @property() 
    name: string = 'Somebody';

    render() {
        return html\`<p> Hello, \${ this.name } !</p>\`;
    }
}`,
      aimActionSuggest: "_100554_aimActionAddIca"
    }
  ];
};
const requires = [
  {
    type: "tspath",
    name: "lit",
    ref: "file://server/_100554_litElement.ts"
  },
  {
    type: "tspath",
    name: "lit/decorators.js",
    ref: "file://server/_100554_litDecorators.ts"
  },
  {
    type: "cdn",
    name: "lit",
    ref: "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js"
  },
  {
    type: "cdn",
    name: "lit/decorators.js",
    ref: "https://cdn.jsdelivr.net/npm/lit@3.0.0/decorators/+esm"
  }
];
const getDefaultHtmlExamplePreview = (model) => {
  const tag = convertFileNameToTag(`_${model.storFile.project}_${model.storFile.shortName}`);
  return `<${tag}></${tag}>`;
};
const getDesignDetails = (model) => {
  return new Promise((resolve, reject) => {
    try {
      const ret = {};
      ret.defaultHtmlExamplePreview = getDefaultHtmlExamplePreview(model);
      ret.properties = getPropierties(model);
      ret.webComponentDependencies = getComponentDependencies(model);
      ret["servicePreviewDefault"] = "_100529_service_preview";
      resolve(ret);
    } catch (e) {
      reject(e);
    }
  });
};
const onAfterChange = (mfile) => __async(void 0, null, function* () {
  try {
    setCodeLens(mfile);
    if (validateTagName(mfile)) {
      mls.events.fireFileAction("statusOrErrorChanged", mfile.storFile, "left");
      mls.events.fireFileAction("statusOrErrorChanged", mfile.storFile, "right");
      return;
    }
    if (validateRender(mfile)) {
      mls.events.fireFileAction("statusOrErrorChanged", mfile.storFile, "left");
      mls.events.fireFileAction("statusOrErrorChanged", mfile.storFile, "right");
      return;
    }
  } catch (e) {
    return e.message || e;
  }
});
const onAfterCompile = (mfile) => __async(void 0, null, function* () {
  yield injectStyle(mfile, 0);
  return;
});
function setStylesProcessed(newCss, el, tag) {
  return __async(this, null, function* () {
    const cssWithoutTag = getCssWithoutTag(newCss, tag);
    if (!el.shadowRoot) return;
    const stylesheet = createStyleSheet(cssWithoutTag, el.ownerDocument.defaultView);
    if (!stylesheet) return;
    el.shadowRoot.adoptedStyleSheets = [stylesheet];
    el.requestUpdate();
  });
}
function createStyleSheet(cssString, defaultView) {
  const sheet = new defaultView.CSSStyleSheet();
  sheet.replaceSync(cssString);
  return sheet;
}
export {
  getAddNewFileDetails,
  getDefaultHtmlExamplePreview,
  getDesignDetails,
  onAfterChange,
  onAfterCompile,
  requires,
  setStylesProcessed
};
