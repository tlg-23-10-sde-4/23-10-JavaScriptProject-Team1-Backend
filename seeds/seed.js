const sequelize = require("../connection/connection.js")
const  User  = require("../models/user")
const userData = require("./userdata.json")

const seedDatabase = async () => {
    
    await sequelize.sync({force: true})

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    })

    console.log(users.length, "Users created.")

    process.exit(0)
}

seedDatabase();