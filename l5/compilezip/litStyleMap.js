/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { noChange } from "./_100554_litHtml";
import {
  directive,
  Directive,
  PartType
} from "./_100554_litDirectives";
const important = "important";
const importantFlag = " !" + important;
const flagTrim = 0 - importantFlag.length;
class StyleMapDirective extends Directive {
  constructor(partInfo) {
    var _a;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "style" || ((_a = partInfo.strings) == null ? void 0 : _a.length) > 2) {
      throw new Error(
        "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
      );
    }
  }
  render(styleInfo) {
    return Object.keys(styleInfo).reduce((style, prop) => {
      const value = styleInfo[prop];
      if (value == null) {
        return style;
      }
      prop = prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
      return style + `${prop}:${value};`;
    }, "");
  }
  update(part, [styleInfo]) {
    const { style } = part.element;
    if (this._previousStyleProperties === void 0) {
      this._previousStyleProperties = /* @__PURE__ */ new Set();
      for (const name in styleInfo) {
        this._previousStyleProperties.add(name);
      }
      return this.render(styleInfo);
    }
    this._previousStyleProperties.forEach((name) => {
      if (styleInfo[name] == null) {
        this._previousStyleProperties.delete(name);
        if (name.includes("-")) {
          style.removeProperty(name);
        } else {
          style[name] = "";
        }
      }
    });
    for (const name in styleInfo) {
      const value = styleInfo[name];
      if (value != null) {
        this._previousStyleProperties.add(name);
        const isImportant = typeof value === "string" && value.endsWith(importantFlag);
        if (name.includes("-") || isImportant) {
          style.setProperty(
            name,
            isImportant ? value.slice(0, flagTrim) : value,
            isImportant ? important : ""
          );
        } else {
          style[name] = value;
        }
      }
    }
    return noChange;
  }
}
const styleMap = directive(StyleMapDirective);
export {
  styleMap
};