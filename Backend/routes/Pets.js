const express=require('express')
const router=express.Router()
const Pet=require('../models/petModel')

//get all workouts
router.get('/',(req,res) =>{
    res.json({msg:'GET ALL Pets'})
})

//Get a single workout
router.get('/:id', (req,res)=>{
    res.json({msg:'Get a single Pet'})
})
//Post a new pet
router.post('/',async (req,res)=>{
    const{title,breed,age}=req.body
  try{
        const pet= await Pet.create({title,breed,age})
        res.status(200).json(pet)

    }
    catch(error){
        res.status(400).json({error:error.message})

    }
})
//Delete Pets
router.delete('/:id', (req,res)=>{
    res.json({msg:'Delete a Pet'})
})
//Update Pets
router.patch('/:id', (req,res)=>{
    res.json({msg:'Update Pet'})
})


module.exports=router