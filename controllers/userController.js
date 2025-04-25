// controllers/userController.js
const User = require('../models/User');


// Must export getMe
exports.getMe = async (req, res) => {
  try {

    const id = req.user.id;

    const user = await User.findById(id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};