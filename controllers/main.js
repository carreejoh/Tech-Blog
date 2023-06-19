const router = require('express').Router();
const Posts = require('../models/Posts');

router.get('/', async (req, res) => {
    try {

        const allPosts = await Posts.findAll().catch((err) => {
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

router.get('/dashboard', (req, res) => {
    try {
        // res.render('dashboard');
        if(req.session.loggedIn) {
            res.render('dashboard', {
                loggedIn: req.session.loggedIn,
            })
        } else {
            res.redirect('/');
        }
    } catch (e) {
        console.error(e);
    }
})


module.exports = router