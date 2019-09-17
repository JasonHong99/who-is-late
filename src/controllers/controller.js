const mongoose = require('mongoose');
const UserSchema = require('./../models/model.js');

const User = mongoose.model('User', UserSchema);
const addNewUser = (req, res) => {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save((err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

module.exports = addNewUser;
