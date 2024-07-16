// // 4. Write a function that checks if two given strings are anagrams of each other.

const isAnagrams = (str1, str2) => {
  const first = str1.toLowerCase().split("").sort().join("");
  const second = str2.toLowerCase().split("").sort().join("");

  if (first === second) {
    console.log("true");
  } else {
    console.log("false");
  }
};

isAnagrams("Restful", "Fluster");
isAnagrams("Cheater", "tacher");
