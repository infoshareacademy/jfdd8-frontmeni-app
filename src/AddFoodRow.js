import React, {Component, Fragment} from 'react';
import { Form } from 'semantic-ui-react'


class AddFoodRow extends Component {

  state = {
    name: '',
    calories: 0
  };

  onClick = () => {
    this.props.onNewFoodAdded(this.state);
    this.setState({
      name: '',
      calories: ''
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  checkIfNumber = (event, foo, bar) => {
    // if (event.keyCode >= 48 && event.keyCode <= 57){
    //   event.stopImmediatePropagation();
    // }
    // console.log('check', event.keyCode, event.keyCode >= 48 && event.keyCode <= 57);
    // return event.keyCode >= 48 && event.keyCode <= 57;
  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>
          <Form.Input
            type='text'
            onChange={this.handleChange}
            value={this.state.name}
            name='name'
            required
          />
          </td>
          <td>
          <Form.Input
            type="number"
            min="1"
            onChange={this.handleChange}
            value={this.state.calories}
            name='calories'
            required
          />
          </td>
          <td>
            <button onClick={this.onClick}>Add</button>
          </td>
        </tr>
      </Fragment>
    )
  }
}

export default AddFoodRow;