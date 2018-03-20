$(document).ready(function() {
// Select color input
const color = $("#colorPicker");
// Select size input
const height = $("#inputHeight");
const width = $("#inputWidth");
const theGrid = $("#pixelCanvas");
// function to create Grid
function makeGrid() {
  for (r = 0; r < height.val(); r++) {
    theGrid.append("<tr></tr>");
    for (c = 0; c < width.val(); c++) {
      theGrid
        .children().last().append("<td></td>");
    }
  }
};

// default grid size
$(document).ready(function() {
  for (r = 0; r < 20; r++) {
    theGrid.append("<tr></tr>");
    for (c = 0; c < 20; c++) {
      theGrid
        .children().last().append("<td></td>");
    }
  }
})

// When user click submit make the Canvas
$("#submitButton").click(function(event) {
  theGrid.empty();
  event.preventDefault();
  makeGrid();
});

//Clear the Canvas
$("#clearBtn").click(function(){
        event.preventDefault();
        $("td").css('background-color', '');
    });

// Color the cells
function colorTd (el) {
  let element = $(el.target);
  element.css('background-color', color.val());
};

// Color on click
theGrid.on("click", "td", function(event) {
  colorTd(event);
});

// Creating variables for mouse clicks down and up
let isDown = false;

$(document).mousedown(function() {
  isDown = true;
});

$(document).mouseup(function() {
  isDown = false;
});

// Drag function: color while mouse is down, stop when mouse is up
$('#pixelCanvas').on("mousedown mousemove", function(event) {
  if (event.target && event.target.nodeName == "TD") {
    if (isDown) {
      colorTd(event);
    }
  }
  event.preventDefault();
});


// PRESETS

// 15*15
const preset1 = $('#fifteen');

preset1.click(function(event) {
  theGrid.empty();
  event.preventDefault();
  for (r = 0; r < 15; r++) {
    theGrid.append("<tr></tr>");
    for (c = 0; c < 15; c++) {
      theGrid
        .children().last().append("<td></td>");
    }
  }
});

// 25*25
const preset2 = $('#twentyFive');

preset2.click(function(event) {
  theGrid.empty();
  event.preventDefault();
  for (r = 0; r < 25; r++) {
    theGrid.append("<tr></tr>");
    for (c = 0; c < 25; c++) {
      theGrid
        .children().last().append("<td></td>");
    }
  }
});

// 35*35
const preset3 = $('#thirtyFive');

preset3.click(function(event) {
  theGrid.empty();
  event.preventDefault();
  for (r = 0; r < 35; r++) {
    theGrid.append("<tr></tr>");
    for (c = 0; c < 35; c++) {
      theGrid
        .children().last().append("<td></td>");
    }
  }
});



// Delete coloring on double click
theGrid.on("dblclick", "td", function() {
  $(this).css("background-color", "transparent");
});
    });
