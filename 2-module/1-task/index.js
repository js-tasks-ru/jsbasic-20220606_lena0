function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    if (typeof salaries[key] === "number" && isNaN(salaries[key]) === false && isFinite(salaries[key]) === true) {
      sum += salaries[key];
    } else if (typeof salaries[key] !== "number" || isNaN(salaries[key]) === true || isFinite(salaries[key]) === false) {
      return sum;
    } else {
      return 0;
    }
  }
  return sum;
}
