
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


function tellTime(hour = "00", minute = "00", ampm = "am"){
    return "It is " + hour + ":" + minute + ampm;
}


function quantity(num = 0, objects = "objects"){
    return "I have " + num + " " + objects;
}

function date(month = "01", day = "01", year = "2000"){
    return month + "/" + day + "/" + year;
}