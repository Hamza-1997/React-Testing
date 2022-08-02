import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoForm from './TodoForm'
import userEvent from '@testing-library/user-event'

test('<NoteForm /> updates parent state and calls onSubmit', () => {
  const createNote = jest.fn()

  render(<TodoForm createNote={createNote} />)

  const input = screen.getByPlaceholderText('enter new todo')
  const sendButton = screen.getByText('save')

  userEvent.type(input, 'testing a form...' )
  userEvent.click(sendButton)
})