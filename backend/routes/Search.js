const express = require("express");
const dotenv=require('dotenv');
dotenv.config();
const router = express.Router();
const axios = require('axios');
router.post("/question",async(req,res)=>{
    const question=req.body.question;
    console.log(question);
    // res.json({status:"success"});
    const options = {
        method: 'POST',
        url: 'https://chatgpt-api7.p.rapidapi.com/ask',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.api_key,
          'X-RapidAPI-Host': process.env.api_host
        },
        data: {
          query: question
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.json({status:"success",response:response.data.response});
      } catch (error) {
          console.error(error);
      }
      

    
})

module.exports = router;