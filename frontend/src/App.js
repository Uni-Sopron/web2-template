import React, { useEffect, useState } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'

const App = () => {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { connection },
        } = await axios.get('/api/heartbeat')
        setConnected(connection)
      } catch (error) {
        setError(error.message)
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>
            Connection to backend: <br />
            {connected ? 'OK' : 'Loading'}
          </p>
        )}
      </header>
    </div>
  )
}

export default App
