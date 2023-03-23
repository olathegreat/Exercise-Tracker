const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const mongodb =  require("mongodb")
// import { Express } from "express";

// import mongodb from "mongodb"

require("dotenv").config();

const MongoClient = mongodb.MongoClient

const app = express();
const port = process.env.PORT || 2500;

app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

MongoClient.connect(
    process.env.ATLAS_URI,{
       
        wtimeoutMS: 2500,
        useNewUrlParser: true
       
    }
  
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    console.log('DB connected')
    app.listen(port, ()=>{
        console.log(`server is running on port : ${port}`)
    })
})

// const uri = process.env.ATLAS_URI
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });
