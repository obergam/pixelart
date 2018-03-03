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

// When user click submit make the Canvas

$("#sizePicker").submit(function(event) {
  theGrid.empty();
  event.preventDefault();
  makeGrid();
});

//Clear the Canvas
$("#clearBtn").click(function(){
        $("td").css('background-color', 'white');
    });

// event listener and background color change
theGrid.on("click", "td", function() {
  $(this).css("background-color", color.val());
});

// event listener for clearing cell with double click
theGrid.on("dblclick", "td", function() {
  $(this).css("background-color", "transparent");
});
    });
