let arr = [12, 34, 45, 67, 8, 99, 0, 34, 4, 56, 7, 8, 9, 23];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break; //it check if no swapping is going on then break the loop
  }
}
bubbleSort(arr);
console.log(arr);
