import { useState } from 'react'
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react'

export default function Developer({ dev }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="dev-card " onClick={() => setExpanded(!expanded)}>
      <h2>{dev.name}</h2>
      {expanded ? (
        <>
          <div
            className="disclosure-control"
            role="button"
            aria-expanded={expanded}
          >
            <TriangleDownIcon size={24} aria-label="Show less" />
            <span>Show less</span>
          </div>
          <p>Expertise:</p>
          <ul>
            {dev.expertise.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <div
          className="disclosure-control"
          role="button"
          aria-expanded={expanded}
        >
          <TriangleRightIcon size={24} aria-label="Show more" />
          <span>Show more</span>
        </div>
      )}
    </div>
  )
}
