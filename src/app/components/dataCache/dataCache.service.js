( function() {
    'use strict';

    angular
        .module( 'apttusDemo' )
        .factory( 'dataCache', dataCache );

    /** @ngInject */
    function dataCache() {
        var getdata = function( tasks ) {
            return JSON.parse( localStorage.getItem( tasks ) );
        }
        var setdata = function( tempObj ) {
            var localstorageitem = JSON.parse( localStorage.getItem( "tasks" ) ) || [];
            localstorageitem.push( tempObj );
            localStorage.setItem( "tasks", JSON.stringify( localstorageitem ) );
        }
        return {
            getData: getdata,
            setData: setdata
        }

    }
} )();
