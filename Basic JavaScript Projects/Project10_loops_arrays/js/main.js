function call_Loop(){
    var digit= ""; //creates variable
    var x=1;
    while (x<16){ //utilizes while loop 
        digit += "<br>" + x; //defines variable digit
        x++; //adds one to x
    }
    document.getElementById("loop").innerHTML= digit; //returns numbers 1-15
}

function length_Function(){
    var sentence= "This is a sentence.";
    var length= sentence.length;
    document.getElementById("length").innerHTML= length;
}

var Instruments= ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var content= "";
var y;
function for_Loop(){
    for (y = 0; y<Instruments.length; y++){ //utilizes for loop, increasing y by one length
        content += Instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML= content; //returns list of musical instruments
}

function array_Function(){
    var weather= []; //creates variable weather and array
    weather[0]="snowing"; //property of object
    weather[1]="raining";
    weather[2]="sunny"
    weather[3]="storming";
    document.getElementById("array").innerHTML= "It is " + weather[0] + " outside."; //returns "It is snowing outside."
}

function constant_Function(){
    const shoes= {type:"boots", brand:"Doc Marten", color:"black"}; //creates constant with properties and values
    shoes.color= "brown"; //changes the value of color to brown
    shoes.price= "$175"; //adds price property
    document.getElementById("constant").innerHTML= "The cost of the " + shoes.brand + " " + shoes.type + " " + "is " + shoes.price; //displays "The cost of Doc Marten boots is $175"
}

function let_Function(){
    var x=11;
    document.getElementById("let").innerHTML= x;
    {
        let x= 47;
        document.getElementById("let").innerHTML= x;
    }
}

document.getElementById("return").innerHTML= return_Statement("World");
function return_Statement(name){
    return "Hello " + name +"!";
}


function method_Function(){
    let pet={ //creates object pet
        Animal: "cat", //defines property and value 
        Name: "Pigeon",
        Breed: "Tuxedo",
        Color: "gray and white",
        Description: function(){
            return "My pet is a " +this.Color+ " " +this.Breed + " " +this.Animal+ " named "+ this.Name +".";
        }
    }
    document.getElementById("method").innerHTML=pet.Description(); //returns "My pet is a gray and white tuxedo cat named Pigeon."
}

function break_Statement(){
    for (x=0; x<11; x++){ //creates for loop, adding one to x until 10
        if (x===7) {break;} //exits loop when x equals 7
    }
    document.getElementById("break").innerHTML= "The loop breaks at " + x; //returns "The loop breaks at 7"
}

function continue_Statement(){
    let text= ""; //creates object text
    for (let x=0; x<11; x++){ //utilizes for loop, adding one to x until 10
        if (x === 7) continue; //skips over the number 7 when reached in loop
        text += x + "<br>"; //defines text
    }
    document.getElementById("continue").innerHTML= text + "This loop skips the number 7."; //returns numbers 1-6, and 8-10, and "This loop skips the number 7."
}