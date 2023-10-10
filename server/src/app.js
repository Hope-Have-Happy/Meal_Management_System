const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');	//@TODO: install this packages to use 
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('./config/dotenv');
const fs = require('fs');
const path = require('path');

//Security Middleware Import
const rateLimit = require('express-rate-limit');	
const helmet = require('helmet');	
const mongoSanitize = require('express-mongo-sanitize');	
const hpp = require('hpp');	
const morgan = require('morgan'); 

// express app initialization
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

// Security middleware initialization
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(morgan('dev'));

// Connect to the database
connectDB();

// Routing middleware initialization
readdirSync('./src/routes').map(r => app.use(`/api/v1`, require(`./src/routes/${r}`)));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);