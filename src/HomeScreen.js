import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";
import Calendar from "./Calendar";


class HomeScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Home"/>
      <Calendar/>

      </div>
    )
  }
}
export default HomeScreen;