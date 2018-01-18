import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import dietPlan from './dietPlan';
import ProgressBarInCalendar from './ProgressBarInCalendar'
import {Modal, Button, Progress} from 'semantic-ui-react'
import firebase from 'firebase'
import FoodList from './FoodList'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {

  return (
    <div>
    <div>
      <Progress percent={(props.event.food.reduce(
        (total, next) => total + parseFloat(next.calories), 0
      ) / 2000) * 100} inverted progress error/>
    </div>
      <div>
      <Progress progress={(props.event.food.reduce(
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
    selectedFood: [],
    exercises: [],
    selectedExercises: [],
    date: [],
    selectedExerciseId: null,
    selectedFoodId: null,
    dietPlan: []
  }

  openModal = event => {
    this.setState({
      modalEvent: event,
      showModal: true
    })
  }

  closeModal = () => {

    this.setState({
      showModal: false,
      selectedFood: []
    })
  }

  handleFoodChange = event => {
    console.log(event.target.value)
    this.setState({selectedFoodId: event.target.value})
  }

  handleExercisesChange = event => {
    console.log(event.target.value)
    this.setState({selectedExerciseId: event.target.value})
  }

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;

    firebase.database().ref(`/foods/${userUid}`).on('value', snapshot => {
      this.setState({
        food: Object.entries(snapshot.val() || {}).map(([key, value]) => ({id: key, ...value}))
      })
    });

    firebase.database().ref(`/exercises/${userUid}`).on('value', snapshot => this.setState({
      exercises: Object.entries(snapshot.val() || {}).map(([key, value]) => ({id: key, ...value}))
    }))

    firebase.database().ref(`/dietPlan/${userUid}`).on('value', snapshot => this.setState({
      dietPlan: Object.entries(snapshot.val() || {}).map(
        ([ date, value ]) => ({
          date,
          food: Object.entries(value.food || {}).map(
            ([key, foodItem]) => ({
              name: foodItem.name,
              calories: foodItem.calories
            })
          ),
          exercises:[]
        })
      )
    }))
  }

  addFood = () => {
    const userUid = firebase.auth().currentUser.uid;
    const start = moment(this.state.modalEvent.start)
    const ref = firebase.database().ref(`/dietPlan/${userUid}/${start.format()}/food`)

     ref.push(this.state.food.find(item => item.id === this.state.selectedFoodId))

  }


  render() {

    console.log(this.state.food)

    return (
      <div style={{height: 'auto'}}>
        <ProgressBarInCalendar/>
        {this.state.modalEvent && <Modal
          dimmer={false}
          open={this.state.showModal}
          onOpen={this.openModal}
          onClose={this.closeModal}
          size='small'
        >
          <Modal.Header>
            {moment(this.state.modalEvent.start).format("dddd")}
            {' '}
            {moment(this.state.modalEvent.start).format("MMM Do YY")}
          </Modal.Header>

          <Modal.Content>
            <p>Choose and add your daily elements</p>
            <select defaultValue='food' onChange={this.handleFoodChange}>
              <option disabled value='food'>Select food</option>
              {
                this.state.food.map(
                  foodItem => <option value={foodItem.id}>{foodItem.name} ({foodItem.calories} kCal)</option>
                )
              }
            </select>
            <button onClick={this.addFood}>add</button>

            <select onChange={this.handleExercisesChange} defaultValue='exercises'>
              <option disabled value='exercises'>Select exercises</option>
              {
                this.state.exercises.map(
                  exerciseItem => <option value={exerciseItem.id}>{exerciseItem.name} ({exerciseItem.caloriesBurnt}
                    kCal)</option>
                )
              }
            </select>

            <FoodList
              key={moment(this.state.modalEvent.start).format()}
              date={moment(this.state.modalEvent.start).format()}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button icon='check' content='ADD' onClick={this.closeModal}/>
          </Modal.Actions>
        </Modal>}
        <BigCalendar
          {...this.props}
          selectable
          events={this.state.dietPlan.map(
            item => ({
              ...item,
              start: new Date(item.date),
              end: new Date(item.date)
            })
          )}
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

