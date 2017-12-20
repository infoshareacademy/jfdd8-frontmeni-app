import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";


class FoodScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Customize your daily food"/>
        <table className="ui red table">
          <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apples</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
          </tr>
          </tbody>
        </table>
        <NavBar/>
      </div>
    )

  }
}

export default FoodScreen;


