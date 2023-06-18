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

router.post('/')

module.exports = router;