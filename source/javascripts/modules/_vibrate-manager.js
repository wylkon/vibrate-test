var vibrateTest = vibrateTest || {};
vibrateTest.vibrationManager = (function() {
  'use strict';

  var manNumber = parseInt(Math.random() * (100 - 0) + 0) % 2 == 0;
  var testNumber = 0;

  function init () {
    bindButton();
  };

  function bindButton() {
    $('.vt-btn').bind('click', function() {
      manlinessCalculate();
    });
  };

  function manlinessCalculate (argument) {


    if(testNumber > 0){
      $(".message").html('<img src="http://weknowmemes.com/wp-content/uploads/2012/04/gay-seal-gif.gif">')
      window.navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100,100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
      $("body").addClass('pinkTheme');
    } else {
      if(manNumber){
        window.navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
        $(".message").text('Nossaaaaaaaa, se eu fosse você eu não tentava testar denovo por que o resultado pode ser pior!!!!')

      } else {
        $(".message").text('Eita maluco macho!!! Tá quase virando Frontend!')
      }
    }
    testNumber ++;
  }

  return {
    init: init
  };

}());