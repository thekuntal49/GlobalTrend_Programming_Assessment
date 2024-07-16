// // 6. Write a function that takes a string and capitalizes the first letter of each word in the string.

const capitalizes = (str) => {
  const res = str.split(" ").map((e) => {
    if (e.length > 1) {
      return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    } else {
      return e.toUpperCase();
    }
  });

  console.log(res.join(" "));
};

capitalizes("i am a gOOd BoY");
