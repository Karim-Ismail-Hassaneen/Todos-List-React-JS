import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const handleInput = useRef()

  const handleInputValue = () => {
    let inputText = handleInput.current.value;
    setTodos([...todos, inputText])
    handleInput.current.value = " ";
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="app">
            <h2>Todo_List</h2>
            <ul>
              {todos.map((item) => {
                // eslint-disable-next-line react/jsx-key
                return <li>{item}</li>
              })}
            </ul>
            <input ref={handleInput} placeholder='Please Enter Your Task' />
            <button onClick={handleInputValue}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
