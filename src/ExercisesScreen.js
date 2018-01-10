import React, { Component } from 'react';
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";
import ExercisesRow from "./ExercisesRow";
import AddExerciseRow from "./AddExerciseRow";
import firebase from 'firebase'


class ExercisesScreen extends Component {

  state = {
    exercises: []
  };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/exercises/${userUid}`).on('value', snapshot => this.setState({
      exercises: Object.entries(snapshot.val() || {}).map(([key, value]) => ({ id: key, ...value}))
    }))
  }

  newExercise = (exercise) => {
    if (exercise.name === "" ) {
      return
    }

    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/exercises/${userUid}`).push(exercise)
  };



  render() {
    return (
      <div>
        <TopNavBar title="Customize your daily exercises"/>
        <table className="ui blue table">
          <thead>
          <tr>
            <th>Exercise</th>
            <th>Calories burnt</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.exercises.map(
            (exercise) => (
              <ExercisesRow
                key={exercise.id}
                id={exercise.id}
                name={exercise.name}
                caloriesBurnt={exercise.caloriesBurnt}
              />
            )
          )}
          <AddExerciseRow onNewExerciseAdded={this.newExercise}/>
          </tbody>
        </table>
        <NavBar/>
      </div>
    )
  }
}
export default ExercisesScreen;

