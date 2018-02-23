// Clear canvas and define

// Create variables and document ready function

// Create the submit function clear canvas with grid.children.remove()
// Call makeGrid function

// Create makegrid function
// Nested loop to create the two dimension grid / Canvas
// Add a background color that is different than defaut
// add outline to the grid


//
$(document).ready(function () {
  let gridHeight, gridWidth, color, grid, isColoring, isErasing;
  isColoring = false;
  isErasing = false;
  grid = $("#pixelCanvas");
  color = $("#colorPicker").val();

  $("#submit").click(function (e) {
    e.preventDefault();
		gridHeight = $("#inputHeight").val();
    gridWidth = $("#inputWidth").val();
    grid.children().remove();
    makeGrid();
  });

  function makeGrid() {
    let tr, td;
    for (let i = 0; i < gridHeight; i++) {
      tr = $("<tr></tr>");
      for (let x = 0; x < gridWidth; x++) {
        td = $("<td></td>");
        tr.append(td);
      }
      grid.append(tr);
      grid.children().css("background-color", "#FFF");
      grid.css("outline", "5px solid #94d602");
    }
  }

  colorGrid();

  function colorGrid() {
    grid.on("mousedown", "td", function(e) {
      if (e.which == 1) {
        isColoring = true;
      }
      else if (e.which == 3) {
        isErasing = true;
      }
    });

    $(document).mouseup(function() {
      isColoring = false;
      isErasing = false;
    });

    grid.on("mousemove", "td", function() {
      if (isColoring) {
        $(this).css("background-color", color);
      }
      else if (isErasing) {
        $(this).css("background-color", "#FFF");
      }
    });
  }

  $("#color-picker").change(function() {
    color = $("#color-picker").val();
  });

  $("#clear").click(function () {
    grid.children().find("td").css("background-color", "#FFF");
  });

  $("#quick-fill").click(function () {
    grid.children().find("td").css("background-color", color);
  });

  $(document).contextmenu(function() {
    return false;
  });
});
