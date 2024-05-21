var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { setErrorOnModel } from "./_100554_validateLit";
function setCodeLens(mfile) {
  clearCodeLens(mfile);
  const { model, compilerResults } = mfile;
  const { decorators } = compilerResults;
  if (mfile.shortName === "enhancementLit" && mfile.project === 100554) return;
  setCodeLensDecoratorClass(model, decorators);
  setCodeLensMlsComponents(model, mfile);
  setCodeLensServiceDetails(model, mfile);
}
function clearCodeLens(mfile) {
  for (let slineNr in mfile.codeLens) {
    const codeLen = mfile.codeLens[slineNr];
    if (codeLen[0].id === "helpAssistant") {
      mls.l2.codeLens.removeCodeLen(mfile.model, Number.parseInt(slineNr));
    }
  }
}
function setCodeLensDecoratorClass(model, decorators) {
  const objDecorators = JSON.parse(decorators);
  Object.entries(objDecorators).forEach((entrie) => {
    const decoratorInfo = entrie[1];
    if (!decoratorInfo || decoratorInfo.type !== "ClassDeclaration") return;
    decoratorInfo.decorators.forEach((_decorator) => {
      if (_decorator.text.startsWith("customElement(")) {
        mls.l2.codeLens.addCodeLen(model, _decorator.line + 1, { id: "helpAssistant", title: `customElement`, jsComm: "", refs: "codelens-custom-element-100554" });
      }
    });
  });
}
function setCodeLensServiceDetails(model, mfile) {
  return __async(this, null, function* () {
    const lines = findLinesByText(model, "public details: IService");
    lines.forEach((line) => {
      mls.l2.codeLens.addCodeLen(model, line, { id: "helpAssistant", title: `serviceDetails`, jsComm: "", refs: "codelens-service-details-100554" });
    });
  });
}
function setCodeLensMlsComponents(model, mfile) {
  return __async(this, null, function* () {
    const errorInfo = {
      line: 0,
      start: 0,
      end: 0
    };
    const lines = findLinesByText(model, "@mlsComponentDetails");
    lines.forEach((line) => {
      errorInfo.line = line;
      mls.l2.codeLens.addCodeLen(model, line, { id: "helpAssistant", title: `mlsComponentDetails`, jsComm: "", refs: "codelens-component-details-100554" });
    });
    const mModule = yield mls.l2.enhancement.getEnhancementInstance(mfile);
    if (!mModule) return;
    const obj = yield mModule.getDesignDetails(mfile);
    let hasError = lines.length > 1 ? "only one dependency declaration is valid." : "";
    if (!hasError) {
      for (let i of obj.webComponentDependencies) {
        if (!mls.l2.editor.mfiles[i]) {
          hasError = i;
          break;
        }
      }
    }
    if (hasError) {
      mfile.storFile.hasError = true;
      const text = model.getLineContent(errorInfo.line);
      errorInfo.end = text.length;
      setErrorOnModel(model, errorInfo.line, errorInfo.start, errorInfo.end, hasError.startsWith("onl") ? hasError : `Not found dependence: ${hasError}`, monaco.MarkerSeverity.Error);
      mls.events.fireFileAction("statusOrErrorChanged", mfile.storFile, "left");
      mls.events.fireFileAction("statusOrErrorChanged", mfile.storFile, "right");
    }
  });
}
function findLinesByText(model, textToFind) {
  const lines = [];
  if (!model) return lines;
  const lineCount = model.getLineCount();
  for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
    const lineText = model.getLineContent(lineNumber);
    if (lineText.includes(textToFind)) {
      lines.push(lineNumber);
    }
  }
  return lines;
}
export {
  setCodeLens
};
