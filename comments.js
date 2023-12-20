const {Model, DataTypes} = require('sequelize');

class Comment extends Model { }
    
Comment.init(
{
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
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
    modelName: "comment",
    timestamps: true,
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

module.exports = Comment
