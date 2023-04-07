const express = require('express');
const app = express();

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const routes = require('./src/routes');

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚌 Server launched on port ${PORT}`);
});
