const express = require('express');
const indexContraller = require('../controllers/index.controller.js');

const router= express.Router();

// Lading Page
router.get('/',indexContraller.home)



module.exports = router;