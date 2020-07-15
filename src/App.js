import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionBar from './components/ActionBar';
import List from './components/List';

const fakeData = [
  { id: 1, name: 'day la so 1', completed: true },
  { id: 2, name: 'day la so 2', completed: true },
  { id: 3, name: 'day la so 3', completed: true }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: fakeData
    };
  }

  handleNewTodo = (name) => {
    let { todos } = this.state;
    const newTodo = {
      id: (new Date()).getTime(),
      completed: false,
      name
    };

    todos = [...todos, newTodo];

    this.setState({ todos });
  }

  onToggleTodo = (id) => {
    let { todos } = this.state;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className='container'>
        <ActionBar
          handleNewTodo={this.handleNewTodo}
        />
        <List
          todos={todos}
          onToggleTodo={this.onToggleTodo}
        />
      </div>
    )
  }
}

export default App;
