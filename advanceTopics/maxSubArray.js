
function  maxSubArray (array,k){
    if(array.length < k){
        return false;
    }
    let currentSum = 0;
    //to add first window
    for (let i=0; i<k; i++){
        currentSum+=array[i];
    }
    let MaxSum = currentSum;

    //window starts from here

    for (let i = k; i< array.length;i++){
        currentSum+= array[i] - array[i-k];
       MaxSum = Math.max(MaxSum,currentSum);
    }
    return MaxSum;
}

let array = [1,2,3,4,5,6,7,8,9];
let array2 = [34]
let windowSize = 4;
console.log(maxSubArray(array,windowSize));