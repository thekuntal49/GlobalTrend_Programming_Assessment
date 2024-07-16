// // 2. Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

const addAndSub = (str) => {
  let result = 0;

  const plusParts = str.split("+");

  plusParts.forEach((part) => {
    if (part.includes("-")) {
      const minusParts = part.split("-");

      result += Number(minusParts[0]);

      for (let i = 1; i < minusParts.length; i++) {
        result -= Number(minusParts[i]);
      }
    } else {
      result += Number(part);
    }
  });

  console.log(result);
  return result;
};

addAndSub("2+4-9+1");
