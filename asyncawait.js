function register(){
    return new Promise((resolve, reject) =>{

       setTimeout(() => {
    //    return reject('error while registering'); 
       console.log("Register End");
       resolve();  
     //  reject('error while registering');  // if we get an error while regeitering than we need to call reject 
       }, 1000);

    }) 


}


function sendEmail(){
// waitforseconds(); 
return new Promise((resolve, reject)=>{

   setTimeout(() => {
  
//    return reject('Error while sending email'); 
   console.log("Weclome email send End");
   resolve('Sucess');  
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



// Async await is just a synctatical sugar on promises in javascript 
// Async await se sirf hota ye hai ki humein code visually syncrounus dkhta hai 
// we always write async await inside the function 

// we can only used await function inside the Async function 

// visually the below mentioned code is looking like a sync code but actually it's a Async code 

// jis bhi function ke aage aap async laga dete ho wo khud by default promise return kar deti hai
// appko likhna nahi hota hai new Promise return .... means result of authenticate(); 
// function is a promise so hum uske upar "then" bhi use kar sakte hai 

async function authenticate(){

    try{

    const message = await register();
                    await sendEmail();
                    await login();
                    await getUserData();
                    await displayUserData();
                    console.log(message);  
    }catch(err){

        console.log(err);

    }

    
}

authenticate().then(()=>{

    console.log('All set!');
})
// .catch((err)=>{

//     console.log(err);

// })
