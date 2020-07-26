const validateInputs = require('../validation/register');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const secretOrKey = require('../config/keys').secretOrKey;

const register = async (data) => {
  try {
    const { message, isValid } = validateInputs(data);
    if (!isValid) {
      throw new Error(message);
    }

    const { name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        name,
        email,
        password: hashedPassword,
      },
      (err) => {
        if (err) throw err;
      }
    );

    user.save();
    const id = user._doc._id;

    const token = jwt.sign({ id: user.id }, secretOrKey);

    return { token, ...user._doc, id, loggedIn: true, password: null };
  } catch (err) {
    throw err;
  }
};

module.exports = { register };
