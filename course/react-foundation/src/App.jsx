import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{ title: "Go TO gym", description: "Go to gym 7-9", completed: false },
  { title: "DSA", description: "study DSA from 9-11", completed: false },{ title: "DSA", description: "study DSA from 9-11", completed: false }])

  return (
    <>
      {todos.map((todo) => <Todo title={todo.title} description={todo.description} completed={todo.completed}></Todo>)}
    </>
  )
}

export default App
