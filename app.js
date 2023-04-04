const express = require('express');
const app = express();

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const busStopRoutes = require('./src/routes/busStop');
app.use('/busStop', busStopRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚌 Server launched on port ${PORT}`);
});
