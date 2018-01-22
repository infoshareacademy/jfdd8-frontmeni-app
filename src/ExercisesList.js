import React, {Component} from 'react';
import firebase from 'firebase'
import {  Icon, Menu } from 'semantic-ui-react'


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
          ...value, id
        }))
      })
    )
  }

  handleRemoveClick = event => {
    const exercisesItem = event.target.dataset.exercisesItem;
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/dietPlan/${userUid}/${(this.props.date)}/exercises/` + exercisesItem).remove()
  };

  render() {

    return (
      <div>

        <ul>
          {
            this.state.exercisesList.map(
              exercisesItem => (
                <li key={exercisesItem.id}>
                  {exercisesItem.name} ({(exercisesItem.caloriesBurnt)})

                  <Menu.Item style = {{display: 'inline-block'}}>
                  <Icon size='large' color='black' name='trash'
                    data-exercises-item={exercisesItem.id}
                    onClick={this.handleRemoveClick}>
                  </Icon>
                  </Menu.Item>

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