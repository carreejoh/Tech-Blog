const router = require('express').Router();

//For Data
const userRoutes = require('./user-routes');

router.use('/user', userRoutes);

module.exports = router;