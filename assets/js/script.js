let startBtn = document.querySelector('.startBtn');
let askedQuestions = [];
let hide = document.querySelector('.hideCard');
let visState = hide.getAttribute("data-visibility");
let timeEl = document.querySelector("#cdTimer");
let secondsLeft = 60;
startBtn.addEventListener("click", startGame);
let askQuest = document.querySelector('#daQuestion');
let opt1 = document.querySelector('#opt1');
let opt2 = document.querySelector('#opt2');
let opt3 = document.querySelector('#opt3');
let opt4 = document.querySelector('#opt4');
let resp = document.querySelector('.response');
var container = document.querySelector(".choices");

var submitButton = document.querySelector("#submitName");
var msgDiv = document.querySelector("#msg");
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

let questionsArray = [{
    question: "What color is Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 2Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 3Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 4Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 5Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 6Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 7Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 8Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 9Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
},
{
    question: "What color is 10Blue?",
    cAns: "It's Blue",
    iAnsOne: "It's Green",
    iAnsTwo: "It's Yellow",
    iAnsThree: "It's Orange",
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
            console.log ("Timer Called it");
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
    console.log(newassignedValues);
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

    opt1.innerHTML = `1: ${rI1}`;
    opt2.innerHTML = `2: ${rI2}`;
    opt3.innerHTML = `3: ${rI3}`;
    opt4.innerHTML = `4: ${rI4}`;
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
    console.log(sForm);
    let p = document.createElement("p");
    p.textContent = (`You scored: ${score} out of ${totalQuest} `)
    p.setAttribute("class" , "totals");
    sForm.appendChild(p);
    
}

container.addEventListener("click", function (event){
 /**When a user makes a guess this wil determine if it was 
  correct or not*/
    let el = event.target.innerText.trim();
    let correctAns = questions.cAns;
    if (questionsArray.length === questionIndex || secondsLeft <= 0 || askedQuestions.length === questionsArray.length){
        console.log("array called it")
        gameOver();
    }
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
    
    var userName = document.querySelector("#userName").value;
    
    if (userName === "") {
        displayMessage("error", "userName cannot be blank");
    } else  {
        displayMessage("success", "Registered successfully");
       
        localStorage.setItem("userName", JSON.stringify(userName));
        localStorage.setItem("score", JSON.stringify(score));
        showWinners();

    }
});

function showWinners() {
    window.location.href = "results.html";
    
  

  }
  