// time complexity O(n^2)
function bubbleSort(arr) {
  var len = arr.length
  for(let i = 0; i < len; i++) {
    // To avoid the unnecessary comparison
    // We can reduce the number of iteration in inner loop each time
    for(let j = 0; j < len - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
