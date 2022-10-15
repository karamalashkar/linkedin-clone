const express = require('express');
require('dotenv').config();
require('./config/database.config')

const app=express();
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes)

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes)

const jobsRoutes = require('./routes/jobs.routes');
app.use('/jobs', jobsRoutes)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`Server running on port ${process.env.PORT}`);
})