( function() {
    'use strict';

    angular
        .module( 'apttusDemo' )
        .factory( 'profileInfo', profileInfo );

    /** @ngInject */
    function profileInfo( $http ) {
        var api = "https://api.github.com/users/"
        var getprofdata = function( name ) {
            return $http.get( api + name ).then( function( response ) {
                return response.data;
            } )
        }
        return {
            getProfileData: getprofdata
        }

    }
} )();
