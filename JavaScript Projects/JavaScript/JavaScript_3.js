function displayType(pet){
    var petType= pet.getAttribute("data-pet_type");
    alert(pet.innerHTML + " is a " +petType +"!");
}