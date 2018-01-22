import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {Modal, Button, Progress, Form} from 'semantic-ui-react'
import firebase from 'firebase'
import FoodList from './FoodList'
import ExercisesList from "./ExercisesList"


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const EventWrapper = props => {

  return (
    <div>
      <div>
        <Progress color='green' percent={(props.event.food.reduce(
          (total, next) => total + parseFloat(next.calories), 0
        ) / 2000) * 100} inverted progress/>
      </div>
      <div>
        <Progress color='blue' percent={(props.event.exercises.reduce(
          (total, next) => total + parseFloat(next.caloriesBurnt), 0
        ) / 2000) * 100} inverted progress/>
      </div>
    </div>
  )
};


class Calendar extends Component {

  state = {
    showModal: false,
    modalEvent: null,
    food: [],
    exercises: [],
    selectedFood: [],
    selectedExercises: [],
    date: [],
    selectedFoodId: null,
    selectedExerciseId: null,
    dietPlan: [],
  };

  openModal = event => {
    this.setState({
      modalEvent: event,
      showModal: true
    })
  };

  closeModal = () => {

    this.setState({
      showModal: false,
      selectedFood: [],
      selectedExercises: []
    })
  };

  handleFoodChange = (e, {value}) => {
    this.setState({selectedFoodId: value})
  };

  handleExercisesChange = (e, {value}) => {
    this.setState({selectedExerciseId: value})
  };


  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;

    firebase.database().ref(`/foods/${userUid}`).on('value', snapshot => {
      this.setState({
        food: Object.entries(snapshot.val() || {}).map(([key, value]) => ({id: key, ...value}))
      })
    });

    firebase.database().ref(`/exercises/${userUid}`).on('value', snapshot =>
      this.setState({
      exercises: Object.entries(snapshot.val() || {}).map(([key, value]) => ({id: key, ...value}))
    }));

    firebase.database().ref(`/dietPlan/${userUid}`).on('value', snapshot => this.setState({
      dietPlan: Object.entries(snapshot.val() || {}).map(
        ([date, value]) => ({
          date,
          food: Object.entries(value.food || {}).map(
            ([key, foodItem]) => ({
              name: foodItem.name,
              calories: foodItem.calories
            })
          ),
          exercises: Object.entries(value.exercises || {}).map(
            ([key, exercisesItem]) => ({
              name: exercisesItem.name,
              caloriesBurnt: exercisesItem.caloriesBurnt
            })
          )
        }))
    }))
  }

  addFood = () => {
    const userUid = firebase.auth().currentUser.uid;
    const start = moment(this.state.modalEvent.start);
    const ref = firebase.database().ref(`/dietPlan/${userUid}/${start.format()}/food`);

    ref.push(this.state.food.find(item => item.id === this.state.selectedFoodId))

  };

  addExercise = () => {
    const userUid = firebase.auth().currentUser.uid;
    const start = moment(this.state.modalEvent.start);
    const ref = firebase.database().ref(`/dietPlan/${userUid}/${start.format()}/exercises`);

    ref.push(this.state.exercises.find(item => item.id === this.state.selectedExerciseId))

  };

  render() {
    return (
      <div style={{height: 'auto'}}>
        {this.state.modalEvent && <Modal
          dimmer={false}
          open={this.state.showModal}
          onOpen={this.openModal}
          onClose={this.closeModal}
          size='large'
        >
          <Modal.Header>
            {moment(this.state.modalEvent.start).format("dddd")}
            {' '}
            {moment(this.state.modalEvent.start).format("MMM Do YY")}
          </Modal.Header>

          <Modal.Content>
            <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>Choose and add your daily elements</p>

            <div className="modalList">
              <div>
                <h1>Food</h1>
                <Form.Group>
                  <Form.Select
                    className='modalSelect'
                    inline
                    defaultValue='food'
                    onChange={this.handleFoodChange}
                    options={this.state.food.map(
                      foodItem => ({
                        key: foodItem.id,
                        value: foodItem.id,
                        text: `${foodItem.name} (${foodItem.calories} kCal)`
                      })
                    )}
                  />

                  <Form.Button className='modalButton' color='black' onClick={this.addFood}>Add to list</Form.Button>
                </Form.Group>
                <FoodList
                  key={moment(this.state.modalEvent.start).format()}
                  date={moment(this.state.modalEvent.start).format()}
                />
              </div>

              <div>
                <h1>Exercises</h1>
                <Form.Group>
                  <Form.Select
                    className='modalSelect'
                    inline
                    defaultValue='exercises'
                    onChange={this.handleExercisesChange}
                    options={this.state.exercises.map(
                      exercisesItem => ({
                        key: exercisesItem.id,
                        value: exercisesItem.id,
                        text: `${exercisesItem.name} (${exercisesItem.caloriesBurnt} kCal)`
                      })

                    )}
                  />

                  <Form.Button className='modalButton' inline color='black' onClick={this.addExercise}>Add to list</Form.Button>
                </Form.Group>

                <ExercisesList
                  key={moment(this.state.modalEvent.start).format()}
                  date={moment(this.state.modalEvent.start).format()}/>
              </div>

            </div>

          </Modal.Content>

          <Modal.Actions>
            <Button icon='check' content='Close' onClick={this.closeModal}/>
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
          views={['month']}
          components={{
            eventWrapper: EventWrapper
          }}
        />

      </div>
    )
  }
}

export default Calendar

