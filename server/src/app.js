const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('./config/dotenv');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Define and mount routes dynamically using fs and filter
fs.readdirSync(path.join(__dirname, 'routes'))
  .filter((file) => file.endsWith('Routes.js'))
  .forEach((file) => {
    const routePath = file.replace('Routes.js', '').toLowerCase();
    app.use(`/api/${routePath}`, require(path.join(__dirname, 'routes', file)));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
