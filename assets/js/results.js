
let userName = localStorage.getItem("userName");
let userScore = localStorage.getItem("score");
let clrScores = document.querySelector(".clrScores");

// display userName and score

// to make sure we're dealing with an array first
// you originally had localstorage
console.log(localStorage);
console.log(typeof userName);
userName = JSON.parse(userName);
userScore = JSON.parse(userScore);
console.log(userName);

for (i = 0; i < userName.length; i++) {
  let li = document.createElement("li");
  let ul = document.querySelector(".scores");

  let results = userName[i] + ": " + userScore[i] + " points";
  console.log(results);
  li.textContent = results;
  ul.appendChild(li);
}

clrScores.addEventListener("click", function () {
  console.log("clear me");
  window.location.reload();
  localStorage.clear();
});

// var userName = localStorage.getItem("userName");
// var userScore = localStorage.getItem("score");
// let clrScores = document.querySelector('.clrScores');


//   // display userName and score

//  userName = JSON.parse(userName);
//  userScore = JSON.parse(userScore); 
//  for (i=0; i < localStorage.length; i++){
    
//   let li = document.createElement("li");
//   let ul = document.querySelector('.scores');
//   userName = userName;
//   userScore = userScore;
//   let results = (JSON.parse(localStorage.userName) + ": " + JSON.parse(localStorage.score) + " points");
//   li.textContent = results;
//   ul.appendChild(li);
 
//  }

// clrScores.addEventListener("click" , function (){ 
//     console.log ("clear me");
//     window.location.reload();
//     localStorage.clear();
// });
