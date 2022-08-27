import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
};

export default App;
