const swap = require('./util/swap')

// Time complexity O(nlog(n))
// best-case: O(nlog(n))
// worst-case: O(n^2)
// average: O(nlog(n))

function quickSort(array, left = 0, right = arr.length - 1) {
  var index
  if(array.length > 1) {
    index = partition(array, left, right)

    if(left < index - 1) {
      quickSort(array, left, index - 1)
    }

    if(left < right) {
      quickSort(array, index, right)
    }
  }
}

function partition(array, left, right) {
  var pivot = array[Math.floor((left + right) / 2)]

  while(left <= right) {
    while(array[left] < pivot) {
      left++
    }
    while(array[right] > pivot) {
      right--
    }

    if(left <= right) {
      swap(array, left, right)
      left++
      right--
    }
  }
  return left
}

module.exports = quickSort
