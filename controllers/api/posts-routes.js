const router = require('express').Router();
const Posts = require('../../models/Posts');
const User = require('../../models/User');
const Comments = require('../../models/Comments');

User.hasMany(Posts, {
    foreignKey: 'user_id'
});
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id'
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id'
});


// For api/posts

router.get('/', async (req, res) => {
    try {
        const response = await Posts.findAll({
            include: [Comments],
        });
        res.status(200).json(response);
    } catch (e) {
        res.status(404).json(e);
    }
})



router.post('/newpost', async (req, res) => {
    try{
        const userid = req.session.userid
        console.log(userid)

        const user = await User.findByPk(req.session.userid);
        const username = user.dataValues.username;

        const addpost = await Posts.create({
            user_id: userid,
            user_name: username,
            post_name: req.body.post_name,
            post_content: req.body.post_content,
            post_date: null
        })
        console.log(req.session.userid)
        res.json(addpost)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.delete('/deletepost', async (req, res) => {
    try {
        await Comments.destroy({
            where: {
                post_id: req.body.postId
            }
        });

        await Posts.destroy({
            where: {
                id: req.body.postId
            }
        });
        res.status(200).json({message: "Post has been deleted"});
    } catch (e) {
        console.error(e);
    }
});


module.exports = router;