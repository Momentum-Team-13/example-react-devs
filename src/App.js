import './App.css'
import Developer from './Developer'

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
    <div className="container ">
      <h1>Devs for Hire</h1>
      {devs.map((dev, idx) => (
        <Developer dev={dev} key={idx} />
      ))}
    </div>
  )
}

export default App
