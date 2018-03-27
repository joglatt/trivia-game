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
  "If I had a hammer?",
  "I'd Hammer in the Morning",
  "I'd Hammer in the Evening",
  "I'd Hammer out Danger",
  "I'd Hammer out Warning",
  "I'd Hammer in the Evening"
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
//timer variable
var intervalId;
//user guess
var guess;
//correct answer
var correct;
//question currently dispalyed
var displayQuestion;
//used questions
var usedQuestions = [];
//guess and score logic
function click() {
  $(".answer").click(function() {
    guess = $(this).text();
    console.log(guess);
    if (guess == correct) {
      score++;
      console.log(score);
      console.log("correct");
      clock();
      display();
    } else if (guess != correct) {
      console.log("wrong");
      alert("The Correct Answer was: " + displayQuestion.correct );
      display();
      clock();
    }
  });
}

function display() {
  displayQuestion =
    questionArray[Math.floor(Math.random() * questionArray.length)];
  if (usedQuestions.indexOf(displayQuestion) === -1) {
    variables();
    usedQuestions.push(displayQuestion);
    
    if (usedQuestions.length === questionArray.length) {
      clearInterval(intervalId);
      alert("Game Over dummy");
      $(".jumbotron").html("<h1>You answered " + score + " questions correctly<h1>");
      $(".answers").html('<img src="assets/images/stupid-idiot.jpg" />');
    }
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
  number = 5;
  clearInterval(intervalId);
  intervalId = setInterval(countDown, 1000);
  $("#timer").html("<h2>Time: " + number + "</h2>");
}
//lowers timer
function countDown() {
  number--;
  $("#timer").html("<h2>Time: " + number + "</h2>");
  //resets timer
  if (number < 0) {
    clock();
    display();
  }
}

$(document).ready(function() {
  // prompt("Play the game dummy.")
  clock();
  display();
  click();
});
