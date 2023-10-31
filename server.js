const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const uri = process.env.MONGO_URI

// Connection à MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


// Importez vos routes
const authRoutes = require('./routes/authRoutes');

// Route middlewares
app.use('/api/user', authRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));


module.exports = app;