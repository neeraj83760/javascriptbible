const url = 'https://jsonplaceholder.typicode.com/users';

// function myAxios(method, url, body=null){
//   // fetch ka by default method hota hai get so it's not nesscary to pass it as an argument 
//   // also we don't need to made the fetch function promise, because it is by default return a promise
//   // unlike the function which we have mentioned in xhr1.js file function 
  
//  return fetch(url).then((res)=>{
    
//    // return res.text(); // return the data in text format from the url but we need the data in 
//     // JSON format so we need to write the below line of code
    
//     return res.json(); // is line of code ke wajah se humne readable stream ko json format
//     // me change karte hain 
//  });
// }

// myAxios('GET',url).then((res)=>{

//     console.log(res);

// }).catch((err) =>{


// })
//Readablestream : it's a very powerful feature of the Fetch API , you can check the readable
// stream in the browser console by running the above shared code .. but as per the url
// we need the data of type key vaule pair

//************************************************************************************** */

// What we need to Do in the POST request 

function myAxios(method, url, body=null){
    const headers = {

        'Content-Type': 'application/json',
         
    }
    
   return fetch(url,{
   
   method: method,
   headers: headers,
   body: JSON.stringify(body)

   }).then((res)=>{ // in post request we will also pass the empty Object
   //  
      
    
      
      return res.json(); 
   });
  }
  
  myAxios('POST',url, {name:'Neeraj', job:'Software Developer'}).then((res)=>{
  
      console.log(res);
  
  }).catch((err) =>{
  
     console.log(err);
  })
 
  