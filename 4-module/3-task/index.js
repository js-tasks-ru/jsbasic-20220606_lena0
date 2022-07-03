function highlight(table) {
  let tbodyCollection = table.getElementsByTagName("tbody");
  let tbody = Array.from(tbodyCollection)[0];
  let trs = tbody.rows;
  let tds = tbody.querySelectorAll('.js-teachers td');
  for (let i = 0; i < trs.length; i++) {
    if (trs[i].lastElementChild.getAttribute("data-available") === 'true') {
      trs[i].classList.add("available");
    } else if (trs[i].lastElementChild.getAttribute("data-available") === 'false') {
      trs[i].classList.add("unavailable");
    } else {
      trs[i].hidden = true;
    }
  }

  for (let i = 0; i < trs.length; i++) {
    if (trs[i].cells[2].innerHTML == 'm') {
      trs[i].classList.add("male");
    } else {
      trs[i].classList.add("female");
    }

  }

  for (let i = 0; i < trs.length; i++) {
    if (trs[i].cells[1].innerHTML < 18) {
      trs[i].style.textDecoration = "line-through";
    }
  }
}
