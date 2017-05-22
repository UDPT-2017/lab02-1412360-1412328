var messageController = {
  index: function(req, res) {
    res.render('message/index', {
    title: 'Message',
    message: 'Message page',
    active: { message: true },
    });
  }
};

module.exports = messageController;
