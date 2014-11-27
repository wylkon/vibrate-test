vibrateTest = (function() {
  'use strict';

  function init() {
    vibrateTest.vibrationManager.init();
  };

  return {
    init: init
  };

}());

$(document).ready(function () {
  vibrateTest.init();
});