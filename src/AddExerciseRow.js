import React, {Component, Fragment} from 'react';

class AddExerciseRow extends Component {
  onClick = () => {
    this.props.onNewExerciseAdded(this.state);
    this.setState({
      name: '',
      caloriesBurnt: ''
    })
  };

  state = {
    name: '',
    caloriesBurnt: 0
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
            <input type="number" min="0" onChange={this.handleChange} value={this.state.caloriesBurnt} name='caloriesBurnt'/>
          </td>
          <td>
            <button onClick={this.onClick}>Submit</button>
          </td>
        </tr>
      </Fragment>
    )
  }
}

export default AddExerciseRow;