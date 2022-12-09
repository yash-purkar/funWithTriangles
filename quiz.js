const quizForm = document.querySelector("#quiz-form");
// All of the data will come in quizForm variable;
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

const answers = ["750sqft", "true", "7", "90°", "right angle"];

function calculateScore() {

  // for(i=0; i<answers.length; i++) {
  //   if(quizForm[i].value === "")
  // }


  let score = 0;
  let indexOfAns = 0;
  const formData = new FormData(quizForm);
  // console.log(formData)
  let ansGiven = 0;

  for (let value of formData.values()) {
    // console.log(value);
    ansGiven++;
    if (value === answers[indexOfAns]) {
      score++;
    }
    indexOfAns++;
  }
  // console.log(score);
  console.log(ansGiven);
  if (ansGiven < 5) {
    outputBox.innerText = "For score : You have to play whole quiz first."
    outputBox.style.color = "red";
  }
  if (ansGiven === 5) {
    outputBox.innerText = `You Scored: 
     ${score}`;
    outputBox.style.color = "green";
  }
  // else {
  //   outputBox.innerText = `😟ohhh You Scored: ${score}`
  // }
}

submitBtn.addEventListener("click", calculateScore);