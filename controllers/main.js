const router = require('express').Router();
const Posts = require('../models/Posts');
const Comments = require('../models/Comments');

router.get('/', async (req, res) => {
    try {

        const allPosts = await Posts.findAll({
            include: [Comments],
        }).catch((err) => {
            res.json(err)
        });

        if(!allPosts) {
            res.status(404).json({ message: "No posts yet!"});
            return;
        }
        const posts = allPosts.map((post) => post.get({ plain: true }));
        console.log(posts);

        res.render('home', {
            loggedIn: req.session.loggedIn,
            posts
        });
    } catch (e) {
        console.error(e);
    }
});


router.get('/dashboard', async (req, res) => {
    try {

        if(req.session.loggedIn) {
            const yourPosts = await Posts.findAll({
                where: {
                    user_id: req.session.userid
                },
            });
    
            if(!yourPosts) {
                res.status(404).json({ message: "You haven't posted yet!"});
            }
    
            const posts = yourPosts.map((post) => post.get({ plain: true}));
            console.log(posts);
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
                posts
            });
        } else {
            res.redirect('/');
        }
    } catch (e) {
        console.error(e);
    }
})


module.exports = router