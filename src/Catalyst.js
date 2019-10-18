const reducer = require('./reducer');
const CatalystContext = require('./context');

const Catalyst = React => ({
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return React.createElement(CatalystContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

module.exports = Catalyst;