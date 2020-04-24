/*
Daily exercise program; according to the day of the week it displays the corresponding exercise
*/

/*
<select id="single">
  <option>Single</option>
  <option>Single2</option>
</select>

<select id="multiple" multiple="multiple">
  <option selected="selected">Multiple</option>
  <option>Multiple2</option>
  <option selected="selected">Multiple3</option>
</select>
*/

function displayVals() {
  var singleValues = $( "#days" ).val();
  // When using jQuery 3:
  // var multipleValues = $( "#multiple" ).val();
  $( "p" ).html( "<b>Today is:</b> " + singleValues);
}

$( "select" ).change( displayVals );
displayVals();

//store each exercise in a string variable
var exercisesArray = ["Today is leg day.", "Today is abs.", "Today is arms.", "Today is lower-back day.", "Today is chest exercise day."];

// function exerciseSchedule(inputValue) {
//   //use an if statement to test for the day of the week
//   if(inputValue == "Monday") {
//     console.log(inputValue[0]); //display the corresponding exercise string
//   } else if(inputValue == "Tuesday") {
//     console.log(exercisesArray[1]); //display the corresponding exercise string
//   } else if(inputValue == "Wednesday") {
//     console.log(exercisesArray[2]); //display the corresponding exercise string
//   } else if(inputValue == "Thursday") {
//     console.log(exercisesArray[3]); //display the corresponding exercise string
//   } else if(inputValue == "Friday") {
//     console.log(exercisesArray[4]); //display the corresponding exercise string
//   } else {
//     console.log("Take a day off, mate. You've earned it.");
//   }
// }
// $(document).ready(function(){
//   $("select").click(function(){
//     $("p").html("Hello <b>world!</b>");
//   });
// }); //working through localHost, when cross-origin isn't checked



//document.getElementById("paragraph").innerHTML=getHtml();
//exerciseSchedule(inputValue);
