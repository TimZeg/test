document.addEventListener('DOMContentLoaded', function() {
  var numberElements = document.getElementsByClassName('number');

  for (var i = 0; i < numberElements.length; i++) {
    numberElements[i].addEventListener('click', function() {
      if(this.style.backgroundColor != 'rgb(255, 80, 80)'){
        this.style.backgroundColor = 'rgb(255, 80, 80)';
      }
      else {
        this.style.backgroundColor = 'rgb(242, 242, 242)';
      }
    });
  }
});

var timerElement = document.getElementById('timer');
var seconds = 0;
var timerInterval;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000); // Update the timer every second (1000 milliseconds)
}

function updateTimer() {
  seconds++;
  timerElement.textContent = formatTime(seconds); // Update the timer display with formatted time

  // Check if the background color is red (even number condition)
  var numberElements = document.getElementsByClassName('number');
  var isEvenNumber = Array.from(numberElements).every(function(element) {
    return element.style.backgroundColor === 'rgb(255, 80, 80)';
  });

  if (isEvenNumber) {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(timerInterval); // Clear the interval to stop the timer
}

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  return minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
}

// Start the timer
startTimer();
