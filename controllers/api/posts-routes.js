const router = require('express').Router();
const Posts = require('../../models/Posts');

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

router.post('/newPost', async (req, res) => {
    try {
        const newPost = await Posts.create({
            user_id: req.session.id,
            post_name: req.body.post_name,
            post_content: req.body.post_content,
            // post_date: req.body.post_date
        }) 
        console.log(req.session.id);
        res.json(newPost);
    } catch (e) {
        res.status(400).json(e);
    }
})

module.exports = router;