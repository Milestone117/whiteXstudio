const express = require('express');
const router = express.Router();

// GET portfolio gallery
router.get('/portfolio', (req, res) => {
    // Query the database to get all portfolio items
    res.json({ message: 'Get Portfolio' });
});

// Add other routes (POST for adding work, etc.)
module.exports = router;
