const router = require('express').Router();

router.get('/allGames', async (req, res) => {
    return res.status(200).json({ message: "Make it work"});
});

module.exports = router;