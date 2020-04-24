/*
Daily exercise program; according to the day of the week it displays the corresponding exercise
*/
$(document).ready(function(){
  $("#").click(function(){
  });
});

function displayVals() {
    var dayValues = $("#days").val();

    if(dayValues == "Monday") {
      $( "p" ).html(exercisesArray[0] + "<br>"); //display the corresponding exercise string
    } else if(dayValues == "Tuesday") {
      $( "p" ).html(exercisesArray[1]);
    } else if(dayValues == "Wednesday") {
      $( "p" ).html(exercisesArray[2]);
    } else if(dayValues == "Thursday") {
      $( "p" ).html(exercisesArray[3]);
    } else if(dayValues == "Friday") {
      $( "p" ).html(exercisesArray[4]);
    } else if(dayValues == "") {
      $( "p" ).html("<p>What day of the week is it?</p>"); //default behavior; not working yet
    }
}

$( "select" ).change( displayVals );
displayVals();

//store each exercise in a string variable
var exercisesArray = ["Today is leg day.", "Today is abs.", "Today is arms.", "Today is lower-back day.", "Today is chest exercise day."];
