// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware implement CORS
app.use(cors());


// Define the GET /api/greet endpoint
app.get("/api/greet", (req, res) => {
  const { name } = req.query;

  // Check if name is provided
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  // Return the greeting message
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
