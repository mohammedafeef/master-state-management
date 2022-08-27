import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
interface AddTodoProps {
  submissionHandler: () => (arg0:any)=>void;
}
const AddTodo = ({ submissionHandler }: AddTodoProps) => {
  const [todo, setTodo] = useState<string>();
  const handler = submissionHandler();
  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleAddTodo = () => {
    handler({
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
