const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate");
const outputBox = document.querySelector("#output");

function sumOfSquares(a, b) {
  let sum = a * a + b * b;
  return sum;
}
function calculateHypo() {

  if (sides[0].value.length > 0 && sides[1].value.length > 0) {

    if (sides[0].value <= 0 || sides[1].value <= 0) {
      outputBox.innerText = "All Values should be greater than 0"
      outputBox.style.color = "red";


    }

    else {
      let sum = sumOfSquares(Number(sides[0].value), Number(sides[1].value));

      let hypotenuse = Math.sqrt(sum).toFixed(2);
      // console.log(hypotenuse);
      outputBox.innerText = "Hypoteneus " + hypotenuse;
      outputBox.style.color = "green"
    }

  }
  else {
    outputBox.innerText = "Please fill all the fields first."
    outputBox.style.color = "red";
  }
}

calculateBtn.addEventListener("click", calculateHypo);



// if (base.value.length > 0 && height.value.length > 0) {

//   if (base.value <= 0 || height.value <= 0) {
//     outputBox.innerText = "All Values should be greater than 0"
//     outputBox.style.color = "red";
//   }
//   else {

//     let mul = calculateMult(Number(base.value), Number(height.value));
//     let area = mul / 2;
//     // console.log(area);
//     outputBox.innerText = `Area of a triangle is ${area.toFixed(2)}`
//   }
// }
// else {
//   outputBox.innerText = "Plzz fill the all fields first."
//   outputBox.style.color = "red";
// }