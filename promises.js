function register(){
    return new Promise((resolve, reject) =>{

       setTimeout(() => {
       return reject('error while registering'); 
       console.log("Register End"); 
     //  reject('error while registering');  // if we get an error while regeitering than we need to call reject 
       }, 1000);

    }) 


}


function sendEmail(){
// waitforseconds(); 
return new Promise((resolve, reject)=>{

   setTimeout(() => {
   console.log("Weclome email send End"); 
   resolve();    
   }, 3000);

})


}

function login(){

// waitforseconds(); 
return new Promise((resolve, reject)=>{

setTimeout(() => {

   console.log("login End"); 
   resolve(); 
   
}, 1000);

})

}


function getUserData(){

return new Promise((resolve, reject)=>{
// waitforseconds(); 
setTimeout(() => {

   console.log("Get unser data"); 
   resolve();
}, 1000);

})

}

function displayUserData(){

return new Promise((resolve, reject)=>{
setTimeout(() => {

   console.log("Display user data");
   resolve();  
}, 3000);

})

}

// but the above delay will block the below mentioned code ...means blocking the main thread
console.log('Other application work!!!');

// then usually takes a anyonomous function as an argument 
// below stamemt means first register then call sendEmail 

// You can also catch the error in the below mentioned code 

register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((err)=>{

    console.log('Error: ', err); 
})



