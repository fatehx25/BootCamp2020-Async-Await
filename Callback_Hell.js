//Asynchronous Programming

console.log("(1) Placing order for dinner");

function Niyari(callback) {
    setTimeout( () => {
        console.log("Niyari is being ready");
        callback("Niyari");
    }, 2000);
}

function Coffee(callback) {
    setTimeout( () => {
        console.log("Coffee is being ready");
        callback("Coffee");
    }, 2000);
}

function frenchToast(callback) {
    setTimeout( () => {
        console.log("French Toast is being ready");
        callback("French Toast");
    }, 40);
}

function Dinner(callback) {
    setTimeout( () => {
        console.log("(2) Dinner is being ready");
        callback("Dinner"); // Let me know when dinner is ready
    }, 20 );  //first argument is a function, the second is time delay.
}

// The following is a callback Hell because there is no built-in functionality for debugging.
Dinner( (value) => {
    console.log(value, "is ready");
    frenchToast( (value) => {
        console.log(value, "is ready");
        Coffee( (value) => {
            console.log(value, "is ready");
            Niyari( (value) => {
                console.log(value, "is ready");
            } );
        } );
    } );
}  ); // I am passing a function in the parameter of function Dinner

console.log("(3) Dinner is served");