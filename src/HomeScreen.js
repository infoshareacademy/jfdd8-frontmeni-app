import React, {Component} from 'react'
import TopNavBarHome from "./TopNavBarHome";
import NavBar from "./NavBar";
import Calendar from "./Calendar";


class HomeScreen extends Component {
  render() {
    return (
      <div>
        <TopNavBarHome title="Home" style={{fontSize: '50px'}} />
        <Calendar/>
        <NavBar/>
      </div>
    )
  }
}

export default HomeScreen;