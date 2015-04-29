'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Credito, app, auth, database) {

  app.get('/credito/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/credito/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/credito/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/credito/example/render', function(req, res, next) {
    Credito.render('index', {
      package: 'credito'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
