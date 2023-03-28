import React from "react";
import { Link } from 'react-router-dom'

const Exercise = ({currentExercise, deleteExercise}) => {
  return (
    
      <tr>
        <td>{currentExercise.username}</td>
        <td>{currentExercise.description}</td>
        <td>{currentExercise.duration}</td>
        <td>{currentExercise.username}</td>
        <td>{currentExercise.date.substring(0, 10)}</td>
        <td>
          <Link to={"/edit/" + currentExercise._id}>edit</Link> |{" "}
          <a href="#" onClick={deleteExercise(currentExercise._id)}>
            Delete
          </a>
        </td>
      </tr>
    
  );
};

export default Exercise;
