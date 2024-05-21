import { state1 } from "./_100554_icaDecorators";
import { CollabLitElement } from "./_100554_collabLitElement";
export * from "./_100554_icaDecorators";
const isTrace = false;
class IcaLitElement extends CollabLitElement {
  constructor() {
    super(...arguments);
    this.stateKeys = /* @__PURE__ */ new Set();
  }
  connectedCallback() {
    super.connectedCallback();
    if (isTrace) console.info(`connectedCallback, subscribe fields: ${Array.from(this.stateKeys)}`);
    state1.subscribe(Array.from(this.stateKeys), this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    state1.unsubscribe(Array.from(this.stateKeys), this);
  }
  /**
   * Handle state changes from IcaState.
   * @param key - The state key that changed.
   * @param value - The new value of the state.
   */
  handleIcaStateChange(key, value) {
    function isEqual(newValue, oldValue) {
      return JSON.stringify(newValue) === JSON.stringify(oldValue);
    }
    const ob1 = this;
    Array.from(this.stateKeys).forEach((stateKey) => {
      const [propName, path] = stateKey.split(";");
      if (path !== key || !ob1.hasAttribute(propName)) return;
      const propValue = ob1[`_${propName}`];
      if (!isEqual(value, propValue)) {
        ob1[`_${propName}`] = value;
        this.requestUpdate();
      }
    });
  }
}
export {
  IcaLitElement
};
