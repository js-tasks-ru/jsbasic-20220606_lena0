export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.template();
    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  template() {
    let table = document.createElement('table');
    let th = `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>`;
    let arrOfTrs = [];
    for (let i = 0; i < this.rows.length; i++) {
      arrOfTrs.push(`<tr>
        <td>${this.rows[i].name}</td>
        <td>${this.rows[i].age}</td>
        <td>${this.rows[i].salary}</td>
        <td>${this.rows[i].city}</td>
        <td><button>X</button></td>
      </tr>`);
    }

    table.innerHTML = th + arrOfTrs.join('');
    this.elem = table;
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
  }
}
