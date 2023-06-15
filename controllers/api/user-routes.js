const router = require('express').Router();
const User = require('../../models/User');

// For api/user/

router.get('/', async (req, res) => {
    try {
        const response = await User.findAll({

        });
        res.status(200).json(response);
    } catch (e) {
        res.status(404).json(e);
    }
})



router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        //Add login functionality
        res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
})

module.exports = router;