import { useState, useEffect, useRef } from 'react'

import Todo from './components/Todo'
import Toggable from './components/Toggable'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todo, setTodo] = useState(
    [{
      id: Math.random() * 0.05 * new Date(),
      content: "Heloo World"
    }])
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = (id) => {
    setTodo(todo.filter(n => n.id !== id))
  }

  const addTodo = (noteObject) => {
    noteFormRef.current.toggleVisibility()
    setTodo(todo.concat(noteObject))
  }

  const todoToShow = showAll
    ? todo
    : todo.filter(note => note.important)

  const noteFormRef = useRef()

  return (
    <div>
      <h1>Todos</h1>
      
        <Toggable buttonLabel="new task" ref={noteFormRef}>
          <TodoForm createTodo={addTodo} />
        </Toggable>
        
      <ul>
        {todoToShow.map(note =>
          <Todo
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>

    </div>
  )
}

export default App