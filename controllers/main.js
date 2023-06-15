const router = require('express').Router();


router.get('/', (req, res) => {
    try {
        res.render('home');
    } catch (e) {
        console.error(e);
    }
});

router.get('/dashboard', (req, res) => {
    try {
        res.render('dashboard');
    } catch (e) {
        console.error(e);
    }
})


module.exports = router