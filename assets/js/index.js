let answers = [
  
  "Must not contain spaces",
  "concat()method",
  "Camelcase",
  "declare",
  "math.ceil",
  "math.PI",
  "Global scopes",
  "loops",
  "YES",
  "While",
];
let form=document.querySelector('form')

form.addEventListener("submit", function(e) {
  let score=0;
  e.preventDefault();
  var data = new FormData(form);
  let i=0
  for (const [name,value] of data) {
    if (answers[i]==value){
      score++
    }
    i++
   
  }
  document.write(`Your score is ${score*10}%`)
  
})
