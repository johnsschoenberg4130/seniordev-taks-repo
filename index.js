// code base here 

// import the dependances 
const fs = require('fs/promises')
const express = require('express');
// const cors = require('cors');
// const lodash = require('loadash');
const { v4: uuid} = require('uuid');


const app = express(); 

app.use(express.json()) // middle wear for json

// test to determine my port is on .. 
app.get("/message",(req, res) =>{
    res.send('This is working....')
})

// ping that request once we are able to connect 
 app.post("/getinfo", (req, res) => {
    // various required 
    const id = uuid();
    const content = req.body;
    console.log(id); // test for post 
    
    console.log(content)
    res.sendStatus(201);

 })

// define the rest end point 
app.listen(30000, ()=>{
    console.log('API end point has been exposed')
})

