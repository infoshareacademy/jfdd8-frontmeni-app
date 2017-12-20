import React from 'react'
import { Form, Input, Dropdown, Button, Grid, Header, Image, Segment } from 'semantic-ui-react'
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
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='right'
              placeholder='Name'
            />
            <Form.Input
              fluid
              icon='mail'
              iconPosition='right'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='right'
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
              fluid
              iconPosition='left'
              placeholder='Country'
              options={countryOptions}
            />
            <Form.Group>
              <Form.Input placeholder='8 Wide' width={4} />
              <Form.Input placeholder='6 Wide' width={3} />
              <Form.Input placeholder='2 Wide' width={1} />
            </Form.Group>

            <Button className='button-style' color='black' fluid size='large'>Register</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>

)

export default ProfileCreator
