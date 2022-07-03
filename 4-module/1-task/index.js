function makeFriendsList(friends) {
  let body = document.getElementsByTagName('body')[0];
  let newUl = document.createElement('ul');
  body.append(newUl);
  let newLi = document.createElement('li');

  for (let i = 0; i < friends.length; i++) {
    newLi = document.createElement('li');
    newLi.textContent = `${friends[i].firstName} ${friends[i].lastName}`;
    newUl.append(newLi);
  }
  return newUl;
}
