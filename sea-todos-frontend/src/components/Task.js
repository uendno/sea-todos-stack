import React from 'react';
import PropTypes from 'prop-types';

export default function Task({task, toggleTask}) {
  const {text, completed} = task;
  return (
    <li className={completed ? 'completed' : ''} onClick={() => toggleTask(task)}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => {}}
          onClick={() => toggleTask(task)}
          checked={completed}
        />
        <label>{text}</label>
      </div>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  toggleTask: PropTypes.func.isRequired,
}
