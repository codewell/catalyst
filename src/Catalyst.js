const reducer = require('./reducer');

const Catalyst = React => {
  const CatalystContext = React.createContext();

  const CatalystProvider = ({ initialState, children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return React.createElement(CatalystContext.Provider, {
      value: {
        state,
        dispatch
      }
    }, children);
  };

  return {
    CatalystProvider,
    CatalystContext,
  };

};

module.exports = Catalyst;