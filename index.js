const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json())
const { body, validationResult } = require('express-validator')


app.post('/students', body('email').isEmail(), (req, res) => {
  
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return  res.status(400).json({
            "error": errors.array()
        })
    } else {
       res.json({
            msg: "hii",
            email: req.body.email
        })
    }


})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`)
})