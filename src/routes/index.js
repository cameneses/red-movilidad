const express = require('express');

const busRoutes = require('./bus');
const busStopRoutes = require('./busStop');

const router = express.Router();

router.use('/bus', busRoutes);
router.use('/busStop', busStopRoutes);

module.exports = router;
