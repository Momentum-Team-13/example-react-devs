import './App.css'
import Developer from './Developer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingIcons from 'react-loading-icons'
import Grid from 'react-loading-icons/dist/esm/components/grid'

function App() {
  const [selectedDev, setSelectedDev] = useState(null)
  const [devs, setDevs] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleSelectedDev = (dev) => {
    console.log('Selected dev: ', dev)
    setSelectedDev(dev)
  }

  const handleGoBack = () => {
    setSelectedDev(null)
  }

  useEffect(() => {
    // ajax request to get dev data
    axios.get('https://node-api-devs-for-hire.glitch.me/devs').then((res) => {
      setDevs(res.data.data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div
        className="loading"
        style={{ display: 'grid', placeContent: 'center', height: '100vh' }}
      >
        <LoadingIcons.Hearts fill="#8A4F7D" height="5em" />
      </div>
    )
  }

  return (
    <div className="container ">
      <Count count={count} />
      <h1>Devs for Hire</h1>
      {selectedDev && (
        <button onClick={handleGoBack}>Go Back to Devs List</button>
      )}
      {selectedDev ? (
        <Developer dev={selectedDev} setCount={() => setCount(count + 1)} />
      ) : (
        devs.map((dev) => (
          <div
            className="dev-card"
            key={dev.id}
            onClick={() => handleSelectedDev(dev)}
          >
            <h2>{dev.name}</h2>
            <p>Expertise: {dev.expertise}</p>
          </div>
        ))
      )}
    </div>
  )
}

const Count = ({ count }) => {
  return <div className="counter">Count is currently: {count}</div>
}

export default App
