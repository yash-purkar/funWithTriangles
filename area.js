const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculateBtn");
const outputBox = document.querySelector("#outputBox");


function calculateMult(b, h) {
  let mul = b * h;
  return mul;
}

function calculateArea() {
  if (base.value.length > 0 && height.value.length > 0) {
    let mul = calculateMult(Number(base.value), Number(height.value));
    let area = mul / 2;
    // console.log(area);
    outputBox.innerText = `Area of a triangle is ${area.toFixed(2)}`
  }
  else {
    outputBox.innerText = "Plzz fill the all fields first."
  }
}

calculateBtn.addEventListener("click", calculateArea)

