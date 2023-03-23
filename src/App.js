import React from 'react'
import {Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'


const App = () => {

   

  
  return (
     
    <Routes>
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/edit/:id" element={<EditExercise/>}/>
      <Route exact path="/create" element={<CreateExercise/>}/>
      <Route exact path="/user" element={<CreateUser/>}/>
    </Routes>
  )
}

export default App