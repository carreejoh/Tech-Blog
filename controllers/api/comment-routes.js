const router = require('express').Router();
const User = require('../../models/User');
const Posts = require('../../models/Posts');
const Comments = require('../../models/Comments');

// For api/comments

router.get('/', async (req, res) => {
    try {
        const response = await Comments.findAll({

        });
        res.status(200).json(response);
    } catch (e) {
        res.status(404).json(e);
    }
})


router.post('/newcomment', async (req, res) => {
    try{
    
        const user = await User.findByPk(req.session.userid);
        const username = user.dataValues.username;

        const addComment = await Comments.create({
            post_id: req.body.post_id,
            comment_user: username,
            comment_content: req.body.content,
            comment_date: null
        })
        res.json(addComment);
    } catch (e) {
        console.error(e);
    }
})

module.exports = router;