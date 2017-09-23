const swap = require('./util/swap')

// Time complexity O(n^2)
// best-case: O(n)
// worst-case: O(n^2)
// average: O(n^2)
//
// implement insertSort without using swap function
function insertSort(arr) {
  var len = arr.length

  for(let i = 1; i < len; i++) {
    let j = i, temp = arr[i]
    while(j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
}

/**
// implement insertSort using swap function

 function insertSort(arr) {
   var len = arr.length

   for(let i = 1; i < len; i++) {
     let j = i, temp = arr[i]
     while(j > 0 && arr[j - 1] > arr[j]) {
       swap(arr, j, j - 1)
       j--
     }
  }
 }
*/
