// Get a reference to the <path>
var path = document.querySelector('#path');

// Get length of path... ~577px in this demo
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;
console.log(pathLength);

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', function(e) {
  // What % down is it?
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  if (scrollPercentage > 1) {
    scrollPercentage = 1;
  }
  // Length to offset the dashes
  var drawLength = (pathLength / 2) * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
});
