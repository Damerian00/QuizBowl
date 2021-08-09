var userName = localStorage.getItem("userName");
var userScore = localStorage.getItem("score");



  // display userName and score
  
 for (i=0; i < localStorage.length -1; i++){
    
  let li = document.createElement("li");
  let ul = document.querySelector('.scores');
  userName = userName;
  userScore = userScore;
  let results = (JSON.parse(localStorage.userName) + ": " + JSON.parse(localStorage.score) + " points")
  li.textContent = results;
  ul.appendChild(li);
 
 }