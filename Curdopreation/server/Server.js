const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()

const cors=require('cors')

const PORT=process.env.PORT || 5000

const routes=require("./routes/UserRoutes")
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>console.log(`mongodb not connected err:${err.message}`))

app.use("/api",routes)

app.listen(PORT,()=>console.log(`app running on localhost${PORT} `))