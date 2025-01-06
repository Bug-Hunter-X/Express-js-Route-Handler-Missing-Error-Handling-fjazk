const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err); 
      res.status(500).json({ error: 'Failed to fetch user' }); // Send a JSON error response
      return; // Important: Stop further execution
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    } else {
      res.json(user);
    }
  });
});