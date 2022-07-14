function makeDiagonalRed(table) {
  let tableRows = table.rows;
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].cells[i].style.backgroundColor = 'red';
  }
}
