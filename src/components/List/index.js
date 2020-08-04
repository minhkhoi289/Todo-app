import React, { Component } from 'react';
import Item from '../Item';

import './index.css';

class List extends Component {
  render() {
    const { todos, onToggleTodo, onRemoveTodo } = this.props;

    return (
      <div className='list-container'>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            data={todo}
            onToggleTodo={() => onToggleTodo(todo.id)}
            onRemoveTodo={() => onRemoveTodo(todo.id)}
          />
        ))}
      </div>
    )
  }
}

export default List;
