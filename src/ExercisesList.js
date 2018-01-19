import React, {Component} from 'react';
import firebase from 'firebase'


class ExercisesList extends Component {

  state = {
    exercisesList: []
  };


  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/dietPlan/${userUid}/${(this.props.date)}/exercises`).on(
      'value',
      snapshot => this.setState({
        exercisesList: Object.entries(snapshot.val() || {}).map(([id, value]) => ({
          id, ...value
        }))
      })
    )
  }


  render() {
    return (
      <div>

        <ul>
          {
            this.state.exercisesList.map(
              exercisesItem => (
                <li key={exercisesItem.id}>
                  {exercisesItem.name} ({exercisesItem.caloriesBurnt})

                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}


export default ExercisesList