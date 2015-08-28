(function() {
  'use strict';

  angular
    .module('calfun')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
