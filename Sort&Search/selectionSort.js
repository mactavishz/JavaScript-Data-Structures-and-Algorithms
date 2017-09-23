const swap = require('./util/swap')

// Time complexity O(n^2)
// best-case: O(n)
// worst-case: O(n^2)
// average: O(n^2)
function selectionSort(arr) {
  var len = arr.length
  var indexMin

  for(let i = 0; i < len; i++) {
    indexMin = i
    for(let j = i; j < len; j++) {
      indexMin = arr[j] < arr[indexMin] ? j : indexMin
    }
    i !== indexMin && swap(arr, i, indexMin)
  }
}
