const TodoInput = ({ handleSubmit, handleInput, newTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleInput} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
