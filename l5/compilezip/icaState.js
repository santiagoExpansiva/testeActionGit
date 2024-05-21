const isTrace = false;
function getPathValue(obj, path) {
  return path.split(".").reduce((acc, part) => {
    const arrayMatch = part.match(/(\w+)\[(\d+)\]/);
    if (arrayMatch) {
      const prop = arrayMatch[1];
      const index = parseInt(arrayMatch[2], 10);
      return acc[prop][index];
    }
    return acc[part];
  }, obj);
}
function setPathValue(obj, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  if (!last) return;
  const lastObj = parts.reduce((acc, part) => {
    const match = part.match(/(\w+)\[(\d+)\]/);
    return match ? acc[match[1]][parseInt(match[2], 10)] : acc[part];
  }, obj);
  lastObj[last] = value;
}
class IcaState {
  constructor() {
    this.stateMap = /* @__PURE__ */ new Map();
    // values of variables
    this.componentMap = /* @__PURE__ */ new Map();
  }
  // subscribes
  /**
   * Update state for a given key.
   * @param key - The state key.
   * @param value - The new state value.
   */
  setState(key, value) {
    const oldValue = this.stateMap.get(key);
    if (isTrace) console.info("setState key: " + key + " value=", value, ", oldValue=", oldValue);
    if (oldValue !== value) {
      this.stateMap.set(key, value);
      setPathValue(window.globalState, key, value);
      this.notify(key);
    }
  }
  /**
   * Retrieve state for a given key.
   * @param key - The state key.
   */
  getState(key) {
    const value = this.stateMap.get(key);
    if (isTrace) console.info("getState key: " + key + " value=", value);
    return getPathValue(window.globalState, key);
  }
  /**
   * Subscribe a component to a state key or keys.
   * @param keyOrKeys - The state key or keys.
   * @param component - The subscribing component.
   */
  subscribe(keyOrKeys, component) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!this.componentMap.has(key)) {
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      }
      this.componentMap.get(key).add(component);
    });
  }
  /**
   * Unsubscribe a component from a state key or keys.
   * @param keyOrKeys - The state key or keys.
   * @param component - The unsubscribing component.
   */
  unsubscribe(keyOrKeys, component) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      var _a;
      (_a = this.componentMap.get(key)) == null ? void 0 : _a.delete(component);
    });
  }
  /**
   * Notify subscribed components about a state change.
   * @param key - The state key that changed.
   */
  notify(key) {
    Array.from(this.componentMap).find((map) => {
      const [stateKey, arr] = map;
      const path = stateKey.split(";")[1];
      if (path !== key) return;
      arr.forEach((component) => {
        if ("handleIcaStateChange" in component) {
          component["handleIcaStateChange"](key, this.getState(key));
        }
      });
    });
  }
  /**
   * Get statistics about current state keys and their subscribers.
   */
  getStateStatistics() {
    const statistics = /* @__PURE__ */ new Map();
    this.componentMap.forEach((value, key) => {
      statistics.set(key, value.size);
    });
    return statistics;
  }
}
export {
  IcaState
};
