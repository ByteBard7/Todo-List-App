import Todo from "./Todo";
import styles from "./styles/todos.module.css";

const Todos = ({ todos, toggleTodo, handleDelete }) => {
  return (
    <div>
      <ul className={styles.todos}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
