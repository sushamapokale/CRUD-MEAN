const mongoose=require('mongoose');

var bookSchema=mongoose.Schema({
    name:String,
    author:String,
    price:Number
})

var Book=mongoose.model('Book',bookSchema,'mybook')
module.exports=Book