function createElement(tagName, className = "", id = "", attribute = {}) {
  const elem = document.createElement(tagName);
  if (id) {
    elem.id = id;
  }
  if (className) {
    elem.className = className;
  }
  for (let attributeName of Object.keys(attribute)) {
    elem.setAttribute(attributeName, attribute[attributeName]);
  }

  return elem;
}

const div = createElement("div", "container text-center");
document.body.append(div);

const h1 = createElement("h1", "heading", "title");
div.append(h1);
h1.innerText = "CALCULATOR TASK";

const p = createElement("p", "", "description");
div.append(p);
p.innerText = "Simple Calculator";

const div1 = createElement("div", "", "calculator");
div.append(div1);
div1.append(
  createElement("input", "", "result", {
    type: "text",
    disable: "",
  })
);
div1.append(createElement("br"));
div1.append(
  createElement("button", "", "1", { onclick: "appendToDisplay('1')" })
);
div1.append(
  createElement("button", "", "2", { onclick: "appendToDisplay('2')" })
);
div1.append(
  createElement("button", "", "3", { onclick: "appendToDisplay('3')" })
);
div1.append(
  createElement("button", "", "add", { onclick: "appendToDisplay('+')" })
);
div1.append(createElement("br"));
div1.append(
  createElement("button", "", "4", { onclick: "appendToDisplay('4')" })
);
div1.append(
  createElement("button", "", "5", { onclick: "appendToDisplay('5')" })
);
div1.append(
  createElement("button", "", "6", { onclick: "appendToDisplay('6')" })
);
div1.append(
  createElement("button", "", "subtract", { onclick: "appendToDisplay('-')" })
);
div1.append(createElement("br"));
div1.append(
  createElement("button", "", "7", { onclick: "appendToDisplay('7')" })
);
div1.append(
  createElement("button", "", "8", { onclick: "appendToDisplay('8')" })
);
div1.append(
  createElement("button", "", "9", { onclick: "appendToDisplay('9')" })
);
div1.append(
  createElement("button", "", "btnMulti", { onclick: "appendToDisplay('*')" })
);
div1.append(createElement("br"));
div1.append(
  createElement("button", "", "clear", { onclick: "clearDisplay()" })
);
div1.append(
  createElement("button", "", "zero", { onclick: "appendToDisplay('0')" })
);
div1.append(
  createElement("button", "", "btnDot", { onclick: "appendToDisplay('.')" })
);
div1.append(
  createElement("button", "", "btnDiv", { onclick: "appendToDisplay('/')" })
);
div1.append(createElement("br"));
div1.append(
  createElement("button", "result", "equal", { onclick: "calculateResult()" })
);

const btn1 = document.getElementById("1");
btn1.innerText = "1";
btn1.className = "gray-color";
const btn2 = document.getElementById("2");
btn2.innerText = "2";
btn2.className = "gray-color";
const btn3 = document.getElementById("3");
btn3.innerText = "3";
btn3.className = "gray-color";
const btn4 = document.getElementById("4");
btn4.innerText = "4";
btn4.className = "gray-color";
const btn5 = document.getElementById("5");
btn5.innerText = "5";
btn5.className = "gray-color";
const btn6 = document.getElementById("6");
btn6.innerText = "6";
btn6.className = "gray-color";
const btn7 = document.getElementById("7");
btn7.innerText = "7";
btn7.className = "gray-color";
const btn8 = document.getElementById("8");
btn8.innerText = "8";
btn8.className = "gray-color";
const btn9 = document.getElementById("9");
btn9.innerText = "9";
btn9.className = "gray-color";
const btn0 = document.getElementById("zero");
btn0.innerText = "0";
btn0.className = "gray-color";
const btnPlus = document.getElementById("add");
btnPlus.innerText = "+";
btnPlus.className = "orange-color";
const btnMinus = document.getElementById("subtract");
btnMinus.innerText = "-";
btnMinus.className = "orange-color";
const btnMulti = document.getElementById("btnMulti");
btnMulti.innerText = "X";
btnMulti.className = "orange-color";
const btnDiv = document.getElementById("btnDiv");
btnDiv.innerText = "/";
btnDiv.className = "orange-color";
const btnDot = document.getElementById("btnDot");
btnDot.innerText = ".";
btnDot.className = "light-gray";
const btnc = document.getElementById("clear");
btnc.innerText = "C";
btnc.className = "light-gray";
const btnRes = document.getElementById("equal");
btnRes.innerText = "=";
btnRes.className = "orange-color";

function appendToDisplay(value) {
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  let value = 0;
  value = eval(document.getElementById("result").value);
  document.getElementById("result").value = value;
}

let exp = 0;
window.addEventListener("keypress", (event) => {
  const allowedOperators = ["-", "+", "/", "*", "="];
  const allowedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const key = event.key;

  if (key === "=") {
    const result = evalExp(exp);
    if (result !== null) {
      exp = "";
    } else {
      alert("Error: Invalid expression");
      exp = "";
    }
  } else if (allowedOperators.includes(key) || allowedNumbers.includes(key)) {
    exp += key;
  } else {
    alert("Only numbers and operators (+, -, *, /) are allowed!");
  }
});

function evalExp(exp) {
  let value = eval(exp);
  document.getElementById("result").value = value;
}
