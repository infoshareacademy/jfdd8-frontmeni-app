import React from 'react'
import {Button, Form, Input} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class AddScreen extends React.Component {
  state = {
    partyInputValue: '',
    namesInputValue: '',
    events: [],
    guestsNames: [],
    startDate: moment()
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEvent(
      this.state.partyInputValue,
      this.state.startDate
    );
    this.setState({
      taskInputValue: ''
    })
    this.props.onAddDone()
  };

  addGuestsNames = () => {
    this.setState({
      guestsNames: this.state.guestsNames.concat({
        id: this.state.guestsNames.map(
          event => event.id
        ).reduce(
          (biggest, next) => Math.max(biggest, next),
          0
        ) + 1,
        content: this.state.namesInputValue
      }),
      namesInputValue: ''
    });
  };


  handleTimeChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  handlePartyNameChange = item => {
    this.setState({
      partyInputValue: item.target.value
    })
  };

  handleGuestsNamesChange = item => {
    this.setState({
      namesInputValue: item.target.value
    })
  };

  handleDeleteClick = event => {
    console.log(event.target.dataset.taskId);
    this.setState({
      guestsNames: this.state.guestsNames.filter(
        task => task.id !== parseInt(event.target.dataset.taskId, 10)
      )
    })
  };

  render() {
    return (
      <div className="AddScreen-container">
        <Form onSubmit={this.handleSubmit}>
          <label className="AddScreen-PartyName">PARTY TITLE</label><br /><br />
          <Input className="AddScreen-PartyInput"
                 size='large'
                 value={this.state.partyInputValue}
                 onChange={this.handlePartyNameChange}
                 placeholder='Name your party here...'
          />

          <ul>
            {
              this.state.events.map(
                item => (
                  <li key={item.id}
                      className="AddScreen-List">
                    {item.content}
                  </li>
                )
              )
            }
          </ul>

          <label className="AddScreen-PartyName">PICK A DATE</label><br /><br />
          <DatePicker className="AddScreen-DatePicker"
                      selected={this.state.startDate}
                      onChange={this.handleTimeChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="LLL"
          /><br/>

          <label className="AddScreen-PartyName">ADD GUEST</label><br /><br />
          <Input className="AddScreen-GuestsInput"
                 size='large'
                 value={this.state.namesInputValue}
                 onChange={this.handleGuestsNamesChange}
                 placeholder='Write your guest name...'
          />

          <Input onClick={this.addGuestsNames}
                 type="button"
                 value="+"
          />

          <ul>
            {
              this.state.guestsNames.map(
                task => (
                  <li key={task.id}
                      className="AddScreen-List">
                    {task.content}
                    <button
                      data-task-id={task.id}
                      onClick={this.handleDeleteClick}
                    >
                      delete</button>
                  </li>
                )
              )
            }
          </ul>
          <br/><br/>
          <Button color="black"
                  type='submit'>Save
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddScreen;