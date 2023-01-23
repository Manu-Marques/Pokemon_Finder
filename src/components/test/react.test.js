import React from 'react'
import Home from '../home'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

/**
 * @jest-environment jsdom
 */

// test('test 1 réussi', function () {
//   render(<Home title="Hello World"></Home>)
//   const title = screen.getByText('Hello World')
//   expect(title).toBeInTheDocument()
// })

test('test button effacer réussi',  () => {
  const handleClick = jest.fn()
  render(<Home  onClick={handleClick}>Effacer</Home>)
  handleClick();
  fireEvent.click(screen.getByText('Effacer'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('test input réussi',  () => {
  const handleOnChange = jest.fn()
  render(<Home  onChange={handleOnChange}></Home>)
  handleOnChange();
  fireEvent.change(screen.getByLabelText('Nompokemon'))
  expect(handleOnChange).toHaveBeenCalledTimes(1)
})


