import {
     Stack ,Node
 } from "../stack";


 //here we are starting infix to postfix conversion


function infixToPostfix(infix){
    let brackets = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    

    let mathExpressions = {
        "+":"+",
        "-":"-",
        "*":"*",
        "/":"/"
    }
   let postfixExpression = [];
   let stack = new Stack();
   
  for (const char of infix){
       if (char === brackets.key || char === mathExpressions[char]){
          stack.push(char)
       }

       if (char === brackets[char]){
        top = p
        while()
       }

       else postfixExpression.push(char)
    }

        
  }

  
