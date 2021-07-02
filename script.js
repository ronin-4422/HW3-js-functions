console.log('------------- # 4')
function calcSum(a, b) {
  return a + b;
}
console.log(calcSum(8,2));

function calcMinus(a, b) {
  return a - b;
}
console.log(calcMinus(8,2));

function calcMulti(a, b) {
  return a * b;
}
console.log(calcMulti(8,2));

function calcSplit(a, b) {
  return a / b;
}
console.log(calcSplit(8,2));

console.log('------------- # 5')
function rangeBig(n) {
  for (let i = 1;  i <= n;  i++ ){
    console.log(i); 
  }
}
rangeBig(5);

console.log('------------- # 6')
function rangeSmall(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i)
}
}
rangeSmall(5);


console.log('------------- # 7')
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i--) {
    result *= x;
  }
  return result;
}
console.log(pow(9, 2));


