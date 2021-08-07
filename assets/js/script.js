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
/* need tocheck to see if the index was used already when it's 
randomly choosen */   
        let random = Math.floor(Math.random()*(questionsArray.length));
        let questions = questionsArray[random];
        let assignedValues = Object.values(questions)

        let i = 0;
        let rando; 
    console.log(assignedValues);
    let newassignedValues = assignedValues.slice(1);
    console.log(newassignedValues);
    rando = Math.floor(Math.random()*(newassignedValues.length));
    console.log(rando);
    optVar1 = rando;    
    rI1 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random()*(rI1.length));
    console.log(rando);
    optVar2 = rI1[rando];    
    rI2 = newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random()*(rI2.length));
    console.log(rando);
    optVar3 = rI2[rando];    
    rI3 =newassignedValues.splice(rando, 1);
    rando = Math.floor(Math.random()*(rI3.length));
    console.log(rando);
    optVar4 = rI3[rando];;    
    rI4 = newassignedValues.splice(rando, 1);


// while (i < 5){   
//     if (rando === rI1 || rando === rI2 || rando === rI3 || optVar4 === 0){
//         if (rando === rI1 || rando === rI2 || optVar3 === 0){
//             if (rando === rI1 && rI2){
//                 if (rando = rI1 || opt2Var === 0){
//                     optVar2 = rando;
//                     i++;
//                 }else{
//                 optVar1 = rando;
//                 i++  }

        
//                  } else {
//              optVar3= rando;
//              i++

//          }
                        
//          } else{
//             optVar4= rando;
//             i++
            
//         }            
        
//     } else{ }
//     console.log(i);
// }        
        opt1.innerHTML = rI1;
        opt2.innerHTML = rI2;
        opt3.innerHTML = rI3;
        opt4.innerHTML = rI4;
        askQuest.innerHTML = questions.question;
        resp.innerHTML = "Wrong!";
    // if (){
    //     rI1 = random;
    //     Opt1Var = 1;
    //     console.log(i);
    //     i++;
    // } else if (opt2Var === 0){
    //     rI2 = rando;
    //     Opt2Var = 1;
    //     console.log(i);
    //     i++;
    // } else if (opt3Var === 0){
    //     rI3 = rando
    //     opt3Var = 1;
    //     console.log(i);
    //     i++;
    // }else if(opt4Var === 0){ 
    //     rI4 = rando;
    //     opt4Var = 1;
    //     console.log(i);
    //     i++;
    // } else {
    //     console.log(i);
    // }     
    
 
//     function randomIndexes () {
// //randomly chooses an index
//     //     rando = Math.floor(Math.random()*(newassignedValues.length));
//     //     if (rI1 === "undefined"){
//     //         rI1 = rando;
//     //     }else if (rI2 === "undefined"){
//     //         rI2 = rando;
//     //     } else if ((rI3 === "undefined"){
//     //         rI3 = random;
//     //     } else if(rI4 === "undefined"){
//     //         rI3 = random;
//     //     }
       
//     // }


// }
    }    
    // let options = Math.floor(Math.random()*3);
    // let value1 = options ++;
    
    
    
        


function gameOver () {


}

