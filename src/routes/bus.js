const express = require('express');
const router = express.Router();
const { getBusInfo } = require('../controllers/bus');

router.get('/buses/:code', async (req, res) => {
  try {
    const code = req.params.code;

    const results = await getBusInfo(code);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'There was an error' });
  }
});

module.exports = router;
