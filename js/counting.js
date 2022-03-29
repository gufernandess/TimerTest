var chronometer;

var minute = 0;
var second = 0;
var millisecond = 0;

function returnTime(input) {
  return input > 9 ? input : `0${input}`;
}

function countingTime() {
    chronometer = setInterval(() => {
        if((millisecond += 1) == 99) {
          millisecond = 0;
          second++;
        }
        if(second == 60) {
          second = 0;
          minute++;
        }
      
        document.querySelector('.minute').innerText = returnTime(minute);
        document.querySelector('.second').innerText = returnTime(second);
        document.querySelector('.millisecond').innerText = returnTime(millisecond);
  
      }, 10);
}