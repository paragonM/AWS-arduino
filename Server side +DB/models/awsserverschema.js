import { Schema, model } from "mongoose";


const schema = new Schema({

    stationid:{
        type: String,
        required: false
    },
    latitude:{
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
    temperature: {
        type: String,
        required: false
    },
    humidity:{
        type: String,
        required:false
    },
    moisture:{
        type: String,
        required: false
    }


});
const data = model('data',schema);
export default data;