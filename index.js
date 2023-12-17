require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL_

app.use(express.json());
app.use('/api', routes)

// MongoDB connection setup (you need to have MongoDB installed and running)
mongoose.connect(MONGODB_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});