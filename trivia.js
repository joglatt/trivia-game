//Questions constructor
function questions(quest, a1, a2, a3, a4, correct) {
  this.quest = quest;
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.a4 = a4;
  this.correct = correct;
}
//questions
var one = new questions(
  "Where is A located in the alphabet?",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "1st"
);
var two = new questions(
  "Where is B located in the alphabet?",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "2nd"
);
var three = new questions(
  "Where is C located in the alphabet?",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "3rd"
);
var four = new questions(
  "Where is D located in the alphabet?",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "4th"
);
//array of questions
var questionArray = [one, two, three, four];
//time value
var number = 10;
//questions guessed correctly
var score = 0;
//questions guessed incorrectly
var wrong = 0;
//timer variable
var intervalId;
//user guess
var guess;
//correct answer
var correct;
//question currently displayed
var displayQuestion;
//used questions
var qCount = 0;
//guess and score logic
function click() {
  $(".answer").click(function () {
    guess = $(this).text();
    console.log(guess);
    if (guess == correct) {
      clearInterval(intervalId);
      score++;
      console.log(score);
      qCount++;
      console.log("correct");
      smart();
      setTimeout(display, 3000);
      setTimeout(clock, 3000);

    } else if (guess != correct) {
      clearInterval(intervalId);
      wrong++;
      qCount++;
      console.log("wrong");
      stupid();
      setTimeout(display, 3000);
      setTimeout(clock, 3000);


    }
  });
}

function stupid() {
 

  $(".jumbotron").html(
    "<h1>The Correct answer was " + displayQuestion.correct + "<h1>"
  );
  $("#response").prepend(
    $("<img>", { id: "stupid", src: "assets/images/stupid-idiot.jpg" })
  );
  $("#timer").hide();
  $(".answers").hide();
}
function smart() {
  

  $(".jumbotron").html("<h1>Correct<h1>");
  $("#response").prepend(
    $("<img>", { id: "stupid", src: "assets/images/smart.jpg" })
  );
  $("#timer").hide();
  $(".answers").hide();
}

//random questions
// questionArray[Math.floor(Math.random() * questionArray.length)];
// if (usedQuestions.indexOf(displayQuestion) === -1) {
//   variables();}

//pop off last question
// displayQuestion = questionArray[questionArray.length - 1];
// variables();
// questionArray.splice((questionArray.length - 1), 1);

function display() {
  //loops through questions and takes the index equal to the count
  for (i = 0; i < questionArray.length; i++) {
    displayQuestion = questionArray[qCount];
    $("#play-again").hide();
    $("#response").empty();
    $("#timer").show();
    $(".answers").show();
  }
  //if count is equal to the length of the array, end game
  if (qCount === questionArray.length) {
    clearInterval(intervalId);
    $("#timer").hide();
    $(".answers").hide();
    $("#play-again").show();
    $(".jumbotron").html(
      "<h1>You answered " + score + " questions correctly<h1>");
    $("#timer").prepend("<h2>You answered " + wrong + " incorrectly.<h2>");
    $("#play-again").click(function () {
      score = 0;
      qCount = 0;
      wrong = 0;
      display();
      clock();
    });
  } else {
    variables();
  }
}
//pairs variables to html elements
function variables() {
  $(".jumbotron").html("<h1>" + displayQuestion.quest + "<h1>");
  $("#answer-1").html("<button>" + displayQuestion.a1 + "</button>");
  $("#answer-2").html("<button>" + displayQuestion.a2 + "</button>");
  $("#answer-3").html("<button>" + displayQuestion.a3 + "</button>");
  $("#answer-4").html("<button>" + displayQuestion.a4 + "</button>");
  correct = displayQuestion.correct;
}
//sets and displays clock
function clock() {
  number = 7;
  clearInterval(intervalId);
  intervalId = setInterval(countDown, 1000);
  $("#timer").html("<h2>Time: " + number + "</h2>");
}
//lowers timer
function countDown() {
  number--;
  $("#timer").html("<h2 >Time: " + number + "</h2>");
  //resets timer
  if (number === 0) { 
    qCount++;
    wrong++;
    stupid();
    
    setTimeout(display, 3000);
    setTimeout(clock, 3000);
  
  }
}



$(document).ready(function () {
  // prompt("Play the game dummy.")
  clock();
  display();
  click();
});
