let answers = [
  
  "A",
  "D",
  "D",
  "D",
  "D",
  "B",
  "A",
  "D",
  "B",
  "A",
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
  alert("your score is "+score)
})
