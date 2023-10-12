const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./src/models/user");
const { hashPassword } = require("./src/utils/passwordUtils");

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
}

async function seedAdminUser() {
  const adminUserExists = await User.exists({ user_role: "Admin" });

  if (!adminUserExists) {
    const adminUserData = {
      full_name: "Admin",
      user_role: "Admin",
      email: "admin@example.com",
      password: await hashPassword("12345678"), // You should hash this password before using it
      mobile: "12345678901",
      department: "IT",
      address: "Admin Address",
    };

    const adminUser = await User.create(adminUserData);

    if (adminUser) {
      console.log("Admin user created");
    }
  }
}

async function startServer() {
  const PORT = process.env.PORT || 3000;
  const app = require("./app");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

(async () => {
  await connectToDatabase();
  await seedAdminUser();
  await startServer();
})();
