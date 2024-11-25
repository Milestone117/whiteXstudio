router.post('/book', (req, res) => {
    const { date, time } = req.body;
    // Save booking data to the database
    res.json({ message: 'Booking Confirmed!' });
});
