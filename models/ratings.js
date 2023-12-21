rating.js

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection/connection.js")

class Rating extends Model { }

Rating.init(

    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        star_rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            //do I need a default star rating? would null affect average?
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: "user",
                key: "id"
            }
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "game_model",
                key: "id"
            }
        }
    },
     {
        sequelize,
        timestamps: false,
        modelName: "rating",
        indexes: [
            {
                fields: ['user_id']
            },
            {
                fields: ['game_id']
            }
        ]
    }
);

module.exports = Rating;