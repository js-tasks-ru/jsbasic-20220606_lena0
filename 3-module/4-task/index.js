function showSalary(users, age) {
  let str = [];

  users.forEach(function(item, i) {
    if (item.age <= age) {
      str.push(`${users[i].name}, ${users[i].balance}`);
    } else {
      return null;
    }
  });
  return str.join('\n');
}
