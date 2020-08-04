import React, { Component } from 'react';
import './App.css';
import ActionBar from './components/ActionBar';
import List from './components/List';
import AddForm from './components/AddForm';

const fakeData = [
  { id: 1, name: 'Todo 1', completed: true },
  { id: 2, name: 'Todo 2', completed: true },
  { id: 3, name: 'Todo 3', completed: false }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: fakeData,
      filter: 'all',
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

  handleRemoveTodo = (id) => {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos })
  }

  onToggleTodo = (id) => {
    let { todos } = this.state;
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({ todos });
  }

  handleFilter = (status) => {
    this.setState({
      filter: status
    });
  }

  filterTodo = () => {
    const { todos, filter } = this.state;

    if (filter === 'all') return todos;
    if (filter === 'active') return todos.filter((todo) => todo.completed === false);
    if (filter === 'complete') return todos.filter((todo) => todo.completed === true);
  }

  deleteAll = () => {
    this.setState({
      todos: []
    });
  }

  render() {
    const { todos, filter } = this.state;

    return (
      <div className='container'>
        <ActionBar
          handleNewTodo={this.handleNewTodo}
        />
        <List
          todos={this.filterTodo()}
          onToggleTodo={this.onToggleTodo}
          onRemoveTodo={this.handleRemoveTodo}
        />
        <AddForm
          todolength={todos.length}
          handleFilter={this.handleFilter}
          filter={filter}
          clearTodo={this.deleteAll}
        />
      </div>
    )
  }
}

export default App;
