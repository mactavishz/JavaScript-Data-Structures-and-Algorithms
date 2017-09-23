// Time complexity O(nlog(n))
// best-case: O(nlog(n))
// worst-case: O(nlog(n))
// average: O(nlog(n))
//
// implement insertSort without using swap function
function mergeSort(arr) {
  var len = arr.length
  if(len === 1) {
    return arr
  }

  var mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid)

  // keep spliting the arr, until its length become one
  // and then we merge them
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []

  // we merge the two array into a sorted array
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())

  return result
}
