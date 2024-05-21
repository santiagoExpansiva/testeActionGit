/// <mls shortName="codelensComponentDetails" project="100554" enhancement="_100554_enhancementLit" groupName="internal" />

import { html, css, LitElement, unsafeHTML } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CollabLitElement } from './_100554_collabLitElement';

export function initCodelensComponentDetails() {
    return true;
}

/// **collab_i18n_start**
const message_pt = {
    usage: 'Uso',
    p1: 'O par�metro mlsComponentDetails � usado para determinar se h� depend�ncias em quaisquer componentes da web. Esta defini��o � importante para o funcionamento/compila��o adequada do componente.<br> Para fazer esta defini��o, use JsDoc no in�cio do arquivo, configurando a tag mlsComponentDetails.'
}

const message_en = {
    usage: 'Usage',
    p1: 'The parameter mlsComponentDetails is used to determine if there are any dependencies on any web components. This definition is important for the proper functioning/compilation of the component.<br> To make this definition, use JsDoc at the beginning of the file, setting the mlsComponentDetails tag.'
}

type MessageType = typeof message_en;

const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**
@customElement('codelens-component-details-100554')
export class CodeLensComponentDetails100554 extends CollabLitElement {

    private msg: MessageType = messages['en'];
    
    static styles = css`[[mls_getDefaultDesignSystem]]`;

    textCode = `
        /**
         <br>
         * @mlsComponentDetails {"webComponentDependencies": ["my-web-component-100541"]}
        <br>
         */
        <br>
        <br>

        import { html, LitElement } from 'lit';
        <br>
        import { customElement } from 'lit/decorators.js';
        <br>
         <br>
        @customElement('example-100541')
        <br>
        export class Example extends LitElement { [...] }

    `
    render() {

        const lang = this.getMessageKey(messages);
        this.msg = messages[lang];

        return html`
        <h1> mlsComponentDetails</h1>
        <p> ${this.msg.p1} </p>
        
        <hr>
        <h2>${this.msg.usage}:</h2>
        <code>${unsafeHTML(this.textCode)}</code>

        `;
    }
}
