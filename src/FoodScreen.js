import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";
import FoodRow from "./FoodRow";
import AddFoodRow from "./AddFoodRow";
import firebase from 'firebase'


class FoodScreen extends Component {
  state = {
    foods: []
  };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;
    this.foodsRef = firebase.database().ref(`/foods/${userUid}`)
    this.listener = this.foodsRef.on('value', snapshot => this.setState({
      foods: Object.entries(snapshot.val() || {}).map(([key, value]) => ({ id: key, ...value}))
    }))
  }

  componentWillUnmount() {
    this.foodsRef.off('value', this.listener)
  }

  newFood = (food) => {
    if (food.name === "" ) {
      return
    }

    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/foods/${userUid}`).push(food)
  };

  removeFood = foodId => {
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/foods/${userUid}/${foodId}`).set(null)
  };

  render() {
    return (
      <div>
        <TopNavBar title="Customize your daily food"/>
        <table className="ui red table">
          <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {this.state.foods.map(
              (food) => (
                <FoodRow
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  calories={food.calories}
                  removeFood={this.removeFood}
                />
              )
            )}
          <AddFoodRow onNewFoodAdded={this.newFood}/>
          </tbody>
        </table>
        <NavBar/>
      </div>
    )

  }
}

export default FoodScreen;


