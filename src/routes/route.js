const addNewUser = require('./../controllers/controller.js');

const routes = (app) => {
  app.route('/test')
  .get((req, res) => {
    res.send('get request successful');
  })
  .post(addNewUser);
}

module.exports = routes;
