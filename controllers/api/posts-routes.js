const router = require('express').Router();
const Posts = require('../../models/Posts');
const User = require('../../models/User');


User.hasMany(Posts, {
    foreignKey: 'user_id'
});
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

// For api/posts

router.get('/', async (req, res) => {
    try {
        const response = await Posts.findAll({

        });
        res.status(200).json(response);
    } catch (e) {
        res.status(404).json(e);
    }
})

// router.post('/newPost', async (req, res) => {
//     try {
//         const newPost = await Posts.create({
//             user_id: req.session.id,
//             post_name: req.body.post_name,
//             post_content: req.body.post_content,
//             // post_date: req.body.post_date
//         }) 
//         console.log(req.session.id);
//         res.json(newPost);
//     } catch (e) {
//         res.status(400).json(e);
//     }
// })


router.post('/newpost', async (req, res) => {
    try{
        // const { newpost } = req.body;
        const userid = req.session.userid
        console.log(userid)

        const addpost = await Posts.create({
            user_id: userid,
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

module.exports = router;