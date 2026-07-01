// Greet a user by name

function greet(name){
    return "Hello, " + name + "!";
}

// Checks if a number is even or odd

function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false
    }
}

// Multiplication function

function multiplyNum(a = 1, b = 1){
    return a * b;
}

// Tell the time

function time(hour, minute, ampm){
    return "It is ${hour}:${minute}${ampm}";
}