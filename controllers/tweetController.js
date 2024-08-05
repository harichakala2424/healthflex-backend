const Tweet = require('../models/Tweet');

exports.createTweet = async (req, res) => {
  try {
    const tweet = await Tweet.create({ userId: req.user.id, text: req.body.text, createdAt: new Date() });
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 }).limit(20);
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
