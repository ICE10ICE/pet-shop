require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const PetRoutes = require('./routes/Pets')
const userRoutes = require('./routes/users')

//express app
const app=express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req,res.method)
    next()
})

//routes
app.use('/api/Pets', PetRoutes )
app.use('/api/users', userRoutes )

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for request
   app.listen(process.env.PORT, () => {
    console.log('Connected to DB.listening on port 4000!')
})
})
.catch((error)=>{
    console.log(error)
})

