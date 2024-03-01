
//if passwords has atleast 8 characters
function minCharacters(x, y) {
    if (x.length > 7 && y.length > 7) {
        return true;
    }
}

//checks if the string has a number
function oneNumber(x, y) {

    let temp1 = false;
    let temp2 = false;
    for (let a = 0; a < x.length; a++) {
        if (!isNaN(Number(x[a]))) {
            temp1 = true;
        }
        if (!isNaN(Number(y[a]))) {
            temp2 = true;
        }
    }

    if (temp1 == true && temp2 == true) {
        return true;
    }
}

//checks if the string has a upper case
function upperCase(x, y) {
    if (x !== x.toUpperCase() && y !== y.toUpperCase()) {
        return true;
    }
}

//checks if the string has a lower case
function lowerCase(x, y) {
    if (x !== x.toLowerCase() && y !== y.toLowerCase()) {
        return true;
    }
}


function validatePassword(x, y) {
    // triple equals check also if they are of the same type
    if (x === y && minCharacters(x, y) == true && oneNumber(x, y) == true && upperCase(x, y) == true && lowerCase(x, y) == true) {
        return true;
    }
    else
        return false;
}

function reversingPassword(x, y) {
    let temp = "";
    for (let a = x.length - 1; a >= 0; a--) {
        temp += x[a];
    }
    return temp;
}

//stores password in an object (key:value)
function storePassword(x, y, z) {
    let newPassword = y;
    if (validatePassword(y, z) == true) {
        newPassword = reversingPassword(y, z);
    } else {
        newPassword == y;
    }

    let namePassword = {
        name: x,
        newpassword: newPassword,
    }

    console.log("Name:" + namePassword.name + "\nNew Password:" + namePassword.newpassword);
}


console.log(validatePassword('helloworld', 'hello'))     // returns false
console.log(validatePassword('hello', 'hello'))    	  // returns false
console.log(validatePassword('hello1234', 'hello1234'))  // returns false
console.log(validatePassword('Hello1234', 'Hello1234'))  // returns true
console.log(validatePassword('HELLO1234', 'HELLO1234'))  // returns false

storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "Pass123", "Pass12345") // returns {name: "John", newpassword:"Pass123"}

