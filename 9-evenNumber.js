// // Write a function that filters out even numbers from an array.

const evenNum = (arr) => {
  const even = arr.filter((n) => n % 2 === 0);
  console.log(even);
};

evenNum([1, 5, 7, 2, 9]);
