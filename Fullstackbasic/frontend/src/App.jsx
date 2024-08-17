import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [titles,setTitles] = useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setTitles(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  })

  return (
    <>
    <h1>hello </h1>
    <p>TItles: {titles.length}</p>

    {
      titles.map((title)=>(
        <div key={title.id}>
          <h3>{title.title}</h3>
          <p>{title.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
