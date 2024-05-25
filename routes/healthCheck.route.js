import { Router } from "express";
const router = Router();

 router.route('/healthCheck').get((req,res)=>{
    res.status(200).json({
        message:"The Server Is up and running"
    })
})
export default router