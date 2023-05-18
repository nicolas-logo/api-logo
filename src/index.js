const express = require('express');

require('dotenv').config();
const useRoutes = require("./routes/coin");


const app = express();
const port = process.env.port || 9000;

require('./database');

// middleware
app.use(express.json())
app.use('/api', useRoutes);

// routes
app.get('/', (req, res) => {
    res.send("alohaaa")
});

app.listen(port, () => console.log("funcionannndo"))