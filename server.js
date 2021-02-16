const express=require ('express')
const app=express();
const Connectdb=require('./helpers/db')
const bodyparser=require('body-parser')



//config data file
require('dotenv').config({
    path:'./config/config.env'
})
app.use(bodyparser.json())
Connectdb();



//load routes
const authuser=require('./routes/authuser')

app.use('/api',authuser)


app.use((req,res)=> {
    res.status(404).json({
            success:false,
            msg:"page not found "
    })
})

PORT=process.env.PORT||15000;
app.listen(PORT,()=> {
    console.log({PORT})
})