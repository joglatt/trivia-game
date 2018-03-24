//Questions constructor function
function questions(quest, a1, a2, a3, a4, correct) {
    this.quest = quest;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.correct = correct;
}
//questions
var one = new questions("Where is A located in the alphabet?", "1st", "2nd", "3rd", "4th", "1st");
var two = new questions("Where is B located in the alphabet?", "1st", "2nd", "3rd", "4th", "2nd");
var three = new questions("Where is C located in the alphabet?", "1st", "2nd", "3rd", "4th", "3rd");
var four = new questions("Where is D located in the alphabet?", "1st", "2nd", "3rd", "4th", "4th");
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

function game() {
    number = 10
    clearInterval(intervalId);
    intervalId = setInterval(deincrement, 1000);
    $("#timer").html("<h2>Time: " + number + "</h2>");
    //loops through q/a array and displays
    for (i = 0; i < questionArray.length; i++) {
        $(".jumbotron").html("<h1>" + questionArray[i].quest + "<h1>");
        $("#answer-1").html(questionArray[i].a1);
        $("#answer-2").html(questionArray[i].a2);
        $("#answer-3").html(questionArray[i].a3);
        $("#answer-4").html(questionArray[i].a4);
    }
}
//lowers timer
function deincrement() {
    number--;
    if (number < 0) {
        game();
    }
}

$(document).ready(function () {
    prompt("Play the game stupid.")
    game();
    $(".answers").on("click", ".answer", function () {
        guess = $(this).text();
        if (guess === ) {
            score++;
            game();
        }
    });

});