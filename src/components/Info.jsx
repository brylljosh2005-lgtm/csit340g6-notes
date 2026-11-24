import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function Info() {
  const { largeText } = useContext(SettingsContext)

  return (
    <footer
      className={`py-8 text-center text-[#949494] ${largeText ? 'text-base' : 'text-xs'}`}
    >
      <p>Notes App — Built with React Hooks</p>
    </footer>
  )
}

export default Info