function hasTargetSum(array, target) {
  // Write your algorithm here
    let seenNumbers = new Set();

    for (let num of array) {
        let difference = target - num;
        if (seenNumbers.has(difference)) {
            return true;
        }
        seenNumbers.add(num);
    }

    return false;
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([-1, -2, 3, 6, 8], 5)); // true
console.log(hasTargetSum([1, 1, 1, 1, 1], 2)); // true
console.log(hasTargetSum([], 10)); // false
console.log(hasTargetSum([5], 5)); // false

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. Create an empty set called seen_numbers.
2. Loop through each number in the array.
3. For each number:
    a. Calculate the difference between the target and the current number.
    b. If the difference exists in seen_numbers, return true.
    c. Otherwise, add the current number to seen_numbers.
4. If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
