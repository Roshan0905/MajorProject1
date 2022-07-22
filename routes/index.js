const express = require('express');

const router = express.Router();
const homeContoller = require('../controllers/home_controller');

console.log("router loaded");


router.get('/', homeContoller.home );
module.exports = router;
