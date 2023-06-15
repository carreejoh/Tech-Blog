const { Model, DataTypes } = require('sequelize');
//INCLUDE bcrypt in future
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,24],
            }
        },
        // posts: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
    );

module.exports = User;