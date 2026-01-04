// Welcome alert
function welcome() {
    alert("Welcome to my website!");
}

// Change about text
function changeAbout() {
    document.getElementById("aboutText").innerHTML =
        "I am learning HTML, CSS and JavaScript to become a web developer.";
}

// Form validation
function submitForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("msg").innerHTML =
            "Please enter your name!";
    } else {
        document.getElementById("msg").innerHTML =
            "Thank you " + name + " for contacting us.";
    }
}

// Dynamic year
document.getElementById("year").innerHTML =
    new Date().getFullYear();
