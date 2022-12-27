function season_Function(){
    var season_output;
    var seasons= document.getElementById("season-input").value;
    var season_string= " is the best season!";
    switch(seasons) {
        case "Winter":
            season_output= "Winter" +season_string;
        break;
        case "Spring":
            season_output= "Spring" +season_string;
        break;
        case "Summer":
            season_output= "Summer" +season_string;
        break;
        case "Fall":
            season_output= "Fall" +season_string;
        break;
        default:
            season_output= "Please enter a season from the list";
    }
    document.getElementById("output").innerHTML= season_output;
}

function className_Function(){
    var x= document.getElementsByClassName("click");
    x[0].innerHTML= "Text has changed";
}

function circular_Gradient(){
    var c= document.getElementById("canvas");
    var ctx= c.getContext("2d");

    var grd= ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "darkseagreen");
    grd.addColorStop(1, "white");

    ctx.fillStyle= grd;
    ctx.fillRect(0, 0, 150, 80);
}

function linear_Gradient(){
    var c= document.getElementById("canvas2");
    var ctx= c.getContext("2d");
 
    var grd= ctx.createLinearGradient(0,0,250,0);
    grd.addColorStop(0, "darkseagreen");
    grd.addColorStop(1, "white");

    ctx.fillStyle= grd;
    ctx.fillRect(0, 0, 300, 150);
}