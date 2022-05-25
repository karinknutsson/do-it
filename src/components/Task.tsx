import React, { useState, useRef, useEffect } from 'react';
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

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(todos.map((todo) =>
      todo.id === id? {...todo, todo: editTodo } : todo
    ));

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setTodos(todos = todos.filter(todo => todo.id !== id));
  };

  return (
    <form className="single-task" onSubmit={(event) => handleEdit(event, todo.id)}>
      { edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(event) => setEditTodo(event.target.value)}
            className="edit-task"
            maxLength={20} />
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
