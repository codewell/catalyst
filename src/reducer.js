const automaticActionSwitch = require('@codewell/automatic-action-switch');
const stateLogger = require('./@codewell/state-logger');

/**
 * Automatic reducer for React contexts
 * @param {object} state - Reducer state
 * @param {object} action - Reducer action {type, payload}
 */
const reducer = (state, action) => {
  // Get next state from the actionSwitch
  const nextState = automaticActionSwitch(state, action);

  // Log state action and next state in dev mode
  stateLogger(state, action, nextState);

  return nextState;
};

module.exports = reducer;
