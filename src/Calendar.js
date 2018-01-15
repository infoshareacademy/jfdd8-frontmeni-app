import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import dietPlan from './dietPlan';
import ProgressBarInCalendar from './ProgressBarInCalendar'
import Multiple from './MultipleModal'
import {Modal, Button, Progress} from 'semantic-ui-react'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {

  return (
    <div>
      Exercises
      <Progress percent={(props.event.exercise.reduce(
        (total, next) => total + next.caloriesBurnt, 0
      ) / 2000) * 100} inverted progress success/>

    </div>
  )
};


class Calendar extends Component {

  state = {
    showModal: false,
    modalEvent: null
  }

  openModal = event => {
    this.setState({
      modalEvent: event,
      showModal: true
    })
  }
  closeModal = () => this.setState({showModal: false})

  render() {

    return (
      <div style={{height: 500}}>
        <ProgressBarInCalendar/>
        {this.state.modalEvent && <Modal
          dimmer={false}
          open={this.state.showModal}
          onOpen={this.openModal}
          onClose={this.closeModal}
          size='small'
        >
          <Modal.Header>{this.state.modalEvent.title} </Modal.Header>
          <Modal.Content>
            <select>
              <option value="100">Apple</option>
              <option value="200">Rice</option>
            </select>
          </Modal.Content>
          <Modal.Actions>
            <Button icon='check' content='All Done' onClick={this.closeModal}/>
          </Modal.Actions>
        </Modal>}
        <BigCalendar
          {...this.props}
          selectable
          events={dietPlan.map(item => ({ ...item, start: new Date(item.date), end: new Date(item.date)}))}
          defaultView="month"
          scrollToTime={new Date()}
          defaultDate={new Date()}
          onSelectEvent={event => this.openModal(event)}
          onSelectSlot={event => this.openModal(event)}
          views={allViews}
          components={{
            eventWrapper: EventWrapper
          }}
        />

      </div>
    )
  }
}

export default Calendar

