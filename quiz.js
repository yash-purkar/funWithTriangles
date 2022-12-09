const quizForm = document.querySelector("#quiz-form");
// All of the data will come in quizForm variable;
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

const answers = ["750sqft", "true", "7", "90°", "right angle"];

function calculateScore() {

  let score = 0;
  let indexOfAns = 0;
  const formData = new FormData(quizForm);
  // console.log(formData)
  for (let value of formData.values()) {
    // console.log(data);
    if (value === answers[indexOfAns]) {
      score += 1;
    }
    indexOfAns += 1;
  }
  // console.log(score);
  if (score > 3) {
    outputBox.innerText = `Yayy💥 You Scored: ${score}`
  }
  else {
    outputBox.innerText = `😟ohhh You Scored: ${score}`

  }
}

submitBtn.addEventListener("click", calculateScore);