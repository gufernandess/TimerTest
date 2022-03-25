var button = document.querySelector("button");

  function start() {

    chronometer = setInterval(() => {timer()}, 10);

    button.textContent = "Parar";
  }
  
  function pause() {
  
    clearInterval(chronometer);

    button.textContent = "Zerar";
  }
  
  function reset() {
  
    convertTimesToMilliseconds()
    putTimesArray()
    timesList()

    document.querySelectorAll("span").innerText = "00";

    button.textContent = "Parar";
  }

  button.addEventListener('click', () => {
      if(button.textContent == "Iniciar") start();
      if(button.textContent == "Parar") pause();
      if(button.textContent == "Zerar") reset();
  });