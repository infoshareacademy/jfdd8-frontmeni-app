import React, {Component, Fragment} from 'react';

class AddFoodRow extends Component {
  onClick = () => {
    this.props.onNewFoodAdded(this.state);
    this.setState({
      name: '',
      calories: ''
    })
  };


  state = {
    name: '',
    calories: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>
          <input onChange={this.handleChange} value={this.state.name} name='name'/>
          </td>
          <td>
          <input onChange={this.handleChange} value={this.state.calories} name='calories'/>
          </td>
          <td>
            <button onClick={this.onClick}>Submit</button>
          </td>
        </tr>
      </Fragment>
    )
  }
}

export default AddFoodRow;