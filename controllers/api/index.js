const router = require('express').Router();

//For Data
const userRoutes = require('./user-routes');
const postRoutes = require('./posts-routes');

router.use('/user', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;