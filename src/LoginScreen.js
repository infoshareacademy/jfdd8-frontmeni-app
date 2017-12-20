import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import './index.css';

const LoginForm = () => (
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
        <Form size='large'>
          <Segment>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button className='button-style' color='black' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a color='black' href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm