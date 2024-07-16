// // 10. Write a function that converts a given string to title case (capitalizing the first letter of each word).

const titleCase = (str) => {
  const res = str.split(" ").map((e) => {
    if (e.length > 1) {
      return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    } else {
      return e.toUpperCase();
    }
  });

  console.log(res.join(" "));
};

titleCase("Lord of the Flies");
