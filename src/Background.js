var delay = 1000; // 1000ms = 1 second

// Generate a random RGB color
function rgb(){
  // Use Math.random to generate a random number between 255 and 1
  // Math.floor rounds the number to a whole.
  // 45.95 becomes 45
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  // .join() will join an array of items into a string with a comma between each value 
  // [10, 52, 100] becomes 10,52,100
  // End result returns the string: rgb(10,52,100)
  return "rgb(" + [r,g,b].join(',') + ")";
}

// The pulse function, Called after each interval
function pulse(){
  // .each() loops through each class element and runs a function
  $(".box").each(function(){
    // $(this) can be used to select the current element in the .each() loop
    // We can now call the rgb() function and return a random RGB color as a string
    var color = rgb();
    $(this).css("background-color", color );
    // Set the background color and text
    $(this).text(color);
  });
}

// Fire the pulse() function every 1000ms
var fire = setInterval(pulse, delay);
// You can clear an interval by calling  clearInterval(fire)