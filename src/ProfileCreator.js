import React from 'react'
import { Form, Button, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './app-logo/LO.png'
const countryOptions = [
  { key: 'eu', value: 'eu', flag: 'eu', text: 'Europe' },
  { key: 'us', value: 'us', flag: 'us', text: 'USA' },
  { key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom' },
  { key: 'ru', value: 'ru', flag: 'ru', text: 'Россия' },
  { key: 'jp', value: 'jp', flag: 'jp', text: '日本国' },
  { key: 'pl', value: 'pl', flag: 'pl', text: 'Polska' }
  ];
const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }];

const ProfileCreator = () => (
  <div className='login-form'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} size='small' centered />
        <Header as='h2' textAlign='center' className='login-header'>
          {' '}Register your account
        </Header>
        <Form size='large'>
          <Segment>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Name'
            />
            <Form.Input
              fluid
              icon='mail'
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
            <Form.Select
              fluid
              placeholder='Gender'
              options={genderOptions}
            />
            <Form.Input
              fluid
              placeholder='Height in [cm]'
            />
            <Form.Input
              fluid
              placeholder='Weight in [kg]'
            />
            <Form.Select

              iconPosition='left'
              placeholder='Country'
              options={countryOptions}
            />
            <Form.Input
              fluid
              placeholder='Date of
              birth [dd/mm/yyyy]'
            />

            <Button className='button-style' color='black' fluid size='large'>Register</Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to ='/' >Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>

)

export default ProfileCreator
