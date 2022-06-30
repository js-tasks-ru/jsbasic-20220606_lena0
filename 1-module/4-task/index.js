function checkSpam(str) {
  let a = '1xBet'.toLowerCase();
  let b = 'XXX'.toLowerCase();
  let strToLowerCase = str.toLowerCase();
  if (strToLowerCase.includes(a) || strToLowerCase.includes(b)) {
    return true;
  } else {
    return false;
  }
}
