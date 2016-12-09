(function() {
  'use strict';

  angular
    .module('apttusDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
