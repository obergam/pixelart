// Select color input
$("#submit").click(function (e) {
    e.preventDefault();
		gridHeight = $("#input-height").val();
    gridWidth = $("#input-width").val();
    grid.children().remove();
    makeGrid();
  });
// Select size input
let gridHeight = $('.inputHeight');
let gridWidth = $('.inputWeight');

const submit = document.getE ('submit');

const canvas = document.getElementById('.pixelCanvas')

// When size is submitted by the user, call makeGrid()

function makeGrid() {
   
}

submit.click(makeGrid);
