const router = require("express").Router();

router.post("/login", async (req, res) => {
    const {userName, password} = req.body;
    console.log(userName);
    console.log(password);
    return res.status(200).json({message: "message received, MF"})

});


module.exports = router;