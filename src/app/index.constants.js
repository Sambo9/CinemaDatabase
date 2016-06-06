/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularFireApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://moviesdatabase.firebaseio.com/')
    .constant('NOTE_SELECT',
      [
        {id:1, name: 'mauvais'},
        {id:2, name: 'bof'},
        {id:3, name: 'moyen'},
        {id:4, name: 'pas mal'},
        {id:5, name: 'super'}
      ]
    );

})();
