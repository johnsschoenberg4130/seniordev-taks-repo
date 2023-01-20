// code base here 

// import the dependances 
const fs = require('fs/promises')
const express = require('express');
// const cors = require('cors');
// const lodash = require('loadash');


const app = express(); 

// ping that request once we are able to connect 
 app.get('/message', (req, res) =>{
    res.send('Testing here....');
 })

// define the rest end point 
app.listen(30000, ()=>{
    console.log('API end point has been exposed')
})

