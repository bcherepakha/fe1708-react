import React from 'react';
import { AddTaskForm } from './AddTaskForm/AddTaskForm.js';
import { TaskList } from './TaskList/TaskList';

import './App.css';

class App extends React.PureComponent {
  state = {
    tasks: [],
    filterName: 'all'
  }

  addTask = task => {
    this.setState({
      tasks: this.state.tasks.concat({
        ...task,
        id: Date.now()
      })
    });
  }

  removeTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  completeTaskToggle = id => {
    const {tasks} = this.state;

    this.setState({
      tasks: tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }

        return task;
      })
    });
  }

  setFilter = filterName => () => {
    this.setState({filterName});
  }

  render() {
    return (
      <div className="App">
        <AddTaskForm addTask={this.addTask}/>
        <TaskList
          tasks={this.state.tasks}
          filterName={this.state.filterName}
          removeTask={this.removeTask}
          completeTaskToggle={this.completeTaskToggle}/>
        <div className="controls">
          <button onClick={this.setFilter('all')}>All</button>
          <button onClick={this.setFilter('completed')}>Completed</button>
          <button onClick={this.setFilter('uncompleted')}>UnCompleted</button>
        </div>
      </div>
    );
  }
}

export default App;
