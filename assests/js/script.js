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

    function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.getElementById("gender").value;
    let msg = document.getElementById("msg");

    if (name === "" || email === "" || password === "" || gender === "") {
        msg.style.color = "red";
        msg.innerHTML = "All fields are required!";
        return false;
    }

    if (password.length < 6) {
        msg.style.color = "red";
        msg.innerHTML = "Password must be at least 6 characters!";
        return false;
    }

    msg.style.color = "green";
    msg.innerHTML = "Form submitted successfully!";
    return false; // page reload stop
}
