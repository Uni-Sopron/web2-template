import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch('/api/heartbeat')
        if (!resp.ok) {
          throw new Error('Wrong response')
        }
        const data = await resp.json()
        setStatus(data.connection)
      } catch (error) {
        setStatus('error')
        setError(error.message)
      }
    }
    getData()
  }, [])

  const getStatus = () => {
    switch (status) {
      case 'ok':
        return 'green'
      case 'error':
        return 'red'
      default:
        return 'yellow'
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="button">
          <p>Connection to backend</p>
          <div
            style={{
              marginLeft: 10,
              background: getStatus(),
              width: 20,
              borderRadius: 100,
              aspectRatio: 1,
            }}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
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
