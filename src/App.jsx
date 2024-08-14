import { useState } from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleInput} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default App;
