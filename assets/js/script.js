$(document).ready(function () {
  var mins        = 1,
      secs        = mins*60,
      timerInterv = {},
      outMins     = 0,
      outSecs     = 0,
      paused      = false;

  function start() {
    timerInterv = window.setInterval(doCountDown, 1000);
  }

  function doCountDown() {
    --secs;

    if (secs <= 0) {
      outMins = outSecs = 0;

      clearInterval(timerInterv);

      $("#segundo").html("00");
      $(".cronometro").addClass("danger tada");

      return;
    }

    outMins = ('0' + parseInt(secs/60)).slice(-2);
    outSecs = ('0' + secs%60).slice(-2);

    $("#minuto").html(outMins);
    $("#segundo").html(outSecs);
  }

  function zerar(callback, definedMins , definedSecs) {
    var setMins = definedMins || mins;

    window.clearInterval(timerInterv);

    $("#minuto").text('0' + setMins);
    $("#segundo").text(definedSecs);
    $(".cronometro").removeClass("danger tada");
    $(".cronometro").removeClass("paused");

    paused = false;
    secs    = mins * 60 + parseFloat(definedSecs);
    outSecs = outMins = 0;


    callback();
  }

  function pausar(callback, definedMins) {

    if ((outMins + outSecs) !== 0) {
      var setMins = definedMins || mins;

      if (paused) {
        callback();
        $(".cronometro").removeClass("paused");
        paused = false;
      } else {
        window.clearInterval(timerInterv);
        $(".cronometro").addClass("paused");
        paused = true;
      }
    }
  }

  $("#keynote").click(function(){
    mins = 5;
    zerar(start, mins , "00");
  });

  $(".proximo").click(function () {
    mins = 1;

    zerar(start, mins , "00");
  });

   $(".cronometro").click(function () {
    mins = 1;

    pausar(start, mins, paused);
  });

  function seconds(s){
    mins =  Math.floor(s/60);
    s = (s%60);

    zerar(start, mins, s);
  }

  $(window).keypress(function (e) {

    if (e.keyCode === 0 || e.keyCode === 32) {
      $(".proximo").click();
    }
    if (e.keyCode === 109) {
      seconds(30);
    }
    if (e.keyCode === 107) {
      $("#keynote").click();
    }

    e.preventDefault()
  })


});
