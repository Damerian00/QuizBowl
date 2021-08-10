
let userName = localStorage.getItem("userName");
let userScore = localStorage.getItem("score");
let clrScores = document.querySelector(".clrScores");

// display userName and score

// to make sure we're dealing with an array first
// you originally had localstorage
userName = JSON.parse(userName);
userScore = JSON.parse(userScore);

for (i = 0; i < userName.length && i < 6; i++) {
  let li = document.createElement("li");
  let ul = document.querySelector(".scores");

  let results = userName[i] + ": " + userScore[i] + " points";
  li.textContent = results;
  ul.appendChild(li);
}

clrScores.addEventListener("click", function () {
  window.location.reload();
  localStorage.clear();
});

/