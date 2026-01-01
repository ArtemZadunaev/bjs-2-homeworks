"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  }
  else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  }
  else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return console.log(arr);

}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthPayment = creditBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1)));
  return console.log(+(monthPayment * countMonths).toFixed(2));

}