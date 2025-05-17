import { useState } from 'react'
import Color_picker from './Color_picker/Color_picker.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Color_picker></Color_picker>
    </>
  )
}

export default App
