const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.SERVER_PORT || 5000
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
    .then(() => console.log("Connected to database"))
    .catch((e) => console.log(e));
// mongoose.set('strictQuery', true);

app.use(express.json());

const binRouter = require('./routes/bins');
app.use('/bins', binRouter);

const requestsRouter = require('./routes/requests');
app.use('/reqs', requestsRouter);

app.get('*', async (req, res, next) => {
    return res.json({
        message: "Invalid endpoint",
        success: false
    })
})

app.listen(port)
console.log(`Server running at http://localhost:${port}`)