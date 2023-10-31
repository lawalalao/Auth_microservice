const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Importez vos routes
const authRoutes = require('./routes/authRoutes');

// Route middlewares
app.use('/api/user', authRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
