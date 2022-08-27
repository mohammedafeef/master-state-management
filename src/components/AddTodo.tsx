import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddTodo = () => {
  const [todo, setTodo] = useState<string>();
  const handleTodoChange = (e) => setTodo(e.target.value);
  const handleAddTodo = () => {
    const data = {
      id: uuidv4(),
      content: todo,
    }
    console.log(data);
  };
  return (
    <div>
      <input name="todo" type="text" value={todo} onChange={handleTodoChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
