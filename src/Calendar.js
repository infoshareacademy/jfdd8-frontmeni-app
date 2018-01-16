import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import dietPlan from './dietPlan';
import ProgressBarInCalendar from './ProgressBarInCalendar'
import {Modal, Button, Progress} from 'semantic-ui-react'
import firebase from 'firebase'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {

  return (
    <div>
    <div>
      Exercises
      <Progress percent={(props.event.exercise.reduce(
        (total, next) => total + next.caloriesBurnt, 0
      ) / 2000) * 100} inverted progress error/>
    </div>
      <div>
      Food eaten
      <Progress value={(props.event.food.reduce(
        (total, next) => total + next.calories, 0
      ))}/>
    </div>
    </div>
  )
};


class Calendar extends Component {

  state = {
    showModal: false,
    modalEvent: null,
    food: [],
    exercises: []
  }

  openModal = event => {
    this.setState({
      modalEvent: event,
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false})

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFoodChange = event => {
    console.log(event.target.value)
    this.setState({selectedFoodId:event.target.value})
  }

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref(`/foods/${userUid}`).on('value', snapshot => {
      this.setState({
        food: Object.entries(snapshot.val() || {}).map(([key, value]) => ({ id: key, ...value}))
      })
    });

    firebase.database().ref(`/exercises/${userUid}`).on('value', snapshot => this.setState({
      exercises: Object.entries(snapshot.val() || {}).map(([key, value]) => ({ id: key, ...value}))
    }))
  }


  render() {

    console.log(this.state.food)

    return (
      <div style={{height: 600}}>
        <ProgressBarInCalendar/>
        {this.state.modalEvent && <Modal
          dimmer={false}
          open={this.state.showModal}
          onOpen={this.openModal}
          onClose={this.closeModal}
          size='small'
        >
          <Modal.Header>{moment(this.state.modalEvent.start).format("dddd")}
            {' '}
            {moment(this.state.modalEvent.start).format("MMM Do YY")}
          </Modal.Header>
          <Modal.Content>
            <p>Choose and add your daily elements</p>
            <select onChange={this.handleFoodChange}>
              <option disabled selected>Select food</option>
              {
                this.state.food.map(
                  foodItem => <option value={foodItem.id}>{foodItem.name} ({foodItem.calories} kCal)</option>
                )
              }
            </select>

            <select>
              <option disabled selected>Select exercises</option>
              {
                this.state.exercises.map(
                  exerciseItem => <option value={exerciseItem.id}>{exerciseItem.name} ({exerciseItem.caloriesBurnt} kCal)</option>
                )
              }
            </select>
          </Modal.Content>
          <Modal.Actions>
            <Button icon='check' content='ADD' onClick={this.closeModal}/>
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

