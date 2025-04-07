function getCountOfchar(str) {
  let updatedStr = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      updatedStr.push({ [str[i]]: count });
      count = 1;
    }
  }

  return updatedStr;
}
console.log(getCountOfchar("aabbccc"));
