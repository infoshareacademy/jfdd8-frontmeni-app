import React, { Component } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'



class SettingsMenu extends Component {

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

            <Header as='h2' textAlign='center' className='login-header'>
              {' '}Settings
            </Header>
            <Button  color='white' fluid size='large' as={Link} to={'/settings/goals'}>Set my goals</Button>
            <Button onClick={() => firebase.auth().signOut()} className='button-style' color='black' fluid size='large'>Log out</Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SettingsMenu