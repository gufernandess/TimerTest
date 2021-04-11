function showMenu() {
    document.getElementById("div").style.display = "inherit"
}

function backIndex() {
    document.getElementById("div").style.display = "none"
}

document.addEventListener('keydown', function(e) {
    
    if ($( ".buttonStart" ).is( ":visible" ) && e.code == "Space"){
        document.getElementById("start").click()
    }
    else if ($( ".buttonPause" ).is( ":visible" ) && e.code == "Space"){
        document.getElementById("pause").click()
    }
    else if ($( ".buttonReset" ).is( ":visible" ) && e.code == "Space"){
        document.getElementById("reset").click()
    }
});

var minute = 0
var second = 0
var millisecond = 0
var finalTime = 0
var chronometer
var finalTimeMinuteConvertedMilliseconds = 0
var finalTimeSecondConvertedMilliseconds = 0
var times = new Array()
var timesMinute = new Array()


function start() {

  chronometer = setInterval(() => { timer() }, 10)

  document.getElementById("start").style.display = "none"
  document.getElementById("pause").style.display = "inherit"
}

function pause() {

  clearInterval(chronometer)

  document.getElementById("pause").style.display = "none"
  document.getElementById("reset").style.display = "inherit"
}

function reset() {

  convertTimesToMilliseconds()
  putTimesArray()
  timesList()

  minute = 0
  second = 0
  millisecond = 0

  document.getElementById('minute').innerText = '00'
  document.getElementById('second').innerText = '00'
  document.getElementById('millisecond').innerText = '00'

  document.getElementById("reset").style.display = "none"
  document.getElementById("start").style.display = "inherit"
}

function timer() {

  if ((millisecond += 1) == 99) {
    millisecond = 0
    second++
  }
  if (second == 60) {
    second = 0
    minute++
  }

  document.getElementById('minute').innerText = returnData(minute)
  document.getElementById('second').innerText = returnData(second)
  document.getElementById('millisecond').innerText = returnData(millisecond)
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}

function convertTimesToMilliseconds(){

  finalTimeMinuteConvertedMilliseconds = minute * 60000
  finalTimeSecondConvertedMilliseconds = second * 1000

  finalTime = finalTimeMinuteConvertedMilliseconds + finalTimeSecondConvertedMilliseconds + millisecond

}

function convertTimesToMinutes(finalTime){

    second = finalTime / 1000
    minute = (second / 120).toFixed(0)
    console.log(minute)
    second = (second % 60).toFixed(0)
    millisecond = (finalTime % 100)
    finalTime = minute + ":" + second + ":" + millisecond

    return finalTime
}

function putTimesArray(){

  //times = JSON.parse(localStorage.getItem("times"))
  times.push(finalTime)
  times.sort(function(a, b){return a-b})
  localStorage.setItem("times", JSON.stringify(times))

  timesMinute = times.map(function(finalTime){

    return convertTimesToMinutes(finalTime)

  })

}

function timesList(){

  var timesTableZero = document.getElementById('zero')
  timesTableZero.innerHTML = "<span style='font-weight:normal'>" + timesMinute[0] + "</span>"

  var timesTableOne = document.getElementById('one')
  timesTableOne.innerHTML = "<span style='font-weight:normal'>" + timesMinute[1] + "</span>"

  var timesTableTwo = document.getElementById('two')
  timesTableTwo.innerHTML = "<span style='font-weight:normal'>" + timesMinute[2] + "</span>"

  var timesTableThree = document.getElementById('three')
  timesTableThree.innerHTML = "<span style='font-weight:normal'>" + timesMinute[3] + "</span>"

  var timesTableFour= document.getElementById('four')
  timesTableFour.innerHTML = "<span style='font-weight:normal'>" + timesMinute[4] + "</span>"

  document.getElementById('bestTime').value = timesMinute[0]

  document.getElementById('worstTime').value = convertTimesToMinutes(Math.max(...times))

  document.getElementById('md5').value = convertTimesToMinutes(((times[0] + times[1] + times[2] + times[3] + times[4]) / 5).toFixed(0))

  var geralMedia = times.reduce(function(total, numero){

    return total + numero / times.length
  }, 0)

  document.getElementById('geral').value = convertTimesToMinutes(geralMedia.toFixed(0))
  
  }