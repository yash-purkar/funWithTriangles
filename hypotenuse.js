const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate");
const outputBox = document.querySelector("#output");

function sumOfSquares(a, b) {
  let sum = a * a + b * b;
  return sum;
}
function calculateHypo() {

  if (sides[0].value.length > 0 && sides[1].value.length > 0) {
    let sum = sumOfSquares(Number(sides[0].value), Number(sides[1].value));

    let hypotenuse = Math.sqrt(sum).toFixed(2);
    // console.log(hypotenuse);
    outputBox.innerText = "Hypoteneus " + hypotenuse;
  }
  else {
    outputBox.innerText = "Pleasefill all the fields first."
  }
}

calculateBtn.addEventListener("click", calculateHypo);