(function(){
'use strict';

angular.module('myFirstApp',[])
.controller('MyFirstController', function($scope){
$scope.name="Eitan";
$scope.sayhello= function(){
  return "Hello Caro!"
};
});

})();
