import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import ProgressBarInCalendar from './ProgressBarInCalendar'
import Multiple from './MultipleModal'
import {Modal, Button} from 'semantic-ui-react'
import {ProgressBar} from 'react-bootstrap';


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

// const EventWrapper = props => (
//   <ProgressBar>
//     <ProgressBar striped bsStyle="success" now={35} key={1} />
//     <ProgressBar bsStyle="warning" now={20} key={2} />
//     <ProgressBar active bsStyle="danger" now={10} key={3} />
//   </ProgressBar>
// )
//


const EventWrapper = props => {
  console.log('event wrapper props', props);
  return (
    <ProgressBar>
      {/*{*/}
      {/*props.event.spendings && props.event.spendings.map(*/}
      {/*spending => <ProgressBar striped bsStyle={spending.type} now={spending.value} key={1}/>*/}
      {/*)*/}
      }
    </ProgressBar>
  )
}


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
    // const groupedEvents = Object.entries(groupBy(this.state.dietPlan, event => event.start.getTime())).map(([key, value]) => ({
    //   title: 'Foo',
    //   start: new Date(parseInt(key)),
    //   end: new Date(parseInt(key)),
    //   allDay: true,
    //   events: value
    // }))

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
            <Button icon='check' content='All Done' onClick={this.closeModal}/>
          </Modal.Actions>
        </Modal>}
        <BigCalendar
          {...this.props}
          selectable
          events={events}
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

