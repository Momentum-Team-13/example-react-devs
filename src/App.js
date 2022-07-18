import './App.css'
import Developer from './Developer'
import { useState } from 'react'
function App() {
  const [selectedDev, setSelectedDev] = useState(null)

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

  const handleSelectedDev = (dev) => {
    console.log('Selected dev: ', dev)
    setSelectedDev(dev)
  }
  return (
    <div className="container ">
      <h1>Devs for Hire</h1>
      {selectedDev ? (
        <Developer dev={selectedDev} />
      ) : (
        devs.map((dev, idx) => (
          <div className="dev" onClick={() => handleSelectedDev(dev)}>
            <Developer dev={dev} key={idx} />
          </div>
        ))
      )}
    </div>
  )
}

export default App
