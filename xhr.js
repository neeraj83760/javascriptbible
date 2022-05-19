
// Jab bhi hum koi website pe refresh karte hai to poora page regresh hota hai bhale hi humnein ek chote se component ko update kiya ho means jitni 
// baar refresh hoga page utni baar poore webpage ke components refresh honge yaani on each page refresh we need to make that many network calls to the 
//server for each page components 

// Here comes ajax comes to rescue ... means if we use Ajax call to the server then to poora page nahi refresh hoga sirf wahi component refresh hoga 
//jo update hua hai .. so ajax call karne ke liye we use many libraries and Axios is one of them, or koi vanilla javascript bhi use karta hai  

// Creating our mini Axios function for the Ajax call 

// method parameter might be get request or post request 
// body paramemter is only for POST and put kind of requests not for the get request 

//  We need to return a promise from the below mentioned function ... it's like
// when we write a function call .. abc(); so putting ".then(...)" after abc().then()
// gives the feeling of like we are returing the promise  
function myAxios(method, url, body = null){

    const xhr =  new XMLHttpRequest()

xhr.open(method, url);
xhr.responseType = 'json';

// Agar server ko batana hai kis type ka data hai to humien header add karna hoga 

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = () =>{
     
    if(xhr.status >= 400){

    console.log('Failed!!');
    }else {

        console.log(xhr.response);
    }
    
}

xhr.onerror =() =>{

    console.log('Error!!!!');
}


// xhr.send();
// convert OBJECT in strings we need to JSON.srtingify method 
// xhr.send(body);

xhr.send(JSON.stringify(body));

}


const url = 'https://jsonplaceholder.typicode.com/users';


// myAxios('GET', url);

// For post request what modifcation we need to do in our MyAxios function 

// myAxios('POST',url, {

//     name:'Neeraj',
//     job:'Software Developer'

// });

myAxios('POST',url, {

    name:'Neeraj',
    job:'Software Developer'

}).then((res)=>{


}).catch((err)=>{
   

})



//****************************************************************************************8 */

// // The below one the object used to make the Ajax call
// const xhr =  new XMLHttpRequest()

// xhr.open('GET', url);
// // response headers in chrome dev tools under network tab, sent by the server to the client 
// // request headers in dev tools jo hum request karte time server ko bhejte hai 

// // line number 9 tak ka code server the data to le aayega but browser pe wo data dekhne ke liye
// // humien below lines of code likhna padega 

// // Json format me data chahiye to you need to write the below mentioned line of code :

// xhr.responseType = 'json'

// xhr.onload = () =>{
     
//     if(xhr.status >= 400){

//     console.log('Failed!!');
//     }else {

//         console.log(xhr.response);
//     }
//     // console.log(xhr.status); 

//     // console.log(xhr.response); 
//     // the above line of code will show you the data in the form of string so to Parse
//     // that string to format properly we need to write the below mentioned code

// }
// // Key point : onerror, onload are eventlisteners so you need to write and register it before xhr.send() method
// //

// xhr.onerror =() =>{

//     console.log('Error!!!!');
// }


// xhr.send();
