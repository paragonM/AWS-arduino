import express, { request } from 'express';
const app = express();

import {config} from 'dotenv';


import station from './routes/station.js'
import morgan from 'morgan';
import connectDB from './config/db.js';
app.use(express.json()); 
config();
app.use(morgan('dev'))


const PORT = process.env.PORT || 3000; 

app.use('/station', station);


app.listen(3000,()=>{
    connectDB().then(()=>{
    console.log("nodejs is running on port 3000");
});

});
