let answers = {
  "quiz1": "Must not contain spaces",
  "quiz2": "concat()method",
  "quiz3": "Camelcase",
  "quiz4": "declare",
  "quiz5": "math.ceil",
  "quiz6": "math.PI",
  "quiz7": "Global scopes",
  "quiz8": "loops",
  "quiz9": "YES",
  "quiz10": "While",
};
let form = document.querySelector('form')

form.addEventListener("submit", function (e) {
  let score = 0;
  e.preventDefault();
  var data = new FormData(form);
  for (const [name, value] of data) {
    if (answers[name] == value) {
      score++
    }
  }
  document.write(`Your score is ${score*10}%`)
})