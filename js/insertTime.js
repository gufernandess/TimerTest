var timeList = [];
var timeListInMinutes = [];

var table = document.querySelectorAll("li");
var specialTimes = document.querySelectorAll("input");

function insertTimeOnArray() {

  timeList.push(finalTime);

  timeList.sort(function(a, b) {
    return a-b;
});

  timeListInMinutes = timeList.map(finalTime => {
    return convertToMinutes(finalTime);
  });
}

function insertTimeOnTheTable() {

  table[0].innerHTML = timeListInMinutes[0];

  table[1].innerHTML = timeListInMinutes[1];

  table[2].innerHTML = timeListInMinutes[2];

  table[3].innerHTML = timeListInMinutes[3];

  table[4].innerHTML = timeListInMinutes[4];

  checkUndefinedTable(table);

  specialTimes[0].value = convertToMinutes(Math.min(...timeList));

  specialTimes[1].value = convertToMinutes(Math.max(...timeList));

  specialTimes[2].value = convertToMinutes(((timeList[0] +
     timeList[1] + timeList[2] + timeList[3] + timeList[4]) / 5).toFixed(0));

  checkNAN(specialTimes[2]);

  var media = timeList.reduce((total, number) => total + number, 0);

  specialTimes[3].value = convertToMinutes((media / timeList.length).toFixed(0));
  
}