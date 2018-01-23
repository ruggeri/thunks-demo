import * as React from 'react';

const initialState = {
  name: '',
  personal_legend: '',
  is_awesome: true,
}

export class CatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  setProperty(propertyName, e) {
    e.preventDefault();

    let newValue = e.target.value
    if (propertyName === 'is_awesome') {
      newValue = !this.state.is_awesome;
    }

    this.setState({
      [propertyName]: newValue,
    })
  }

  createCat(e) {
    e.preventDefault();

    const newCatId = new Date().getTime();
    this.props.createCat(
      Object.assign({}, this.state, { id: newCatId })
    );

    this.setState(initialState);
  }

  render() {
    return (
      <form onSubmit={(e) => this.createCat(e)}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setProperty('name', e)}>
          </input>
        </label>

        <label>
          Personal Legend
          <input
            type="text"
            value={this.state.personal_legend}
            onChange={(e) => this.setProperty('personal_legend', e)}>
          </input>
        </label>

        <input type="submit" value="Create cat!"></input>
      </form>
    )
  }
}
