const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // Should handle the error appropriately
      console.error(err);  //Instead, send a proper error response
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});