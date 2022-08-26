interface TodoProps {
  todoGetter: () => { id: string; content: string }[];
}

const Todo = ({ todoGetter }: TodoProps) => {
  const todos = todoGetter();
  return (
    <>
      {todos.map((todo) => (
        <div className="todo">{todo.content}</div>
      ))}
    </>
  );
};
export default Todo;
