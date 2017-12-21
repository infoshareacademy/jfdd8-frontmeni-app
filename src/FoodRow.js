import React, {Component} from 'react';

class FoodRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.calories}</td>
        <td></td>
      </tr>
      )
  }
}

export default FoodRow;