import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get("/:id?", async (req, res, next)=> {

    const chirpid = Number(req.params.id)
   
    if(chirpid){
        try {
            const [chirp] = await db.Chirps.singleChirp(chirpid)
            console.log(chirpid)
            res.json(chirp)
        }catch(err){
            console.log(err)
            next(err)
        }
    }else {
        try {

            res.json(await db.Chirps.all())
        
        }catch(err){
            console.log(err)
            next(err)
        }
    }
})

router.post("/", async (req, res, next)=> {
    const chirpDTO = req.body;
   
    try {
        const result = await db.Chirps.insert(chirpDTO)
        res.json(result) 
    }catch(err){
        console.log(err)
        next(err)
    }
})


router.put("/:id", async (req, res, next)=> {
    const chirpid = Number(req.params.id)
    const chirpDTO = req.body;
   
    try {
        const result = await db.Chirps.update(chirpDTO, chirpid)
        res.json(result) 
    }catch(err){
        console.log(err)
        next(err)
    }
})

router.delete("/:id", async (req, res, next)=> {
    const chirpid = Number(req.params.id)
   
    try {
        const result = await db.Chirps.remove(chirpid)
        res.json(result) 
    }catch(err){
        console.log(err)
        next(err)
    }
})

 
export default router;
