import * as CatApi from '../util/cat_api.js';

export const RECEIVE_CAT = 'RECEIVE_CAT';
export const RECEIVE_CATS = 'RECEIVE_CATS';

export const receiveCat = (cat) => ({
  type: RECEIVE_CAT,
  cat: cat
});

export const receiveCats = (cats) => ({
  type: RECEIVE_CATS,
  cats: cats
});

// dispatch(receiveCat(myCatToReceive)) => dispatch(actionObject)
// When you dispatch(actionObject), redux then runs the reducers to produce
// the new state.

// export const receiveCat = (cat) => ((dispatch) => {
//   dispatch({
//     type: RECEIVE_CAT,
//     cat: cat
//   })
// });

// dispatch(receiveCat(myCatToReceive)) => dispatch((dispatch) => { do stuff...})
// Runs your thunk. And it passes itself (dispatch) into the thunk for your use.
// My stupid thunk just calls dispatch(anActionObject).
// Then reducers do their thing.

// 1. Postng an AJAX request to the API server.
// 2. Receive created cat object (filled out iwth the id).
// 3. dispatch receiveCat(cat) with the returned cat from the server.
export const createCat = (cat) => ((dispatch) => {
  CatApi.createCat(cat)
    .then((serverCat) => {
      dispatch(receiveCat(serverCat))
    });
})

export const fetchCats = () => ((dispatch) => {
  CatApi.fetchCats().then((serverCats) => {
    dispatch(receiveCats(serverCats));
  });
})
