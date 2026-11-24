import { useState } from 'react'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { SettingsContext } from './SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <SettingsContext.Provider value={{ largeText, setLargeText }}>
      <Notes />
      <Info />
    </SettingsContext.Provider>
  )
}

export default App