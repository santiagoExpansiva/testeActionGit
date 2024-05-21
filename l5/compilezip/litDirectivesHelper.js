/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;
import {
  _$LH
} from "./_100554_litHtml";
const { _ChildPart: ChildPart } = _$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) == null ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) == null ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
const isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
const TemplateResultType = {
  HTML: 1,
  SVG: 2
};
const isTemplateResult = (value, type) => type === void 0 ? (
  // This property needs to remain unminified.
  (value == null ? void 0 : value["_$litType$"]) !== void 0
) : (value == null ? void 0 : value["_$litType$"]) === type;
const isCompiledTemplateResult = (value) => {
  var _a2;
  return ((_a2 = value == null ? void 0 : value["_$litType$"]) == null ? void 0 : _a2.h) != null;
};
const isDirectiveResult = (value) => (
  // This property needs to remain unminified.
  (value == null ? void 0 : value["_$litDirective$"]) !== void 0
);
const getDirectiveClass = (value) => (
  // This property needs to remain unminified.
  value == null ? void 0 : value["_$litDirective$"]
);
const isSingleExpression = (part) => part.strings === void 0;
const createMarker = () => document.createComment("");
const insertPart = (containerPart, refPart, part) => {
  var _a2;
  const container = wrap(containerPart._$startNode).parentNode;
  const refNode = refPart === void 0 ? containerPart._$endNode : refPart._$startNode;
  if (part === void 0) {
    const startNode = wrap(container).insertBefore(createMarker(), refNode);
    const endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(
      startNode,
      endNode,
      containerPart,
      containerPart.options
    );
  } else {
    const endNode = wrap(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      (_a2 = part._$reparentDisconnectables) == null ? void 0 : _a2.call(part, containerPart);
      part._$parent = containerPart;
      let newConnectionState;
      if (part._$notifyConnectionChanged !== void 0 && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;
      while (start !== endNode) {
        const n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
const setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);
  return part;
};
const RESET_VALUE = {};
const setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
const getCommittedValue = (part) => part._$committedValue;
const removePart = (part) => {
  var _a2;
  (_a2 = part._$notifyConnectionChanged) == null ? void 0 : _a2.call(part, false, true);
  let start = part._$startNode;
  const end = wrap(part._$endNode).nextSibling;
  while (start !== end) {
    const n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
const clearPart = (part) => {
  part._$clear();
};
export {
  TemplateResultType,
  clearPart,
  getCommittedValue,
  getDirectiveClass,
  insertPart,
  isCompiledTemplateResult,
  isDirectiveResult,
  isPrimitive,
  isSingleExpression,
  isTemplateResult,
  removePart,
  setChildPartValue,
  setCommittedValue
};
