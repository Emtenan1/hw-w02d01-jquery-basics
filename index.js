


// turn on stop function 
function turnOnStopLight() {

   $('#stopLight').css('background-color','red');
   $('#slowLight').css('background-color','Black');
   $('#goLight').css('background-color','Black');
   // change background color of stop light to red
    // changes background color of green and yellow to black
}

// turn on slow function
function turnOnSlowLight() { 
  $('#slowLight').css('background-color','yellow');
  $('#stopLight').css('background-color','Black');
  $('#goLight').css('background-color','Black');
  // change background color of slow light to yellow
  // changes background color of red and green to black
}

// turn on go function
function turnOnGoLight() {
  $('#goLight').css('background-color','green');
  $('#stopLight').css('background-color','Black');
  $('#slowLight').css('background-color','Black');
    // change background color of go light to green
    // changes background color of red and yellow to black
}

// set stop light click event
$('#stopButton').on('click',turnOnStopLight);

// set slow light click event
$('#slowButton').on('click',turnOnSlowLight);
// set go light click event
$('#goButton').on('click',turnOnGoLight);
