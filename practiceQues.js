
function isValidParenthesis (string){
    let stack = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (const char of string){
        if (brackets[char]){
            console.log("checking" + brackets[char])
            stack.push(char);
            console.log(stack)
        }
        else {
           const top = stack.pop();
           if (!top || brackets[top] !== char){
               return false;
           }
        }
    }
    return  stack.length === 0;
}
console.log(isValidParenthesis("(){}}]"));
// console.log(isValidParenthesis("(){}[]"));
// console.log(isValidParenthesis("([{}{ ])"));