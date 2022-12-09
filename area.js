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

    if (base.value <= 0 || height.value <= 0) {
      outputBox.innerText = "All Values should be greater than 0"
      outputBox.style.color = "red";
    }
    else {

      let mul = calculateMult(Number(base.value), Number(height.value));
      let area = mul / 2;
      // console.log(area);
      outputBox.innerText = `Area of a triangle is ${area.toFixed(2)}`
    }
  }
  else {
    outputBox.innerText = "Plzz fill the all fields first."
    outputBox.style.color = "red";
  }

}

calculateBtn.addEventListener("click", calculateArea)

