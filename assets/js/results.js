var userName = localStorage.getItem("userName");
var userScore = localStorage.getItem("score");
let clrScores = document.querySelector('.clrScores');


  // display userName and score
  
 for (i=0; i < localStorage.length -1; i++){
    
  let li = document.createElement("li");
  let ul = document.querySelector('.scores');
  userName = userName;
  userScore = userScore;
  let results = (JSON.parse(localStorage.userName) + ": " + JSON.parse(localStorage.score) + " points");
  li.textContent = results;
  ul.appendChild(li);
 
 }

clrScores.addEventListener("click" , function (){ 
    console.log ("clear me");
    window.location.reload();
    localStorage.clear();
});