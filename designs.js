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
        .children()
        .last()
        .append("<td></td>");
    }
  }
}
// default grid size
$(document).ready( makeGrid(10, 10));

// When user click submit make the Canvas

$("#sizePicker").submit(function(event) {
  theGrid.empty();
  event.preventDefault();
  makeGrid();
});

//Clear the Canvas
$("#clearBtn").click(function(){
        $("td").css('background-color', '');
    });

// event listener and background color change
function colorTd (el) {
  let element = $(el.target);
  element.css('background-color', color.val());
}

theGrid.on("click", "td", function(event) {
  colorTd(event);
});

// event is added to table not cells
let isDown = false;

$(document).mousedown(function() {
  // when mouse is down, isDown is true
  isDown = true;
});

$(document).mouseup(function() {
  // when mouse is up, isDown is false
  isDown = false;
});

// event is added to table not cells
$('#pixelCanvas').on("mousedown mousemove", function(event) {
  // if event.target is a td, change color to input color
  if (event.target && event.target.nodeName == "TD") {
    //when mouse is down
    if (isDown) {
      colorTd(event);
    }
  }
  event.preventDefault();
});


// presets 10*10, 15*15, 20*20

// event listener for clearing cell with double click
theGrid.on("dblclick", "td", function() {
  $(this).css("background-color", "transparent");
});
    });
