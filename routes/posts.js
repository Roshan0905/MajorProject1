const express = require('express');
const passport = require('passport');


const postsController = require('../controllers/posts_controller');
const router = require('./users');

router.post('/create', postsController.create);


module.exports = router;
