import React, { Component } from 'react'
import {Form, Button, Grid, Header, Image, Segment, Message} from 'semantic-ui-react'
import logo from '../../app-logo/LO.png'
import { connect } from 'react-redux'
import { signUp } from '../../state/auth';

// const countryOptions = [
//   {key: 'pl', value: 'pl', flag: 'pl', text: 'Polska'},
//   {key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom'},
//   {key: 'ru', value: 'ru', flag: 'ru', text: 'Россия'},
//   {key: 'us', value: 'us', flag: 'us', text: 'USA'},
//   {key: 'eu', value: 'eu', flag: 'eu', text: 'Europe'},
//   {key: 'jp', value: 'jp', flag: 'jp', text: '日本国'}
// ];
// const genderOptions = [
//   {key: 'm', text: 'Male', value: 'male'},
//   {key: 'f', text: 'Female', value: 'female'}
// ];

const goalOptions = [
  {key: 't', text: 'Lose weight', value: 'lose'},
  {key: 'f', text: 'Gain weight', value: 'gain'}
];


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

    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    const { email, password, error, ...other} = this.state;

    this.props.signUp(
      email,
      password,
      other
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
                  required
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
                {/*<Form.Select*/}
                  {/*fluid*/}
                  {/*placeholder='Gender'*/}
                  {/*options={genderOptions}*/}
                  {/*onChange={this.handleChange}*/}
                  {/*name="gender"*/}
                {/*/>*/}
                {/*<Form.Input*/}
                  {/*fluid*/}
                  {/*placeholder='Height in [cm]'*/}
                  {/*onChange={this.handleChange}*/}
                  {/*name="height"*/}
                  {/*type='number'*/}
                  {/*min='0'*/}
                  {/*max='300'*/}
                  {/*required*/}
                {/*/>*/}
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
                  name="goal"
                />
                {/*<Form.Select*/}
                  {/*placeholder='Country'*/}
                  {/*options={countryOptions}*/}
                  {/*onChange={this.handleChange}*/}
                  {/*name="country"*/}
                {/*/>*/}
                {/*<Form.Input*/}
                  {/*fluid*/}
                  {/*placeholder='Date of*/}
                  {/*birth [dd/mm/yyyy]'*/}
                  {/*onChange={this.handleChange}*/}
                  {/*name="birth"*/}
                  {/*required*/}
                {/*/>*/}
                <Button className='button-style' color='black' fluid size='large'>Register</Button>
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
  { signUp }
)(ProfileCreator)
