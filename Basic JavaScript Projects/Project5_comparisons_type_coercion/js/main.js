document.write(typeof "Hello, World!"); //displays "string"

document.write(" 11" + 47 ); //displays "1147"

function my_Function(){
    document.getElementById("test").innerHTML= 0/0; //displays NaN
}

function function_2(){
    document.getElementById("test2").innerHTML= isNaN('This is a sentence.'); //displays true
}

function function_3(){
    document.getElementById("test3").innerHTML= isNaN(12345); //displays false
}

function infinity_Function(){
    document.getElementById("test4").innerHTML= (3E409); //displays infinity
}

function neg_infinity_Function(){
    document.getElementById("test5").innerHTML= (-5E322); //displays negative infinity
}

document.write(47>11); //returns true
document.write(47<11); //returns false

console.log(7+8); //logs 15 to console
console.log(7>8); //logs false to the console

document.write(3+7== 10); //returns true
document.write(3+8==10); //returns false

x=5;
y=5;
document.write(x===y); //returns true

a=7;
b='6';
document.write(a===b); //returns false

c=3;
d='3';
document.write(c===d); //returns false

e=15;
f=16;
document.write(e===f); //returns false

document.write(4>1 && 32>6); //returns true, and operator
document.write(3>5 && 6>2); //returns false, and operator

document.write(90>100 || 7>6); //returns true, or operator
document.write(40>60 || 54>55); //returns false, or operator

function not_Function(){
    document.getElementById("not").innerHTML= !(2>4); //returns true
}

function not_Function_2(){
    document.getElementById("not2").innerHTML= !(9>7); //returns false
}