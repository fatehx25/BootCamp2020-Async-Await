//Asynchronous Programming

console.log("(1) Placing order for dinner");

function Niyari() {
    let promise = new Promise ( (resolve, reject) => {
        setTimeout( () => {
            console.log("Niyari is being ready");
            resolve("Niyari");
        }, 2000);
    });

    return promise;
}

function Coffee() {
    let promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("Coffee is being ready");
            resolve("Coffee");
        }, 2000);
    });

    return promise;
}

function frenchToast() {
    let promise = new Promise ( (resolve, reject) => {
        setTimeout( () => {
            console.log("French Toast is being ready");
            resolve("French Toast");
        }, 40);
    });

    return promise;
}

function Dinner( dish ) {
    let promise = new Promise( (resolve, reject) => {     // The execution of the function will reside in the Promise | The resolve takes function from promise.then
        setTimeout( () => {
            if (dish !== "seafood") {
                console.log("(2) Dinner is being ready");
                resolve("Dinner"); // Let me know when dinner is ready | Instead of callback, we write resolve  
            }
            else {
                reject("Dinner is unacceptable!"); // If the JS calls reject, the chain of promises will break, and JS would go directly to the .catch()  
            }
        }, 20 );  //first argument is a function, the second is time delay.
    } );  //Promise is an object which requires a function with two parameters

    return promise;
}


let promise = Dinner( "Pizza" ); // promise is returned on calling the function Dinner

promise.then( (value) => {
    console.log(value, "is ready");
    return frenchToast(); // Again promise is returned from frenchToast function
}) // We pass the callback function as the parameter of this promise.then function | The function within will be passed to resolve in function Dinner
.then( (value) => {  // The returned promise from frenchToast will come here to call promise.then | This then is used to catch the returned promise from frenchToast function
    console.log(value, "is ready");
    return Coffee(); // The returned promise from Coffee will come here to call promise.then
}) //This works as a callback for frenchToast function | The function inside this .then is passed into the resolve of frenchToast function
.then( (value) => { // The returned promise from Coffee will come here to call promise.then | This then is used to catch the returned promise from Coffee function
    console.log(value, "is ready");
    return Niyari(); // The promise from Niyari function will be returned to call promise.then
}) // The function within this .then will be passed to the resolve of Coffee function
.then( (value) => { // The promise from Niyari function will come here to call promise.then | This then is used to catch the returned promise from the Niyari function
    console.log(value, "is ready");
}) // The function within this .then will be passed to the resolve of Niyari function

.catch( (error) => {
    console.log("Error:", error);
});


console.log("(3) Dinner is served");