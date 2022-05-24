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
    <div className="active-tasks">
      {todos.map(task => (
        <Task
          todo={task}
          key={task.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
