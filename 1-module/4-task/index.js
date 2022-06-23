function checkSpam(str) {
  a = '1xBet'.toLowerCase();
  b = 'XXX'.toLowerCase();
  strToLowerCase = str.toLowerCase();
  if (strToLowerCase.includes(a) || strToLowerCase.includes(b)) {
    return true;
  } else {
    return false;
  }
}
