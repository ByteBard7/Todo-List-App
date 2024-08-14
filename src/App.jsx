import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import Todos from "./components/todos/Todos";
import Notification from "./components/Notification";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(localStorage.getItem("todoList"));
    return localTodos ? localTodos : [];
  });
  const [notifyMsg, setNotifyMsg] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { id: crypto.randomUUID(), title: newTodo, completed: false },
        ];
      });
      setNotifyMsg("Todo added successfully");
      setTimeout(() => setNotifyMsg(""), 3000);
      setNewTodo("");
    } else {
      setNotifyMsg("Todo input cannot be empty");
      setTimeout(() => setNotifyMsg(""), 3000);
    }
  };

  // console.log(todos);

  const handleInput = (e) => {
    // console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setNotifyMsg("Todo deleted successfully");
    setTimeout(() => setNotifyMsg(""), 3000);
  };

  const toggleTodo = (id, completed) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Notification message={notifyMsg} />
      <TodoInput
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        newTodo={newTodo}
      />
      <Todos
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
