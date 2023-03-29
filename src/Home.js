import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div className='container'>
        <Navbar/>
        <p>
          Create a <Link to="/user">user</Link> first before you can add your exercise track, returning users can add <Link to="/create">exercise</Link> directly.
        </p>
    </div>
  )
}

export default Home