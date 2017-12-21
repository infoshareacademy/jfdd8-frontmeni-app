import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";
import FoodList from "./FoodList";
import FoodRow from "./FoodRow";
import AddFoodRow from "./AddFoodRow";


class FoodScreen extends Component {
  state = {
    foods: []
  };
  newFood = (food) => {
    this.setState({
      foods: this.state.foods.concat(food)
    });
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
            {this.state.foods.map(function(food, idx) {
              return <FoodRow name={food.name} calories={food.calories} key={idx}/>
            })}
          <AddFoodRow onNewFoodAdded={this.newFood}/>
          </tbody>
        </table>
        <NavBar/>
      </div>
    )

  }
}

export default FoodScreen;


