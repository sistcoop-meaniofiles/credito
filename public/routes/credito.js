'use strict';

angular.module('mean.credito').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
        .state('credito', {
            abstract: true,
            url: '/credito',
            templateUrl: 'credito/views/_body.html'
        })
        .state('credito.home', {
            url: '/home',
            templateUrl: 'credito/views/index.html'
        })
        .state('credito.app', {
            url: '/app',
            templateUrl: 'credito/views/app.html'
        })

        .state('credito.app.registro', {
            url: '/registro',
            template: '<div ui-view></div>'
        })

        //tipoDocumento
        .state('credito.app.registro.buscarCreditos', {
            url: '/buscarCreditos',
            templateUrl: 'credito/views/registro/form-buscar-buscarCreditos.html',
            controller: 'Credito.BuscarCreditosController'
        });
  }
]);
