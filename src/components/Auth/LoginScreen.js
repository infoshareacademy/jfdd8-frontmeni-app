import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../../app-logo/LO.png'
import { connect } from 'react-redux'
import { signIn } from '../../state/auth'

import '../../index.css';

class LoginForm extends Component {

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
        <Message negative hidden={this.state.error === null}>
          <p>{this.state.error}</p>
        </Message>
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
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

export default connect(
  null,
  { signIn }
)(LoginForm)