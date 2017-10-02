const quickSort = require('./quickSort')

// Time complexity O(log(n))
function binarySearch(arr, item) {
  // sort the array first
  quickSort(arr)

  var low = 0,
      high = arr.length - 1,
      mid, element

  while(low <= high) {
    mid = Math.floor((low + high)/ 2)
    element = arr[mid]
    if(element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return -1
}
