var aboutController = {

  index: function(req, res) {
    res.render('about/index', {
    title: 'About',
    message: 'About page',
    active: { about: true },
    });
  },

  show: function(req, res) {
    res.render('about/index', {
    title: 'About',
    message: 'About page',
    active: { about: true },
    });
  }
};

module.exports = aboutController;
