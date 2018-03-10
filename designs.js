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

let isDown = false;
//Drag and color multiple cells
$(document).mousedown(function() {
  // when mouse is down, isDown is true
  isDown = true;
});

$(document).mouseup(function() {
  // when mouse is up, isDown is false
  isDown = false;
});

// event is added to table not cells
theGrid.on("mousedown mousemove", function(event) {
  // event.target is the clicked element
  // if event.target is a td, change color to input color
  if (event.target === "td") {
    //when mouse is down
    if (isDown) {
      event.target.css("background-color", color.val());
    }
  }
  event.preventDefault();
});

// event listener for clearing cell with double click
theGrid.on("dblclick", "td", function() {
  $(this).css("background-color", "transparent");
});
    });

$(function(){
  	$('.repeat').click(function(){
      	var classes =  $(this).parent().attr('class');
          $(this).parent().attr('class', 'animate');
          var indicator = $(this);
          setTimeout(function(){
          	$(indicator).parent().addClass(classes);
          }, 20);
      });
  });
