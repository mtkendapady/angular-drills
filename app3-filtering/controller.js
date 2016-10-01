angular.module( "FilterApp")
.controller("filterCtrl", function($scope, peopleService) {
  $scope.people = peopleService.getPeople();

  $scope.searchPeople = function() {
    $scope.people = $scope.people.filter( function( person ) {
      if ( person.name.indexOf( $scope.searchText ) !== -1 ) {
        return true;
      }
      return false;
    });
  }
});
