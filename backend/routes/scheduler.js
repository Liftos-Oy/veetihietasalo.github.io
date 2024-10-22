const express = require('express');
const router = express.Router();
const { optimizeSchedule, getSchedule, updateJob } = require('../controllers/scheduler.controller');

router.post('/optimize', optimizeSchedule);
router.get('/schedule', getSchedule);
router.put('/jobs/:id', updateJob);

module.exports = router;
