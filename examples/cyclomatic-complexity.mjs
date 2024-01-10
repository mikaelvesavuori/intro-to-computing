// Complexity: 12
function overlyComplexSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (typeof arr[i] === 'string' && !isNaN(arr[i])) {
      sum += parseFloat(arr[i]);
    } else if (typeof arr[i] === 'object' && arr[i] !== null) {
      if (Array.isArray(arr[i])) {
        sum += overlyComplexSum(arr[i]);
      } else {
        for (const key in arr[i]) {
          if (typeof arr[i][key] === 'number') {
            sum += arr[i][key];
          } else if (typeof arr[i][key] === 'string' && !isNaN(arr[i][key])) {
            sum += parseFloat(arr[i][key]);
          }
        }
      }
    }
  }
  return sum;
}

const complexArray = [1, '2', [3, '4', { num: '5' }]];
const complexResult = overlyComplexSum(complexArray);
console.log(complexResult); // Outputs: 15

// Complexity: 1
function simpleSum(arr) {
  return arr.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
}

const simpleArray = [1, '2', 3, '4', '5'];
const simpleResult = simpleSum(simpleArray);
console.log(simpleResult); // Outputs: 15
