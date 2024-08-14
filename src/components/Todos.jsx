const Todos = ({ todos, toggleTodo, handleDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
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
        ))}
      </ul>
    </div>
  );
};

export default Todos;
