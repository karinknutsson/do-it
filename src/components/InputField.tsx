import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="task-input" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={
          (event)=>setTodo(event.target.value)
        }
        placeholder="What needs to get done?"
        className="input-box" />
      <button type="submit" className="input-submit">+</button>
    </form>
  );
};

export default InputField;
