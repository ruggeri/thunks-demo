import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './components/root.jsx'
import { rootReducer } from './reducers/root_reducer.js';
import { configureStore } from './store/store.js';

// Debugging
// import * as selectors from './reducers/selectors.js';
// window.todo_actions = todo_actions;
// window.selectors = selectors;
// window.store = configureStore(rootReducer);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(rootReducer);

  ReactDOM.render(
    <Root store ={ store }/>,
    document.getElementById('content'),
  );
})
