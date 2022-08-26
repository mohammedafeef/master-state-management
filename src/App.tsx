import { TodoProvider } from "./reactContext/todo";
import { useAddTodo } from "./reactContext/todo/reducers";
import { useTodo } from "./reactContext/todo/selectors";
import AddTodo from "./components/AddTodo";
import Todo from "./components/todo";
const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <div className="wrapper">
          <AddTodo submissionHandler={useAddTodo} />
          <Todo todoGetter={useTodo} />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
