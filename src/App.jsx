import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const handleInput = useRef();

  const handleInputValue = () => {
    let inputText = handleInput.current.value;
    let newItem = { completed: false, inputText };
    setTodos([...todos, newItem]);
    handleInput.current.value = " ";
  };
  const textDone = (index) => {
    let newTodoList = todos.slice();
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodos(newTodoList);
  };
  const textDelete = (index) => {
    let newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList)
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="app">
            <h2>Todo_List</h2>
            <ul>
              {todos.map(({ inputText, completed }, index) => {
                // eslint-disable-next-line react/jsx-key
                return <div className="info">
                  <li
                    className={completed ? "done" : ""}
                    key={index}
                    onClick={() => textDone(index)}>
                    {inputText}
                  </li>
                  <span onClick={() => textDelete(index)}>✖️</span>
                </div>
              })}
            </ul>
            <input ref={handleInput} placeholder="Please Enter Your Task" />
            <button onClick={handleInputValue}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
