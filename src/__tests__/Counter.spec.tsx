import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  test('Render base elements', () => {
    render(<App />)
    screen.getByText('0')
    screen.getByText('Plus')
    screen.getByText('Minus')
  })

  test('Should be rendered increased number', () => {
    render(<App />)
    const n = screen.getByText('0')
    const increase = screen.getByText('Plus')
    fireEvent.click(increase)
    expect(n).toHaveTextContent('1')
  })

  test('Should be rendered decreased number', () => {
    render(<App />)
    const n = screen.getByText('0')
    const decrease = screen.getByText('Minus')
    for (let i = 0; i < 50; i++) {
      fireEvent.click(decrease)
    }
    expect(n).toHaveTextContent('-50')
  })
})
