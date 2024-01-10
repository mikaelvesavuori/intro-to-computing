// O(n) - ideal time complexity
function reverseStringLowComplexity(str) {
  return str.split('').reverse().join('');
}

// O(n^2) - bad time complexity - each character insertion operation takes O(n) time, and we perform it n times
function reverseStringHighComplexity(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str.charAt(i) + reversed;
  }
  return reversed;
}
