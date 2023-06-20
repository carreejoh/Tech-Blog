const router = require('express').Router();

//For Data
const userRoutes = require('./user-routes');
const postRoutes = require('./posts-routes');
const commentRoutes = require('./comment-routes');


router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;