//=>function is a block of code to perform a particular task
//=>in order to have function in our file we need to define it first then call it wherever we wish to. 
//=>function it should take some input and return some output.
//    ->Syntax
//      function function_name(){
//           block of code
//         }


function calculateSum(num1,num2){               //defining function
    let sum = num1+num2;
    return sum;
}

console.log(calculateSum(10,3));               //calling function
calculateSum;                                  //function reference
