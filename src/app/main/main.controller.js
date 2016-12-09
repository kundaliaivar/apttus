( function() {
    'use strict';

    angular
        .module( 'apttusDemo' )
        .controller( 'MainController', MainController );

    /** @ngInject */
    function MainController( $timeout, dataCache, toastr ) {
        this.profileobj = {};
        this.sortType = 'complexity'; // set the default sort type
        this.sortReverse = false;
        this.tasks = dataCache.getData( "tasks" );
        this.val = [ "low", "medium", "high" ];
        this.addTask = function( taskName, taskDate, priority ) {
            var tempObj = {
                "taskname": taskName,
                "complexity": priority,
                "date": taskDate
            }
            dataCache.setData( tempObj );
            this.tasks = dataCache.getData( "tasks" );
        }

    }
} )();
