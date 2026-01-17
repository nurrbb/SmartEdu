const express = require('express')
const courseController = require('../controllers/courseController');


const router = express.Router();

router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createCourse); 


module.exports = router;