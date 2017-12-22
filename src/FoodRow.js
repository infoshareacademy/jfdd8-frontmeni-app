import React, {Component} from 'react';


class FoodRow extends Component {

  handleRemoveClick = event => {
    const foodId = event.target.dataset.foodId;
    this.props.removeFood(foodId)
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.calories}</td>
        <td>
          <button
            data-food-id={this.props.id}
            onClick={this.handleRemoveClick}>
            Remove
          </button>
        </td>
      </tr>
      )
  }
}

export default FoodRow;