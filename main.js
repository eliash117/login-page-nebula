function login() {
    // Your login logic here (replace with actual implementation)
    var branch = document.getElementById("BRANCH").value.toLowerCase();
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;

    // Sample user data for the given usernames and passwords
    var users = [
        // ... existing user data ...
    ];

    var user = users.find(u => u.username === username);

    if (user && user.password === password) {
        // Redirect to the specified page
        window.location.href = "go:S123";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function showRegistrationForm() {
    document.getElementById("registrationContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
    hideAllFormsExcept('registrationContainer'); // Hide other forms if open
}

function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("registrationContainer").style.display = "none";
    hideAllFormsExcept('loginContainer'); // Hide other forms if open
}

function showForm(formId) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.style.display = 'none'); // Hide all forms
    document.getElementById(formId).style.display = 'block'; // Show the specified form
}

function hideAllFormsExcept(formToShow) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
        if (form.id !== formToShow) {
            form.style.display = 'none';
        }
    });
}

// Event listeners for the alternative registration links
document.getElementById('registrationLinkGoogle').addEventListener('click', () => showForm('googleForm'));
document.getElementById('registrationLinkFacebook').addEventListener('click', () => showForm('facebookForm'));
document.getElementById('registrationLinkPhone').addEventListener('click', () => showForm('phoneForm'));
