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
          <input onChange={this.handleChange} value={this.state.name} name='name'/>
          </td>
          <td>
          <input type="number" min="0" onChange={this.handleChange} value={this.state.calories} name='calories'/>
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