/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
const supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === void 0 || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = /* @__PURE__ */ new WeakMap();
class CSSResult {
  constructor(cssText, strings, safeToken) {
    // This property needs to remain unminified.
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      const cacheable = strings !== void 0 && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === void 0) {
        (this._styleSheet = styleSheet = new CSSStyleSheet())["replaceSync"](
          this.cssText
        );
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const textFromCSSResult = (value) => {
  if (value["_$cssResult$"] === true) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(
      `Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`
    );
  }
};
const unsafeCSS = (value) => new CSSResult(
  typeof value === "string" ? value : String(value),
  void 0,
  constructionToken
);
const css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce(
    (acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1],
    strings[0]
  );
  return new CSSResult(
    cssText,
    strings,
    constructionToken
  );
};
const adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map(
      (s) => s instanceof CSSStyleSheet ? s : s.styleSheet
    );
  } else {
    styles.forEach((s) => {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    });
  }
};
const cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === void 0 ? (s) => s : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
export {
  CSSResult,
  adoptStyles,
  css,
  getCompatibleStyle,
  supportsAdoptingStyleSheets,
  unsafeCSS
};
