 //COUNTDOWN() FUNCTION
function Countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick(){ //defines function 
        seconds = seconds -1; //variable seconds is equal to seconds -1
        timer.innerHTML = seconds; //displays seconds
        var time= setTimeout(tick, 1000); //pausing program for 1 second 
        if (seconds == -1) { //creates conditional statement
            alert("Time's up!"); //creates alert when time is 0
            clearTimeout(time) //clears the current display
        }
    }
    tick(); //calls function tick
}


let slideIndex = 1;

//NEXT/PREVIOUS CONTROLS
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides(n) {
    let i; //creates variable i
    let slides = document.getElementsByClassName("mySlides"); //creates and defines variable, gets HTML element
    let dots = document.getElementsByClassName("dot"); //creates and defines variable, gets HTML element
    if (n>slides.length) {slideIndex=1} //creates conditional statement
    if (n<1) {slideIndex= slides.length}
    for (i = 0; i < slides.length; i++){ //sets i at 0, retrieves number and increases it by 1
        slides[i].style.display= "none"; 
    }
    for (i = 0; i < dots.length; i++) { //sets i at 0, retrieves number and increases it by 1
        dots[i].className = dots[i].className.replace(" active", ""); //replaces text in a string using regular expression
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}