// Create variables

$(function(){
  // cache the jQuery colorPicker obj
  const $colorPicker = $('#colorPicker');

  // initialize default color
  let color = $colorPicker.val();

  // listen to change events on colorPicker and update color
  $colorPicker.change(function() {
    color = $colorPicker.val();
  });

  // declare rows and cols
  let rows, cols;

  // cache jQuery input objects for rows, cols, and sizePicker form
  const rowInput = $('#inputHeight');
  const colsInput = $('#inputWidth');
  const sizePicker = $('#sizePicker');

  // listen for submit event update rows and cols then call makeGrid()
  sizePicker.submit(function(evt){
    evt.preventDefault();
    rows = rowInput.val();
    cols = colsInput.val();
    makeGrid();
  });

  // cache the jQuery table obj
  const table = $('#pixelCanvas');
  function makeGrid() {
    table.empty();
    let tableHTML = '';
    for (let r = 0; r < rows; r++) {
      tableHTML += '<tr>';
      for (let c = 0; c < cols; c++) {
        tableHTML += '<td></td>';
      }
      tableHTML += '</tr>';
    }
    table.append(tableHTML);
  }

  // use event delegation to listen to clicks on cells
  table.on('click', 'td', function(evt) {
    $(evt.target).css('background-color', color);
  });
});

function clearCanvas
