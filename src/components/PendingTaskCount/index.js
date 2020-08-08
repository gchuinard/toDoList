import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


/**
 * Validation des props — dans l'idéal, il faut vérifier :
 * - le type de données
 * - la valeur
 */
const PendingNewTask = (props) => {
  let message;
  if (props.count === 0) {
    message = 'Aucune tâche en cours';
  }
  else if (props.count === 1) {
    message = '1 tâche en cours';
  }
  else {
    message = `${props.count} tâches en cours`;
  }

  // return React.createElement('div', { className: 'app-counter' }, '...')
  return <div className="app-counter" onClick={props.onClick}>{message}</div>;
};

// Description des props et de leurs types.
PendingNewTask.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PendingNewTask;
