const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate");
const outputBox = document.querySelector("#output");



function sumOfSquares(a, b) {
  let sum = a * a + b * b;
  return sum;

}
function calculateHypo() {


  let sum = sumOfSquares(Number(sides[0].value), Number(sides[1].value));

  let hypotenuse = Math.sqrt(sum).toFixed(2);
  // console.log(hypotenuse);
  outputBox.innerText = "Hypoteneus " + hypotenuse;
}

calculateBtn.addEventListener("click", calculateHypo);