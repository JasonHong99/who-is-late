const addNewUser = require('./../controllers/controller.js').addNewUser;
const getUser = require('./../controllers/controller.js').getUser;
const getUserByID = require('./../controllers/controller.js').getUserByID;
const updateUser = require('./../controllers/controller.js').updateUser;
const deleteUser = require('./../controllers/controller.js').deleteUser;
const getUserByUserName = require('./../controllers/controller.js').getUserByUserName;
const renderUserProfile = require('./../controllers/controller.js').renderUserProfile;

const routes = (app) => {
  app.route('/users')
  .get(getUser)
  .post(addNewUser);

  app.route('/users/:userName')
  //.post(getUserByUserName);
  .post((req, res, next) => {
    getUserByUserName(req, res);
    next();
  }, (req, res, next) => {
    renderUserProfile(req, res);
  });

  app.route('/users/:userId')
  .get(getUserByID)
  .put(updateUser)
  .delete(deleteUser);

}

module.exports = routes;
