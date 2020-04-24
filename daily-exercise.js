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
    //function exerciseSchedule(singleValues) {
    //use an if statement to test for the day of the week
    if(singleValues == "Monday") {
      $( "p" ).html(exercisesArray[0] + "<br>"); //display the corresponding exercise string
    } else if(singleValues == "Tuesday") {
      $( "p" ).html(exercisesArray[1]);
    } else if(singleValues == "Wednesday") {
      $( "p" ).html(exercisesArray[2]);
    } else if(singleValues == "Thursday") {
      $( "p" ).html(exercisesArray[3]);
    } else if(singleValues == "Friday") {
      $( "p" ).html(exercisesArray[4]);
    }
    // in case it gets changed from an option to an input form style
    // else {
    //   $( "p" ).html("Take a day off, mate. You've earned it.");
    //
    // }
  //}
  // $( "p" ).html( "<b>Today is:</b> " + exercisesArray[]);
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
//     console.log(exercisesArray[1]);
//   } else if(inputValue == "Wednesday") {
//     console.log(exercisesArray[2]);
//   } else if(inputValue == "Thursday") {
//     console.log(exercisesArray[3]);
//   } else if(inputValue == "Friday") {
//     console.log(exercisesArray[4]);
//   } else {
//     console.log("Take a day off, mate. You've earned it.");
//   }
// }
//exerciseSchedule(inputValue);
