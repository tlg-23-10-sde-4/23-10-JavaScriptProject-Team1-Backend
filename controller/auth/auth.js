const router = require("express").Router();
const User = require("../../models/user.js");
const jtoken = require("jsonwebtoken");

// assign the body's request to the user object
router.post("/login", async (req, res) => {
  const { userEmail, password } = req.body;
  console.log(userEmail, password);
  try {
    // take the destructured body and filter through User object for matching email
    const user = await User.findOne({
      where: { email: userEmail },
    });
    // error code handling based on response status
    if (!user) {
      return res.status(400).json({
        message: "Email not found!",
      });
    }

    // boolean value to check password validity before token creation
    const isValidPass = user.checkPassword(password);
    if (!isValidPass) {
      return res.status(401).json({
        message: "Invalid credentials!",
      });
    }
    // after user is verified create the webtoken
    // process.env.JWT_SECRETKEY and change res.cookie "JWT" before deployment
    const token = jtoken.sign(
      {
        userId: user.id,
      },
      "superdupersecret",
      {
        expiresIn: "1d",
      }
    );

    res.cookie("JWT", token, {
      httpOnly: true,
    });

    return res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `${error}` });
  }
});

// POST /signUp
router.post("/signup", async (req, res) => {
  try {
    // User.findOne({
    //   where: {
    //     email: req.body.email,
    //   },
    // }).then((user) => {
    //   if (user != null) {
    //     return res.status(400).json({ message: "You already have an account." });
    //   }
    // });

    const newUser = User.create(req.body);
    return res.status(200).json({ message: `Welcome ${req.body.username}` });
  } catch (error) {
    if (err.original.code === "ER_DUP_ENTRY") {
      return res.status(400).json("Email Already Exist, Please Sign up with different email");
    } else {
      return res.status(400).json(err);
    }
    // return res.status(500).json({ message: `${error}` });
  }
});

module.exports = router;
