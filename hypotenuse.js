const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate");
const outputBox = document.querySelector("#output");


function sumOfSquares(a, b) {
  let sum = a * a + b * b;

  console.log(sum)
}
function calculateHypo() {
  sumOfSquares(Number(sides[0].value), Number(sides[1].value));

  console.log(sum);


}

calculateBtn.addEventListener("click", calculateHypo);