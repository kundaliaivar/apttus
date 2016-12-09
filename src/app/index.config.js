( function() {
    'use strict';

    angular
        .module( 'apttusDemo' )
        .config( config );

    /** @ngInject */
    function config( $logProvider ) {
        // Enable log
        $logProvider.debugEnabled( true );


    }

} )();
