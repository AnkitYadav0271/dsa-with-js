function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else if (left[i] > right[j]) {
      res.push(right[j]);
      j++;
    } else {
      // Equal values: push either, increment both
      res.push(left[i]);
      i++;
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}

let array = [23, 45, 67, 78, 22, 23, 13, 4, 52];
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const res = mergeSort(array);
console.log(res);
