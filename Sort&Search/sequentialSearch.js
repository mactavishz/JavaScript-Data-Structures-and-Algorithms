// Time complexity O(n)
// best-case: O(n)
// worst-case: O(n)
// average: O(n)
function sequentialSearch(arr, item) {
  for(let i = 0; i < arr.length; i++) {
    if(item === arr[i]) return i
  }
  return -1
}
