import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'



const Exercise = (props) =>{
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href='#' onClick={props.deleteExercise(props.exercise._id)}>Delete</a>
    </td>
  </tr>
}
const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:2500/exercises/')
    .then(res=>{
      setExercises([...res.data])
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  const deleteExercise = (id) =>{
    axios.delete("http://localhost:2500/exercises/" + id)
      .then(res=> console.log(res.data));

      setExercises(exercises.filter(el=>el._id !== id))

  }
  const exerciselist = ( ) =>{
    exercises.map(currentExercise =>{
      return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id}/>
    })
  }
  return (
    <div className='container'>
        <Navbar/>
        <div>
          <h3>Logged Exercises</h3>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                exerciselist
              }
            </tbody>

          </table>
           
        </div>
    </div>
  )
}

export default ExercisesList