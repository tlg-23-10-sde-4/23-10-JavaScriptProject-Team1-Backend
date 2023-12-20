const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../connection/connection.js")

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}
User.init(
  {
    //! USER.ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //! USER.USERNAME
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "exmampleUsername",
    },
    //! USER.EMAIL
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: "email@example.com",
      validate: {
        isEmail: true,
      },
    },
    //! USER.PASSWORD
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    //! USER.LIKES
    likes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    //! USER.DISLIKES
    dislikes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize: Sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);



module.exports = User;
