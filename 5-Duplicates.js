// // 5. Write a function that takes an array and returns a new array with duplicates removed.

const removedDuplicate = (arr) => {
  console.log(new Set(arr));
};

removedDuplicate([1, 2, 3, 4, 4, 3, 1, 6, "a", "b", "c", "b"]);
