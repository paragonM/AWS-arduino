import {Router} from 'express';
import data from '../models/awsserverschema.js';
const router = Router();

 router.get('/',async(req,res)=>{
    try {

        const Data = await data.find();

        res.json([Data]);

    } catch (error) {
        console.log(error);
    }

});
router.get('/:stationid/:latitude/:longitude/:temperature/:humidity/:moisture', async(req, res)=>{

    try {
        data.create({

            stationid: req.params.stationid,
            temperature:req.params.temperature,
            moisture:req.params.moisture,
            humidity: req.params.humidity,
            latitude: req.params.latitude,
            longitude: req.params.longitude

        })
        res.send("done");
    } catch (error) {
        console.log(error);
        
    }
})




export default router;