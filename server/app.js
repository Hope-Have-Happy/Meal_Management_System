// External imports
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { readdirSync } = require("fs");
const path = require("path");
const fileUpload = require("express-fileupload");

//Security Middleware Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const morgan = require("morgan");

// express app initialization
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Security middleware initialization
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(morgan("dev"));

//Request Rate Limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10000, // limit each IP to 10000 requests per windowMs (change before the production)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);

// Routing middleware initialization
readdirSync("./src/routes").map((r) =>
  app.use(`/api/v1`, require(`./src/routes/${r}`))
);

// module exports
module.exports = app;
