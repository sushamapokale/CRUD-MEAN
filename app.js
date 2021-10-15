const bookController=require ('./controllers/bookController')
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyparser.json());
app.use(cors())

app.use('/book',bookController)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})