function showMenu() {
    document.getElementById("div").style.display = "inherit"
}

function backIndex() {
    document.getElementById("div").style.display = "none"
}

document.addEventListener('keydown', function(e) {
    
    if ($( ".buttonStart" ).is( ":visible" ) && e.code == "Space"){
        document.getElementById("start").click();
    }
    else if ($( ".buttonPause" ).is( ":visible" ) && e.code == "Space"){
        document.getElementById("pause").click();
    }
    else if ($( ".buttonReset" ).is( ":visible" ) && e.code == "Space"){
        document.getElementById("reset").click();
    }
});

var minute = 0;
var second = 0;
var millisecond = 0;
var chronometer;


function start() {

  chronometer = setInterval(() => { timer(); }, 10);

  document.getElementById("start").style.display = "none"
  document.getElementById("pause").style.display = "inherit"
}

function pause() {

  clearInterval(chronometer);

  document.getElementById("pause").style.display = "none"
  document.getElementById("reset").style.display = "inherit"
}

function reset() {

  minute = 0;
  second = 0;
  millisecond = 0;

  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '00';
  document.getElementById("reset").style.display = "none"
  document.getElementById("start").style.display = "inherit"
}

function timer() {

  if ((millisecond += 1) == 99) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }

  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}

