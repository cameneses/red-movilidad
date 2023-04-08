const express = require('express');
const router = express.Router();
const { getBusStopInfo } = require('../controllers/busStop');

router.get('/:code', async (req, res) => {
  try {
    const code = req.params.code;

    const results = await getBusStopInfo(code);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'There was an error' });
  }
});

router.get('/:code/:busCode', async (req, res) => {
  try {
    const code = req.params.code;
    const busCode = req.params.busCode;

    const busStopResults = await getBusStopInfo(code);
    const results = busStopResults.filter(({ bus }) => bus === busCode);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'There was an error' });
  }
});

module.exports = router;
