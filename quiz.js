const quizForm = document.querySelector("#quiz-form");
// All of the data will come in quizForm variable;
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

const answers = ["750sqft", "true", "7", "90°", "right angle"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formData = new FormData(quizForm);
  // console.log(formData)
  for (let data of formData.values()) {
    // console.log(data);

  }

}

submitBtn.addEventListener("click", calculateScore);