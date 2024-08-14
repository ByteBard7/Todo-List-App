import { useEffect, useState } from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(localStorage.getItem("todoList"));
    return localTodos ? localTodos : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), title: newTodo, completed: false },
      ];
    });
    setNewTodo("");
  };

  // console.log(todos);

  const handleInput = (e) => {
    // console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id, completed) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
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

export default App;
