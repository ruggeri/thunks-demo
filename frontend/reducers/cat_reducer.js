import { RECEIVE_CAT, RECEIVE_CATS } from '../actions/cat_actions.js'
import * as _ from 'lodash';

export const catsReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_CAT:
      newState = _.merge({}, state);
      newState[action.cat.id] = action.cat;
      return newState;
    case RECEIVE_CATS:
      newState = {};
      for (const cat of action.cats) {
        newState[cat.id] = cat;
      }
      return newState;
    default:
      return state;
  }
};
