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


// router.post('/newcomment', async (req, res) => {
//     try{
//         const addComment = await Comments.create({
//             post_id:    ,
//             comment_user:   ,
//             comment_content:   ,
//             comment_date: null
//         })
//     } catch (e) {
//         console.error(e);
//     }
// })

module.exports = router;