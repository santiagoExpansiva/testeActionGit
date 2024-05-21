const isTrace = false;
class CollabState {
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
    return value;
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
    var _a;
    (_a = this.componentMap.get(key)) == null ? void 0 : _a.forEach((component) => {
      if ("handleCollabStateChange" in component) {
        component["handleCollabStateChange"](key, this.getState(key));
      }
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
  CollabState
};
