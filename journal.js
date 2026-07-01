
function greet(name){
    return "Hello, " + name + "!";
}


function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false
    }
}


function multiplyNum(a = 1, b = 1){
    return a * b;
}


function tellTime(hour, minute, ampm){
    return "It is " + hour + ":" + minute + ampm;
}


function quantity(num, objects){
    return "I have " + num + " " + objects;
}

function date(day, month, year){
    return day + "/" + month + "/" + year;
}