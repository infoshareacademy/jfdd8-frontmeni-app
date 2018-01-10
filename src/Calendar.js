import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import ProgressBarInCalendar from './ProgressBarInCalendar'
import ModalExampleMultiple from './MultipleModal'
import { Modal, Button } from 'semantic-ui-react'



BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


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
  closeModal = () => this.setState({ showModal: false })

  render() {
    return (
      <div>
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
            <Button icon='check' content='All Done' onClick={this.closeModal} />
          </Modal.Actions>
        </Modal>}
      <BigCalendar
        selectable
        events={events}
        defaultView="month"
        scrollToTime={new Date()}
        defaultDate={new Date()}
        onSelectEvent={event => this.openModal(event)}
        onSelectSlot={event => this.openModal(event)}
      />

      </div>
    )
  }
}

export default Calendar

