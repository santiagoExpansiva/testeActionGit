import { convertTagToFileName } from "./_100554_utilsLit";
import { setErrorOnModel } from "./_100554_validateLit";
function getComponentDependencies(model) {
  const { devDoc } = model.compilerResults;
  if (!devDoc) return [];
  const objDocs = JSON.parse(devDoc);
  const tagsInfoString = getJsDocInfoTags(objDocs);
  if (!tagsInfoString) return [];
  const regex = /"webComponentDependencies"\s*:\s*(\[.*?\])/;
  const regexVerify = /"webComponentDependencies"\s*:\s*(\[.*?)/;
  const match = tagsInfoString.match(regex);
  const matchVerify = tagsInfoString.match(regexVerify);
  if (matchVerify && !match) {
    model.storFile.hasError = true;
    setErrorOnModel(model.model, 1, 0, 10, "Line breaks are not allowed in webComponentDependencies", monaco.MarkerSeverity.Error);
    mls.events.fireFileAction("statusOrErrorChanged", model.storFile, "left");
    mls.events.fireFileAction("statusOrErrorChanged", model.storFile, "right");
    return [];
  }
  let dependenciesArray = [];
  if (match && match.length === 2) {
    try {
      dependenciesArray = JSON.parse(match[1]);
      dependenciesArray = dependenciesArray.map((tag) => convertTagToFileName(tag));
    } catch (error) {
      model.storFile.hasError = true;
      setErrorOnModel(model.model, 1, 0, 10, "Error parsing webComponentDependencies array ", monaco.MarkerSeverity.Error);
      mls.events.fireFileAction("statusOrErrorChanged", model.storFile, "left");
      mls.events.fireFileAction("statusOrErrorChanged", model.storFile, "right");
      dependenciesArray = [];
    }
  }
  return dependenciesArray;
}
function getJsDocInfoTags(objDocs) {
  for (const doc of objDocs) {
    if (doc.type !== "constructor") continue;
    const tagComponentDetails = doc.tags.find((tag) => tag.tagName === "mlsComponentDetails");
    if (!tagComponentDetails) return "";
    return tagComponentDetails.comment;
  }
}
export {
  getComponentDependencies
};
