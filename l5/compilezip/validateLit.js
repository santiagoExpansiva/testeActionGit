import { convertFileNameToTag } from "./_100554_utilsLit";
function validateTagName(mfile) {
  mfile.storFile.hasError = false;
  clearErrorsOnModel(mfile.model);
  if (!mfile || !mfile.compilerResults) return false;
  if (mfile.shortName === "enhancementLit" && mfile.project === 100554) return false;
  const decorators = JSON.parse(mfile.compilerResults.decorators);
  if (!decorators) return false;
  const decoratorToCheck = "customElement";
  let rc = false;
  Object.entries(decorators).forEach((entrie) => {
    const decoratorInfo = entrie[1];
    if (!decoratorInfo || decoratorInfo.type !== "ClassDeclaration") return;
    decoratorInfo.decorators.forEach((_decorator) => {
      const decoratorInfo2 = getDecoratorClassInfo(_decorator.text);
      if (!decoratorInfo2 || decoratorInfo2.decoratorName !== decoratorToCheck) return;
      let correctTagName = convertFileNameToTag(`_${mfile.project}_${mfile.shortName}`);
      if (correctTagName !== decoratorInfo2.tagName) {
        rc = true;
        setErrorOnModel(mfile.model, _decorator.line + 1, decoratorToCheck.length + 3, _decorator.text.length + 1, `Invalid web component tag name, the correct definition is: ${correctTagName}`, monaco.MarkerSeverity.Error);
        mfile.storFile.hasError = true;
      }
    });
  });
  return rc;
}
function validateRender(mfile) {
  mfile.storFile.hasError = false;
  clearErrorsOnModel(mfile.model);
  if (!mfile || !mfile.compilerResults) return false;
  if (mfile.shortName === "enhancementLit" && mfile.project === 100554) return false;
  const shortName = `_${mfile.project}_${mfile.shortName}`;
  return verify(mfile.model, shortName, mfile);
}
function getDecoratorClassInfo(decoratorString) {
  const regex = /(\w+)\(['"](.+?)['"]\)/;
  const match = decoratorString.match(regex);
  let result = void 0;
  if (match && match.length > 2) {
    const decoratorName = match[1];
    const tagName = match[2];
    result = {
      decoratorName,
      tagName
    };
  }
  return result;
}
function getLineIndent(model, lineNumber) {
  if (model) {
    var lineContent = model.getLineContent(lineNumber);
    var match = lineContent.match(/^\s*/);
    return match ? match[0].length : 0;
  }
  return 0;
}
function setErrorOnModel(model, line, startColumn, endColumn, message, severity) {
  const lineIndent = getLineIndent(model, line);
  const markerOptions = {
    severity,
    message,
    startLineNumber: line,
    startColumn: startColumn + lineIndent,
    endLineNumber: line,
    endColumn: endColumn + lineIndent
  };
  monaco.editor.setModelMarkers(model, "markerSource", [markerOptions]);
}
function clearErrorsOnModel(model) {
  monaco.editor.setModelMarkers(model, "markerSource", []);
}
function verify(model, shortName, mfile) {
  const lines = model.getLinesContent();
  const tag = convertFileNameToTag(shortName);
  const msgError = `Do not use the same component tag (${tag}) inside the rendering, possible looping`;
  let htmlCount = 0;
  let rc = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    line = line.replace(/\/\/.*/, "");
    const lineInCommentBlock = isInCommentBlock(lines, i + 1);
    line = line.replace(/\s+/g, "");
    if (line.indexOf(`document.createElement('${tag}')`) >= 0 || line.indexOf(`document.createElement("${tag}")`) >= 0) {
      setErrorOnModel(model, i + 1, 0, line.length, msgError, monaco.MarkerSeverity.Warning);
      rc = true;
      break;
    }
    if (line.indexOf("html`") >= 0 && !lineInCommentBlock) htmlCount += 1;
    if (line.indexOf("`") >= 0 && line.indexOf("html`") === -1 && !lineInCommentBlock) htmlCount -= 1;
    if (htmlCount != 0) {
      if (line.indexOf("<" + tag) >= 0) {
        const column = model.getLineFirstNonWhitespaceColumn(i + 1);
        const length = model.getLineLength(i + 1);
        setErrorOnModel(model, i + 1, column, length, msgError, monaco.MarkerSeverity.Warning);
        rc = true;
        break;
      }
    }
  }
  return rc;
}
function isInCommentBlock(lines, lineNumber) {
  let countStartBlockComment = 0;
  let countEndBlockComment = 0;
  for (let i = 0; i <= lineNumber - 1; i++) {
    const line = lines[i];
    if (line.indexOf("/*") >= 0) countStartBlockComment += 1;
    if (line.indexOf("*/") >= 0 && i !== lineNumber - 1) countEndBlockComment += 1;
  }
  const isInBlockComment = countStartBlockComment > countEndBlockComment;
  return isInBlockComment;
}
;
export {
  setErrorOnModel,
  validateRender,
  validateTagName
};
