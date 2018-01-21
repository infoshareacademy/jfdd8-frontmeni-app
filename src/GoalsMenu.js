import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import firebase from 'firebase'
import TopNavBarGoals from "./TopNavBarGoals";

const goalOptions = [
  {key: 't', text: 'Lose weight', value: 'lose'},
  {key: 'f', text: 'Gain weight', value: 'gain'}
];


class GoalsMenu extends Component {

  state = {
    goal: '',
    weight: 0,

  };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;

    firebase.database().ref(`/users/${userUid}`).on('value', snapshot => {
      this.setState(snapshot.val());
    });
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userUid + '/').update({
      goal: this.state.goal,
      weight: this.state.weight,
    })
  };

  handleSelectChange = (event, { name, value }) => {
    this.setState({
      [event.target.name || name]: event.target.value || value
    })
  };
  render() {
    return (
      <div className='login-form'>
        <TopNavBarGoals title="Settings / Set my goals"/>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' textAlign='center' className='login-header'>
              {' '}Goals
            </Header>
            <Form
              size='large'
              onSubmit={this.handleSubmit}>
              <Segment>
                <Form.Input
                  fluid
                  value={this.state.weight}
                  placeholder='Weight in [kg]'
                  onChange={this.handleChange}
                  name="weight"
                  type='number'
                  min='0'
                  max='999'
                  required
                />
                <Form.Select
                  fluid
                  value={this.state.goal}
                  placeholder='My goal'
                  options={goalOptions}
                  onChange={this.handleSelectChange}
                  name='goal'
                />

                <Button
                  className='button-style'
                  color='black'
                  fluid size='large'
                >Save</Button>
              </Segment>
            </Form>
            <Button onClick={() => firebase.auth().signOut()} className='button-style' color='red' fluid size='large'>Log out</Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default GoalsMenu