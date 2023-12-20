const sequelize = require("../connection/connection.js")
const  { User , Comment }  = require("../models")
const userData = require("./userdata.json")
const commentData = require("./commentsdata.json")

const seedDatabase = async () => {
    
    await sequelize.sync({force: true})

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    })

    const comments = await Comment.bulkCreate(commentData, {
        returning: true
    })

    console.log(comments.length, "Comments created")
    console.log(users.length, "Users created.")

    process.exit(0)
}

seedDatabase();