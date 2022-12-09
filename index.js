const inputs = document.querySelectorAll(".angle-input");
const button = document.querySelector("#isTriangle-btn");
const outputBox = document.querySelector("#outputBox");



function sumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  // console.log(sumOfAngles)
  return sumOfAngles;
}

function isTriangle() {
  if (inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0) {

    if (inputs[0].value <= 0 || inputs[1].value <= 0 || inputs[2].value <= 0) {

      outputBox.innerText = "All Angles should be greater than 0";
      outputBox.style.color = "red";
    }

    else {


      const sum = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

      if (sum === 180) {
        outputBox.innerText = "Yayy! Its Forms a Triangle🤩";
        outputBox.style.color = "green"
      }
      else {
        outputBox.innerText = "Ohh! Its not Forms a Triangle🤪";
      }
    }
  }
  else {
    outputBox.innerText = 'Plzz enter all the field first'
  }
}

button.addEventListener("click", isTriangle);