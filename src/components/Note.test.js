import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    content: 'Component testing is done with react-testing-library',
    id: Math.random() * 0.05 * new Date(),
  }

  render(<Todo note={todo} />)

  const element = screen.getByText('Component testing is done with react-testing-library')

  expect(element).toBeDefined()
})

test('clicking the button calls event handler once', async () => {
  const todo = {
    content: 'Component testing is done with react-testing-library',
    id: Math.random() * 0.05 * new Date(),
  }

  const mockHandler = jest.fn()

  render(
    <Todo note={todo} toggleImportance={mockHandler} />
  )

  const button = screen.getByText('delete')
  userEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(0)
})