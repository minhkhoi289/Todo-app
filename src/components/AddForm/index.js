import React, { Component } from 'react';

import './index.css';


class AddForm extends Component {
  render() {
    const { todolength, filter, handleFilter, clearTodo } = this.props;

    return (
      <div className='todo-footer-container'>
        <div className='todo-left-count'>{todolength} items left</div>
        <div className='todo-menus'>
          <a
            href='#'
            className={filter === 'all' ? 'active' : null}
            onClick={() => handleFilter('all')}
          >
            All
          </a>
          <a
            href='#'
            className={filter === 'active' ? 'active' : null}
            onClick={() => handleFilter('active')}
          >
            Active
          </a>
          <a
            href='#'
            className={filter === 'complete' ? 'active' : null}
            onClick={() => handleFilter('complete')}
          >
            Complete
          </a>
        </div>
        <a
          href='#'
          className='todo-clear-complete'
          onClick={clearTodo}
        >
          Clear complete
        </a>
      </div>
    );
  }
}

export default AddForm;
