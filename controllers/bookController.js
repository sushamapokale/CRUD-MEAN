require('../db')
const Book=require('../modals/book')
const express=require('express')
const router=express.Router()
var ObjectId=require('mongoose').Types.ObjectId;

router.get('/',(req,res)=>{
    Book.find((err,doc)=>{
        if(err)
        res.send("error")
        else
        res.send(doc)
    })
})

router.get('/:id',(req,res)=>{
    let id=req.params.id;
    Book.findOne({_id:id},(err,doc)=>{
        if(err)
        res.send("error")
        else
        res.send(doc)
      //  console.log(doc)
    })
})

router.post('/insert',(req,res)=>{
    Book.collection.insertOne(req.body,(err,response)=>{
        if(err)
        res.send({"error":"error"})
        else
        res.send({'msg':'data inserted'})
    })
})

router.delete('/delete/:id',async(req,res)=>{
   
    const _id = req.params.id;
    //console.log(_id)
    try {
     const item = await Book.findByIdAndDelete(_id);
     if (!item) return res.sendStatus(404);
     return res.send({"name":item.name});
    } catch (e) {
     return res.sendStatus(400);
    }
 });

 router.put('/update/:name',(req,res)=>{
    let name=req.params.name;

    //console.log(id)
    //console.log(req.body)
     Book.collection.updateOne({"name":name},{$set:req.body},(err,result)=>{
        
        if(err)res.send(err);
        else if(result) res.send({"msg":"updated"})
     })
 })

module.exports=router;