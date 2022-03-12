// polyfill is a browser fallback ......like what if your browser doesn't have the bind function
// then uneed to write the code for that own your own that's is called polyfill 

let name = {

    firstName: "Neeraj",
    lastName: "Ghildiyal"
}

let printName = function(){

    console.log(this.firstName +" "+ this.lastName); 
}

let printmyName = printName.bind(name);

printmyName(); // this is how our tradational bind function works 


// which wrting a polyfill for bind you first need to remember that everyfunction 
// should have access to mybind (which is your implemntation of bind) method so 
// for that we need to keep that fucntion in function prototype 

// if we keep any function in Function.prototype it will be accessible to all the 
// other functions which we create 


Function.prototype.mybind = function(...args){
    let obj = this 
    return function(){

     obj.call(args[0]);
    }
    
}

let printmyName = printName.mybind(name); // when we can call mybind over printname method ..
// inside mybind .. "this" variable will point to  

// whenever we call mybind over printname method so inside mybind , this variable will points to
// printname method , so over 29 line of code there is a printname method ...that's why  
// we store "this" variable in the "obj" variable ..."this" will point to printname method 
// which is later to be called. .... so the method which we can call later is obj.call()...
// but this time we need to call this with the refreence to the named variable ...that means
// we need to somehow access named variable and we need to pass "name" obj.call(name) over hearted

// the one way to do that is extraxcted from the arguments like: pasing function(...args) 

printmyName(); 

// The above code is a basic implimentation of mybind method so what if we pass the arguments in
// printname function this should also work   

let printName = function(hometown){

    console.log(this.firstName +" "+ this.lastName+ "," + hometown); 
}

let printmyName = printName.bind(name, "Dehradun");

printmyName(); 

Function.prototype.mybind = function(...args){
    let obj = this,
    params =  args.slice(1); // it will remove the first element in the list and give the 
    // later elements in the list 
    return function(){

     //obj.call(args[0], params);// we can't pass a sliced array as a second argument in call method because
     // itelf it's an array so for that we have the apply method 
     
    //  obj.call(args[0], params);
        obj.apply(args, params); 
    }
    
}

let printmyName2 = printName.mybind(name, "Dhehradun"); 


// The problem is till not solved, what if we pass one more argument in the printName function
// in line no : 54 let printName = function(hometown){}  "state" as a third argument and
// the state will be passed through printmyName("state") method  

let printName = function(hometown , state){

    console.log(this.firstName +" "+ this.lastName+ "," + hometown + "," +state); 
}

let printmyName = printName.bind(name, "Dehradun");

printmyName("uttrakhand"); 

Function.prototype.mybind = function(...args){
    let obj = this,
    params =  args.slice(1);
    return function(...args2){

        obj.apply(args[0], [...params, ...args2]); // in this line we need to concatinate
        // two arrays and pass them in a big array  
    }
    
}

let printmyName2 = printName.mybind(name, "Dhehradun");
printmyName2("Uttrakhand");  // our PrintName2 function should also work even when 
// we pass an argument in it .. the passed arguments will be received in the return function(...args)
//     


// so now even if we have more parameters in the printName function that will not 
// create any kind of issue 


// ******************** How to concat two Arrays and how spread operators works **********

const a = [2,4,5];
const b= [19, 21, 12];

const combined = a.concat(b); 

// we can acheive the same thing through the spread operator 

const combined = [...a,...b]; // the flexiblity with the spread operator is we can 
// add the elements in between, begnning and in the end as well ..example given below

const combined = [...a, 'c', ...b]; 


// ******************* slicing an array ******************************************

// slicing an Array is totally opposite of concat an array

const first = [12, 1,5,6,7,8]

first.slice(1,7);
first.slice(2); // you can excluding the second argument so it will print all the elements
// after 2 index of the array elements 

first.slice();// this will also work this will give just the copy of the original array 

//****************************VVIM key point *************************** */

// If u are objects in an array ..the object themselves are not copied there
// reference are copied ..that means elements in both the inputs of array a and b ...ex given below:

const obj = [{id: 10}];
const  obj1 = [4,7,9]

const combined1 = obj.concat(obj1); // obj itself will not be copied in combined array, only
// it's referenced is copied , this means if we go to the obj array obj[0].id = 20 ,
// it will change the value in new combined1 array also of the obj array ...same priciple 
// will be applied in "slice" method 

// Key point :  If the values are primitve they are copied by vaule , if they are
// refrence types it will be copied by refrence/ 


// *********************  Rest operators **********************************************

// if u want a function having varying number of parameters u can use rest operators


function sum(...args){

    // let total = 0;
    // for(let value of arguments)
    // total += value;
    // return total;  

    console.log(args); // this will give u an array of 6 elements 

    return args.reduce((a,b)=> a+b); 
}



console.log(sum(2,6,9,4,12,66)); 


function sum(discount, ...args)
{}// this function will also work 

function sum(discount,...args, someValue)
{}// this function will give u an error because ...args should be the last argument in the function

// we call it rest because .... lets take args and rest will be taken in one go by typing ...args 

