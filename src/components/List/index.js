import React, { Component } from 'react';
import Item from '../Item';

import './index.css';

class List extends Component {
  render() {
    const { todos, onToggleTodo } = this.props;

    return (
      <div className='list-container'>
        {todos.map((todo) => (
          <Item
            data={todo}
            onToggleTodo={() => onToggleTodo(todo.id)}
          />
        ))}
      </div>
    )
  }
}

export default List;
