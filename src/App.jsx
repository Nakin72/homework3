import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import clickButton from './Components/Button/clickButton.JSX'
import Button from './Components/Button/clickButton.JSX'
import UniversalButton from './Components/UniversalButton/UniversalButton'

function App() {
  const [count, setCount] = useState(0)
  const [count_a, setCoun] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button name="s" />
        <UniversalButton size="large" color="primary" onClick={() => setCount((count) => count+1)}>
         count {count}
        </UniversalButton>
        <UniversalButton size="large" color="primary" onClick={() => setCoun((count_a) => count_a+1)}>
         count {count_a}
        </UniversalButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
