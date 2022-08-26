import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
interface AddTodoProps {
  submissionHandler: (arg0: any) => void;
}
const AddTodo = ({ submissionHandler }: AddTodoProps) => {
  const [todo, setTodo] = useState<string>();
  const handleTodoChange = (e) => setTodo(e.target.value);
  const handleAddTodo = () => {
    submissionHandler({
      id: uuidv4(),
      content: todo,
    });
  };
  return (
    <div>
      <input name="todo" type="text" value={todo} onChange={handleTodoChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
