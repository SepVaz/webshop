const loginText = document.querySelector(".login-text")
const displayUsername = document.querySelector(".displayUsername")
const loginForm = document.querySelector(".loginForm")

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const enteredUsername = loginText.value;
    localStorage.setItem("username", enteredUsername)

    displayUsername.textContent = enteredUsername;

});

document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        displayUsername.textContent =  savedUsername;
    }
})

/* 
function updateUsername () {
const storedUsername = localStorage.getItem("username");
displayUsername.textContent = `${storedUsername}:`
} */



/* // Hämta referenser till element
const loginForm = document.querySelector(".loginForm"); // Antag att ditt formulär har id="loginForm"
const loginText = document.querySelector(".login-text");
const welcomeMessage = document.querySelector(".displayUsername"); // Antag att du har ett element för välkomstmeddelandet

// Event listener för formuläret
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Hämta värdena från input-fälten
    const enteredUsername = loginText.value;
        // Spara användarnamnet i localStorage
        localStorage.setItem("username", enteredUsername);
        // Uppdatera välkomstmeddelandet
        welcomeMessage.textContent = `Välkommen ${enteredUsername}`;
});
 */
// Uppdatera välkomstmeddelandet när sidan laddas om användaren redan är inloggad
/* document.addEventListener('click', function() {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        welcomeMessage.textContent = `Välkommen ${savedUsername}`;
    }
}); */
