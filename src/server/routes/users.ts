import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get("/:id?", async (req, res)=> {

    const userid = Number(req.params.id)
   
    if(userid){
        try {
            const [users] = await db.Users.singleUser(userid)
            res.json(users)
        
        }catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }else {
        try {
            res.json(await db.Users.all())
        
        }catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }


})

 
export default router;