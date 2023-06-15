const router = require('express').Router();


router.get('/', (req, res) => {
    try {
        res.render('home');
    } catch (e) {
        console.error(e);
    }
})


module.exports = router