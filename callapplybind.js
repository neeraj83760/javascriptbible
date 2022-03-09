let nam = {

    firstname: "Neeraj",
    LastName: "Ghildiyal",
    // printfullName: function(){

    //     console.log(this.firstname +" "+ this.LastName);
    // }
}

// nam.printfullName(); // Invoking a method 

let name2 = {

    firstname: "Ajay",
    LastName: "Singh"  // printfull name we can copy the above function in name2 function 
    // but this is a repetion of the code so here call method comes into picture this is called 
    // function borrowing ... we can broww functions from other objects and use it with the
    // data of other objects 
    
}

// first take the function which needs to be called // in call method first argument will be the
// refrence ...means whatwe want this to be pointing to name2 object 

// nam.printfullName.call(name2); // thiswill give output Ajay Singh

// We can also keep the reuseable function in seprately. No need to keep it inside 
// any specific object 

let printfullName = function(hometown, state){

    console.log(this.firstname +" "+ this.LastName +", from : " + hometown +", state : " + state);
}

// printfullName.call(nam);
printfullName.call(name2);

// suppose we want to pass the argument in the call function, can we do that? Yes

// pirntfullName.call(nam, 'dehradun','uttrakhand')

// Apply is only diffrent from call method is we can pass other arguments in the form of arry list
// however in call we pass arg by comma seprated 

printfullName.apply(nam, ['dehradun','uttrakhand'])



// Bind method : It looksexactly same as the call method but only diffrence instead of calling directly "pirntfullName.call(nam, 'dehradun','uttrakhand')"
//  method over here the bind method binds it's method "printfullname" with the object it return
// the copy of that method

let printmyname = printfullName.bind(name2,'dehradun','uttrakhand')
// the above line of code will ceate a copy of printfulname function and bind the copy of with
// name2 object 

// bind doesn't directly call the printfullname function like call and apply ..it keeps the copy
// of the method which can be invoked later 