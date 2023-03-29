import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const[userSuccess, setUserSUccess] = useState("");
  
  

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  


  const onFormSubmit = (e) => {
    e.preventDefault();

            const user = {
            username: username,
         
            };

          
  

    console.log(user);
    axios.post('http://localhost:2500/users/add', user)
      .then(res=>{
        console.log(res.data);
        setUserSUccess(`${username} has been added to the data base, you can also add more user or go and log your exercise `)

  })
    setUsername("");
    

    // navigate('/');
  };

 

  return (
    <div className="container">
      <Navbar />
      <div>
        <h3>Create New User</h3>
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label>Username: </label> 
            <input
             type="text"
             required
             className="form-control"
             value={username}
             onChange={onChangeUsername} 
            />

          </div>
          <div style={{color:"green", fontSize:".8em", marginBottom:"20px"}}>{userSuccess}</div>

          <div className="form-group">
            <input type="submit" value="Create User" className="btn mt-2 btn-success"/>


          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateUser;
