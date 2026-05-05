import React from 'react'
import card from './components/Card.jsx'
import Navbar from './Navbar.jsx'


const App = () => {

const name = "Jay"

  return (
    <div>
      <div className="card">
        {/* <h1>Jay Jangid</h1> */}
        <p>Hey my name is {name}</p>
      </div>

<card />

 <Navbar />

  
    </div>
  )
}

export default App
