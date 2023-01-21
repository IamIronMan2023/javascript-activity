let btnReverse = document.getElementById("btnReverse");
let inputReverse = document.getElementById("inputReverse");

let btnPascalCase = document.getElementById("btnPascalCase");
let inputPascalCase = document.getElementById("inputPascalCase");

function reverseAText(text) {
  return text.split("").reverse().join("");
}

function pascalCaseAText(text) {
  let arrText = text.split(" ");
  let arrResult = [];
  let s;
  for (let i = 0; i < arrText.length; i++) {
    s = arrText[i];
    arrResult.push(
      s.charAt(0).toUpperCase() + s.substring(1, s.length).toLowerCase()
    );
    arrResult.push(" ");
  }

  return arrResult.join("");
}

function runPascalCaseText() {
  let text = inputPascalCase.value;
  text = pascalCaseAText(text);
  document.getElementById("demoPascalCase").innerHTML = text;
}

function runReverseText() {
  let text = inputReverse.value;
  text = reverseAText(text);
  document.getElementById("demoReverse").innerHTML = text;
}

btnReverse.addEventListener("click", runReverseText);
btnPascalCase.addEventListener("click", runPascalCaseText);
