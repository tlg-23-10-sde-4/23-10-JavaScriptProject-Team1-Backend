const router = require("express").Router();

const authRoutes = require("./auth/auth.js");
const gameRoutes = require('./game/game.js');
const commentRoutes = require('./game/comment.js')

router.use("/auth", authRoutes);
router.use('/games', gameRoutes);
router.use('/comment', commentRoutes)

module.exports = router;