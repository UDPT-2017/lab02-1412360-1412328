var controllers = require('../app/controllers');
var Router = require('express').Router;

module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var messageRoutes = Router()
        .get('/', controllers.message.index);

    var usersRoutes = Router()
        .get('/register', controllers.users.loadRegister)
        .get('/login', controllers.users.loadLogin)
        .get('/', controllers.users.index)
        .post('/login', controllers.users.login)
        .post('/register', controllers.users.createAccount);

    var aboutRoutes = Router()
        .get('/', controllers.about.index)
        .get('/minh.jpg', controllers.about.show);

    app.use('/', homeRoutes);
    app.use('/message', messageRoutes);
    app.use('/users', usersRoutes);
    app.use('/about', aboutRoutes);
};
