import './styles.css';

const InputField = () => {
  return (
    <form className="task-input">
      <input type="input" placeholder="Enter a task" className="input-box" />
      <button type="submit" className="input-submit">Go</button>
    </form>
  );
};

export default InputField;
