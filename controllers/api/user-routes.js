const router = require('express').Router();
const User = require('../../models/User');
const Posts = require('../../models/Posts');

// For api/user/


//Fixes eager loading error

User.hasMany(Posts, {
    foreignKey: 'user_id'
});
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});




router.get('/', async (req, res) => {
    try {
        const response = await User.findAll({
            include: [Posts],
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
        
        if(!newUser) {
            res.status(400).json({ message: "Signup Failed"});
            return;
        }

        const loginUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userid = loginUser.dataValues.id
            res.status(200).json({ user: loginUser, message: "Sign Up and Log in successful"});
        });
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
})


router.post('/login', async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if(!response) {
            res.status(400).json({message: 'User doesnt exist'});
            return;
        }

        const password = await response.checkPassword(req.body.password);
       
        if(!password) {
            res.status(400).json({ message: 'Incorrect Password'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userid = response.dataValues.id
            res.status(200).json({ user: response, message: "Log in successful"});
        });

    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
});

router.post('/logout', async (req, res) => {
    try {
        if(req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(200).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
});

module.exports = router;