// Get the modals
var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");

// Get the buttons that opens the modal
var signup = document.getElementById("signup");
var signin = document.getElementById("signin");
var signupmember = document.getElementById('link')

// Get the <span> elements that closes the modal
var signupclose = document.getElementsByClassName("signupclose")[0];
var signinclose = document.getElementsByClassName("signinclose")[0];

// When the user clicks on the buttons, open the modal
signup.onclick = function() {
  signupModal.style.display = "block";
}
signin.onclick = function() {
  signinModal.style.display = "block";
}
signupmember.onclick = function() {
  signinModal.style.display="none"
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signupclose.onclick = function() {
  signupModal.style.display = "none";
}
signinclose.onclick = function() {
  signinModal.style.display = "none";
}

// When Click out side it closes the modal
window.onclick = function(event) {
  if (event.target == signupModal || event.target == signinModal || event.target == createpostmodal) {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
    createpostmodal.style.display = "none";
  }
}