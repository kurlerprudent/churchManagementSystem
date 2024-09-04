import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import {eventsRoutes} from '../Events/events.routes.js'



dotenv.config();
const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${res.statusCode}`);
    next();
});



app.use('/api/church', eventsRoutes)


mongoose.connect('mongodb+srv://sarkodiekurler:p5XOeMyJeYnbtc7U@cluster0.v7omn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to database')

    app.listen(PORT, (req,res)=>{
        console.log(`Server running on port ${PORT}`);
        
    });
})

.catch((error)=>{
    console.log(error)
})


