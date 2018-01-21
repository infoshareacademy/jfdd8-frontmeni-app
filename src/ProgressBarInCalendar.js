import React, { Component } from 'react'
import {Progress, Button} from 'semantic-ui-react'


class ProgressBarInCalendar extends Component {

  state = {percent: 0};

  toggle = () => this.setState({percent: this.state.percent === 0 ? 100 : 0})

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} autoSuccess/>
        {/*<Button onClick={this.toggle}>Toggle Complete</Button>*/}
      </div>
    )
  }
}

export default ProgressBarInCalendar