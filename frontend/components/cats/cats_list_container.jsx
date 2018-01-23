import * as React from 'react';
import { connect } from 'react-redux';
import { createCat, fetchCats } from '../../actions/cat_actions.js'
import { allCats } from '../../reducers/selectors.js'
import { CatsList } from './cats_list.jsx'

const mapStateToProps = (state) => ({
  cats: allCats(state),
});

const mapDispatchToProps = (dispatch) => ({
  createCat: (cat) => dispatch(createCat(cat)),
  fetchCats: () => dispatch(fetchCats()),
});

export const CatsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatsList);

// 1. connect generates a new kind of component.
// 2. The new component has inside render() => <CatsList props={this.getProps()} />
// 3. this.getProps(): this.context = { store: store }.
// 4. this.getProps() = return mapStateToProps(this.context.store.getState())
