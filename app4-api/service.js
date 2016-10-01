angular.module("apiApp")
.service( "apiService" , function( $http, $q ) {

  var baseUrl = "http://swapi.co/api/";

  this.getStarships = function() {
    return $http.get( baseUrl + "starships" );
  }

  this.getPilots = function( urlArray ) {
    var dfd = $q.defer();

    var pilots = [];

    for( var i=0; i<urlArray.length; i++ ) {
      $http
        .get( urlArray[i] )
        .then( function( pilot ) {
          pilots.push( pilot.data );

          if ( pilots.length === urlArray.length ) {
            dfd.resolve( pilots );
          }
        });
    }

    return dfd.promise;
  }
});
