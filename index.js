const readlineSync= require("readline-sync");
var userName= readlineSync.question("What is your name? ");
var score=0;
const highscore=3;
console.log("Welcome " + userName +".");

function compare(score, highscore){
  if (score> highscore){
    console.log("Congratulations! You Won! ");
  }else{
    console.log("Carry on, Jannie ");
  }
}

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  let a=userAnswer.toUpperCase();

  if (a===answer.toUpperCase()){
    console.log("Congratulations! You are right! ");
    score+=1;
    

  }else{
    console.log("You are wrong! ")
  }
  console.log("Your score is: ", score);
  compare(score, highscore);
  // console.log(a);
  console.log("--------------")
}



var questions=[
  questionZero={
    question:"Where do you live? ",
    answer: "Ank"
  },
  questionOne={
    question: "Where do you work? ",
    answer: "AIL",
  },
  questionTwo={
    question:"Who is your favourite superhero? ",
    answer: "Bob the Builder"
  },
  questionThree={
    question:"What is your favourite Marvel Movie? ",
    answer: "Iron Man"
  }
]

for (var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}






