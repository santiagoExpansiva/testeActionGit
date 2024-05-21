import { property } from "lit/decorators.js";
import { IcaState } from "./_100554_icaState";
const state1 = new IcaState();
function propertyCompositeDataSource(options) {
  return (proto, propName) => {
    property(options)(proto, propName);
    const key = String(propName);
    Object.defineProperty(proto, propName, {
      get() {
        const attrValue = this.getAttributeValueWithVariation(key);
        if (attrValue && attrValue.includes("{{")) {
          return this.parseCompositeData(attrValue);
        }
        return attrValue;
      },
      set(value) {
        if (typeof value === "string" && value.includes("{{")) {
          this[`_${key}`] = this.parseCompositeData(value, true);
          if (!window.globalStateManagment) window.globalStateManagment = state1;
        } else {
          this[`_${key}`] = value;
        }
        this.requestUpdate();
      }
    });
    proto.parseCompositeData = function(templateStr, add = false) {
      const pattern = /\{\{(.*?)\}\}/g;
      let match;
      let composedData = templateStr;
      while (match = pattern.exec(templateStr)) {
        const stateKey = match[1].trim();
        if (add && this.hasOwnProperty("stateKeys")) this.stateKeys.add(key + ";" + stateKey);
        const resolvedValue = state1.getState(stateKey) || "";
        composedData = composedData.replace(match[0], resolvedValue);
      }
      return composedData;
    };
    proto.getAttributeValueWithVariation = function(key2) {
      return getAttributeValueWithVariation(key2, this);
    };
  };
}
function propertyDataSource(options) {
  return (proto, propName) => {
    property(options)(proto, propName);
    const key = String(propName);
    Object.defineProperty(proto, propName, {
      get() {
        const attrValue = this.getAttributeValueWithVariation(key);
        if (attrValue && attrValue.includes("{{") && attrValue.includes("}}")) {
          const stateKey = attrValue.replace(/[{{}}]/g, "").trim();
          return state1.getState(stateKey);
        }
        if (typeof this[`_${key}`] === "object" || Array.isArray(this[`_${key}`])) return this[`_${key}`];
        return attrValue;
      },
      set(value) {
        if (typeof value === "string" && value.startsWith("{{") && value.endsWith("}}")) {
          const stateKey = value.replace(/[{{}}]/g, "").trim();
          if (this.hasOwnProperty("stateKeys")) this.stateKeys.add(key + ";" + stateKey);
          this[`_${key}`] = state1.getState(stateKey);
          if (!window.globalStateManagment) window.globalStateManagment = state1;
        } else if (typeof value === "string" && ((value.startsWith("[") || value.startsWith("{")) && (value.endsWith("]") || value.endsWith("}")))) {
          this[`_${key}`] = JSON.parse(value);
        } else {
          if (this.hasAttribute(key) && this.getAttribute(key).includes("{{") && this.getAttribute(key).includes("}}")) {
            const dynamicKey = this.getAttribute(key).replace(/[{{}}]/g, "").trim();
            this[`_${key}`] = value;
            state1.setState(dynamicKey, value);
          } else this[`_${key}`] = value;
        }
        this.requestUpdate();
      }
    });
    proto.getAttributeValueWithVariation = function(key2) {
      return getAttributeValueWithVariation(key2, this);
    };
  };
}
function getAttributeValueWithVariation(key, proto) {
  const htmlLang = document.documentElement.lang;
  const lang = htmlLang.toLowerCase();
  const actualVariation = proto.globalVariation || 0;
  const languageByVariation = lang;
  const languageByVariationSimilar = languageByVariation.split("-")[0];
  const defaultValue = proto.getAttribute(key);
  if (actualVariation === 0) return defaultValue;
  const keyVariation = `${key}-${languageByVariation}`;
  const keyVariationSimilar = `${key}-${languageByVariationSimilar}`;
  let variationValue = proto.getAttribute(keyVariation);
  if (!variationValue) variationValue = proto.getAttribute(keyVariationSimilar);
  return variationValue || defaultValue;
}
export {
  propertyCompositeDataSource,
  propertyDataSource,
  state1
};
