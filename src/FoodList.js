import React, {Component} from 'react';
import firebase from 'firebase'


class FoodList extends Component {

  state = {
    foodList: []
  };


  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/dietPlan/${userUid}/${(this.props.date)}/food`).on(
      'value',
      snapshot => this.setState({
        foodList: Object.entries(snapshot.val() || {}).map(([id, value]) => ({
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
            this.state.foodList.map(
              foodItem => (
                <li key={foodItem.id}>
                  {foodItem.name} ({foodItem.calories})

                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}


export default FoodList