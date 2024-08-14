import Todo from "./Todo";
import styles from "./styles/todos.module.css";

const Todos = ({ todos, toggleTodo, handleDelete }) => {
  if (todos.length) {
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
  }

  return <div>No Todo's Listed</div>;
};

export default Todos;
