var button = document.querySelector("button");
var timerBox = document.querySelector(".timer");

  function start() {
    countingTime();
    button.innerHTML = "<ion-icon class='button-icon' name='hand'></ion-icon>Parar";
    button.style.opacity = "0";
  }
  
  function pause() {
    clearInterval(chronometer);
    button.innerHTML = "<ion-icon class='button-icon' name='checkmark-circle'></ion-icon>Zerar";
    button.style.opacity = "1";
  }
  
  function reset() {
    convertToMilliseconds();
    insertTimeOnArray();
    insertTimeOnTheTable();

    timerBox.innerHTML = "<span class='minute'>00</span>:<span class='second'>00</span>:<span class='millisecond'>00</span>";

    minute = second = millisecond = 0;

    button.innerHTML = "<ion-icon class='button-icon' name='time'></ion-icon>Iniciar";
    
  }

  button.addEventListener('click', () => {
      if(button.textContent == "Iniciar") start();
      else if(button.textContent == "Parar") pause();
      else if(button.textContent == "Zerar") reset();
  }); 

  document.addEventListener('keyup', e => {
    if(e.keyCode == 32) {
      if(button.textContent == "Iniciar") start();
      else if(button.textContent == "Parar") pause();
      else if(button.textContent == "Zerar") reset();
    }
});