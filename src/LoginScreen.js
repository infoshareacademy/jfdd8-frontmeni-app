import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './app-logo/LO.png'
import firebase from 'firebase'

import './index.css';

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  };

  render() {
    return (
  <div className='login-form'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} size='small' centered />
        <Header as='h2' textAlign='center' className='login-header'>
          {' '}Log-in to your account
        </Header>
        <Form
          size='large'
          onSubmit={this.handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={this.handleChange}
              name="email"
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
              name="password"
            />

            <Button className='button-style' color='black' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to ='/profile' >Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

export default LoginForm