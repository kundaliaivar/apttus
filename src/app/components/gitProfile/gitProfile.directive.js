( function() {
    'use strict';

    angular
        .module( 'apttusDemo' )
        .directive( 'gitProfile', gitProfile );

    /** @ngInject */
    function gitProfile( profileInfo ) {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/gitProfile/gitProfile.directive.html',
            scope: {
                profileData: '='
            },
            controller: NavbarController,
            controllerAs: 'profile',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController( moment ) {
            var profile = this
            profile.tempVar = profile.profileData || {};
            profile.tempVar.getProfileData = function( name ) {
                profileInfo.getProfileData( name ).then( function( data ) {
                    console.log( data )
                    profile.data = data
                } )
            }
        }
    }

} )();
