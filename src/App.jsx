import { useState, useEffect } from 'react'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { SettingsContext } from './SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(() => {
    const saved = localStorage.getItem('largeText')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('largeText', JSON.stringify(largeText))
  }, [largeText])

  return (
    <SettingsContext.Provider value={{ largeText, setLargeText }}>
      <Notes />
      <Info />
    </SettingsContext.Provider>
  )
}

export default App