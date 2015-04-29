'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Credito = new Module('credito');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Credito.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Credito.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Credito.menus.add({
    title: 'Credito',
    link: 'credito.app',
    roles: ['all'],
    menu: 'main'
  });
  
  Credito.aggregateAsset('css', 'credito.css');

  return Credito;
});
