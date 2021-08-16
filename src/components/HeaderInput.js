import { useState } from "react";

function HeaderInput(props) {

  const [value, setValue] = useState('');

  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const onClick = () => {
    const newTodos = [...props.todos, value];
    props.setTodos(newTodos);
  };

  return (
    <div>
      <input 
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>Add new to-do</button>
    </div>
  );
}

export default HeaderInput;
