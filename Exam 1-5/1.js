a = 1200;
b = 95;
c = 115;
var x = calculateFunction(a, b, c);
console.log("Sales of " + "A is " + x.A + "% from " + x.sum + " unit");
console.log("Sales of " + "B is " + x.B + "% from " + x.sum + " unit");
console.log("Sales of " + "C is " + x.C + "% from " + x.sum + " unit");
function calculateFunction(a, b, c) {
  let sum = a + b + c;
  let perA = (a * 100) / sum;
  let perB = (b * 100) / sum;
  let perC = (c * 100) / sum;
  const sales = { A: perA, B: perB, C: perC, sum: sum };
  return sales;
}
