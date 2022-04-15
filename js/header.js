// Get the modal
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var signup = document.getElementById("signup");

// Get the <span> element that closes the modal
var signupclose = document.getElementsByClassName("signupclose")[0];

// When the user clicks on the button, open the modal
signup.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signupclose.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}

// Get the modal
var signinModal = document.getElementById("signinModal");

// Get the button that opens the modal
var signin = document.getElementById("signin");
var btn3 = document.getElementById('link')
// Get the <span> element that closes the modal
var signinclose = document.getElementsByClassName("signinclose")[0];

// When the user clicks on the button, open the modal
signin.onclick = function() {
  signinModal.style.display = "block";
}
btn3.onclick = function() {
  signinModal.style.display="none"
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signinclose.onclick = function() {
  signinModal.style.display = "none";
}


window.onclick = function(event) {
  if ( event.target== signinModal) { 
    signinModal.style.display = "none";
  }
}
