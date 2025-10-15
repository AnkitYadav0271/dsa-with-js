let arr = [1,4,7,11,15,20] 
let target = 15;

function sumOfSubArray(arr,target){
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++ ){
            if(target - arr[j] === arr[i]){
                return true;
            }
        }
    }
    return false;
}

function optimized (arr,target){
    let seen = new Set();
    for (let i = 0; i < arr.length; i++){
        if(seen.has(target - arr[i])){
            return true;
        }
        else{
            seen.add(arr[i]);
        }
    }
    return false;
}

const res = sumOfSubArray(arr,target);
const optRes = optimized(arr,target);
console.log(optRes);

