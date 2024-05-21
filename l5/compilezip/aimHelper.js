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
let tasks = [];
let lastReadFromServer = void 0;
function executePrompt(taskIndex) {
  return __async(this, null, function* () {
    if (taskIndex < 0 || taskIndex >= tasks.length) throw new Error(`invalid task index`);
    const project = mls.actual[5].project || 0;
    if (project < 1) throw new Error(`invalid project ${project}`);
    const taskRoot = __spreadValues({}, tasks[taskIndex]);
    let tasksToExecute = 0;
    for (const child of taskRoot.children) {
      if (child.mode === "initializing") tasksToExecute++;
      if (child.mode === "in progress") child.mode = "error";
      child._tempResult = void 0;
    }
    if (tasksToExecute < 1 || tasksToExecute > 3) throw new Error(`invalid tasks to execute, tasksToExecute=${tasksToExecute}`);
    const resp = yield mls.api.cbeAiTask(project, taskRoot, "execute LLM");
    if (resp.msg !== "ok") throw new Error("error on api prompt: " + resp.msg);
    if (resp.task) tasks[taskIndex] = __spreadValues(__spreadValues({}, tasks[taskIndex]), resp.task);
    return resp.task;
  });
}
function updateTaskOnServer(taskIndex) {
  return __async(this, null, function* () {
    if (taskIndex < 0 || taskIndex >= tasks.length) throw new Error(`invalid task index`);
    const project = mls.actual[5].project || 0;
    if (project < 1) throw new Error(`invalid project ${project}`);
    const taskRoot = __spreadValues({}, tasks[taskIndex]);
    const resp = yield mls.api.cbeAiTask(project, taskRoot, "update record");
    if (resp.msg !== "ok") throw new Error("error on api prompt: " + resp.msg);
    if (resp.task) tasks[taskIndex] = __spreadValues(__spreadValues({}, tasks[taskIndex]), resp.task);
    return resp.task;
  });
}
const timeToWait = 5 * 60 * 1e3;
function readTasksFromServer(filtedBy, filter) {
  return __async(this, null, function* () {
    if (lastReadFromServer) {
      const timeSinceLastRead = (/* @__PURE__ */ new Date()).getTime() - lastReadFromServer.getTime();
      if (timeSinceLastRead < timeToWait) return;
    }
    lastReadFromServer = /* @__PURE__ */ new Date();
    const rc = yield mls.api.cbeAiTaskList(mls.actual[5].project || 0, "all", "");
    if (rc.msg !== "ok") {
      console.error("error on read tasks from server: ", rc);
      return;
    }
    tasks = rc.tasks;
    for (const task of tasks) {
      if (task.mode !== "error" && task.mode !== "processed" && task.mode !== "waiting for user") task.mode = "error";
    }
  });
}
function getInfoMyService(elBase) {
  let ret;
  try {
    const shadowRoot = elBase.getRootNode();
    if (!shadowRoot) return ret;
    const service = shadowRoot.host;
    if (!service || service.tagName !== "SERVICE-AIM-100554") return ret;
    const op = service.position === "left" ? "right" : "left";
    let servOp = service.nav3Service;
    if (!servOp) return ret;
    servOp = servOp.getActiveInstance(op);
    if (!servOp) return ret;
    ret = {
      level: service.level,
      position: service.position,
      actServiceOp: servOp
    };
    return ret;
  } catch (e) {
    return ret;
  }
}
function getUserConfigs() {
  let configs = getDefaultColumsConfigs();
  try {
    const str = localStorage.getItem("serviceAIM");
    if (!str) return configs;
    const data = JSON.parse(str);
    configs = data;
    return __spreadValues({}, configs);
  } catch (err) {
    throw new Error(err.message);
  }
}
function saveUserConfigs(obj) {
  if (!obj) throw new Error("Invalid data");
  try {
    const str = localStorage.setItem("serviceAIM", JSON.stringify(obj));
  } catch (err) {
    throw new Error(err.message);
  }
}
function getDefaultColumsConfigs() {
  return {
    status: true,
    cost: true,
    sequencial: true,
    countChild: true,
    title: true,
    prompt: true,
    user: true,
    reference: false,
    lastUpdateDate: false
  };
}
;
export {
  executePrompt,
  getInfoMyService,
  getUserConfigs,
  readTasksFromServer,
  saveUserConfigs,
  tasks,
  updateTaskOnServer
};
