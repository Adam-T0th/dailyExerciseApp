/*
Daily exercise program; according to the day of the week it displays the corresponding exercise
*/

function displayVals() {
    var dayValues = $("#days").val();

    if(dayValues == "Monday") {
      $( "p" ).html("<h2>" + exercisesArray[0] + "</h2>"+ "<br>"); //display the corresponding exercise string
      $("#request-header").remove(); //remove the "Tell me what day it is" header
      $("h2").css("color", "white"); //style the new header with the exercise info
      //$("p").css("color", "white");
      $("body").css({
        "background-image": "url('img/man-exercising-leg.JPG')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Tuesday") {
      $( "p" ).html("<h2>" + exercisesArray[1] + "</h2>"+ "<br>");
      $("#request-header").remove();
      $("h2").css("color", "white");
      $("body").css({
        "background-image": "url('img/man-doing-abs.JPG')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Wednesday") {
      $( "p" ).html("<h2>" + exercisesArray[2] + "</h2>"+ "<br>");
      $("#request-header").remove();
      $("h2").css("color", "white");
      $("body").css({
        "background-image": "url('img/man-doing-arms.JPG')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Thursday") {
      $( "p" ).html("<h2>" + exercisesArray[3] + "</h2>"+ "<br>");
      $("#request-header").remove();
      $("h2").css("color", "white");
      $("body").css({
        "background-image": "url('img/bird-dog-exercise.JPG')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-size": "cover"
    });
    } else if(dayValues == "Friday") {
      $( "p" ).html("<h2>" + exercisesArray[4] + "</h2>"+ "<br>");
      $("#request-header").remove();
      $("h2").css("color", "white");
      $("body").css({
        "background-image": "url('img/bench-press.JPG')",
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
