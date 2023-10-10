
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies)
  function handleClick2 (puppy){
  {console.log("puppy id:", puppy.id)}
  }
    
  
  return (
    <>
      
      {
          puppies.map((puppy) => {
            return <p onClick={ () => handleClick2(puppy) } key = {puppy.id}>{puppy.name}</p>
          })
      }
             {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
     
    </>
  )
}

export default App
