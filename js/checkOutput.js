function checkUndefinedTable(array) {
    for(var i = 0; i < 5; i++) {
        if(array[i].innerHTML == "undefined") array[i].innerHTML = null;
    }
}

function checkNAN(value) {
    if(value.value == "0NaN:0NaN:0NaN") value.value = null;
}