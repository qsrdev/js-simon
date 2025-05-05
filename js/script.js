const arrNumbers = [];
const timerElem = document.getElementById("timer");
const randomNumElem = document.getElementById("random-numbers");
const result = document.getElementById("result");

//Inputs
const inputElem1 = document.getElementById("numberInput1");
const inputElem2 = document.getElementById("numberInput2");
const inputElem3 = document.getElementById("numberInput3");
const inputElem4 = document.getElementById("numberInput4");
const inputElem5 = document.getElementById("numberInput5");

//Bottoni per le funzioni
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");

let counter = 5;

startBtn.addEventListener("click", function () {
  setInterval(() => {
    if (counter === 0) {
      timerElem.innerHTML = "Tempo scaduto";
      startBtn.classList.add("d-none");
      submitBtn.classList.remove("d-none");
      randomNumElem.innerHTML = `Ora prova a indovinare`;
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
      let number = Math.floor(Math.random() * 100) + 1;
      if (arrNumbers.indexOf(number) === -1) arrNumbers.push(number);
    }
  }
  console.log(arrNumbers);
  randomNumElem.innerHTML = `${arrNumbers[0]} - ${arrNumbers[1]} - ${arrNumbers[2]} - ${arrNumbers[3]} - ${arrNumbers[4]}`;
});

submitBtn.addEventListener("click", numbercheck);

//Functions
function numbercheck(event) {
  event.preventDefault();

  const firstNumber = inputElem1.value;
  const secondNumber = inputElem2.value;
  const thirdNumber = inputElem3.value;
  const fourthNumber = inputElem4.value;
  const fifthNumber = inputElem5.value;

  const attInputNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
  let correct = 0;
  console.log(attInputNumbers);

  for (let i = 0; i < arrNumbers.length; i++) {
    if (attInputNumbers.includes(String(arrNumbers[i]))) {
      correct++;
    }
  }

  result.innerHTML = `Hai indovinato ${correct} numeri!`;
  result.classList.remove("d-none");
}
