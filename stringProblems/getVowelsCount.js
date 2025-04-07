const s = "madameeieusa";

function getVowlesCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].toLowerCase() === vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}
console.log(getVowlesCount(s));


function getEachVowelCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    for (let j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        result[char]++;
        break;
      }
    }
  }

  return result;
}

console.log(getEachVowelCount(s));