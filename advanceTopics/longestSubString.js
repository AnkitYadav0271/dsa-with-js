
function longestSubString (string){
    let set = new Set();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < string.length; end++){
        while(set.has(string[end])){
            set.delete(string[start]);
            start++;
        }
          set.add(string[end]);
       maxLength = Math.max(maxLength, end - start + 1);

    }
    return maxLength;

}

let string = "abcdefghb"
console.log(longestSubString(string))
console.log(longestSubString("abcd"))