import { useState } from 'react'
import mqsisLogoStack from './assets/WebsiteFill.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://discord.gg/VCSybFhSDs" target="_blank">
          <img src={mqsisLogoStack} className="logo" alt="MQSIS Logo Stack" />
        </a>
      </div>
      <h1>MQSIS - Website being built!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Queers in STEM: {count}
        </button>
      </div>
    </>
  )
}

export default App
