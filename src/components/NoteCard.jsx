import { useState } from 'react'

function NoteCard({ title, body }) {
  // 1 & 2. Import and add a boolean state for expansion
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
      
      {/* 3. Conditionally render the body paragraph based on isExpanded */}
      {isExpanded && (
        <p className="mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]">
          {body}
        </p>
      )}

      {/* Toggle button that changes text and switches isExpanded state */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard