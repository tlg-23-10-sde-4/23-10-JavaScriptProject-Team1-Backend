const router = require('express').Router();

router.get('/allGames', async (req, res) => {
    return res.status(200).json({ message: "HELLO WORLD"});
});

module.exports = router;