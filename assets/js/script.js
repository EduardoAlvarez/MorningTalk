$(document).ready(function(){
  var mins=1;
  var secs = mins*60;
  var timerInterv;
  $("#keynote").click(function(){
    zerar();
    mins=5;
  });
  $(".proximo").click(function(){
    zerar();
    var timerInterv = window.setInterval(doCountDown, 1000);
    var outMins,outSecs
  })



  function doCountDown()
  {
      --secs;
      if (secs<=0)
      { outMins=outSecs=0;
        clearInterval(timerInterv);
        $("#segundo").html("00");
        $(".cronometro").addClass("danger blink");
      return;
      }
      outMins = parseInt(secs/60);
      outSecs = secs%60;

      $("#minuto").html(outMins);
      $("#segundo").html(outSecs);


  }

  function zerar(){
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
  }
})
