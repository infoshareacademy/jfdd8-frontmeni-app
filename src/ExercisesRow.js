import React, {Component} from 'react';


class ExercisesRow extends Component {

  handleRemoveClick = event => {
    const exerciseId = event.target.dataset.exerciseId;
    this.props.removeExercise(exerciseId)
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.caloriesBurnt}</td>
        <td>
          <button
            data-exercise-id={this.props.id}
            onClick={this.handleRemoveClick}>
            Remove
          </button>
        </td>
      </tr>
    )
  }
}

export default ExercisesRow;