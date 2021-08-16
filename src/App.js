import { useState } from "react";
import HeaderInput from "./components/HeaderInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([ 
    "Go to the grocery store", 
    "Take out the trash",
    "Walk the dog"
  ]);

  return (
    <div>
      <HeaderInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
