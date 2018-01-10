import React, { Component } from 'react'
import {Form, Button, Grid, Header, Image, Segment, Message} from 'semantic-ui-react'
import logo from './app-logo/LO.png'
import firebase from 'firebase'

const countryOptions = [
  {key: 'pl', value: 'pl', flag: 'pl', text: 'Polska'},
  {key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom'},
  {key: 'ru', value: 'ru', flag: 'ru', text: 'Россия'},
  {key: 'us', value: 'us', flag: 'us', text: 'USA'},
  {key: 'eu', value: 'eu', flag: 'eu', text: 'Europe'},
  {key: 'jp', value: 'jp', flag: 'jp', text: '日本国'}
];
const genderOptions = [
  {key: 'm', text: 'Male', value: 'male'},
  {key: 'f', text: 'Female', value: 'female'}];

class ProfileCreator extends Component {

  state = {
    email: '',
    password: '',
    error: null

  };

  handleChange = (event, { name, value }) => {
    this.setState({
      [event.target.name || name]: event.target.value || value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, ...other} = this.state;

    firebase.auth().createUserWithEmailAndPassword(
      email,
      password
    ).then(
      user => {
        const userUid = user.uid;
        firebase.database().ref('/users/' + userUid).set(other)
      }
    ).catch(
      error => this.setState({
        error: error.message
      })
    )

  };

  render() {
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{height: '100%'}}
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Image src={logo} size='small' centered/>
            <Header as='h2' textAlign='center' className='login-header'>
              {' '}Register your account
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
                  placeholder='Name'
                  onChange={this.handleChange}
                  name="user"
                />
                <Form.Input
                  fluid
                  icon='mail'
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
                <Form.Select
                  fluid
                  placeholder='Gender'
                  options={genderOptions}
                  onChange={this.handleChange}
                  name="gender"
                />
                <Form.Input
                  fluid
                  placeholder='Height in [cm]'
                  onChange={this.handleChange}
                  name="height"
                />
                <Form.Input
                  fluid
                  placeholder='Weight in [kg]'
                  onChange={this.handleChange}
                  name="weight"
                />
                <Form.Select
                  iconPosition='left'
                  placeholder='Country'
                  options={countryOptions}
                  onChange={this.handleChange}
                  name="country"
                />
                <Form.Input
                  fluid
                  placeholder='Date of
                  birth [dd/mm/yyyy]'
                  onChange={this.handleChange}
                  name="birth"
                />

                <Button className='button-style' color='black' fluid size='large'>Register</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ProfileCreator
