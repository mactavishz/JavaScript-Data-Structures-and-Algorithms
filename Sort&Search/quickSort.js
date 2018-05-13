const swap = require('./util/swap')

// Time complexity O(nlog(n))
// best-case: O(nlog(n))
// worst-case: O(n^2)
// average: O(nlog(n))

function quickSort(arr, compare) {
  if (!compare) {
    compare = (a, b) => a - b
  }
  return sort.call(arr, 0, arr.length - 1, compare)
}

function sort(left, right, compare) {
  let index, len = this.length
	
  if(len > 1) {
    index = partition(this, left, right, compare)

    if(left < index - 1) {
      sort.call(this, left, index - 1, compare)
    }

    if(left < right) {
      sort.call(this, index, right, compare)
    }
  }

  return this
}

function partition(array, left, right, compare) {
  let pivot = array[Math.floor((left + right) / 2)]

  while(left <= right) {
    while(compare(array[left], pivot) < 0) {
      left++
    }
    while(compare(array[right], pivot) > 0) {
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
