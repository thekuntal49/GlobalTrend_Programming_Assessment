// // 3. Write a function that takes a nested array and returns a flattened array.

const flattenedArr = (arr) => {
  const res = [];
  const flatten = (arr) => {
    arr.forEach((ele) => {
      if (Array.isArray(ele)) {
        flatten(ele);
      } else {
        res.push(ele);
      }
    });
  };
  flatten(arr);
  console.log(res);
};

flattenedArr([1, 2, [3, 4], 5]);
