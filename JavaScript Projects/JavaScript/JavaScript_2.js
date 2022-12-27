//FORM VALIDATION
function validateForm(){
    let x=document.forms["myForm"]["fname"].value;
    if (x==""){
        alert("Please enter your contact information");
        return false;
    }
}