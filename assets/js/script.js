let startBtn = document.querySelector('.startBtn');
let askedQuestions = [];
let hide = document.querySelector('.hideCard');
let visState = hide.getAttribute("data-visibility");
let timeEl = document.querySelector("#cdTimer");
let secondsLeft = 30;
startBtn.addEventListener("click", startGame);
let askQuest = document.querySelector('#daQuestion');
let opt1 = document.querySelector('#opt1');
let opt2 = document.querySelector('#opt2');
let opt3 = document.querySelector('#opt3');
let opt4 = document.querySelector('#opt4');
let resp = document.querySelector('.response');
let container = document.querySelector(".choice-options");
let submitButton = document.querySelector("#submitName");
let msgDiv = document.querySelector("#msg");
let timerInterval;
let questionIndex = 0;
let random;
let questions;
let assignedValues;
let score = 0;
let optVar1;
let optVar2;
let optVar3;
let optVar4;
let rI1;
let rI2;
let rI3;
let rI4;
let storeUser;
let storeScore;

if (
    localStorage === undefined ||
    localStorage.length === 0 ) {
    storeUser = localStorage.setItem("userName", JSON.stringify([]));
    storeScore = localStorage.setItem("score", JSON.stringify([]));
    storeUser = JSON.parse(localStorage.getItem("userName"));
    storeScore = JSON.parse(localStorage.getItem("score"));
  } else {
    storeUser = JSON.parse(localStorage.getItem("userName"));
    storeScore = JSON.parse(localStorage.getItem("score"));
  }

let questionsArray = [{
    question: "Which X-men has claws?",
    cAns: "Wolverine",
    iAnsOne: "Professor X",
    iAnsTwo: "Cylcops",
    iAnsThree: "Rogue",
},
{
    question: "Which mutant's backstory from the cartoon series was used for rogue in the movie X-men?",
    cAns: "Jubilee",
    iAnsOne: "Storm",
    iAnsTwo: "Gambit",
    iAnsThree: "It's her story",
},
{
    question: "Which person does both Wolverine and Cyclops have a thing for?",
    cAns: "Jean Grey",
    iAnsOne: "Storm",
    iAnsTwo: "Mrs. Marvel",
    iAnsThree: "Rogue",
},
{
    question: "Which X-men can harm Mr. Sinister with their muant powers?",
    cAns: "Cyclops",
    iAnsOne: "Wolverine",
    iAnsTwo: "Storm",
    iAnsThree: "Colussus",
},
{
    question: "Omega Red is which X-men's enemy?",
    cAns: "Wolverine",
    iAnsOne: "Nightcrawler",
    iAnsTwo: "Beast",
    iAnsThree: "Angel",
},
{
    question: "Coming in skin to skin contact with which member of the X-men team can become fatal?",
    cAns: "Rogue",
    iAnsOne: "Wolverine",
    iAnsTwo: "Gambit",
    iAnsThree: "Iceman",
},
{
    question: "Magneto's bigest rival and friend?",
    cAns: "Professor X",
    iAnsOne: "Himself",
    iAnsTwo: "Scarlet Witch",
    iAnsThree: "Mystique",
},
{
    question: "Gambit is most known for throwing what at his enemies?",
    cAns: "Playng Cards",
    iAnsOne: "Paper Airplanes",
    iAnsTwo: "Quarters",
    iAnsThree: "Jawbreakers",
},
{
    question: "Which mutant traveled back in time to stop the assasination attempt?",
    cAns: "Bishop",
    iAnsOne: "Avalanche",
    iAnsTwo: "Psylocke",
    iAnsThree: "Banshee",
},
{
    question: "Which mutant from the X-men team was first to use the Phoenix Force?",
    cAns: "Jean Grey",
    iAnsOne: "Sunfire",
    iAnsTwo: "Cyclops",
    iAnsThree: "Emma Frost",
},
]

function startGame() {
    if (visState === "visible") {
        hide.dataset.visibility = "hidden";
        hide.style.visibility = "hidden";
    } else {
        return;
    }
    startTimer();
    askQuests();

};

function startTimer() {

  timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.innerHTML = `Time: ${secondsLeft} seconds`;
        if (secondsLeft <= 0) {
            gameOver();
        }

    }, 1000);
}

function askQuests() {
     random = Math.floor(Math.random() * (questionsArray.length));
     while (askedQuestions.includes(random) && askedQuestions.length !== questionsArray.length){
        random = Math.floor(Math.random() * (questionsArray.length)); 
      }
      if (askedQuestions.length === questionsArray.length){
         
      }else{
     askedQuestions.push(random);
     questions = questionsArray[random];
     assignedValues = Object.values(questions)
    let rando;
    questionIndex++;
    let newassignedValues = assignedValues.slice(1);
    rando = Math.floor(Math.random() * (newassignedValues.length));
    optVar1 = rando;
    rI1 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random() * (rI1.length));
    optVar2 = rI1[rando];
    rI2 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random() * (rI2.length));
    optVar3 = rI2[rando];
    rI3 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random() * (rI3.length));
    optVar4 = rI3[rando];;
    rI4 = newassignedValues.splice(rando, 1);

    opt1.innerHTML =  rI1;
    opt2.innerHTML =  rI2;
    opt3.innerHTML =  rI3;
    opt4.innerHTML =  rI4;
    askQuest.innerHTML = questions.question;
}

}

function gameOver() {
    let gameOver = document.querySelector('.gameOverCard');
    secondsLeft = 0;
    timeEl.innerHTML = `Time: ${secondsLeft} seconds`;
    gameOver.style.visibility = "visible";
    document.querySelector('#playCard').style.visibility = "hidden";
    clearInterval(timerInterval);
    let totalQuest = questionsArray.length;
    let sForm = document.querySelector('.congrats');
    let p = document.createElement("p");
    p.textContent = (`You scored: ${score + 1} out of ${totalQuest} `)
    p.setAttribute("class" , "totals");
    sForm.appendChild(p);
    
}

container.addEventListener("click", function (event){
 /**When a user makes a guess this wil determine if it was 
  correct or not*/


  /*see if line 194 can go below the other if statement */
    let el = event.target.innerText.trim();
    let correctAns = questions.cAns;
    if (questionsArray.length === questionIndex || secondsLeft <= 0 || askedQuestions.length === questionsArray.length){
        gameOver();
    }
// if (el === correctAns)
    if (el.includes(correctAns)) {
        score++;
        resp.innerHTML = "Correct!";
    } else {
        resp.innerHTML = "Wrong!"
        if (secondsLeft -5 <= 0){
            
        } else{
        secondsLeft = secondsLeft - 5;
    }
    }
    askQuests();
});
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
/* recording user info for the score.
 Adding to the localStorage
 sending user to results page. */
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    let userName = document.querySelector("#userName").value;
    let daScore = score;
    if (userName === "") {
        displayMessage("error", "userName cannot be blank");
    } else  {
        displayMessage("success", "Registered successfully");
        storeUser.push(userName);
        storeScore.push(daScore);
        //local storage is storing it to index 1 and 2 and not moving from there.
        localStorage.setItem("userName", JSON.stringify(storeUser));
        localStorage.setItem("score", JSON.stringify(storeScore));
        showWinners();

    }
});

function showWinners() {
    window.location.href = "results.html";
   

  }
  