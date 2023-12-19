const router = require("express").Router();

const authRoutes = require("./auth/auth.js");
const gameRoutes = require('./game/game.js');

router.use("/auth", authRoutes);
router.use('/games', gameRoutes);

module.exports = router;