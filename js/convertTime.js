var finalTime = 0;
var MinuteConvertedToMilliseconds = 0;
var SecondConvertedToMilliseconds = 0;

function convertToMilliseconds() {

    MinuteConvertedToMilliseconds = minute * 60000;
    SecondConvertedToMilliseconds = second * 1000;
  
    finalTime = MinuteConvertedToMilliseconds +
     SecondConvertedToMilliseconds + millisecond;
  
  }
  
  function convertToMinutes(finalTime) {
  
      second = finalTime / 1000;
      minute = (second / 120).toFixed(0);
      second = (second % 60).toFixed(0);
      millisecond = (finalTime % 100);

      finalTime = returnTime(minute) + ":" + returnTime(second) + ":" + returnTime(millisecond);
  
      return finalTime;
  }