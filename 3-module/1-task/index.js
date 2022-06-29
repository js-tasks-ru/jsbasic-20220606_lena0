function namify(users) {
  let arrOfNames = [];
  for (let i = 0; i < users.length; i++) {
    let name = users[i].name;
    arrOfNames.push(name);
  }
  return arrOfNames;
}
