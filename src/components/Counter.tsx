import { useState } from 'react'

function Counter() {
  const [num, setNum] = useState(0)
  const handlePlus = () => setNum(num + 1)
  const handleMinus = () => setNum(num - 1)

  return (
    <div className="counter">
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
      <div>{num}</div>
    </div>
  )
}

export default Counter
