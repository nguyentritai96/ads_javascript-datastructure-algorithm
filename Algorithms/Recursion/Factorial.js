function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  // TERMINATION
  if (number < 0) return;
  // BASE
  if (number === 0) return 1;
  // RECURSION
  return number * findFactorialRecursive(number - 1);
}

console.log('findFactorialIterative', findFactorialIterative(5));
console.log('findFactorialRecursive', findFactorialRecursive(5));

//If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2