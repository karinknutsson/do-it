import React from 'react';
import Task from './Task';
import { Todo } from '../model';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className="task-container">
      <div className="active-tasks">
        {todos.filter(task => task.isDone === false).map(task => (
          <Task
            todo={task}
            key={task.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      <div className="completed-tasks">
        {todos.filter(task => task.isDone === true).map(task => (
          <Task
            todo={task}
            key={task.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
