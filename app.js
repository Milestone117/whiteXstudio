const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Static files (images, videos, etc.)
app.use(express.static('public'));

// Routes
app.use('/api', require('./routes/portfolioRoutes'));
app.use('/api', require('./routes/bookingRoutes'));

// Connect to DB (MongoDB or MySQL)
const { connectDB } = require('./models/db');
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
