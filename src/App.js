import './App.css'
import { useState } from 'react'

function App() {
  const devs = [
    {
      name: 'Susan',
      expertise: ['React', 'JavaScript', 'Music'],
    },
    {
      name: 'Rachel',
      expertise: ['React', 'JavaScript', 'Yoga'],
    },
    {
      name: 'Daniela',
      expertise: ['React', 'JavaScript', 'Yoga'],
    },
  ]

  return (
    <>
      <h1>Devs for Hire</h1>
      {devs.map((dev, idx) => (
        <Developer dev={dev} key={idx} />
      ))}
    </>
  )
}

function Developer({ dev }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="dev-card">
      <h2>{dev.name}</h2>
      <button onClick={() => setExpanded(!expanded)}>Show More</button>
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

export default App
