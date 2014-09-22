// var myVar = setInterval(function(){myTimer()}, 1000);

// var myTimer = function() {
//     var d = new Date();
//     t = d.toLocaleTimeString();
//    console.log(t);
// };


$(document).on('ready', function() {
  var outerShell = $('<div class="outerShell"></div>');
  var innerShell = $('<div class="innerShell"></div>');
  var amPm = $('<div class="amPm"><p>PM</p><p>AUTO</p></div>');
  var indicator = $('<div class="indicator"></div>')
  var clockScreen = $('<div class="clockScreen"></div>');
  var radioLabel = $('<div class="radioLabel"><p>AM</p><p>PM</p></div>');
  var amRadio = $('<div class="amRadio"></div>');
  var fmRadio = $('<div class="fmRadio"></div>');
  
  var myVar = setInterval(function(){myTimer()}, 1000);

  amRadio.append('<p>53 60 70 90 110 140 170</p>');
  fmRadio.append('<p>88 92 96 102 106 108</p>');
  
	var myTimer = function() {
	    var d = new Date();
	    var t = d.toLocaleTimeString();
	    t = t.slice(0,4);
	    var hour = d.getHours();
	    if (hour > 11) {
	    	indicator.show();
	    }
	    clockScreen.text(t);
	};


  $('.container').append(outerShell);
  $('.outerShell').append(innerShell);
  $('.innerShell').append(amPm).append(clockScreen).append(indicator).append(radioLabel).append(amRadio).append(fmRadio);

  // var myVar = setInterval(function(){myTimer()}, 10000);




});