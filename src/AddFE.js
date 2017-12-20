import React, {Component} from 'react'

class AddFE extends Component {
  state = {
    tasks: [
      {
        id: 1,
        content: 'Orange',
        calories: 100,
        isFood: true,
        isExercise: false
      },
      {
        id: 2,
        content: 'Apple',
        calories: 150,
        isFood: true,
        isExercise: false
      },
      {
        id: 3,
        content: 'push-up',
        calories: 30,
        isFood: false,
        isExercise: true
      }

    ]
  }

  render() {
    return (
      <div>
        <h1>Tu będzie progress bar</h1>
        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {task.content}
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default AddFE