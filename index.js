const express = require("express");
const collection = require("./Mongo"); // Assuming "Mongo" is your Mongoose model
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// POST endpoint for login or validation
app.post("/login", async (req, res) => {
  const { email, password } = req.body;


  try {
    // Check if a user with the provided email exists in the database
    const user = await collection.findOne({ email });

    if (!user) {
      // User doesn't exist, send "notexist" response
      return res.json("notexist");
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Password is incorrect, send "invalid" response
      return res.json("invalid");
    }

    // User exists and password is correct, send "success" response
    res.json("success");
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error during login/validation:", error);
    res.status(500).json("fail");
  }
});

// POST endpoint for user signup
app.post("/signup", async (req, res) => {
  const { email, phoneNumber, password } = req.body;
  const data={
    email : email,
    password:password
  }

  try {
    // Check if a user with the provided email already exists
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      // User already exists, send "exist" response
      return res.json("exist");
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new collection({ email, phoneNumber, password: hashedPassword });
    await newUser.save();

    // Send "success" response
    res.json("success");
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error during signup:", error);
    res.status(500).json("fail");
  }
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
