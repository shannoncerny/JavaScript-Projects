function ride_Function(){
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough"; //assigns height must be 52 
    document.getElementById("ride").innerHTML= Can_ride + " to ride."; //returns text determined by height entered
}

function vote_Function(){
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote= (Age < 18) ? "You are not old enough":"You are old enough"; //assigns age must be 18 
    document.getElementById("vote").innerHTML= Can_vote + " to vote.";// returns text determined by age entered
}

function Vehicle(Make, Model, Year, Color){ //creates function Vehicle with objects
    this.Vehicle_Make= Make; //creates object make
    this.Vehicle_Model= Model; //creates object model
    this.Vehicle_Year= Year; //creates object year
    this.Vehicle_Color= Color; //creates object color
}
var Jack= new Vehicle("Dodge","Viper",2020,"Red"); //creates variable "jack" and object instances
var Emily= new Vehicle("Jeep","Trail Hawk", 2019,"White and Black"); //creates variable "emily" and object instances
var Erik= new Vehicle("Ford","Pinto",1971,"Mustard"); //creates variable "erik" and object instances
function my_Function(){ 
    document.getElementById("keywords_and_constructors").innerHTML= "Erik drives a "+ Erik.Vehicle_Color +"-colored "+ Erik.Vehicle_Model+ " manufactured in " + Erik.Vehicle_Year; //returns text with Erik vehicle objects
}

var Shannon= new Vehicle("Hyundai","Santa Fe", 2004,"Black"); //creates variable "shannon" and object instances
var Aaron= new Vehicle("Ford","Focus",2014,"Gray"); //creates variable "aaron" and object instances
var Kim= new Vehicle("Jeep","Wrangler",2013,"Gray"); //creates variable "kim" and object instances
function Keyword(){
    document.getElementById("new_and_this").innerHTML= "Aaron drives a "+Aaron.Vehicle_Color +"-colored " + Aaron.Vehicle_Make + " "+ Aaron.Vehicle_Model +" manufactured in " + Aaron.Vehicle_Year; //returns text with Aaron vehicle objects
}

function Nested(){ 
    document.getElementById("nested_function").innerHTML= Count(); //calls nested function Count
    function Count(){ //creates nested function Count
        var Starting_point= 4; //creates starting point at 4
        function Plus_one(){Starting_point +=1;} //creates function adding +1 to starting point
        Plus_one(); //calls Plus_one function
        return Starting_point; //returns 5
    }
}