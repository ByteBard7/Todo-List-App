import styles from "./styles/singleTodo.module.css";

const Todo = ({ todo, toggleTodo, handleDelete }) => {
  return (
    <li className={styles.todoItem}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            // console.log(todo.title, " ", e.target.checked);
            toggleTodo(todo.id, e.target.checked);
          }}
          className={styles.checkbox}
        />
        {todo.title}
      </label>
      <button onClick={() => handleDelete(todo.id)} className={styles.button}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
