import React from 'react';
import classnames from 'classnames';

import './Task.css';

export function Task(props) {
  const {text, completed, removeTask, completeTaskToggle} = props,
    classNames = classnames(
      'task',
      {
        'task-completed': completed
      }
    );

  return (
    <li className={classNames}>
        {text}
        <button onClick={removeTask}>Delete</button>
        <button onClick={completeTaskToggle}>
          {completed ? 'Uncomplete' : 'Complete'}
        </button>
    </li>
  );
}
