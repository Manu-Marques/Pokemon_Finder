import React from 'react'
import Home from '../home'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

/**
 * @jest-environment jsdom
 */

test('test 1 réussi', function () {
  render(<Home title="Hello World">Bonjour</Home>)
  const title = screen.getByText('Hello World')
  expect(title).toBeInTheDocument()
})
