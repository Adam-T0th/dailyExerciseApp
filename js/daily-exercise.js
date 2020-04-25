/*
Daily exercise program; according to the day of the week it displays the corresponding exercise
*/

function displayVals() {
    var dayValues = $("#days").val();

    if(dayValues == "Monday") {
      $( "p" ).html(exercisesArray[0] + "<br>"); //display the corresponding exercise string
      $("h2").css("color", "white");
      $("p").css("color", "white");
      $("body").css({
        "background-image": "url('../img/man-exercising-leg.jpg')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Tuesday") {
      $( "p" ).html(exercisesArray[1]);
      $("h2").css("color", "white");
      $("p").css("color", "white");
      $("body").css({
        "background-image": "url('../img/man-doing-abs.jpg')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Wednesday") {
      $( "p" ).html(exercisesArray[2]);
      $("h2").css("color", "white");
      $("p").css("color", "white");
      $("body").css({
        "background-image": "url('../img/man-doing-arms.jpg')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Thursday") {
      $( "p" ).html(exercisesArray[3]);
      $("h2").css("color", "white");
      $("p").css("color", "white");
      $("body").css({
        "background-image": "url('../img/bird-dog-exercise.jpg')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Friday") {
      $( "p" ).html(exercisesArray[4]);
      $("h2").css("color", "white");
      $("p").css("color", "white");
      $("body").css({
        "background-image": "url('../img/bench-press.jpg')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "") {
      $( "p" ).html("<p>What day of the week is it?</p>");
    }
}

$( "select" ).change( displayVals );
displayVals();

//store each exercise in a string variable
var exercisesArray = ["Today is leg day.", "Today is abs.", "Today is arms.", "Today is lower-back day.", "Today is chest exercise day."];
