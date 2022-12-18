function my_Dictionary(){ //creates function my_Dictionary
    var Pet= { //creates a dictionary and assigns kvps
        Species: "Cat",
        Name: "Pigeon",
        Color: "Gray",
        Age: 3,
    };
    delete Pet.Color; //deletes kvp "color:'gray'"
    document.getElementById("dictionary").innerHTML= Pet.Color; //displays undefined
}