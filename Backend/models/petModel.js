const mongoose=require('mongoose')
const Schema=mongoose.Schema

const petSchema=new Schema({
    title: {
        type: String,
        required:true
    },
    breed:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
}, {timestampm: true}) 

module.exports = mongoose.model('Pet',petSchema)
