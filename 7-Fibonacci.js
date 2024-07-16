// // 7. Write a function that generates the first n numbers of the Fibonacci sequence.

const generateFibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const fibonacciSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const next = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(next);
  }

  return fibonacciSequence;
};

console.log(generateFibonacci(5));
