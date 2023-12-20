const router = require("express").Router();
const User = require("../../models/user.js")

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName);
  console.log(password);
  return res.status(200).json({ message: "message received, MF" });
});

// POST /signUp
router.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  console.table(email, username, password);
  return res.status(200).json({ message: "congrats, you're KGB Kon-Bon Gamer" });
});

module.exports = router;
/*

const User = sequelize.define('user', {
  user_id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
})
*/