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
    var userInfo = "[" + JSON.stringify(user) + "]";
    res.render('profile', {user: userInfo});
  });
};

const getUser = (req, res) => {
  User.find({}, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

const getUserByID = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId}, req.body, { new: true, useFindAndModify: false}, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
}

const deleteUser = (req, res) => {
  User.remove({ _id: req.params.userId}, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json({ message : 'delete successfully'});
  });
}

const getUserByUserName = (req, res, next) => {
  User.find({ userName: req.body.userName}, (err, user) => {
    if(err){
      // res.render('error');
      res.send(err);
    }
    var userInfo = JSON.stringify(user);
    res.render('profile', {user: userInfo});
  });
};

const renderUserProfile = (req, res) => {
  res.render('profile');
}

module.exports = {
  addNewUser,
  getUser,
  getUserByID,
  updateUser,
  deleteUser,
  getUserByUserName,
  renderUserProfile
}
