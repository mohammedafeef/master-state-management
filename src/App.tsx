import { useAddTodo } from "./reactContext/todo/reducers";
import { useTodo } from "./reactContext/todo/selectors";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import ReactContextProvider from "./reactContext";

const App = () => {
  return (
    <ReactContextProvider>
      <div className="container">
        <div className="wrapper">
          <AddTodo submissionHandler={useAddTodo} />
          <Todo todoGetter={useTodo} />
        </div>
      </div>
    </ReactContextProvider>
  );
};

export default App;
