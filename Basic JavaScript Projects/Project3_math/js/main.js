function addition_Function(){
    var addition= 13 + 7; //assigns variable addition with values of 13 and 7
    document.getElementById("math").innerHTML="13 + 7 = " + addition; //displays 13 + 7 = and the result
}

function subtraction_Function(){
    var subtraction= 13 - 7; //assigns variable subtraction with values of 13 and 7
    document.getElementById("math2").innerHTML="13 - 7 = " + subtraction; //displays 13 - 7 = and the result
}

function multiplication_Function(){
    var multiply= 13 * 7; //assigns variable multiply with values of 13 and 7
    document.getElementById("math3").innerHTML="13 x 7 = " + multiply; //displays 13 * 7 = and the result
}

function division_Function(){
    var divide= 13 / 7; //assigns variable divide with values of 13 and 7
    document.getElementById("math4").innerHTML="13 / 7 = " + divide; //displays 13 / 7 = and the result
}

function more_Math(){
    var simple_Math= (3+5)*3/2-8; //assigns variable simple_Math with multiple operators
    document.getElementById("math5").innerHTML="3 plus 5, multiplied by 3, divided in half and then subtracted by 8 equals "
    + simple_Math; //displays text with result
}

function modulus_Operator(){
    var modulus= 25 % 6; //assigns variable modulus
    document.getElementById("math6").innerHTML="When you divide 25 by 6, you have a remainder of "
    + modulus; //displays the result of 25 / 6 with the remainder
}

function negation_Operator(){
    var x= 32 //assigns variable x a value of 32
    document.getElementById("math7").innerHTML= -x; //displays -32
}

var x= 46; //assigns variable x a value of 46
x++; //increments x by one step
document.write(x); //displays 47

var x= 46; 
x--; //decrements x by one step
document.write(x); //displays 45

window.alert(Math.random()*100); //creates alert with a random number between 0 and 100

var round= Math.round(2.345); //rounds 2.345 to the nearest integer
document.write(" Number after rounding: " + round); //displays 2