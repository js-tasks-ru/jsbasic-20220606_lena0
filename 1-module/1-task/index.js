function factorial(n) {
  let res = 1;
  while (n > 0) {
    res = res * n--;
  }
  return res;
}
