//need variables for creating ordered list and list elements so that you can append them to the html and set their content
//style tier using same logic as class activity 4.10
//also need onclick to start timer and display first question: includes calling list item variables and setting their text for choices, list items need to be buttons
//create logic for continuing to next quiz item but deducting time if answered wrong
var startButton = document.querySelector("#start-button"); //this variable lets me select the start button
var timerEl = document.getElementById("timer"); //this variable lets me select the timer in the header
var timeLeft= 75 //amount of time in seconds on timer when it starts

startButton.addEventListener("click", function() {
    // add function for timer to start, first question to appear
    var timerInterval = setInterval(function() {
        timeLeft--; //decrements the starting value of time left by one every time the time interval happens
        timerEl.textContent = "Time: " + timeLeft; //replaces the text content of the timer element on the screen with "time: X", with X being number of seconds left on timeLeft
    
        if(timeLeft === 0) {
          clearInterval(timerInterval); //clearInterval stops the timer interval when time left reaches 0 seconds
        }
      }, 1000); //1000 refers to interval or 1000 miliseconds
    })
//create and append the new html for the question and answer choices for question 1