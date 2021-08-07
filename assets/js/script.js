let startBtn = document.querySelector('.startBtn');
let questionsArray = [];
let ansersArray = [];
let wrongAnsArray = [];
let hide = document.querySelector('.hideCard');
let visState = hide.getAttribute("data-visibility");
let timeEl = document.querySelector("#cdTimer");
let secondsLeft = 60;
startBtn.addEventListener("click", startGame);


function startGame(){ 
    if (visState === "visible"){
       hide.dataset.visState = "hidden";
       hide.style.visibility ="hidden";
    }else {
        return;
    }
    startTimer();

};

function startTimer(){

    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.innerHTML = "Time: ${secondsLeft}";
    console.log(timeEl);
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          sendMessage();
        }
    
      }, 1000);
}

