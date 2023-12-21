const router = require("express").Router();

const authRoutes = require("./auth/auth.js");
const gameRoutes = require('./game/game.js');
const commentRoutes = require('./game/comment.js');
const apiRoutes = require('./game/api.js');

router.use("/auth", authRoutes);
router.use('/games', gameRoutes);
router.use('/comment', commentRoutes);
router.use('/api', apiRoutes);

module.exports = router;