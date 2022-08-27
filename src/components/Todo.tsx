const Todo = () => {
  const todos = [
    {
      id: "1",
      content: "create something"
    }
  ]
  return (
    <>
      {todos.map((todo) => (
        <div className="todo">{todo.content}</div>
      ))}
    </>
  );
};
export default Todo;
