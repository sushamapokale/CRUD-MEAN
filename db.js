const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MEAN',{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',()=>{
    console.log('error')
})

db.once('open',()=>{
    console.log('db connected')
})