angular.module( "apiApp")
.controller( "apiCtrl", function( $scope, apiService){
  $scope.starships = [];
  $scope.pilots = [];

  apiService
    .getStarships()
    .then( function( starships ) {
      $scope.starships = starships.data.results;
    });

  $scope.getPilots = function( urlArray ){
    apiService
      .getPilots( urlArray )
      .then( function( pilots) {
          $scope.pilots = pilots;
      });
  }

});
