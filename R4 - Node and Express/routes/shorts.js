const express = require('express');

const Shorts = require('../models/Shorts');

const router = express.Router();


/**
 * Create a short.
 * @name POST/api/shorts
 * @param {string} name - name of short (link will be /:short)
 * @param {string} url - link short points to
 * @return {Short} - the created short
 * @throws {400} - if name is already taken
 */
router.post('/', (req, res) => {
  if (Shorts.findOne(req.body.name) !== undefined) {
    res.status(400).json({
      error: `Short URL ${req.body.name} already exists.`,
    }).end();
  } else {
    const short = Shorts.addOne(req.body.name, req.body.url, req.session.username); 
    res.status(200).json(short).end();
  }
});

/**
 * List all shorts.
 * @name GET/api/shorts
 * @return {Short[]} - list of shorts
 */
router.get('/', (req, res) => {
  res.status(200).json(Shorts.findAll()).end();
});

/**
 * Update a short.
 * @name PUT/api/shorts/:name
 * :name is the name of the short
 * @param {string} url - the new URL to point to
 * @return {Short} - the updated short
 * @throws {404} - if short does not exist
 */
router.put('/:name', (req, res) => {
  if (Shorts.findOne(req.params.name) === undefined) {
    res.status(404).json({
      error: `Short URL ${req.params.name} does not exist.`,
    }).end();
  } else {
    const short = Shorts.updateOne(req.params.name, req.body.url);
    res.status(200).json(short).end();
  }
});

/**
 * Delete a short.
 * @name DELETE/api/shorts/:name
 * :name is the name of the short
 * @return {Short} - the deleted short
 * @throws {404} - if short does not exist
 */
router.delete('/:name', (req, res) => {
  if (req.session.username === undefined) {
    res.status(403).json({
      error: 'You must be logged in in order to delete a short!'
    }).end();
  }
  else if (Shorts.findOne(req.params.name) === undefined) {
    res.status(404).json({
      error: `Short URL ${req.params.name} does not exist.`,
    }).end();
  } else {
    const short = Shorts.deleteOne(req.params.name);
    res.status(200).json(short).end();
  }
});

module.exports = router;
