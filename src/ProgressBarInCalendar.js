import React, { Component } from 'react'
import {Progress, Button} from 'semantic-ui-react'


const summary = props => {

class ProgressBarInCalendar extends Component {

    state = {
        food: [],
        exercises: [],
        percent: 0
    };

        render()
        {
            return (
                <div>
                  <Progress percent={(props.event.food.reduce(
                      (total, next) => total + parseFloat(next.calories), 0
                  ) / 2000) * 100} autoSuccess/>
                </div>
            )
        }
    }
}
export default ProgressBarInCalendar