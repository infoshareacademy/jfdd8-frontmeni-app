import React, {Component} from 'react';
import firebase from "firebase/index";


class ExercisesRow extends Component {

  handleRemoveClick = event => {
    const exerciseId = event.target.dataset.exerciseId;
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/exercises/${userUid}/${exerciseId}`).set(null)
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