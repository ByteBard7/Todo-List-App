import styles from "./styles/todoInput.module.css";

const TodoInput = ({ handleSubmit, handleInput, newTodo }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInput}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
