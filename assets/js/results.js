var userName = localStorage.getItem("userName");
var userScore = localStorage.getItem("score");



  // display userName and score
// for (i=0; i < localStorage.length; i++){
    // if (localStorage[i] !== "undefined"){
  let li = document.createElement("li");
  let ul = document.querySelector('.scores');
  userName = userName;
  userScore = userScore;
  li.textContent = (`${userName}: ${userScore} points`)
  ul.appendChild(li);
// }else{}
// }