function concat_Function(){
    var part_1= "This is "; //creates variables
    var part_2= "a sentence ";
    var part_3= "for the Concat() Method ";
    var part_4= "assignment.";
    var full_sentence= part_1.concat(part_2, part_3, part_4); //creates variable, concatenates all variables 
    document.getElementById("concat").innerHTML= full_sentence; //returns concatenated variables
}

function slice_Function(){
    var sentence= "This is sentence for the Slice() Method assignment."; //creates variable
    var section= sentence.slice(33,39); //picks out the slice of sentence from spaces 33-39
    document.getElementById("slice").innerHTML= section; //returns "method"
}

function uppercase_Method(){
    var sentence= "Today is the 19th day of december.";
    var section= sentence.toUpperCase(); //changes sentence to uppercase
    document.getElementById("uppercase").innerHTML= section; //returns sentence displayed in uppercase
}

function search_Method(){
    var sentence= "There is snow on the ground.";
    var position= sentence.search("snow"); //searches sentence for word "snow"
    document.getElementById("search").innerHTML= position; //returns position of "snow"
}

function toString_Method(){
    x=256;
    document.getElementById("string").innerHTML= x.toString(); //converts the number 256 to a string
}

function toPrecision_Method(){
    x=57.5492998;
    document.getElementById("precision").innerHTML= x.toPrecision(4); //formats x to a length of 4 numbers
}

function toFixed_Method(){
    x=3.14159265358979323846264338327950;
    document.getElementById("fixed").innerHTML= x.toFixed(5); //formats x decimal to a length of 5
}

function valueOf_Method(){
    x=325;
    document.getElementById("value").innerHTML= x.valueOf(); //returns the value of x
}