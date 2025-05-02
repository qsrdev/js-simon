const arrNumbers = [];
const timerElem = document.getElementById("timer");
const randomNumElem = document.getElementById("random-numbers");
const inputElem = document.getElementsByClassName("number-input");
console.log(inputElem);

const startBtn = document.getElementById("start-btn");

let counter = 30;

startBtn.addEventListener("click", function () {
  setInterval(() => {
    if (counter === 0) {
      timerElem.innerHTML = "Tempo scaduto";
      startBtn.innerHTML = "Conferma";
      startBtn.disabled = false;
    } else {
      counter--;
      timerElem.innerHTML = counter;
      startBtn.disabled = true;
      console.log(counter);
    }
  }, 1000);
});

startBtn.addEventListener("click", function () {
  //ciclo for che si esegue fino a che i = quantity
  for (let i = 0; i <= 5; i++) {
    if (i < 5) {
      var number = Math.floor(Math.random() * 100) + 1;
      if (arrNumbers.indexOf(number) === -1) arrNumbers.push(number);
    }
  }
  console.log(arrNumbers);
  randomNumElem.innerHTML = `${arrNumbers[0]} - ${arrNumbers[1]} - ${arrNumbers[2]} - ${arrNumbers[3]} - ${arrNumbers[4]}`;
});

//Functions
