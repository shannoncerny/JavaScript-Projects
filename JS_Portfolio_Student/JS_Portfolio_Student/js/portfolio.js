//open and close contact form
function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    document.getElementById('myForm').style.display = "none";
}

//displays first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

//changes slides when the arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //stores all elements with class name array in the variable array 'slides'
    var dots = document.getElementsByClassName("dot"); //stores all dot elements in array
    if (n > slides.length) {slideIndex =1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //for loops sets each item in array to display none
    }
    for (i = 0; i < dots.length, i++;) {
        dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block"; //displays image in slideshow
    dots[slideIndex -1].className += " active"; //adds the active styling to the dot associated with image
}

//close the contact form when user clicks off of it
//first step is to add event listener for any clicks on website
document.addEventListener("click", function(event){
    if (event.target.matches("cancel") || !event.target.closest("form-popup") && !event.target.closest(".pop_up_button") && !event.target.closest("contact")){
        closeForm()
    }
}, false)