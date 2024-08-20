function duplicates(nums) {
  const elementCount = {};
  let duplicateCount = 0;
  nums.forEach(num => {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  })
  console.log(elementCount);
  for (const count in elementCount) {
    if (elementCount[count] > 1) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}
console.log(duplicates([1, 2, 3, 2, 2, 4, 5, 4]));
