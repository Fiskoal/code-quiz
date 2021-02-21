let header = $("#header");
let container = $("#content-container");
let mainButton = $("#main-btn");
let answerContainer = $("#answer-container");
let timeEl = $("#time");
let secondsLeft = 30;
let score = 0;
let gameFinished= false;
let a = $("#a");
let w = $("#w");
let scoreStore = {};
let scoreArray = [];
let stored = JSON.parse(localStorage.getItem("hiscores"));

let question1 = {
  h: "What is Javascript?",
  a1: "A powerful programming language",
  a2: "A delicious desert",
  a3: "A third party API for C++",
  a4: "The last 10 digits of pi",
}

let question2 = {
  h: "What is Javascript mostly used for?",
  a1: "To calculate differential equations",
  a2: "To make jquery have a reason to live",
  a3: "To make websites more interactive",
  a4: "Cookies",
}
 
let question3 = {
  h: "If Javascript had a class helper, what would their name be?",
  a1: "jquery",
  a2: "Mrs. Jones",
  a3: "JavaMomma",
  a4: "Javascript doesn't have an IEP",
}

let question4 = {
  h: "When setting time intervals, what units of time does Javascript use?",
  a1: "Minutes",
  a2: "Seconds",
  a3: "Milliseconds",
  a4: "Jseconds",
}

let question5 = {
  h: "All of the answer buttons are held within a <div> container. What are the buttons considered in relation to the <div>?",
  a1: "Parents",
  a2: "Siblings",
  a3: "Children",
  a4: "Charmander",
}

function startQuiz() {
  console.log("Well, the click works. It calls the function.");
  gameFinished = false;
  secondsLeft = 30;
  score = 0;
  $("#score-text").remove();
  $("#start-btn").remove();
  $("#start-text").remove();
  questionOne();
  setTime();
}

function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.text(secondsLeft);

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      score = 0;
      results();
    }
    if(gameFinished == true) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function questionOne() {
  header.text(question1.h);

  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 a").text(question1.a1);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question1.a2);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question1.a3);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question1.a4);

  $(".a").on("click", function(){
    score+=20
    questionTwo();
    return;
  })

  $(".w").on("click", function(){
    questionTwo();
    return secondsLeft-=5;
  })

  console.log(score);
}

function questionTwo() {
  header.text(question2.h);
  answerContainer.children().remove();
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question2.a1);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question2.a2);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 a").text(question2.a3);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question2.a4);

  $(".a").on("click", function(){
    score+=20
    questionThree();
    return;
  })

  $(".w").on("click", function(){
    questionThree();
    return secondsLeft-=5;
  })
  console.log(score);
}

function questionThree() {
  header.text(question3.h);
  answerContainer.children().remove();
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 a").text(question3.a1);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question3.a2);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question3.a3);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question3.a4);

  $(".a").on("click", function(){
    score+=20
    questionFour();
    return;
  })

  $(".w").on("click", function(){
    questionFour();
    return secondsLeft-=5;
  })
  console.log(score);
}

function questionFour() {
  header.text(question4.h);
  answerContainer.children().remove();
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question4.a1);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 a").text(question4.a2);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question4.a3);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question4.a4);

  $(".a").on("click", function(){
    score+=20
    questionFive();
    return;
  })

  $(".w").on("click", function(){
    questionFive();
    return secondsLeft-=5;
  })
  console.log(score);
}

function questionFive() {
  header.text(question5.h);
  answerContainer.children().remove();
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question5.a1);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question5.a2);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 a").text(question5.a3);
  $("<button>").appendTo(answerContainer).addClass("btn btn-primary m-1 w").text(question5.a4);

  $(".a").on("click", function(){
    score+=20
    results();
    return;
  })

  $(".w").on("click", function(){
    results();
  })
  console.log(score);
}

function results() {
  gameFinished = true;
  if (gameFinished === true){
  answerContainer.children().remove();
  header.text("Wow very pog");
  $("<p>").prependTo(container).attr("id", "score-text").addClass("text-center").text("Your final score: " + score);
  $("<button>").appendTo(answerContainer).attr("id", "start-btn").addClass("btn btn-primary m-1").text("Play Again");
  $("#start-btn").on("click", startQuiz);
  console.log(score);
  $("<input>").appendTo(container).attr("id", "hiscore-input").attr("placeholder", "Put your name here!").addClass("col-2 m-1");
  $("<button>").appendTo(container).attr("id", "hiscore-btn").addClass("btn btn-primary col-1 m-1").text("Submit Hi-score");

  let hiscoreName = $("#hiscore-input").val();

  $("#hiscore-btn").on("click", function() {
    scoreArray.push(score);
    localStorage.setItem("hiscores", JSON.stringify(scoreArray));
    stored = JSON.parse(localStorage.getItem("hiscores"));
    return hiscores();
  })
  }
}

function hiscores(){
  answerContainer.children().remove();
  container.children().remove();
  for(i=0; i<stored.length; i++) {
    let j = 0;
    $("<p>").appendTo(container).text(stored[j]);
    j++
  };
}

function init () {
  if(localStorage.getItem("hiscores") !== null) {
    localStorage.setItem("hiscores", JSON.stringify(stored));
    scoreArray.push(stored);
  }

  header.text("Coding Quiz Challenge");
  $("<p>").prependTo(container).attr("id", "start-text").addClass("text-center").text("this is some text");
  $("<button>").appendTo(mainButton).attr("id", "start-btn").addClass("btn btn-primary col-1").text("Start Quiz");
}

$(mainButton).on("click", "#start-btn", startQuiz);
$("#view-scores").on("click", hiscores);

init();