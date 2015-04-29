'use strict';

/* jshint -W098 */
angular.module('mean.credito').controller('CreditoController', ['$scope', 'Global', 'Credito',
  function($scope, Global, Credito) {
    $scope.global = Global;
    $scope.package = {
      name: 'credito'
    };
  }
]);
