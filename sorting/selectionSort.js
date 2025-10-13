let arr = [12, 34, 45, 67, 8, 99, 0, 34, 4, 56, 7, 8, 9, 23];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

selectionSort(arr);
console.log(arr);
