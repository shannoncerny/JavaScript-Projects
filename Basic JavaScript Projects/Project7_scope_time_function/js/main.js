x=22 //defines global variable
function Add_numbers_1(){
    document.write(x/2+"<br>"); //returns 11
} 
function Add_numbers_2(){
    document.write(x+28); //returns 50
}
Add_numbers_1(); //calls function
Add_numbers_2(); //calls function

function local_Variable_1(){
    x=4; //creates local variable
    console.log(6+x); //logs 10
}
function local_Variable_2(){
    console.log(x+16); //logs 20
}
local_Variable_1(); //calls function
local_Variable_2(); //calls function

function method_Function(){
    if (new Date().getHours()<12){ //creates conditional statement, gets time from computer and compares to 12
        document.getElementById("method").innerHTML="Good morning!"; //returns good morning if true
    }
}

function day_Function(){
    if (new Date().getDay()>5){ //creates conditional statement, gets date from computer and compares to 5
        document.getElementById("day").innerHTML="It's the weekend!"; //returns "it's the weekend" if true
    }
}

function age_Function(){
    Age= document.getElementById("enter").value; //displays input and value
    if (Age >=21){ //creates conditional statement
        Enter= "You are old enough to enter."; //if true, this displays
    }
    else {
        Enter= "You are not old enough to enter."; //if false, this displays
    }
    document.getElementById("age_to_enter").innerHTML= Enter; //returns text depending on age entered
}

function time_Function(){
    var Time= new Date().getHours(); //defines variable Time, gets time from computer
    var Reply; //creates variable Reply
    if (Time <12 == Time >0){ //creates conditional statement, sets parameters of time for statement
        Reply= "It is morning time!"; //displays if true
    }
    else if (Time >=12 == Time <18){ //if statement above is not true, check these parameters
        Reply= "It is the afternoon!"; //displays if true
    }
    else{ //if both statements above are not true
        Reply= "It is evening time!"; //display "it's evening time"
    }
    document.getElementById("time_of_day").innerHTML= Reply; //returns text of true statement
}