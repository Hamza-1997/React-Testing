import { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    createTodo({
      id: Math.random() * 0.05 * new Date(),
      content: newNote,
    })

    setNewNote('')
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={newNote}
          onChange={handleChange}
          placeholder='enter new todo'
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default TodoForm