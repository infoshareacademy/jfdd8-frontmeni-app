import React, {Component} from 'react';
import firebase from 'firebase'
import { Icon, Menu} from 'semantic-ui-react'


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
          ...value, id
        }))
      })
    )
  }

  handleRemoveClick = event => {
    const foodItem = event.target.dataset.foodItem;
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/dietPlan/${userUid}/${(this.props.date)}/food/` + foodItem).remove()
  };


  render() {
    return (
      <div>

        <ul>
          {
            this.state.foodList.map(
              foodItem => (
                <li key={foodItem.id}>
                  {foodItem.name} ({foodItem.calories})

                  <Menu.Item style={{display: 'inline-block'}}>
                    <Icon size='large' color='black' name='trash'
                          data-food-item={foodItem.id}
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


export default FoodList