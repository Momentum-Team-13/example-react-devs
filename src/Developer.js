import { useState } from 'react'

export default function Developer({ dev }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="dev-card">
      <h2>{dev.name}</h2>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
      {expanded ? (
        <>
          <p>Expertise:</p>
          <ul>
            {dev.expertise.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
