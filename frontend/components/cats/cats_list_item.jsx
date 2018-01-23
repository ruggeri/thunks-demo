import * as React from 'react';

export class CatsListItem extends React.Component {
  render() {
    const { cat } = this.props;

    return (
      <li>{cat.name}</li>
    )
  }
}
