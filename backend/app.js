require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const connectDB = require('./config/db')


connectDB();

app.get('/', (req, res) => {
    res.send("Hello rashi!")
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})