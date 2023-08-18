const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const dotenv=require('dotenv');

dotenv.config();



app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
//applying router as a middleware
const searchRouter=require('./routes/Search.js');
app.use("/search",searchRouter);




app.listen(3024,()=>{
    console.log("Server started on port 3024");
})