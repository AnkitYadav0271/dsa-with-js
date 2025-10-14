let arr = [7, 4, 3, 5, 1, 56, 78, 98];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    cur = arr[i];
    prev = i - 1;
    while (arr[prev] > cur && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev +1] = cur;
  }
}

insertionSort(arr);
console.log(arr);