/*
Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest.
[2, 3, 4, 3, 2] = 3

[10, 5, 2, 4, 3, 3, 6] = 3
[10, 5, 2, 4, 3, 0, 6] = not exist or undefined
*/
function firstRep1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}
// Object(n ^ 2);
// Space O(1)

function firstRecurr(arr) {
  const seenElements = {};

  for (let i = 0; i < arr.length; i++) {
    // let element = arr[i];
    if (seenElements[arr[i]]) {
      return element;
    }
    seenElements[arr[i]] = true;
  }
  return undefined;
}
// Time complexity => O(n) Linear
// Space complexity => O(1) constant

console.log(firstRecurr([10, 5, 2, 4, 3, 0, 6]));
