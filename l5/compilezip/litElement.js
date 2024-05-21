/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
import { ReactiveElement } from "_100554_litReactiveElement";
import { render, noChange } from "_100554_litHtml";
export * from "_100554_litReactiveElement";
export * from "_100554_litHtml";
export * from "_100554_litClassMap";
export * from "_100554_litIfDefined";
export * from "_100554_litLive";
export * from "_100554_litStyleMap";
export * from "_100554_litDirectivesHelper";
export * from "_100554_litWhen";
const repeat = (array, func = () => {
}, func2 = () => {
}) => {
  console.info(array, func, func2);
};
const UpdatingElement = ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  const issuedWarnings = (_a = globalThis.litIssuedWarnings) != null ? _a : globalThis.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
class LitElement extends ReactiveElement {
  constructor() {
    super(...arguments);
    /**
     * @category rendering
     */
    this.renderOptions = { host: this };
    this.__childPart = void 0;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    var _a2, _b2;
    const renderRoot = super.createRenderRoot();
    (_b2 = (_a2 = this.renderOptions).renderBefore) != null ? _b2 : _a2.renderBefore = renderRoot.firstChild;
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = render(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    var _a2;
    super.connectedCallback();
    (_a2 = this.__childPart) == null ? void 0 : _a2.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback();
    (_a2 = this.__childPart) == null ? void 0 : _a2.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return noChange;
  }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement["finalized"] = true;
// This property needs to remain unminified.
LitElement["_$litElement$"] = true;
(_b = globalThis.litElementHydrateSupport) == null ? void 0 : _b.call(globalThis, { LitElement });
const polyfillSupport = DEV_MODE ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport == null ? void 0 : polyfillSupport({ LitElement });
if (DEV_MODE) {
  LitElement["finalize"] = function() {
    const finalized = ReactiveElement.finalize.call(this);
    if (!finalized) {
      return false;
    }
    const warnRemovedOrRenamed = (obj, name, renamed = false) => {
      if (obj.hasOwnProperty(name)) {
        const ctorName = (typeof obj === "function" ? obj : obj.constructor).name;
        issueWarning(
          renamed ? "renamed-api" : "removed-api",
          `\`${name}\` is implemented on class ${ctorName}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`
        );
      }
    };
    warnRemovedOrRenamed(this, "render");
    warnRemovedOrRenamed(this, "getStyles", true);
    warnRemovedOrRenamed(this.prototype, "adoptStyles");
    return true;
  };
}
const _$LE = {
  _$attributeToProperty: (el, name, value) => {
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: (el) => el._$changedProperties
};
((_c = globalThis.litElementVersions) != null ? _c : globalThis.litElementVersions = []).push("3.3.2");
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
  issueWarning(
    "multiple-versions",
    `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`
  );
}
export {
  LitElement,
  UpdatingElement,
  _$LE,
  repeat
};
