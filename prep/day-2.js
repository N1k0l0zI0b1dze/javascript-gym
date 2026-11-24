const countFrequencies = (arr) => {
  return arr.reduce((acc, currentValue) => {
    if (acc[currentValue]) {
      acc[currentValue]++;
    } else {
      acc[currentValue] = 1;
    }

    return acc;
  }, {});
};

console.log(countFrequencies(["a", "b", "a", "c", "b", "a"]));

const containsDuplicate = (arr) => {
  const checked = {};

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    if (checked[currentValue]) {
      return true;
    } else {
      checked[currentValue] = "Checked ✅";
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 2])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
