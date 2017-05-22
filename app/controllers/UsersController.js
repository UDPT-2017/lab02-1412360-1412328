
var list = require('../models/listusers');

var usersController = {
  index: function(req, res) {
      list.findAll(function(err, users) {
        res.render('users/index', {
            title: 'Users page',
            message: 'Danh sách User',
            active: {users: true},
            user: users,
        });
      })

  },
    loadRegister: function(req, res) {
        res.render('users/register', {
            title: 'Register Users',
            message: 'REGISTER ACCOUNT',
        });
    },

    createAccount: function(req, res) {
        var createAccount = require('../models/register');
        createAccount.data.register(req.body.name, req.body.email, req.body.phone, req.body.password, function(err, result) {
            if (err) {
                res.render('users/register', {
                    title: 'Register Users',
                    message: 'REGISTER ACCOUNT',
                    noti: 'Email đã tồn tại. Đăng kí thất bại!',
                });
            } else {
                res.render('users/register', {
                    title: 'Register Users',
                    message: 'REGISTER ACCOUNT',
                    noti: 'Đăng kí thành công!',
                });
            }
        });
    },

    loadLogin: function(req, res) {
        res.render('users/login', {
            title: 'Login',
            message: 'LOGIN ACCOUNT',
        });
    },

    login: function(req, res) {
        var login = require('../models/login');
        var check = login.data.login(req.body.username, req.body.password);
        console.log(check);
        if (check == 1) {
            res.render('message/index', {
                title: 'Message',
                message: 'Messages',
                noti: 'Đăng nhập thành công',
                active: {message: true},

            });
                check=0;
        } else {
            res.render('users/login', {
                title: 'Login',
                message: 'LOGIN ACCOUNT',
                noti: 'Tài khoản hoặc mật khẩu không đúng, đăng nhập thất bại!',
            });
        }
    },
};

module.exports = usersController;
