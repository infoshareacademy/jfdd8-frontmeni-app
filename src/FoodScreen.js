import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";
import FoodRow from "./FoodRow";
import AddFoodRow from "./AddFoodRow";


class FoodScreen extends Component {
  state = {
    foods: []
  };

  newFood = (food) => {
    if (food.name === "" ) {
      return
    }

    this.setState({
      foods: this.state.foods.concat({...food, id: Date.now().toString(16)})
    });
  };

  removeFood = foodId => {
    this.setState({
      foods: this.state.foods.filter(
        food => food.id !== foodId
      )
    })
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


