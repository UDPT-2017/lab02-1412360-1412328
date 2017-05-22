var homeController = {
  index: function(req, res) {
    res.render('home/index', {
      title: 'Home',
      message:"WELCOME",
      active: { home: true },
    });
  }
};

module.exports = homeController;
