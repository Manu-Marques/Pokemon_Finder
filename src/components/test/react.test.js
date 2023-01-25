import React from 'react'
import Home from '../home'
import GetPokemonData from '../callApi'

import { renderHook } from '@testing-library/react-hooks'
import Api from '../app/App'
import mockAxios from 'axios'

import Enzyme from 'enzyme'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const { shallow } = Enzyme

// Composant App
jest.mock("axios");
mockAxios.get.mockResolvedValue({ data: { name: "Mock Jedi" } });

describe("swapiGetter", () => {
  afterEach(jest.clearAllMocks);

  test("should return a name", async () => {
    const result = await GetPokemonData(1);
    expect(result).toBe("Mock Jedi");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});


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


