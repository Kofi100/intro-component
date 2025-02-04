

var fName; var lName;
//errorVerif checks if any of the values are empty
//therfore causing an alert message to pop-up.
var errorMsg; var errorVerif = false;
var form = document.getElementById("form");
var fNameLabel = document.getElementById("fName");
var lNameLabel = document.getElementById("lName");
var emailLabel = document.getElementById("email");
var passwordLabel = document.getElementById("pWord");
//used to verify e-mail address by
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log("Loading .js...");

function verify() {
    // fName = element.getAttribute["fName"].value;


    fName = fNameLabel.value;
    lName = lNameLabel.value;
    let email = emailLabel.value;
    let pWord = passwordLabel.value;

    // console.log(fName);
    if (fName === null || fName === "") {
        errorFunction(fNameLabel, "First Name cannot be empty!", "text");
    }
    else {
        successFunction(fNameLabel, "text");
    }

    if (lName === null || lName === "") {
        errorFunction(lNameLabel, "Last Name cannot be empty!", "text");

    }
    else {
        successFunction(lNameLabel, "text");
    }

    if (email === null || email === "") {
        errorFunction(emailLabel, "E-mail cannot be empty!", "text");

    }
    else if (!email.match(validRegex)) {
        errorFunction(emailLabel, "Looks like this is not a valid e-mail!", "text");

    }
    else {
        successFunction(emailLabel, "email");
    }


    if (pWord === null || pWord === "") {
        errorFunction(passwordLabel, "Password cannot be empty!", "password");
    }
    else {
        successFunction(passwordLabel, "password");
    }

}
form.addEventListener('submit', e => {
    e.preventDefault();//prevents reloading of page.
    verify();


})

function errorFunction(req, message, originalClass) {
    console.log(message, req);
    const formCtrl = req.parentElement;
    const span = formCtrl.querySelector('span');//gets first span element in .div that contains input
    // req.className = originalClass;
    // req.className += ' error';
    req.className = originalClass + " " + 'error';
    span.className = 'error-Text';
    span.innerText = message;


}
function successFunction(req, originalClass) {
    req.className = originalClass + " " + 'success';
    // req.className += ' success'; //space before 'success' is super_important since without it,html would
    //detect the className for the element as 'originalsuccess',not 'original success'
    //causing the .css codes to not function properly.
    const parentElement = req.parentElement;
    const span = parentElement.querySelector('span');
    span.className = "success-Text";

}