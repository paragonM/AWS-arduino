import mongoose from 'mongoose';
import { config} from 'dotenv';

const URL = "mongodb://mongodb:27017";

const MONGO_URI = URL;
const connectDB = async() =>{

    try {
        await mongoose.connect(MONGO_URI);
        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

export default connectDB;