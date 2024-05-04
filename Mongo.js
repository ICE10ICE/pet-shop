/*const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/signupDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number, // Use Number type for integers
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const users = mongoose.model("users", newSchema);

module.exports = users; */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Pets")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: String,
  color: String,
  size: String,
  sex: String,
  age: Number,
  location: String,
  // Add more fields as needed
});

const Pets = mongoose.model("Pet", petSchema);

module.exports = Pets;
