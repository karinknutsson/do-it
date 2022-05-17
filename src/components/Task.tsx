import React from 'react';
import { Todo } from '../model';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Task: React.FC = () => {
  return (
    <div className="single-task">
      <FontAwesomeIcon icon={faTrashCan} />

    </div>
  );
};

export default Task;
