interface TodoProps {
  todoGetter: () => { id: string; content: string }[];
}

const Todo = ({ todoGetter }: TodoProps) => {
  const todos = todoGetter();
  return (
    <>
      {todos.map((todo, index) => (
        <div className="todo" key={index}>{todo.content}</div>
      ))}
    </>
  );
};
export default Todo;
