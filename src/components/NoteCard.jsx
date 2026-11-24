import { memo, useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ title, body }) {
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3 className={`mb-2 font-medium ${largeText ? 'text-2xl' : 'text-xl'}`}>
        {title}
      </h3>
      <p className={`text-[#666] ${largeText ? 'text-lg' : 'text-base'}`}>
        {body}
      </p>
    </div>
  )
}

export default memo(NoteCard)