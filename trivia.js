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
var five = new questions(
  "Where is E located in the alphabet?",
  "3rd",
  "4th",
  "5th",
  "6th",
  "5th"
);
var six = new questions(
  "Where is F located in the alphabet?",
  "3rd",
  "4th",
  "5th",
  "6th",
  "6th"
);
//array of questions

var questionArray = [one, two, three, four, five, six];

//time value
var number;
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
  $(".answer").click(function() {
    guess = $(this).text();
    console.log(guess);
    if (guess == correct) {
      clearInterval(intervalId);
      score++;
      console.log(score);
      qCount++;
      console.log("correct");
      smart();
      // setTimeout(display, 4000);
      // setTimeout(clock, 4000);
    } else if (guess != correct) {
      clearInterval(intervalId);
      wrong++;
      qCount++;
      console.log("wrong");
      stupid();
      // setTimeout(display, 4000);
      // setTimeout(clock, 4000);
    }
  });
}
//displays message on incorrect answer or time out
function stupid() {
  $(".jumbotron").html(
    "<h1>The Correct answer was " + displayQuestion.correct + "<h1>"
  );
  $("#response").prepend(
    $("<img>", {
      alt: "stupid",
      id: "stupid",
      src: "assets/images/stupid-idiot.jpg"
    })
  );
  $("#timer").hide();
  $(".answers").hide();
  number = 7;
  setTimeout(display, 4000);
  setTimeout(clock, 4000);
}
//displays message on correct answer
function smart() {
  $(".jumbotron").html("<h1>Correct<h1>");
  $("#response").prepend(
    $("<img>", { alt: "smart", id: "smart", src: "assets/images/smart.jpg" })
  );
  $("#timer").hide();
  $(".answers").hide();
  number = 7;
  setTimeout(display, 4000);
  setTimeout(clock, 4000);
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
    $(".answers").show();
    $("#play-again").show();
    $("#play-again").hide();
    $("#response").empty();
    $("#timer").show();
    $(".answers").show();
  }
  //if count is equal to the length of the array, end game
  if (qCount === questionArray.length) {
    clearInterval(intervalId);
    $("#timer").css("color", "darkgreen");
    $("#timer").hide();
    $(".answers").hide();

    $(".jumbotron").html(
      "<h1>You answered " + score + " questions correctly<h1>"
    );
    //plays message for good bad or neutral outcome
    if (score < wrong) {
      $("#response").prepend(
        $("<img>", {
          alt: "end",
          id: "end",
          src: "assets/images/end-game1.gif"
        })
      );
    } else if (score > wrong) {
      $("#response").prepend(
        $("<img>", {
          alt: "end",
          id: "end",
          src: "assets/images/end-game2.gif"
        })
      );
    } else if (score === wrong) {
      $("#response").prepend(
        $("<img>", {
          alt: "end",
          id: "end",
          src: "assets/images/end-game3.gif"
        })
      );
    }
    $("#play-again").show();
    $("#restart").show();
    $("#play-again").click(function() {
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
  $("#answer-1").html("<div class=answer>" + displayQuestion.a1 + "</div>");
  $("#answer-2").html("<div class=answer>" + displayQuestion.a2 + "</div>");
  $("#answer-3").html("<div class=answer>" + displayQuestion.a3 + "</div>");
  $("#answer-4").html("<div class=answer>" + displayQuestion.a4 + "</div>");
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
  if (number === 7) {
    $("#timer").css("color", "darkgreen");
  } else if (number === 6) {
    $("#timer").css("color", "forestgreen");
  } else if (number === 5) {
    $("#timer").css("color", "green");
  } else if (number === 4) {
    $("#timer").css("color", "orange");
  } else if (number === 3) {
    $("#timer").css("color", "#ea7a02");
  } else if (number === 2) {
    $("#timer").css("color", "#ea4b02");
  } else if (number === 1) {
    $("#timer").css("color", "#ea1102");
  }

  number--;
  $("#timer").html("<h2 >Time: " + number + "</h2>");
  //resets timer
  if (number === 0) {
    clearInterval(intervalId);
    wrong++;
    qCount++;
    $("#timer").css("color", "darkgreen");
    stupid();
  }
}

//start game
function start() {
  $("#start").click(function() {
    $("#start-con").hide();
    display();
    clock();
    click();
  });
}
$(document).ready(function() {
  start();
});
