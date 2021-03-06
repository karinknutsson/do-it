import React, { useRef } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="task-input" onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={
          (event)=>setTodo(event.target.value)
        }
        placeholder="What needs to get done?"
        className="input-box"
        maxLength={22}
      />
      <button type="submit" className="input-submit"><FontAwesomeIcon icon={faPlus} /></button>
    </form>
  );
};

export default InputField;
