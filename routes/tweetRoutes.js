const express = require('express');
const { createTweet, getTimeline } = require('../controllers/tweetController');
const { protect } = require('../services/authService');
const router = express.Router();

router.post('/', protect, createTweet);
router.get('/:userId/timeline', protect, getTimeline);

module.exports = router;
