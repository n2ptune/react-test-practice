import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('Render base elements', () => {
    const utils = render(<App />)
    utils.getByText('0')
    utils.getByText('Plus')
    utils.getByText('Minus')
  })

  test('Should be rendered increased number', () => {
    const utils = render(<App />)
    const n = utils.getByText('0')
    const increase = utils.getByText('Plus')
    fireEvent.click(increase)
    expect(n).toHaveTextContent('1')
  })

  test('Should be rendered decreased number', () => {
    const utils = render(<App />)
    const n = utils.getByText('0')
    const decrease = utils.getByText('Minus')
    // fireEvent.click(decrease)

    for (let i = 0; i < 50; i++) {
      fireEvent.click(decrease)
    }

    expect(n).toHaveTextContent('-50')
  })
})
