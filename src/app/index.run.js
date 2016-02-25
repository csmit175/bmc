(function() {
  'use strict';

  angular
    .module('bmc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
