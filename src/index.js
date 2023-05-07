const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const useRoutes = require("./routes/coin");


const app = express();
const port = process.env.port || 9000;

// middleware
app.use(express.json())
app.use('/api', useRoutes);

// routes
app.get('/', (req, res) => {
    res.send("alohaaa")
});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conectadoo a mongooose'))
.catch((err) => console.error(err))


app.listen(port, () => console.log("funcionannndo"))