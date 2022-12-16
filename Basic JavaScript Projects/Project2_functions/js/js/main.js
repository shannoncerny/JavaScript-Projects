function My_Function(){
    var str="This is", str=" my function"; //assigns the variable strings
    document.getElementById("Button_Text").innerHTML= str; //displays string when button is clicked
}

function Function_2(){
    var color1= "green"; //creates color1 and assigns it value
    color2= "purple"; //created color2 and assigns it value
    document.getElementById("demo").innerHTML= color1; //displays green on click
}

function Function_3(){
    var sentence= "I am learning"; //assigns the variable sentence
    sentence += " a lot from this book!"; //concatenates the sentences
    document.getElementById("concatenate").innerHTML= sentence; //displays the concatenated sentences
}