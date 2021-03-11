const express=require ('express')
const app=express();
const Connectdb=require('./helpers/db')
const bodyparser=require('body-parser')
const morgan =require('morgan')



//config data file
require('dotenv').config({
    path:'./config/config.env'
})
app.use(express.json())
app.use(morgan('dev'))
Connectdb();



//load routes
const authuser=require('./routes/authuser')
const mail=require('./routes/mail')

app.use('/api',authuser)
app.use('/api',mail)


app.use((req,res)=> {
    res.status(404).json({
            success:false,
            msg:"page not found "
    })
})

PORT=process.env.PORT||15000;
app.listen(PORT,()=> {
    console.log(`${PORT}`)
})