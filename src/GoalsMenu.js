import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import firebase from 'firebase'
import TopNavBar from "./TopNavBar";

const goalOptions = [
  {key: 't', text: 'Lose weight', value: 'male'},
  {key: 'f', text: 'Gain weight', value: 'female'}];


class GoalsMenu extends Component {

  state = {
    email: '',
    password: '',
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signIn(
      this.state.email,
      this.state.password
    ).catch(
      error => {
        this.setState({
            error: error.message
          }
        );
      }
    )
  };
  render() {
    return (
      <div className='login-form'>
        <TopNavBar title="Settings / Set my goals"/>
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
                  placeholder='My goal'
                  options={goalOptions}
                  onChange={this.handleChange}
                />

                <Button className='button-style' color='black' fluid size='large'>Enter</Button>
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