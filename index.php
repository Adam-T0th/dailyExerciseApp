<?php
/*
Daily exercise program; according to the day of the week it displays the corresponding exercise
*/

function exerciseSchedule($_dayOfTheWeek) {
  //store each exercise in a string variable
  $_exercisesArray = array("Today is leg day. \n", "Today is abs. \n", "Today is arms. \n", "Today is lower-back day. \n", "Today is chest exercise day. \n");

  //use an if statement to test for the day of the week
  if($_dayOfTheWeek == "Monday") {
    echo $_exercisesArray[0] . "\n"; //display the corresponding exercise string
  } elseif($_dayOfTheWeek == "Tuesday") {
    echo $_exercisesArray[1] . "\n"; //display the corresponding exercise string
  } elseif($_dayOfTheWeek == "Wednesday") {
    echo $_exercisesArray[2] . "\n"; //display the corresponding exercise string
  } elseif($_dayOfTheWeek == "Thursday") {
    echo $_exercisesArray[3] . "\n"; //display the corresponding exercise string
  } elseif($_dayOfTheWeek == "Friday") {
    echo $_exercisesArray[4] . "\n"; //display the corresponding exercise string
  } else {
    echo "Take a day off, mate. You've earned it. \n";
  }
}

exerciseSchedule("Monday");

?>
