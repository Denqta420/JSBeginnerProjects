let output = document.getElementById("output");
let number = document.querySelectorAll(".row div");
let operator = document.querySelectorAll(".operators div");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let resultDisplayed = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    let clicked = number[i].innerHTML;

    if (!resultDisplayed) {
      output.innerHTML = "";
      resultDisplayed = true;
    }

    if (clicked === "C") {
      output.innerHTML = "0";
      resultDisplayed = false;
    } else {
      output.innerHTML += number[i].innerHTML;
    }
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    let clicked = operator[i].innerHTML;
    let lastChar = output.innerHTML.charAt(output.innerHTML.length - 1);

    if (!resultDisplayed || isValid(lastChar, clicked)) {
      return;
    } else {
      output.innerHTML += operator[i].innerHTML;
    }
  });
}

equal.addEventListener("click", () => {
  let outputString = output.innerHTML;
  let numbers = outputString.split(/\+|\-|\*|\//g);

  let operatinRes = outputString.replace(/[0-9]|\./g, "").split("");
  console.log(numbers);
  console.log(operatinRes, "operatinRes");

  let divide = operatinRes.indexOf("/");

  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operatinRes.splice(divide, 1);
    divide = operatinRes.indexOf("/");
  }

  let multiply = operatinRes.indexOf("*");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operatinRes.splice(multiply, 1);
    multiply = operatinRes.indexOf("×");
  }

  let subtract = operatinRes.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operatinRes.splice(subtract, 1);
    subtract = operatinRes.indexOf("-");
  }

  let add = operatinRes.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operatinRes.splice(add, 1);
    add = operatinRes.indexOf("+");
  }

  output.innerHTML = numbers[0];
});

function isValid(lastChar, clicked) {
  return (
    lastChar === clicked ||
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  );
}

window.addEventListener("keypress", (e) => {
  if (!resultDisplayed) {
    output.innerHTML = "";
    resultDisplayed = true;
  }

  let currentKey = e.key;

  if (currentKey == "=") {
    equal.click();
  } else {
    if (currentKey == "c" || currentKey === "C") {
      output.innerHTML = "0";
      resultDisplayed = false;
    } else {
      output.innerHTML += e.key;
    }
  }
});
