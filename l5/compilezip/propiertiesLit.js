var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function getPropierties(model) {
  let rc = [];
  rc = getPropiertiesByDecorators(model);
  rc = getMoreInfoInJsDoc(model, rc);
  return rc;
}
function getDefaultPropierties() {
  return [
    {
      propertyName: "class",
      propertyType: "string",
      sectionName: "principal",
      defaultValue: "",
      hint: "css classes"
    },
    {
      propertyName: "id",
      propertyType: "string",
      sectionName: "principal",
      defaultValue: "",
      pattern: "^[_a-zA-Z]\\w*$",
      hint: "identifier for javascript manipulation"
    }
  ];
}
function getPropiertiesByDecorators(model) {
  var _a;
  const decorators = (_a = model.compilerResults) == null ? void 0 : _a.decorators;
  if (!decorators) return [];
  const rc = [];
  const objDecorators = JSON.parse(decorators);
  Object.entries(objDecorators).forEach((entrie) => {
    const item = entrie[1];
    if (item.type === "PropertyDeclaration") {
      const propertyName = item.parentName;
      item.decorators.forEach((decorator) => {
        var _a2;
        if (decorator.text.startsWith("property(")) {
          const prop = {};
          const propertyType = (_a2 = getPropType(decorator.text)) == null ? void 0 : _a2.toLowerCase();
          prop["alias"] = getPropAttribute(decorator.text);
          prop.propertyName = propertyName;
          if (propertyType) prop.propertyType = propertyType;
          rc.push(prop);
        }
      });
    }
  });
  const defaultProps = getDefaultPropierties();
  return [...defaultProps, ...rc];
}
function getMoreInfoInJsDoc(model, propierties) {
  var _a;
  const devDoc = (_a = model.compilerResults) == null ? void 0 : _a.devDoc;
  if (!devDoc) return propierties;
  const objDocs = JSON.parse(devDoc);
  const jsDocProps = getJSDocPropierties(objDocs);
  for (let i = 0; i < propierties.length; i++) {
    let prop = propierties[i];
    const propInPropsJsDoc = jsDocProps.find((_prop) => _prop.propertyName === prop.propertyName);
    prop.propertyName = prop["alias"] || prop.propertyName;
    delete prop["alias"];
    if (propInPropsJsDoc) {
      prop = __spreadValues(__spreadValues({}, propInPropsJsDoc), prop);
      propierties[i] = prop;
    }
  }
  return propierties;
}
function getJSDocPropierties(objDocs) {
  const rc = [];
  for (const doc of objDocs) {
    if (doc.type !== "class") continue;
    const docMembersProp = doc.members.filter((m) => {
      const isProp = m.type === "property";
      let isLitProp = false;
      if (isProp) {
        const { modifiers } = m;
        isLitProp = isDecoratorProp(modifiers);
      }
      return isProp && isLitProp;
    });
    docMembersProp.forEach((prop) => {
      const propItem = {};
      const fieldType = getFieldTypeInfo(prop.tags);
      const sectionName = getSectionsTag(fieldType);
      const propType = getPropTypeTag(fieldType);
      propItem.hint = prop.comment;
      propItem.propertyName = prop.name;
      propItem.defaultValue = prop.initializerText || (fieldType == null ? void 0 : fieldType.defaultValue) || "";
      if (propType) propItem.propertyType = propType;
      if (sectionName) propItem.sectionName = sectionName;
      if (fieldType == null ? void 0 : fieldType.cols) propItem.cols = fieldType == null ? void 0 : fieldType.cols;
      if (fieldType == null ? void 0 : fieldType.rows) propItem.rows = fieldType == null ? void 0 : fieldType.rows;
      if (fieldType == null ? void 0 : fieldType.pattern) propItem.pattern = fieldType == null ? void 0 : fieldType.pattern;
      if (fieldType == null ? void 0 : fieldType.max) propItem.max = fieldType == null ? void 0 : fieldType.max;
      if (fieldType == null ? void 0 : fieldType.min) propItem.min = fieldType == null ? void 0 : fieldType.min;
      if (fieldType == null ? void 0 : fieldType.step) propItem.step = fieldType == null ? void 0 : fieldType.step;
      if (fieldType == null ? void 0 : fieldType.maxLength) propItem.maxLength = fieldType == null ? void 0 : fieldType.maxLength;
      if (propType === "list") {
        const itens = getItensByType(prop.initializerType);
        propItem.items = (fieldType == null ? void 0 : fieldType.items) || itens || [];
      }
      rc.push(propItem);
    });
  }
  return rc;
}
function getItensByType(initializerType) {
  if (!initializerType) return [];
  const regex = /"(.*?)"/g;
  const matches = initializerType.match(regex);
  if (matches) {
    const resultList = matches.map((match) => match.replace(/"/g, ""));
    return resultList;
  }
  return [];
}
function getPropType(propertyString) {
  const typeRegex = /type:\s*([A-Za-z]+)/;
  const match = propertyString.match(typeRegex);
  if (match && match.length > 1) {
    const typeProp = match[1];
    return typeProp;
  }
  return void 0;
}
function getPropAttribute(propertyString) {
  const typeRegex = /attribute:\s*['"]([^'"]+)['"]/;
  const match = propertyString.match(typeRegex);
  if (match && match.length > 1) {
    const attr = match[1];
    return attr;
  }
  return void 0;
}
function isDecoratorProp(modifiers) {
  if (!modifiers) return false;
  const searchStr = "@property(";
  for (const item of modifiers) {
    if (item.startsWith(searchStr)) return true;
  }
  return false;
}
function getFieldTypeInfo(tags) {
  const tag = tags.find((item) => item.tagName === "fieldType");
  if (!tag) return void 0;
  try {
    const rc = JSON.parse(tag.comment);
    return rc;
  } catch (err) {
    return void 0;
  }
}
function getSectionsTag(fieldType) {
  const defaultSection = "principal";
  if (!fieldType) return defaultSection;
  const { sectionName } = fieldType;
  if (!sectionName) return defaultSection;
  const valueFormated = sectionName.toLowerCase().trim();
  if (["principal", "optional", "advanced"].includes(valueFormated)) return valueFormated;
  return defaultSection;
}
function getPropTypeTag(fieldType) {
  const defaultType = "string";
  if (!fieldType) return defaultType;
  const { propertyType } = fieldType;
  if (!propertyType) return defaultType;
  const valueFormated = propertyType.toLowerCase().trim();
  if (["string", "number", "boolean", "list", "json"].includes(valueFormated)) return valueFormated;
  return defaultType;
}
export {
  getPropierties
};
