let startBtn = document.querySelector('.startBtn');
let wrongAnsArray = [];
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
iAnsThree: "It's Orange",},
{
question: "What color is 3Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 4Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 5Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 6Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 7Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 8Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 9Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
{
question: "What color is 10Blue?",
cAns: "It's Blue",
iAnsOne: "It's Green",
iAnsTwo: "It's Yellow",
iAnsThree: "It's Orange",},
]

function startGame(){ 
    if (visState === "visible"){
       hide.dataset.visibility = "hidden";
       hide.style.visibility ="hidden";
    }else {
        return;
    }
    startTimer();
    askQuests();        

};

function startTimer(){

    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.innerHTML = `Time: ${secondsLeft} seconds`;
            if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          gameOver();
        }
    
      }, 1000);
}

function askQuests (){
    let random = Math.floor(Math.random()*(questionsArray.length));
    let questions = questionsArray[random];
    let assignedValues = Object.values(questions)
    console.log(assignedValues);
    assignedValues = assignedValues.slice(1);
    console.log(assignedValues);
    for (let i = 0; i < 4; i++) {

    }
    let options = Math.floor(Math.random()*3);
    let value1 = options ++;
    
    askQuest.innerHTML = questions.question;
    opt1.innerHTML = questions.cAns;
    opt2.innerHTML = questions.iAnsOne;
    opt3.innerHTML = questions.iAnsTwo;
    opt4.innerHTML = questions.iAnsThree;
    resp.innerHTML = "Wrong!";
    

}

function gameOver () {


}

