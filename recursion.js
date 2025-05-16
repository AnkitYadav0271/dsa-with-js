
function recursion(number){
    if(number ===0){
        console.log("My recursion code is now stopping here 💃");
        return;
    }
    console.log(number)
    recursion(number-1);
}

recursion(6)