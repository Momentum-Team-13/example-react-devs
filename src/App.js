import './App.css'
import Developer from './Developer'
import { useState } from 'react'

function App({ devs }) {
  const [selectedDev, setSelectedDev] = useState(null)

  const handleSelectedDev = (dev) => {
    console.log('Selected dev: ', dev)
    setSelectedDev(dev)
  }

  const handleGoBack = () => {
    setSelectedDev(null)
  }

  return (
    <div className="container ">
      <h1>Devs for Hire</h1>
      {selectedDev && (
        <button onClick={handleGoBack}>Go Back to Devs List</button>
      )}
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
