const express = require('express');
// const jobsController = require('../controllers/job.controller.js');
const jobController = require('../controllers/job.controller.js');

const router= express.Router();
const jobControllers = new jobController();

// Job list Page
router.get('/jobs',jobControllers.jobList)



module.exports = router;