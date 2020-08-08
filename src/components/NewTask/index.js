import React from 'react';

import './styles.sass';


export default (props) => {
  return <form onSubmit={props.onSubmit} className="app-new-task-form">
    <input
      type="text"
      placeholder="Nouvelle tâche"
      className="app-new-task"
      onChange={props.onChange}
    />
  </form>;
};
