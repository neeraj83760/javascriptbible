// There are two ways of currying function : by using the bind function + by using the closures 

// let multiply = function(x,y){

//     console.log(x * y) 
// }

// bind method will give the copy of the multiply method andit does not invoke it directly  
// so this essentially means that this 2 will be goes in x in multiply function 

//let multiplybyTwo = multiply.bind(this, 2); // this line of code is same as the code mentioned below:


// let multiplybyTwo = function(y){

//     x= 2; 
//     console.log(x*y);  
// }

//multiplybyTwo(3); // we will get result three in this case. 

// functions currying is using one method create more other methods ...just like we used 
// multiply method to create multiplybyTwo




// ************************Other way to currying a function is by using function closures 


let multiply = function(x){

   return function(y){

    console.log(x * y); 
   }
}

let multiplybyTwo = multiply(2); 

multiplybyTwo(3); 



