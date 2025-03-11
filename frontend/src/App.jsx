import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('api/v1/jokes')   // use of proxy
    .then((response) => {
      setJokes(response.data.jokes  )
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Connecting frontend with backend</h1>
      {/* <p>JOKES: {jokes.length}</p> */}

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            {/* <h3>Joke No: {joke.id}</h3> */}
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
