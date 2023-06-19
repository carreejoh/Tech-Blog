const router = require('express').Router();


router.get('/', (req, res) => {
    try {
        res.render('home', {
            loggedIn: req.session.loggedIn,
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