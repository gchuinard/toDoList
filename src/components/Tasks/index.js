import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.sass';


const Tasks = ({ tasks, onTaskClick }) => {
  const tasksList = tasks.map((task) => {
    const kls = classNames(
      'app-task',
      {
        'app-task--done': task.done
      }
    );
    return <li
      key={task.id}
      className={kls}
      onClick={(event) => onTaskClick(task.id)}
    >
      {task.text}
    </li>;
  });

  return <div className="app-tasks-list">
    <span className="app-task-text">
      {tasksList}
    </span>
  </div>;
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })).isRequired,
  onTaskClick: PropTypes.func.isRequired
};

export default Tasks;
