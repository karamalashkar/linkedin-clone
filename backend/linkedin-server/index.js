const express = require('express');
require('dotenv').config();
require('./config/database.config')

const app=express();
app.use(express.json());

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`Server running on port ${process.env.PORT}`);
})