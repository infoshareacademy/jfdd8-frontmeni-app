import React, { Component } from 'react'

class AddFEForm extends Component {

  state = {
    task:''


  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onTaskAdded({content:this.state.content});
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input name="content" onChange={this.handleChange} />
        <button>Add task</button>
      </form>
    )
  }
}

export default AddFEForm
