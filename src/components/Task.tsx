import React, { useState } from 'react';
import { Todo } from '../model';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Task: React.FC<Props> = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, isDone: !todo.isDone } : todo
    ));
  };


  const handleDelete = (id: number) => {
    setTodos(todos = todos.filter(todo => todo.id !== id));
  };

  return (
    <form className="single-task">
      { edit ? (
          <input className="edit-task" />
        ) : (
          <span className="single-task-text">{todo.todo}</span>
        )
      }
      <div className="task-icons">
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }
        } />
        <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(todo.id)} />
        <FontAwesomeIcon icon={faCircleCheck} onClick={() => handleDone(todo.id)} />
      </div>
    </form>
  );
};

export default Task;
