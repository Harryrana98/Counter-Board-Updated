let gyming = document.getElementById("gym");

let adds = document.querySelector("input");

function increment() {
  gyming.innerHTML++;
  // updateDisplay();
  // console.log(gyming)
}

function decrement() {
  if (gyming.innerHTML >= 1) {
    gyming.innerHTML--;
  } else {
    alert("Negative Value Is Not Allow");
  }
  // updateDisplay();
}

function reset() {
  gyming.innerHTML = 0;
  adds.value = "";
  // updateDisplay();
}

function add() {

    if(isNaN(adds.innerHTML>0)||Number(adds.innerHTML)){

        let addNumber = Number(gyming.innerHTML) + Number(adds.value);
        gyming.innerHTML = addNumber;
        adds.value = "";
    }
    else(alert("Please a valid value"))
  
  // console.log(addNumber)
}
