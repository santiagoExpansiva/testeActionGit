/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { noChange, nothing } from "./_100554_litHtml";
import {
  directive,
  Directive,
  PartType
} from "./_100554_litDirectives";
import { isSingleExpression, setCommittedValue } from "./_100554_litDirectivesHelper";
class LiveDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (!(partInfo.type === PartType.PROPERTY || partInfo.type === PartType.ATTRIBUTE || partInfo.type === PartType.BOOLEAN_ATTRIBUTE)) {
      throw new Error(
        "The `live` directive is not allowed on child or event bindings"
      );
    }
    if (!isSingleExpression(partInfo)) {
      throw new Error("`live` bindings can only contain a single expression");
    }
  }
  render(value) {
    return value;
  }
  update(part, [value]) {
    if (value === noChange || value === nothing) {
      return value;
    }
    const element = part.element;
    const name = part.name;
    if (part.type === PartType.PROPERTY) {
      if (value === element[name]) {
        return noChange;
      }
    } else if (part.type === PartType.BOOLEAN_ATTRIBUTE) {
      if (!!value === element.hasAttribute(name)) {
        return noChange;
      }
    } else if (part.type === PartType.ATTRIBUTE) {
      if (element.getAttribute(name) === String(value)) {
        return noChange;
      }
    }
    setCommittedValue(part);
    return value;
  }
}
const live = directive(LiveDirective);
export {
  live
};