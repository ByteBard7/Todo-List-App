import { useState } from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [...prevTodos, { id: crypto.randomUUID(), title: newTodo }];
    });
  };

  const handleInput = (e) => {
    // console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
