import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

export const configureStore = (rootReducer) => {
  return createStore(
    rootReducer,
    applyMiddleware(ReduxThunk),
  );
};

// store:
// 1. getState() => the stored state tree: { cats: { 123: {...gizmo} } }
// 2. dispatch(action) => updates the stored state.
