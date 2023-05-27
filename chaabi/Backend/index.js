const express=require("express")
const cors=require("cors")
const {connection}=require("./Configs/db")
const { userRoutes } = require("./Routes/userRoutes")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.get("/",(req,res)=>{
    res.status(200).send({mag:"Blog App"})
})

app.listen(port=process.env.port||8080,async(req,res)=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err)

    }
    console.log(`server is running at port ${port}`)
})