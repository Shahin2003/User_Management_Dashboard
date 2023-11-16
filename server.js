const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Simulated in-memory database
const users = [];

// Endpoint for creating an account
app.post('/api/create-account', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Simulate storing user data in the database
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  return res.status(201).json({ message: 'Account created successfully.', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
