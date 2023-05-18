const mongoose = require('mongoose');

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conectadoo a mongooose'))
.catch((err) => console.error(err))