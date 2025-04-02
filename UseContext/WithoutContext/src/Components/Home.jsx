import React from 'react'
import Navbar from './Navbar'
const Home = ({counter}) => {
  return (
    <div>
        <h2>Without Using UseContext Hooks.</h2>
        <Navbar counter2={counter}/>
    </div>
  )
}

export default Home