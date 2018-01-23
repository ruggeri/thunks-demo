import { combineReducers } from 'redux';
import { catsReducer } from './cat_reducer.js'

export const rootReducer = combineReducers({
  cats: catsReducer,
})

// [list of actions coming in]
// => going through a reducer fnction => to create one state.
