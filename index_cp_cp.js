//Asynchronous Programming with async and awake;

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

// Promises will remain the same. Instead of a chain of then, we will use async and awake.

async function beginPreparation() {    // async is always used in function declaration
    try {
        let Dinnerval = await Dinner("Biryani");  // await is always used when calling a function | await will always work in async function | await means wait till the dinner is resolved; Dinnerval has the value of resolve.
        console.log(Dinnerval, "is ready");
        let Frenchtoastval = await frenchToast();
        console.log(Frenchtoastval, "is ready");
        let Coffeval = await Coffee();
        console.log(Coffeval, "is ready");
        let Niyarival = await Niyari();
        console.log(Niyarival, "is ready");
    }
    
    catch (error) {
        console.log("Error during process:", error);
    }
}

beginPreparation() // When this function is called, the execution will be gone in the backhground


console.log("(3) Dinner is served");