import React, {Component} from 'react'
import TopNavBar from "./TopNavBar";
import NavBar from "./NavBar";
import Calendar from "./Calendar";


class HomeScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBar title="Home"/>
        <Calendar/>
        <NavBar/>
      </div>
    )
  }
}

export default HomeScreen;