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

    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.innerHTML = `Time: ${secondsLeft} seconds`;
        if (secondsLeft <= 0) {
            
            // Stops execution of action at set interval
            clearInterval(timerInterval);

            gameOver();
        }

    }, 1000);
}

function askQuests() {
     random = Math.floor(Math.random() * (questionsArray.length));
     while (askedQuestions.includes(random)){
        random = Math.floor(Math.random() * (questionsArray.length)); 
 
     }
     askedQuestions.push(random);
     questions = questionsArray[random];
     assignedValues = Object.values(questions)
    let rando;
    questionIndex++;
    console.log(assignedValues);
    let newassignedValues = assignedValues.slice(1);
    console.log(newassignedValues);
    rando = Math.floor(Math.random() * (newassignedValues.length));
    console.log(rando);
    optVar1 = rando;
    rI1 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random() * (rI1.length));
    console.log(rando);
    optVar2 = rI1[rando];
    rI2 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random() * (rI2.length));
    console.log(rando);
    optVar3 = rI2[rando];
    rI3 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random() * (rI3.length));
    console.log(rando);
    optVar4 = rI3[rando];;
    rI4 = newassignedValues.splice(rando, 1);

    opt1.innerHTML = `1: ${rI1}`;
    opt2.innerHTML = `2: ${rI2}`;
    opt3.innerHTML = `3: ${rI3}`;
    opt4.innerHTML = `4: ${rI4}`;
    askQuest.innerHTML = questions.question;
    
    /*  
    let index = el.getAttribute("data-number");
    let state = el.getAttribute("data-state");
  
  
        let index = el.getAttribute("data-number");
        let state = el.getAttribute("data-state");
        // el.dataset.state is the same thing
        console.log (index);
        console.log(el);
      // data.state.hidden;
      //data.state.visible;
      
        if (state === "hidden"){
          el.dataset.state = "visible";
          el.innerHTML = index;
        } else {
          el.dataset.state = "hidden";
          el.innerHTML = "";
        }
        // TODO: Complete function
        
      });  */



}

function gameOver() {
    let gameOver = document.querySelector('.gameOverCard');
    gameOver.style.visibility = "visible";
    console.log("GameOver");

}

container.addEventListener("click", function (event){
    // resp.innerHTML = "Wrong!";
    /**When a user makes a guess this wil determine if it wsa correct or not*/
    let el = event.target.innerText.trim();
    let correctAns = questions.cAns;
    console.log(el);
    console.log(correctAns);
    if (questionsArray.length === questionIndex){
        gameOver();
    }
    if (el.includes(correctAns)) {
        console.log("Event:" + el);
        score++;
        resp.innerHTML = "Correct!";
    } else {
        resp.innerHTML = "Wrong!"
        if (secondsLeft -5 <= 0){
            gameOver();
        } else{
        secondsLeft = secondsLeft - 5;
    }
    }
    askQuests();
});
