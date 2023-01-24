import React from 'react'
import Home from '../home'

import { renderHook } from '@testing-library/react-hooks'
import App from "../app/App";
import axios from 'axios'

import Enzyme from 'enzyme'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const { shallow } = Enzyme

// Composant App



// Composant Home
test('test button effacer réussi',  () => {
  const handleClick = jest.fn()
  render(<Home  onClick={handleClick}>Effacer</Home>)
  handleClick();
  fireEvent.click(screen.getByText('Effacer'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('test input rechercher réussi',  () => {
  const handleOnChange = jest.fn()
  render(<Home  onChange={handleOnChange}></Home>)
  handleOnChange();
  fireEvent.change(screen.getByLabelText('Nompokemon'))
  expect(handleOnChange).toHaveBeenCalledTimes(1)
})


