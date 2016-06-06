(function() {
  'use strict';

  angular
    .module('angularFireApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
