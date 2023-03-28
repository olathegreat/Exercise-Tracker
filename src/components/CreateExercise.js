import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");

  const [users, setUsers] = useState([]);
  const userinput = useRef();
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeDescritpion = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const onChangeDate = (date) => {
    setDate(date);
  };


  const onFormSubmit = (e) => {
    e.preventDefault();

            const exercise = {
            username: username,
            description: description,
            duration: duration,
              date: date,
            };

          

    console.log(exercise);

    axios.post('http://localhost:2500/exercises/add', exercise)
      .then(res=>console.log(res.data))
    setUsername("");
    

    

    navigate('/');
  };

  useEffect(() => {
     axios.get('http://localhost:2500/users/')
     .then(res=>{
      if(res.data.length>0){
        setUsers(res.data.map(user=>user.username))
        setUsername(res.data(0).username) 
      }
     })
  
  }, []);
  return (
    <div className="container">
      <Navbar />
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref={userinput}
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}
            >
              {users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={description}
              onChange={onChangeDescritpion}
            />
          </div>

          <div className="form-group">
            <label>Duration (in minutes)</label>
            <input
              type="text"
              required
              className="form-control"
              value={duration}
              onChange={onChangeDuration}
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <div>
              {/* <input type="date" required className="form-control" value={date} onChange={onChangeDate}/> */}
                {/* <DatePicker selected={date} onChange={onChangeDate}/> */}
              <DatePicker selected={date} onChange={onChangeDate} />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn  mt-2 btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExercise;
