import TodoItem from "./TodoItem";

function TodoList(props) {

  const todoComponents = props.todos.map((todo, index) => {
    return (
      <TodoItem key={index} todo={todo} />
    );
  });

  return (
    <div>
      to do list
      {todoComponents}
    </div>
  );
}

export default TodoList;
