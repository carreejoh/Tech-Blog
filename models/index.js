const User = require('./User');
const Posts = require('./Posts');

const sequelize = require('../config/connection');


User.hasMany(Posts, {
    foreignKey: 'user_id'
});
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});




module.exports = { User, Posts }