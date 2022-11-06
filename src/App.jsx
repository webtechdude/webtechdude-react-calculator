import { createContext, useState } from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import './index.css'

export const ValContext = createContext(null);

function App() {
  const [inputVal, setInputVal] = useState("")
  return (
    <div className='container'>
      <ValContext.Provider value={{ inputVal, setInputVal }}>
        <Screen />
        <Buttons />
      </ValContext.Provider>
    </div>
  )
}

export default App
