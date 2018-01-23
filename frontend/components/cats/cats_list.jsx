import * as React from 'react';
import { CatsListItem } from './cats_list_item.jsx'
import { CatForm } from './cat_form.jsx'

export class CatsList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const { cats, createCat } = this.props;

    const catsListItems = cats.map(cat => (
      <CatsListItem key={cat.id} cat={cat} />
    ));

    return (
      <div>
        <ul>
          {catsListItems}
        </ul>

        <CatForm createCat={createCat} />
      </div>
    )
  }
}
