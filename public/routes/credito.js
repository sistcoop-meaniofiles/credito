'use strict';

angular.module('mean.credito').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
        .state('credito', {
          abstract: true,
          url: '/credito',
          templateUrl: 'credito/views/tpls/layout/body.html'
        })
        .state('credito.home', {
          url: '/home',
          templateUrl: 'credito/views/index.html'
        })
        .state('credito.app', {
          url: '/app',
          templateUrl: 'credito/views/app.html'
        });
  }
]);
