const express = require('express');

const jobDetailsController = require('../controllers/jobDeatils.contraller.js');
const router= express.Router();

const jobDetailsControllers = new jobDetailsController();

// Job Details Page
router.get('/job/:id', jobDetailsControllers.getJobDetails);

module.exports = router;