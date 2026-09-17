import React from 'react'
import './App.css'

const App = () => {
  const [name, setName] = React.useState('')

  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default App