# @codewell/catalyst
React state management made easy

## Installation
```JavaScript
npm install @codewell/catalyst
```

## Basic usage
Supposed to be used with React
```JavaScript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import catalyst from '@codewell/catalyst';

const { CatalystProvider, CatalystContext } = catalyst(React);

export const catalystContext = CatalystContext; // (*) Make this context available to the rest of the app

ReactDOM.render(
  <CatalystProvider initialState={{ foo: 'foo' }}>
    <App />
  </CatalystProvider>,
  document.getElementById('root'),
);

// ...

```

```JavaScript
// App.js
import React, { useContext } from 'react';
import { catalystContext } from './index'; // (*) Exported in index.js

const App = () => {
  const { state, dispatch } = useContext(catalystContext);

  const action = (event) => {
    dispatch({ type: 'SET_AGE', payload: 29 });
  };

  const inp = (event) => {
    dispatch({ type: 'SET_INPUT', payload: event.target.value })
  }

  return (
    <div>
      {state.name} - {state.age} - {state.input}
      <button onClick={action}>Click me</button>
      <input type="text" onChange={inp} />
    </div>
  )
};

export default App;
```

