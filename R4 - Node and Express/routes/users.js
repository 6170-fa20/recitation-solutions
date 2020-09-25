const express = require('express');

const router = express.Router();

/**
 * Set username of active user.
 * @name POST/api/users/signin
 */
router.post('/signin', (req, res) => {
  if (req.session.username == null) {
    if (req.body.username.length === 0) {
      res.status(400).json({ message: 'The user name must be at least 1 character.' });
    } else {
      req.session.username = req.body.username;
      res.status(200).json({ username: req.session.username });
    }
  } else {
    res.status(400).json({ message: 'You are already signed in.' });
  }
});

module.exports = router;
