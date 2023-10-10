// External imports
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// Internal imports
const app = require("./app");

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);

  mongoose
    .connect(process.env.DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error", err);
    });
});
