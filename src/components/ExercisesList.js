import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
// import Exercise from './Exercise'







const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:2500/exercises/')
    .then(res => {
     

      setExercises(res.data)
      console.log(exercises)
    
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  const deleteExercise = (id) =>{
    axios.delete("http://localhost:2500/exercises/" + id)
      .then(res=> console.log(res.data));

      setExercises(exercises.filter(el=>el._id !== id))

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
  

             {exercises.map(currentExercise => (

              
                            <tr key={currentExercise._id}>
                            <td>{currentExercise.username}</td>
                            <td>{currentExercise.description}</td>
                            <td>{currentExercise.duration}</td>
                            <td>{currentExercise.username}</td>
                            {/* <td>{currentExercise.date.substring(0, 10)}</td> */}
                            <td>
                              <Link to={"/edit/" + currentExercise._id}>edit</Link> |{" "}
                              {/* <button onClick={deleteExercise(currentExercise._id)}> */}
                              <button onClick={()=> deleteExercise(currentExercise._id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                                  )
             )

}
             
             
             
            {/* //  <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id}/>)} */}
          </tbody>

          </table>
           
        </div>
    </div>
  )
}

export default ExercisesList