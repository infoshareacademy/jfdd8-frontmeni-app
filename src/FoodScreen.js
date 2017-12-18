import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";

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
            <th>Protein</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apples</td>
            <td>200</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>0g</td>
          </tr>
          </tbody>
        </table>
      </div>
    )

  }
}

export default FoodScreen;


