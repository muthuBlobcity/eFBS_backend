const express = require("express");
const connectDB = require("./db/db.js");



const app = express();
const PORT = 8080 ;

app.listen(PORT,()=>{
    console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`)
})

connectDB()