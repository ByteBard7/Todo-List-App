const Todo = ({ todo, toggleTodo, handleDelete }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            console.log(todo.title, " ", e.target.checked);
            toggleTodo(todo.id, e.target.checked);
          }}
        />
        {todo.title}
      </label>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default Todo;
