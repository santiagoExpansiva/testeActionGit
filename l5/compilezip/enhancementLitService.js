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
import {
  getDesignDetails as getDesignDetailsDefault,
  getDefaultHtmlExamplePreview as getDefaultHtmlExamplePreviewDefault,
  onAfterChange as onAfterChangeDefault,
  onAfterCompile as onAfterCompileDefault,
  requires as requiresDefault,
  setStylesProcessed as setStylesProcessedDefault
} from "./_100554_enhancementLit";
const message_pt = {
  title: "Criar um service em lit",
  description: "Criar um service em lit 3 ,que ser\uFFFD utilizado no sistema collab.\n O Lit \uFFFD um framework para criar web componentes r\uFFFDpidos e com atualiza\uFFFD\uFFFDes din\uFFFDmicas sem ter que repintar toda a tela.\n Ap\uFFFDs criar o arquivo use a intelig\uFFFDncia artificial para preparar o web component."
};
const message_en = {
  title: "Create a service in Lit",
  description: "Create a service in Lit 3, which will be used in the collab system.\n Lit is a framework for creating fast web components with dynamic updates without repainting the entire screen.\n After creating the file, use artificial intelligence to prepare the web component."
};
const messages = {
  "en": message_en,
  "pt": message_pt
};
const getMessageKey = (messages2) => {
  const keys = Object.keys(messages2);
  if (!keys || keys.length < 1) throw new Error("Error Message not valid for international");
  const firstKey = keys[0];
  const lang2 = (document.documentElement.lang || "").toLowerCase();
  if (!lang2) return firstKey;
  if (messages2.hasOwnProperty(lang2)) return lang2;
  const similarLang = keys.find((key) => lang2.substring(0, 2) === key);
  if (similarLang) return similarLang;
  return firstKey;
};
const lang = getMessageKey(messages);
const msg = messages[lang];
const getAddNewFileDetails = () => {
  return [
    {
      title: msg.title,
      description: msg.description,
      tags: ["lit", "internal", "service"],
      example: `
            import { html, css } from 'lit';
            import { customElement, property } from 'lit/decorators.js';
            import { ServiceBase, IService, IToolbarContent, IMenu } from './_100554_serviceBase';

            @customElement('[tagName]')
            export class [className] extends ServiceBase {

                static styles = css${"`[[mls_getDefaultDesignSystem]]`"};

                public details: IService = {
                    icon: '&#xf15b',
                    state: 'foreground',
                    position: 'right',
                    tooltip: 'Service Example',
                    visible: true,
                    widget: '[widgetName]',
                    level: [5]
                }

                public onClickLink = (op: string): boolean => {
                    if (this.menu.setMode) this.menu.setMode('initial');
                    return false;
                }

                public menu: IMenu = {
                    title: 'Example',
                    actions: {
                    },
                    icons: {},
                    actionDefault: '', // call after close icon clicked
                    setMode: undefined, // child will set this
                    onClickLink: this.onClickLink,
                    getLastMode: undefined,
                    updateTitle: undefined
                }

                onServiceClick(visible: boolean, reinit: boolean, el: IToolbarContent | null) {

                }


                @property() 
                name: string = 'Somebody';

                render() {
                    return html\`<p> Hello, \${ this.name } !</p>\`;
                }
            }`,
      aimActionSuggest: ""
    }
  ];
};
const requires = requiresDefault;
const getDefaultHtmlExamplePreview = (model) => {
  return getDefaultHtmlExamplePreviewDefault(model);
};
const getDesignDetails = (model) => {
  return getDesignDetailsDefault(model);
};
const onAfterChange = (mfile) => __async(void 0, null, function* () {
  return onAfterChangeDefault(mfile);
});
const onAfterCompile = (mfile) => __async(void 0, null, function* () {
  return onAfterCompileDefault(mfile);
});
const setStylesProcessed = (newCss, el, tag) => __async(void 0, null, function* () {
  return setStylesProcessedDefault(newCss, el, tag);
});
export {
  getAddNewFileDetails,
  getDefaultHtmlExamplePreview,
  getDesignDetails,
  onAfterChange,
  onAfterCompile,
  requires,
  setStylesProcessed
};
