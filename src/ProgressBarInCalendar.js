import React, {Component} from 'react'
import {Progress,} from 'semantic-ui-react'


class ProgressBarInCalendar extends Component {

    state = {percent: 0};

    render() {
        return (
            <div>
                <Progress percent={this.state.percent} autoSuccess/>
            </div>
        )
    }

export default ProgressBarInCalendar