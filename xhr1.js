function myAxios(method, url, body = null){

    return new Promise((resolve, reject)=>{

        const xhr =  new XMLHttpRequest()

        xhr.open(method, url);
        xhr.responseType = 'json';

        // Agar server ko batana hai kis type ka data hai to humien header add karna hoga 

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () =>{
     
        if(xhr.status >= 400){
           reject(xhr.response)
        // console.log('Failed!!');
        }else {
           resolve(xhr.response); 
        // console.log(xhr.response);
        }
    
        }

        xhr.onerror =() =>{
            reject(xhr.response)
 
            console.log('Error!!!!');
        }


       // xhr.send();
       // convert OBJECT in strings we need to JSON.srtingify method 
       // xhr.send(body);

        xhr.send(JSON.stringify(body));

        })
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

   console.log('Message from then block', res)
}).catch((err)=>{
   
   
})